export const Seat = ({ seatState, bookSeat }) => {
  const style = () => {
    if (seatState == 1) {
      return {
        background: "rgb(145, 255, 111)",
      };
    } else if (seatState == 2) {
      return {
        background: "rgb(255, 140, 111)",
      };
    } else {
      return {
        background: "rgb(197, 197, 197)",
      };
    }
  };
  return (
    <div
      style={style()}
      className={`seat ${seatState}`}
      onClick={bookSeat}
    ></div>
  );
};
