import myImage from '../assets/guwe.jpg';
import niken from '../assets/niken.jpg';
import zuma from '../assets/zum.jpg';

const team = [
	{
		name: 'Niken Lismiati',
		role: 'Mobile Developer',
		img: niken,
	},
	{
		name: 'Rahmat Wahyuma Akbar',
		role: 'Backend Developer',
		img: zuma,
	},
	{
		name: 'Wahid Hasim Santoso',
		role: 'AI/ML',
		img: myImage,
	},
];

const TeamSection = () => (
	<section id='team' className='pb-16'>
		<div className='max-w-5xl mx-auto px-4'>
			<div className='text-center mb-12'>
				<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>Development Team</h2>
				<p className='text-gray-600'>Meet the people behind SkinSight</p>
			</div>
			<div className='flex flex-wrap justify-center gap-10'>
				{team.map((member, idx) => (
					<div key={idx} className='flex flex-col items-center w-48'>
						<img
							src={member.img}
							alt={member.name}
							className='w-24 h-24 rounded-full object-cover mb-4 shadow-md'
							onContextMenu={(e) => e.preventDefault()}
							style={{ pointerEvents: 'none' }}
						/>
						<h3 className='font-semibold text-lg text-gray-800 text-nowrap'>{member.name}</h3>
						<p className='text-primary text-sm'>{member.role}</p>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default TeamSection;
