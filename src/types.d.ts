type User = {
  image: string;
  name: string;
  username: string;
};

type Comment = {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
};

type Reply = {
  content: string;
  replyingTo: string;
  user: User;
};

type TFeedback = {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: Comment[];
};

export type TFeedbacks = TFeedback[];
