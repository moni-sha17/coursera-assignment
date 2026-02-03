import Header from "../components/Header";
import PlantCard from "../components/PlantCard";
import { plants } from "../data/plants";

export default function ProductListing() {
  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <>
      <Header />
      {categories.map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div className="grid">
            {plants
              .filter((p) => p.category === cat)
              .map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </>
  );
}
