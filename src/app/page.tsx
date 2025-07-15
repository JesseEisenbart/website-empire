import BackgroundContainer from '../components/BackgroundContainer';
import Navigation from '../components/Navigation';
import ComparisonSection from '../components/ComparisonSection';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='min-h-screen font-[family-name:var(--font-instrument-sans)]'>
			<BackgroundContainer overlayOpacity='0.6' blurAmount='60px' gridOpacity='0.02'/>

			{/* Hero Section */}
			<div className='flex flex-col items-center justify-center min-h-screen text-center max-w-4xl mx-auto relative z-20 px-4 pt-10'>
				<main className='flex flex-col items-center'>
					<div className='mb-8 animate-fade-in opacity-0 animation-delay-200 animate-slide-up'>
						<Image
							src='/logo_card_shadow.png'
							alt='Empire Logo'
							width={120}
							height={120}
							className='mx-auto'
							priority
						/>
					</div>

					<h1 className='text-5xl sm:text-6xl md:text-6xl font-light mb-6 font-[family-name:var(--font-instrument-serif)] text-white animate-slide-up opacity-0 animation-delay-500'>
						Empire - Feel Proud of Yourself Again.
					</h1>

					<p className='text-lg sm:text-xl max-w-2xl mb-12 text-white/80 leading-relaxed animate-fade-in opacity-0 animation-delay-800 animate-slide-up'>
						Build your empire one habit at a time and create a life
						to life to be proud of. Empire is not a habit tracker,
						it's a system to rebuild your broken life.
					</p>

					<div className='mb-8 animate-slide-up opacity-0 animation-delay-1100'>
						<Image
							src='/mockup.webp'
							alt='Daily Habits App Mockup'
							width={400}
							height={700}
							className='mx-auto drop-shadow-2xl'
							priority
						/>
					</div>

					<div className='flex flex-col sm:flex-row gap-4 items-center animate-fade-in opacity-0 animation-delay-1400 animate-slide-up'>
						{/* <a
							href='#'
							className='hover:opacity-80 transition-opacity duration-200'
						>
							<Image
								src='/google-play-button.png'
								alt='Get it on Google Play'
								width={150}
								height={45}
								className='h-12 w-auto'
							/>
						</a> */}

						<a
							href='https://apps.apple.com/us/app/empire-self-mastery-habits/id6747765880'
							className='hover:opacity-80 transition-opacity duration-200'
						>
							<Image
								src='/apple-download-button.svg'
								alt='Download on the App Store'
								width={300}
								height={100}
								className='h-18 w-auto'
							/>
						</a>
					</div>
				</main>
			</div>

			{/* <ComparisonSection /> */}

			

			{/* Footer */}
			<footer className='py-12 px-8 relative z-20'>
				<div className='max-w-6xl mx-auto'>
					<div className='flex flex-col md:flex-row items-center justify-between gap-6'>
						{/* <div className='flex items-center gap-3'>
							<Image
								src='/logo.png'
								alt='Empire Logo'
								width={32}
								height={32}
								className='rounded-lg'
							/>
							<span className='text-lg font-medium text-white font-[family-name:var(--font-instrument-serif)]'>
								Empire
							</span>
						</div>
						<div className='flex gap-6 flex-wrap items-center justify-center text-white/60'>
							<a
								href='/privacy-policy'
								className='hover:text-white/80 transition-colors'
							>
								Privacy Policy
							</a>
							<a
								href='/terms-of-service'
								className='hover:text-white/80 transition-colors'
							>
								Terms
							</a>
							
						</div> */}
						<div className='text-white/40 text-sm'>
							© 2025 Empire. All rights reserved.
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
