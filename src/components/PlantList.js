import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleDelete, handlePriceUpdate }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          handleDelete={handleDelete}
          handlePriceUpdate={handlePriceUpdate}
        />
      ))}
    </ul>
  );
}

export default PlantList;