/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


export default function Button({ children }) {
    return <button className="h-10 border-none rounded-md text-white bg-gray-800 outline-none text-xs px-2 py-1 mt-8 mr-1 opacity-100 cursor-pointer">
            {children}
            </button>;
  }