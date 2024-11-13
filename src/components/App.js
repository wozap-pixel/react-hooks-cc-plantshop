import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">
      {/* Header Component */}
      <Header />
      
      {/* Main Plant Page Component */}
      <PlantPage />
    </div>
  );
}

export default App;