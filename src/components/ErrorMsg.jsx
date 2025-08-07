const ErrorMsg = ({ msg }) => {
  return (
    <div className="text-xl mb-3 font-semibold text-center bg-red-700 text-white p-2" >
      {msg}
    </div>
  );
};

export default ErrorMsg;
