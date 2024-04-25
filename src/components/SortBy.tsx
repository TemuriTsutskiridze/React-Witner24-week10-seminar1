import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

export default function SortBy() {
  const {
    setSortBy,
  }: { setSortBy: React.Dispatch<React.SetStateAction<string>> } =
    useContext(MyContext);

  const sortOptions = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  return (
    <div>
      {sortOptions.map((sortOption, index) => {
        return (
          <p
            key={index}
            style={{ background: "blue", color: "white", cursor: "pointer" }}
            onClick={() => {
              setSortBy(sortOption);
            }}
          >
            {sortOption}
          </p>
        );
      })}
    </div>
  );
}
