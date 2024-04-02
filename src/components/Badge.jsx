import CountUp from "react-countup";

// eslint-disable-next-line react/prop-types
const Badge = ({ icon, endCountNum, badgeText }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-4 z-10 w-[170px] h-[55px] bg-white border border-gray-100 shadow-2xl rounded-lg">
      <div className="text-3xl text-[#fe705a]">{icon}</div>
      <div className="flex items-center gap-2">
        <div className="text-3xl font-extrabold text-[#fe705a]">
          {(endCountNum === 23) ? "'" : ''}
          <CountUp decimals={(endCountNum === 8.74) ? 2 : 0} end={endCountNum} delay={1} duration={4} />
        </div>
        <div className="text-xs font-medium leading-none">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;