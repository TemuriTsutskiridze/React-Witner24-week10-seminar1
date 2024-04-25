import { TFeedbacks } from "../types";
import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

export default function Feedbacks() {
  const { filteredFeedbacks }: { filteredFeedbacks: TFeedbacks } =
    useContext(MyContext);
  //   console.log(filteredFeedbacks);

  return (
    <div>
      {filteredFeedbacks.map((feedback) => {
        return (
          <div
            key={feedback.id}
            style={{ border: "2px solid red", margin: "1rem" }}
          >
            <h2>{feedback.description}</h2>
            <p>{feedback.upvotes}</p>
            <p>{feedback.category}</p>
          </div>
        );
      })}
    </div>
  );
}
