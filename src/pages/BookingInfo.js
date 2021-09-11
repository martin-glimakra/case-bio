import { useParams, Link } from "react-router-dom";

export const BookingInfo = () => {
  const { theMovie, time, seats } = useParams();

  let newTime = time.replace("_", ".");
  let seatNumbers = seats.split("_");

  return (
    <section>
      <h2>confirmed:</h2>
      <div>Film: {theMovie}</div>
      <div>Kl: {newTime}</div>
      <div>
        Seats:
        {seatNumbers.map((s) => (
          <span> {s}</span>
        ))}
      </div>
      <Link to="/">Hem</Link>
    </section>
  );
};
