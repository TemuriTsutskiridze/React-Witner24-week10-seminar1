import { createContext } from "react";
import { TFeedbacks } from "../types";

type TMyContext = {
  filteredFeedbacks: TFeedbacks;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

export const MyContext = createContext<TMyContext>({
  filteredFeedbacks: [],
  setActiveCategory: () => {},
  setSortBy: () => {},
});
