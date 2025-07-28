import { Container } from './ui';

const QRCodeDisplay = () => {
	return (
		<div className='bg-white p-6 md:p-8 rounded-5px shadow-lg transition-transform duration-200 ease-out hover:scale-105 w-full max-w-xs mx-auto'>
			<div className='text-center mb-6'>
				<h3 className='text-lg md:text-xl font-bold text-gray-900 mb-2'>Scan QR Code</h3>
				<p className='text-sm text-gray-600'>Download SkinSight App</p>
			</div>

			{/* QR Code Placeholder */}
			<div className='w-40 h-40 md:w-48 md:h-48 mx-auto bg-gray-100 rounded-5px flex items-center justify-center mb-6 border-2 border-dashed border-gray-300'>
				<img src='./qr.png' alt='' className='w-3/4 h-3/4 object-contain' />
			</div>

			<div className='text-center text-sm text-gray-600'>
				<p className='mb-2'>Compatible with:</p>
				<div className='flex justify-center space-x-4'>
					<span className='flex items-center space-x-1'>
						<span>🤖</span>
						<span>Android 8+</span>
					</span>
				</div>
			</div>
		</div>
	);
};

const QuickStartGuide = () => {
	const steps = [
		'Scan QR code with your phone',
		'Download & install immediately',
		'Capture your first skin scan',
		'Get brutal honest recommendations',
		'Track your skin transformation',
	];

	return (
		<div className='w-full max-w-xs md:max-w-sm mx-auto'>
			<h3 className='text-lg md:text-xl font-bold mb-4 text-center md:text-left'>
				Quick Start Domination
			</h3>
			<ul className='bg-white/10 backdrop-blur-sm p-4 md:p-6 space-y-3 text-blue-100 rounded-lg'>
				{steps.map((step, index) => (
					<li key={index} className='flex items-start space-x-3'>
						<span className='flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5'>
							{index + 1}
						</span>
						<span className='text-white text-sm mt-1'>{step}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

const DownloadSection = () => {
	return (
		<section
			id='download'
			className='py-5 bg-primary/90 text-white w-full max-w-sm md:max-w-7xl mx-auto rounded-3xl'
		>
			<Container>
				<div className='text-center mb-5'>
					<h2 className='text-xl md:text-3xl font-bold mb-2'>Download & Dominate</h2>
					<p className='text-sm text-white/80 md:max-w-2xl mx-auto'>
						Scan the QR code and OBLITERATE every skin problem. NO EXCUSES. NO DELAYS. Just PURE
						RESULTS.
					</p>
				</div>

				<div className='flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl mx-auto'>
					{/* QR Code */}
					<div className='order-2 md:order-1'>
						<QRCodeDisplay />
					</div>

					{/* Quick Start Guide */}
					<div className='order-1 md:order-2'>
						<QuickStartGuide />
					</div>
				</div>

				{/* Additional Info */}
			</Container>
		</section>
	);
};

export default DownloadSection;
