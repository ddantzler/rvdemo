import React from "react";

import Cards from "./Cards";
import Filter from "./Filter";

// Simple component just to render the main content
export default function Content() {
  return (
    <div className="content">
      <Filter />
      <Cards />
    </div>
  );
}
