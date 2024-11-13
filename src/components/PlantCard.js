import React, { useState } from "react";

function PlantCard({ plant, handleDelete, handlePriceUpdate }) {
  const [isInStock, setIsInStock] = useState(true);

  const toggleStock = () => {
    setIsInStock(!isInStock);
  };

  const handlePriceChange = (e) => {
    const newPrice = parseFloat(e.target.value);
    if (!isNaN(newPrice)) {
      handlePriceUpdate(plant.id, newPrice);
    }
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image || "https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <div>
        <input
          type="number"
          step="0.01"
          value={plant.price}
          onChange={(e) => handlePriceChange(e)}
          placeholder="Update Price"
        />
      </div>
      {isInStock ? (
        <button className="primary" onClick={toggleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
      <button className="delete-btn" onClick={() => handleDelete(plant.id)}>
        Delete
      </button>
    </li>
  );
}

export default PlantCard;