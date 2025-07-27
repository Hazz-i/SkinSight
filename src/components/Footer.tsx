import { Logo } from './ui';

const Footer = () => {
	return (
		<footer className='text-gray-500  flex items-center justify-around w-full py-5 gap-5'>
			<Logo showText={true} textColor='text-gray-500' />
			<p className='text-sm'>&copy; 2025 Skinsight.</p>
			<div className='flex items-center justify-center gap-2'>
				<i className='bxl  bx-instagram'></i>
				<i className='bxl  bx-tiktok'></i>
				<i className='bxl  bx-facebook-circle'></i>
				<i className='bxl  bx-whatsapp'></i>
			</div>
		</footer>
	);
};

export default Footer;
