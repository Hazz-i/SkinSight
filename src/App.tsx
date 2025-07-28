import {
	Navbar,
	HeroSection,
	FeaturesSection,
	DownloadSection,
	TeamSection,
	Footer,
} from './components';

const App = () => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
			<Navbar />
			<HeroSection />
			<FeaturesSection />
			<TeamSection />
			<DownloadSection />
			<Footer />
		</div>
	);
};

export default App;
