import { Link } from "react-router-dom";

export const Header = () => {
  const styles = {
    // border: "1px solid black",
    height: "fit-content",
  };
  return (
    <section className="flex header" style={styles}>
      <Link to="/">
        <h1>NATURBIO</h1>
      </Link>
      <Link to="/movies">Movies</Link>
    </section>
  );
};
