import React from "react";

const Button = ({ styles, text }) => (
  <button
    type="button"
    className={`py-6 px-20 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    {text}
  </button>
);

// Usage
const ButtonGroup = () => (
  <div className="mt-10 flex space-x-28">
    <Button styles="bg-green-500" text="Get Bot" />
    <Button styles="bg-orange-500" text="Get USSD" />
  </div>
);

export default ButtonGroup;
