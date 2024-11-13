import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants from the API
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Add a new plant
  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  // Filter plants based on the search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList
        plants={filteredPlants}
        handleDelete={(id) =>
          setPlants(plants.filter((plant) => plant.id !== id))
        }
        handlePriceUpdate={(id, newPrice) => {
          const updatedPlants = plants.map((plant) =>
            plant.id === id ? { ...plant, price: newPrice } : plant
          );
          setPlants(updatedPlants);
        }}
      />
    </main>
  );
}

export default PlantPage;