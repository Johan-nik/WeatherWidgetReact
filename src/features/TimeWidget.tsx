import Moment from "react-moment";

export default function TimeWidget() {
  return (
    <p>
      <Moment format="HH:mm" interval={1000} />
    </p>
  );
}

