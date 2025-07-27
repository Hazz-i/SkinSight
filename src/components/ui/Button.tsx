interface ButtonProps {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'sm' | 'md' | 'lg';
	className?: string;
	onClick?: () => void;
	href?: string;
}

const Button = ({
	children,
	variant = 'primary',
	size = 'md',
	className = '',
	onClick,
	href,
}: ButtonProps) => {
	const baseClasses =
		'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200 ease-out';

	const variantClasses = {
		primary: 'bg-primary-gradient text-white',
		secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
		outline: 'border-1 border-primary text-[#A2AA7B] hover:bg-primary hover:text-white',
	};

	const sizeClasses = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-2 text-base',
		lg: 'px-8 py-4 text-lg',
	};

	const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

	if (href) {
		return (
			<a href={href} className={classes}>
				{children}
			</a>
		);
	}

	return (
		<button onClick={onClick} className={classes}>
			{children}
		</button>
	);
};

export default Button;
