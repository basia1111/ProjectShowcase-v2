import React, { ReactNode } from "react";

type TransparentButtonProps = {
  children: ReactNode;
  className?: string;
};
const TransparentButton = ({ children, className = "", ...props }: TransparentButtonProps) => (
  <div
    className={`inline-flex items-center   cursor-pointer justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-all duration-300 group bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10 ${className}`}
    {...props}
  >
    {children}
  </div>
);
export default TransparentButton;
