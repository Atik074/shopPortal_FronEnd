const Divider = () => {
    return (
        <div className="flex items-center gap-2">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
    );
};

export default Divider;