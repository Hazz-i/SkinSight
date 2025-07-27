import { Button, Container } from './ui';

const HeroSection = () => {
	return (
		<section className='pt-20 pb-16'>
			<Container>
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
						DESTROY BAD SKIN
						<span className='block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
							BUILD CONFIDENCE
						</span>
					</h1>
					<p className='text-gray-600 mb-8 max-w-3xl mx-auto'>
						Stop guessing. Start DOMINATING. Brutal AI obliterates your skin problems with PRECISION
						ATTACKS. No mercy. No excuses. Just results.
					</p>
					<div className='flex flex-col sm:flex-row gap-2 justify-center'>
						<Button size='sm'> SCAN NOW - IT'S FREE</Button>
						<Button variant='outline' size='sm'>
							WATCH DESTRUCTION
						</Button>
					</div>
				</div>

				{/* Hero Image/Mockup */}
				<div className='relative max-w-4xl mx-auto flex items-center justify-center'>
					<div className='h-[70vh] w-80 -rotate-10 rounded-xl overflow-hidden shadow-2xl z-10'>
						<img src='./home.jpg' className='w-full h-full object-cover' alt='Home preview' />
					</div>
					<div className='h-[70vh] w-80 rotate-5 rounded-xl overflow-hidden shadow-2xl z-10'>
						<img src='./scan.jpg' className='w-full h-full object-cover' alt='Scan preview' />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default HeroSection;
