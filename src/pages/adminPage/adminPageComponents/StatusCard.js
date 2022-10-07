export default function Statusdiv({
  color,
  icon,
  title,
  amount,
  percentage,
  percentageColor,
  percentageIcon,
  date,
}) {
  return (
    <div className="px-4 mb-10">
      <div>
        <div color={color} iconOnly className="mb-0">
          {/* <Icon name={icon} size="3xl" color="white" /> */}
        </div>

        <div amount={percentage} color={percentageColor} date={date}>
          {/* <Icon color={percentageColor} name={percentageIcon} /> */}
        </div>
      </div>
    </div>
  );
}
