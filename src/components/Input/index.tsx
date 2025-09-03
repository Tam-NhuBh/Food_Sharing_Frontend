import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ label, error, className = '', ...props }, ref) => {
		return (
			<div className="flex flex-col gap-1">
				{label && (
					<label className="text-sm font-medium text-gray-700 dark:text-gray-200">
						{label}
					</label>
				)}
				<input
					ref={ref}
					className={`px-3 py-2 border rounded-lg transition ${error ? 'border-red-500' : 'border-[#B3B3B3]'} ${className}`}
					{...props}
				/>
				{error && (
					<span className="text-xs text-red-500">{error}</span>
				)}
			</div>
		);
	}
);

Input.displayName = 'Input';

export default Input;
