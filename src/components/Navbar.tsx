import { Button, Logo, Container } from './ui';

const Navbar = () => {
	return (
		<nav className='backdrop-blur-md rounded-full w-7xl mx-auto'>
			<Container>
				<div className='flex justify-between items-center h-16'>
					<Logo />
					<div className='hidden md:flex items-center space-x-8'>
						<a href='#features' className='text-gray-600 hover:text-primary transition-colors'>
							Features
						</a>
						<a href='#download' className='text-gray-600 hover:text-primary transition-colors'>
							Download
						</a>
						<Button size='md'>Get Started</Button>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
