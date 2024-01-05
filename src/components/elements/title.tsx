interface props {
  value: string;
}

export const Title = ({ value } : props) => {
  return (
    <div className="flex flex-row gap-[10px]">
      <div className="bg-primary w-[6px] h-9"></div>
      <div className=" text-[26px] font-bold text-heading">{value}</div>
    </div>
  );
};
