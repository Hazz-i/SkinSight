import { Container } from './ui';

interface FeatureCardProps {
	icon: string;
	title: string;
	description: string;
	bgColor: string;
	borderColor: string;
	iconBg: string;
}

const FeatureCard = ({
	icon,
	title,
	description,
	bgColor,
	borderColor,
	iconBg,
}: FeatureCardProps) => {
	return (
		<div
			className={`bg-${bgColor} p-8 rounded-5px border ${borderColor} hover:shadow-lg transition-all duration-300`}
		>
			<div className={`w-12 h-12 ${iconBg} rounded-5px flex items-center justify-center mb-6`}>
				<span className='text-white text-xl'>{icon}</span>
			</div>
			<h3 className='text-xl font-bold text-gray-900 mb-4'>{title}</h3>
			<p className='text-gray-600'>{description}</p>
		</div>
	);
};

const FeaturesSection = () => {
	const features = [
		{
			icon: '🔍',
			title: 'AI SKIN SCANNER',
			description:
				'BRUTAL PRECISION. ZERO BULLSH*T. Computer vision yang menghancurkan semua asumsi tentang kulit Anda dengan analisis super detail.',
			bgColor: 'bg-white',
			borderColor: 'border-primary/30',
			iconBg: 'bg-primary-gradient',
		},
		{
			icon: '💡',
			title: 'PERSONAL SKIN HACKER',
			description:
				'CUSTOM-BUILT FOR YOU. Algoritma brutal yang meretas pola kulit Anda dan meracik formula perawatan eksklusif yang PASTI bekerja.',
			bgColor: 'bg-white',
			borderColor: 'border-secondary/30',
			iconBg: 'bg-gradient-to-r from-secondary to-primary',
		},
		{
			icon: '📊',
			title: 'PROGRESS DESTROYER',
			description:
				'TRACK EVERYTHING. MISS NOTHING. Dashboard brutal yang menampilkan transformasi kulit Anda dengan data real-time yang membuat Anda ketagihan.',
			bgColor: 'bg-white',
			borderColor: 'border-green-100',
			iconBg: 'bg-gradient-to-r from-green-500 to-emerald-600',
		},
		{
			icon: '👥',
			title: 'EXPERT DEMOLITION',
			description:
				'DERMATOLOG REAL. ADVICE BRUTAL. Konsultasi langsung dengan skin experts yang tidak takut memberikan truth bomb tentang kulit Anda.',
			bgColor: 'bg-white',
			borderColor: 'border-orange-100',
			iconBg: 'bg-gradient-to-r from-orange-500 to-red-600',
		},
		{
			icon: '🛡️',
			title: 'PRIVACY FORTRESS',
			description:
				'LOCK & LOADED. Data Anda dilindungi dengan enkripsi brutal level militer. Privasi bukan pilihan, tapi HAK MUTLAK.',
			bgColor: 'bg-white',
			borderColor: 'border-teal-100',
			iconBg: 'bg-gradient-to-r from-teal-500 to-cyan-600',
		},
		{
			icon: '📱',
			title: 'MOBILE DOMINATION',
			description:
				'ANYWHERE. ANYTIME. UNSTOPPABLE. Interface yang dirancang untuk menghancurkan batasan - analisis kulit powerful di genggaman Anda.',
			bgColor: 'bg-white',
			borderColor: 'border-primary/20',
			iconBg: 'bg-gradient-to-r from-primary to-secondary',
		},
	];

	return (
		<section id='features' className='py-20 '>
			<Container>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						UNLEASH YOUR <span className='text-primary'>SKIN'S</span> POTENTIAL
					</h2>
					<p className='text-gray-600 max-w-2xl mx-auto'>
						Stop settling for average skin. Our BRUTAL technology stack demolishes skincare myths
						and builds you a BULLETPROOF routine.
					</p>
				</div>

				<div className='flex items-center justify-center gap-5 flex-wrap'>
					{features.map((feature, index) => (
						<FeatureCard
							key={index}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
							bgColor={feature.bgColor}
							borderColor={feature.borderColor}
							iconBg={feature.iconBg}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export default FeaturesSection;
