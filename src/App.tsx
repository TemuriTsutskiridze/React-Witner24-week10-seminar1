import { useState } from "react";
import "./App.css";
import data from "./data.json";
import { TFeedbacks } from "./types";
import { MyContext } from "./contexts/MyContext";

import Feedbacks from "./components/Feedbacks";
import Category from "./components/Category";
import SortBy from "./components/SortBy";

function App() {
  const [feedbacks, setFeedbacks] = useState<TFeedbacks>(data.productRequests);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("Most Upvotes");

  const filteredFeedbacks =
    activeCategory === "all"
      ? feedbacks
      : feedbacks.filter((feedback) => feedback.category === activeCategory);

  filteredFeedbacks.sort((a, b) => {
    if (sortBy === "Most Upvotes") {
      return b.upvotes - a.upvotes;
    } else if (sortBy === "Least Upvotes") {
      return a.upvotes - b.upvotes;
    }
    return 0;
  });
  console.log(filteredFeedbacks);

  return (
    <MyContext.Provider
      value={{ filteredFeedbacks, setActiveCategory, setSortBy }}
    >
      <Feedbacks />
      <Category />
      <SortBy />
    </MyContext.Provider>
  );
}

export default App;
