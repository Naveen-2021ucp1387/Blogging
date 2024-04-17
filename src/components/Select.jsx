import React, { useId } from "react";

function Select({ options, label, className, ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-white sm:text-sm ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option} className="text-gray-900">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
