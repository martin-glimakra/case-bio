import { useState } from "react";

export const Reviews = ({ movie, movies, setMovies }) => {
  const [toggle, setToggle] = useState(false);
  const [review, setReview] = useState(null);
  return (
    <section>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        REVIEWS
      </button>
      {toggle ? (
        <section>
          <input
            onInput={(e) => setReview(e.target.value)} // Använd controlled input https://www.youtube.com/watch?v=IkMND33x0qQ&ab_channel=TheNetNinja
            className={`newReview${movie.title}`}
            type="text"
            placeholder="write review"
          ></input>
          <button
            onClick={() => {
              setMovies([...movies, movies[movie.id].reviews.push(review)]); 
              document.querySelector(`.newReview${movie.title}`).value = null;
            }}
          >
            send
          </button>
          {movie.reviews.map((r) => {
            return (
              <div>
                <i>{r}</i>
              </div>
            );
          })}
        </section>
      ) : null}
    </section>
  );
};
