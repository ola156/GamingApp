import React from "react";

const Button = ({ title, id, containerClass, leftIcons, righticon }) => {
  return (
    <button
      id={id}
      className={`${containerClass} group relative z-10  w-fit cursor-pointer overflow-hidden rounded-full  bg-violet-50 px-7 py-3 text-black`}
    >
      {leftIcons}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {righticon}
    </button>
  );
};

export default Button;
