import { Banner } from "./components/Banner";
import { Movies } from "./components/Movies";

const movies = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1686080187357-4304f983638f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    title: "Movie 1",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1686080187357-4304f983638f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    title: "Movie 2",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1686080187357-4304f983638f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    title: "Movie 3",
  },
];

export const App = () => {
  return (
    <div>
      <Banner />
      <Movies movies={movies} />
    </div>
  );
};
