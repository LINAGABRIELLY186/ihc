import moment from "moment";

type Props = {
  date: Date;
};

const WeekHeader = ({ date }: Props) => {
  const label = moment(date)
    .format("dddd")
    .replace("-feira", "")
    .replace("feira", "");

  return (
    <div className="rbc-header text-center font-normal capitalize">
      {label}
    </div>
  );
};

export default WeekHeader;

