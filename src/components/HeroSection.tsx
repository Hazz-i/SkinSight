import { Button, Container } from './ui';

const HeroSection = () => {
	return (
		<section className='pt-14'>
			<Container>
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
						DESTROY BAD SKIN
						<span className='block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
							BUILD CONFIDENCE
						</span>
					</h1>
					<p className='text-gray-600 mb-8 md:max-w-3xl mx-auto'>
						Stop guessing. Start DOMINATING. Brutal AI obliterates your skin problems with PRECISION
						ATTACKS. No mercy. No excuses. Just results.
					</p>
					<div className='flex flex-col sm:flex-row gap-2 justify-center'>
						<Button
							size='sm'
							onClick={() => {
								const target = document.querySelector('#download');
								if (target) {
									target.scrollIntoView({ behavior: 'smooth', block: 'start' });
								}
							}}
						>
							Scan Now - It's Free
						</Button>
						<Button
							variant='outline'
							size='sm'
							onClick={() =>
								window.open(
									'https://drive.google.com/file/d/1NzMVtJM9-o0GTqyrKrNh8yeJskRx3Ysh/view?usp=sharing',
									'_blank'
								)
							}
						>
							Watch Demo
						</Button>
					</div>
				</div>

				{/* Hero Image/Mockup */}
				<div className='relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4'>
					<div className='min-h-[55vh] w-60 md:h-[70vh] md:min-w-[20rem] md:-rotate-10 rounded-xl overflow-hidden shadow-2xl z-10 flex-shrink-0'>
						<img src='./home.jpg' className='w-full h-full object-cover' alt='Home preview' />
					</div>
					<div className='min-h-[55vh] w-60 md:h-[70vh] md:min-w-[20rem] md:rotate-5 rounded-xl overflow-hidden shadow-2xl z-10 flex-shrink-0'>
						<img src='./scan.jpg' className='w-full h-full object-cover' alt='Scan preview' />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default HeroSection;
