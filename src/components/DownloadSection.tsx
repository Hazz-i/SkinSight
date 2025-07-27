import { Container } from './ui';

const QRCodeDisplay = () => {
	return (
		<div className='bg-white p-8 rounded-5px shadow-lg transition-transform duration-200 ease-out hover:scale-105'>
			<div className='text-center mb-6'>
				<h3 className='text-xl font-bold text-gray-900 mb-2'>Scan QR Code</h3>
				<p className='text-gray-600'>Download SkinSight App</p>
			</div>

			{/* QR Code Placeholder */}
			<div className='w-48 h-48 mx-auto bg-gray-100 rounded-5px flex items-center justify-center mb-6 border-2 border-dashed border-gray-300'>
				<div className='text-center'>
					<div className='text-6xl mb-2'>📱</div>
					<div className='text-sm text-gray-500'>QR Code</div>
					<div className='text-xs text-gray-400 mt-1'>Scan to Download</div>
				</div>
			</div>

			<div className='text-center text-sm text-gray-600'>
				<p className='mb-2'>Compatible with:</p>
				<div className='flex justify-center space-x-4'>
					<span className='flex items-center space-x-1'>
						<span>📱</span>
						<span>iOS 12+</span>
					</span>
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
		'SCAN QR CODE WITH YOUR PHONE',
		'DOWNLOAD & INSTALL IMMEDIATELY',
		'CAPTURE YOUR FIRST SKIN SCAN',
		'GET BRUTAL HONEST RECOMMENDATIONS',
		'TRACK YOUR SKIN TRANSFORMATION',
	];

	return (
		<div className='bg-white/10 backdrop-blur-sm p-6 rounded-5px'>
			<h3 className='text-xl font-bold mb-4'>Quick Start Domination</h3>
			<ul className='space-y-3 text-blue-100'>
				{steps.map((step, index) => (
					<li key={index} className='flex items-start space-x-3'>
						<span className='flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5'>
							{index + 1}
						</span>
						<span className='text-white'>{step}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

const DownloadSection = () => {
	return (
		<section id='download' className='py-5 bg-primary/90 text-white w-7xl mx-auto rounded-3xl'>
			<Container>
				<div className='text-center mb-5'>
					<h2 className='text-3xl font-bold mb-4'>Download and Dominate</h2>
					<p className='text-white/80 max-w-2xl mx-auto'>
						Scan QR code dan HANCURKAN semua masalah kulit Anda. NO EXCUSES. NO DELAYS. Just PURE
						RESULTS.
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto'>
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
