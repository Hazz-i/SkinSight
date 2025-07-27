interface LogoProps {
	size?: 'sm' | 'md' | 'lg';
	showText?: boolean;
	className?: string;
	textColor?: string;
}

const Logo = ({
	size = 'md',
	showText = true,
	className = '',
	textColor = 'text-gray-900',
}: LogoProps) => {
	const sizeClasses = {
		sm: 'w-6 h-6',
		md: 'w-8 h-8',
		lg: 'w-12 h-12',
	};

	const textSizeClasses = {
		sm: 'text-lg',
		md: 'text-xl',
		lg: 'text-2xl',
	};

	return (
		<div className={`flex items-center space-x-0 ${className}`}>
			<img className={`${sizeClasses['lg']}`} src='./icon.png' alt='' />
			{showText && (
				<span className={`${textSizeClasses[size]} font-semibold mb-2 ${textColor}`}>
					SkinSight
				</span>
			)}
		</div>
	);
};

export default Logo;
