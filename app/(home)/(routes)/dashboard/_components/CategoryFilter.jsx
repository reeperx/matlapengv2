"use client";
import React, { useState } from "react";

function CategoryFilter({selectedCategory}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const filterOptions = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 2,
      name: "Mathematics",
      value: "mathematics",
    },
    {
      id: 3,
      name: "Languages",
      value: "languages",
    },
    {
      id: 4,
      name: "Sciences",
      value: "sciences",
    },
    {
      id: 5,
      name: "Geography",
      value: "geography",
    },
    {
      id: 6,
      name: "History",
      value: "history",
    },
    {
      id: 7,
      name: "Accounting",
      value: "accounting",
    },
    {
      id: 8,
      name: "Economics",
      value: "economics",
    },
  ];
  return (
    <div className="flex gap-5">
      {filterOptions.map((item, index) => (
        <button
          onClick={() => {
            setActiveIndex(index);
            selectedCategory(item.value);
          }}
          key={index}
          className={`border p-2 px-4 text-[12px] rounded-md hover:border-orange-300 font-semibold hover:bg-orange-50 ${
            activeIndex == index
              ? "border-orange-100 bg-orange-200 text-orange-600"
              : null
          }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
