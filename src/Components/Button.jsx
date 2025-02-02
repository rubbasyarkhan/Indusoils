import React from "react";
import { ArrowRight } from "lucide-react";

const Button = ({ text, icon: Icon }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-8 py-2 bg-white rounded-full transition-all duration-300 hover:text-white hover:bg-black text-center">
      <span className="flex items-center justify-center">{text}</span>
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default Button;
