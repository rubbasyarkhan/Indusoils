import React from "react";


const Button = ({ text, icon: Icon }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-8 py-2 border-transparent border-2 text-white rounded-full transition-all duration-300 hover:text-white  hover:border-white  text-center">
      <span className="flex items-center justify-center">{text}</span>
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default Button;
