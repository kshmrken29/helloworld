interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export default function Button({ children, fullWidth = false, className = '', ...props }: ButtonProps) {
  return (
    <button 
      {...props}
      className={`px-3 py-2 md:px-4 md:py-2 hover:bg-green-950 bg-green-700 text-white text-center text-sm md:text-base
      ${fullWidth ? 'w-full' : 'w-full md:w-3/4'} ${className}`}
    >
      {children}
    </button>
  );
} 