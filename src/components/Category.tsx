import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

export default function Category() {
  const {
    setActiveCategory,
  }: { setActiveCategory: React.Dispatch<React.SetStateAction<string>> } =
    useContext(MyContext);

  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <p
            key={index}
            style={{ background: "white", color: "black", cursor: "pointer" }}
            onClick={() => {
              setActiveCategory(category.toLowerCase());
            }}
          >
            {category}
          </p>
        );
      })}
    </div>
  );
}
