import { BarLoader } from "react-spinners";

const Loader = ({msg}) => {
       
  return (
    <div className="flex items-center justify-center gap-2">
      <p className="text-xl text-gray-600">{msg}</p>
  <BarLoader color="#0730e0" height={17} speedMultiplier={1} width={180} />
</div>
  );
};

export default Loader;
