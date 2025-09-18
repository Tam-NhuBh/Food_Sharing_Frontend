import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-1">
        {label && (
          <label htmlFor={id} className="font-medium text-sm sm:text-md text-black dark:text-gray-600">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={`w-full px-3 py-2 border rounded-lg transition resize-y min-h-[100px] ${
            error ? "border-red-500" : "border-[#B3B3B3]"
          } ${className}`}
          {...props}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
