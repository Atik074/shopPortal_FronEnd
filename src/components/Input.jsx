const Input = ({htmlFor,title, placeholder}) => {
    return (
        <div>
          <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-600 mb-1">
             {title}
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            type={htmlFor}
            name={htmlFor}
            id={htmlFor}
            placeholder={placeholder}
          />
        </div>
    );
};

export default Input;