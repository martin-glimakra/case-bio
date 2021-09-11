import { useState, useCallback } from "react";

export const Stars = ({ movie1 }) => {
  const [movie, setMovie] = useState(movie1);
  const [movieStars, setMovieStars] = useState(movie.stars.result);
  const [votes, setVotes] = useState(movie1.stars.voteAmount);
  const [voteable, setVoteable] = useState(movie1.stars.voteable);

  const stars = [1, 2, 3, 4, 5];

  const styles = useCallback(
    (i) => ({
      "--width-value": func(i),
    }),
    [movieStars]
  );

  const func = (i) => {
    if (movieStars === 0 || i > movieStars) {
      return "0%";
    }
    let procent = movieStars.toString().split(".")[1];

    return movieStars >= i + 1
      ? "100%"
      : procent === undefined
      ? "0%"
      : `${procent.charAt(0)}0%`;
  };

  const onVoting = (star) => {
    if (voteable) {
      movie.stars.starValue += star;
      movie.stars.voteAmount++;
      let correct = movie.stars.starValue / movie.stars.voteAmount;

      setMovieStars(correct);
      setVotes(movie.stars.voteAmount);
      setVoteable(false);
    }
  };

  return (
    <section>
      <section className={`stars${movie.id} stars`}>
        {stars.map((star, i) => {
          return (
            <div
              style={styles(i)}
              data-value={star - 1}
              onClick={() => onVoting(star)}
            ></div>
          );
        })}
      </section>

      <div>result: {movieStars}</div>
      <div>votes: {votes}</div>
    </section>
  );
};
