interface props {
  filter:string
  value:number
}

export const Filter = ({filter, value} : props) => {
  return (
    <div className="bg-white w-60 h-16 flex flex-col gap-[2px] p-4 justify-center">
      <span className="text-main text-[10px]">{filter}</span>
      <span className="text-heading text-2xl font-bold">{value}</span>
    </div>
  );
}