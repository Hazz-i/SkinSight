import { FaPumpSoap, FaSun, FaFlask, FaNewspaper, FaGraduationCap, FaRobot } from 'react-icons/fa';
import React from 'react';

interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
	return (
		<div
			className={`p-8 rounded-5px bg-white/80 hover:shadow-lg transition-all duration-300 cursor-pointer`}
		>
			<div className='text-primary text-3xl mb-2'>{icon}</div>
			<h3 className='text-xl font-bold text-gray-900 mb-4'>{title}</h3>
			<p className='text-gray-600'>{description}</p>
		</div>
	);
};

const FeaturesSection = () => {
	const features = [
		{
			icon: <FaPumpSoap />,
			title: 'Personalized Skincare Recommendations',
			description:
				'Get the best skincare products and routines tailored to your unique skin type. No more guessing—just results.',
		},
		{
			icon: <FaSun />,
			title: 'Sunscreen Advice by UV Index',
			description:
				'Get daily sunscreen recommendations based on today’s UV index in your area. Stay protected, always.',
		},
		{
			icon: <FaFlask />,
			title: 'Ingredient Safety Scanner',
			description:
				'Scan product ingredients to detect harmful substances for your skin type. Instantly get safer alternatives.',
		},
		{
			icon: <FaNewspaper />,
			title: 'Skincare News',
			description:
				'Stay updated with the newest trends, research, and news in the skincare world—right in the app.',
		},
		{
			icon: <FaGraduationCap />,
			title: 'Skincare Education',
			description:
				'Access up-to-date skincare education and tips to empower your daily routine and decisions.',
		},
		{
			icon: <FaRobot />,
			title: 'AI Skin Type Prediction',
			description:
				'Simply scan your skin and let our AI predict your skin type for truly personalized care.',
		},
	];

	return (
		<section id='features' className='py-16 md:py-25'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Powerful Features for Better <span className='text-primary'>Skin Health</span>
					</h2>
					<p className='text-gray-600 max-w-2xl mx-auto'>
						Discover how our advanced technology can help you achieve healthier, more radiant skin.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>
					{features.map((feature, index) => (
						<FeatureCard
							key={index}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
