import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import { Seat } from "../components/Book/Seat";
import { useEffect } from "react";

export const Book = ({ state }) => {
  const [seatAmount, setSeatAmount] = useState(0);

  useEffect(() => {
    let newArr = [];
    seats.map((s, i) => (s === 1 ? newArr.push(i + 1) : null));
    if (newArr.length > seatAmount) {
      setSeats(show.seats);
    }
  }, [seatAmount]);

  const { theMovie } = useParams();
  let movie = state.filter((m) => m.title == theMovie)[0];

  const [seats, setSeats] = useState([]);
  const [show, setShow] = useState({});
  const [showSeats, setShowSeats] = useState(false);
  const [showTimes, setShowTimes] = useState(true);

  const chosenTime = (show) => {
    setShow(show);
    setShowSeats(true);
    setShowTimes(false);
    setSeats(show.seats);
  };

  const bookSeat = (i) => {
    const correctSeats = [...seats];

    let newArr = [];
    correctSeats.map((s, i) => (s === 1 ? newArr.push(i + 1) : null));

    if (seatAmount > newArr.length || correctSeats[i] == 1) {
      if (correctSeats[i] === 0) {
        correctSeats[i] = 1;
        setSeats(correctSeats);
      } else if (seats[i] === 1) {
        correctSeats[i] = 0;
        setSeats(correctSeats);
      } else {
        console.log("alrdy buukt");
      }
    }
  };

  const urlSeats = (seats) => {
    let newArr = [];
    seats.map((s, i) => (s === 1 ? newArr.push(i + 1) : null));
    return newArr.toString().replaceAll(",", "_");
  };

  return (
    <section>
      <h1>{movie.title}</h1>

      {showTimes
        ? movie.shows.map((show) => {
            return <div onClick={() => chosenTime(show)}>{show.time}</div>;
          })
        : null}

      <section className="flex seats">
        {showSeats ? (
          <section>
            <label htmlFor="">how many </label>
            <input
              onInput={(e) => setSeatAmount(e.target.value)}
              id="getSeatAmount"
              type="number"
              value={null ? 0 : seatAmount}
            ></input>
          </section>
        ) : null}
        {showSeats
          ? seats.map((seat, i) => {
              return <Seat seatState={seat} bookSeat={() => bookSeat(i)} />;
            })
          : null}
      </section>
      {seats.includes(1) ? (
        <Link
          to={`/bookinginfo/${movie.title}/${show.time.replace(
            ".",
            "_"
          )}/${urlSeats(seats)}`}
        >
          confirm
        </Link>
      ) : null}
      {showSeats ? (
        <div
          onClick={() => {
            setShowSeats(false);
            setShowTimes(true);
          }}
        >
          back to times
        </div>
      ) : (
        <Link to="/movies">back to movies</Link>
      )}
    </section>
  );
};
