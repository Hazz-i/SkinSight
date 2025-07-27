import React, { useState, useEffect } from 'react';

import Container from './ui/Container';
import Logo from './ui/Logo';

const navLinks = [
	{ label: 'Home', href: '#home' },
	{ label: 'Feature', href: '#features' },
	{ label: 'Download', href: '#download' },
];

const Navbar = () => {
	const [active, setActive] = useState('Home');

	// Scroll spy effect
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const home = document.getElementById('home');
			const features = document.getElementById('features');
			const download = document.getElementById('download');
			if (download && scrollY + 100 >= download.offsetTop) {
				setActive('Download');
			} else if (features && scrollY + 100 >= features.offsetTop) {
				setActive('Feature');
			} else if (home && scrollY + 100 >= home.offsetTop) {
				setActive('Home');
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Smooth scroll
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
		e.preventDefault();
		setActive(label);
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<nav className='backdrop-blur-md rounded-full max-w-7xl mx-auto px-2 sm:px-4'>
			<Container>
				<div className='flex justify-between items-center h-16 relative'>
					<Logo />
					{/* Desktop nav */}
					<div className='hidden md:flex items-center space-x-4 lg:space-x-8'>
						{navLinks.map((link) =>
							link.label === 'Download' ? (
								<button
									key={link.label}
									className={`px-4 lg:px-6 py-2 rounded-full text-base bg-primary text-white hover:bg-primary/90 transition-colors cursor-pointer font-semibold hover:scale-105 duration-300 ease-in`}
									onClick={() => {
										setActive(link.label);
										const target = document.querySelector(link.href);
										if (target) {
											target.scrollIntoView({ behavior: 'smooth', block: 'start' });
										}
									}}
								>
									{link.label}
								</button>
							) : (
								<a
									key={link.label}
									href={link.href}
									className={`text-gray-600 hover:text-primary transition-colors ${
										active === link.label ? 'font-bold text-primary' : ''
									}`}
									onClick={(e) => handleClick(e, link.label, link.href)}
								>
									{link.label}
								</a>
							)
						)}
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
