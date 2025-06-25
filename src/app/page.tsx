import BackgroundContainer from '../components/BackgroundContainer';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='min-h-screen font-[family-name:var(--font-instrument-sans)]'>
			<BackgroundContainer overlayOpacity='0.8' blurAmount='60px' />

			{/* Navigation */}
			<nav className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg bg-black/20 border border-white/20 rounded-full px-8 py-3 shadow-2xl'>
				<div className='flex items-center gap-8'>
					<div className='flex items-center gap-3'>
						<Image
							src='/logo_card.png'
							alt='Empire Logo'
							width={36}
							height={36}
							className='rounded-lg'
						/>
						<span className='text-xl font-medium text-white font-[family-name:var(--font-instrument-serif)]'>
							Empire
						</span>
					</div>
					<div className='hidden md:flex items-center gap-6'>
						<a
							href='#how-it-works'
							className='text-white/70 hover:text-white transition-colors text-sm font-medium'
						>
							How it Works
						</a>
						<a
							href='#reviews'
							className='text-white/70 hover:text-white transition-colors text-sm font-medium'
						>
							Reviews
						</a>
						<a
							href='#features'
							className='text-white/70 hover:text-white transition-colors text-sm font-medium'
						>
							Features
						</a>
						<a
							href='#'
							className='text-white/70 hover:text-white transition-colors text-sm font-medium'
						>
							Our mission
						</a>
						<button className='bg-white text-black font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-colors text-sm'>
							Download
						</button>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<div className='flex flex-col items-center justify-center min-h-screen text-center max-w-4xl mx-auto relative z-20 px-8 pt-20'>
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
						Feel proud of yourself again.
					</h1>

					<p className='text-lg sm:text-xl max-w-2xl mb-12 text-white/80 leading-relaxed animate-fade-in opacity-0 animation-delay-800 animate-slide-up'>
						Build your empire one habit at a time and create a life
						to life to be proud of. Empire is not a habit tracker,
						it's a system to rebuild your broken life.
					</p>

					<div className='mb-8 animate-slide-up opacity-0 animation-delay-1100'>
						<Image
							src='/mockup.png'
							alt='Daily Habits App Mockup'
							width={400}
							height={700}
							className='mx-auto drop-shadow-2xl'
							priority
						/>
					</div>

					<div className='flex flex-col sm:flex-row gap-4 items-center animate-fade-in opacity-0 animation-delay-1400 animate-slide-up'>
						<a
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
						</a>

						<a
							href='#'
							className='hover:opacity-80 transition-opacity duration-200'
						>
							<Image
								src='/apple-download-button.svg'
								alt='Download on the App Store'
								width={150}
								height={45}
								className='h-12 w-auto'
							/>
						</a>
					</div>
				</main>
			</div>

			{/* Comparison Section */}
			<section id='how-it-works' className='py-20 px-8 relative z-20'>
				<div className='max-w-4xl mx-auto'>
					<h2 className='text-4xl sm:text-5xl font-light text-center mb-16 text-white font-[family-name:var(--font-instrument-serif)]'>
						Yesterday you said tomorrow, when will you start?
					</h2>
					<div className='grid md:grid-cols-2 gap-4'>
						<div className='bg-black/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-6'>
							<h3 className='text-4xl font-medium text-red-500 font-[family-name:var(--font-instrument-serif)]'>
								Without Empire
							</h3>
							<ul className='space-y-4 text-white/80'>
								<li className='flex items-center gap-3'>
									<span className='text-red-500 mt-1 text-2xl'>
										×
									</span>
									<span>
										You procrastinate and never start
									</span>
								</li>
								<li className='flex items-center gap-3'>
									<span className='text-red-500 mt-1 text-2xl'>
										×
									</span>
									<span>
										You set huge goals... make a little
										progress... then go back to your old
										habits
									</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='text-red-500 mt-1'>×</span>
									<span>
										You keep falling back into your old
										behavior
									</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='text-red-500 mt-1'>×</span>
									<span>
										You don't know why you're not making
										progress
									</span>
								</li>
							</ul>
						</div>
						<div className='bg-black/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-6'>
							<h3 className='text-4xl font-medium text-green-400 font-[family-name:var(--font-instrument-serif)]'>
								With Empire
							</h3>
							<ul className='space-y-4 text-white/80'>
								<li className='flex items-start gap-3'>
									<span className='text-green-400 mt-1'>
										✓
									</span>
									<span>
										You focus on doing small steps and being
										consistent over time
									</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='text-green-400 mt-1'>
										✓
									</span>
									<span>
										You create realistic goals and log
										progress weekly
									</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='text-green-400 mt-1'>
										✓
									</span>
									<span>
										You break big objectives into smaller
										milestones and daily habits
									</span>
								</li>
								<li className='flex items-start gap-3'>
									<span className='text-green-400 mt-1'>
										✓
									</span>
									<span>
										You get insights & feedback from the app
										and analyze what's not working
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id='features' className='py-20 px-8 relative z-20'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-4xl sm:text-5xl font-light text-center mb-16 text-white font-[family-name:var(--font-instrument-serif)]'>
						See what is working in your routine – and what's not
					</h2>
					<div className='grid md:grid-cols-3 gap-12'>
						<div className='text-center space-y-6'>
							<div className='w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm'>
								<span className='text-2xl'>📊</span>
							</div>
							<h3 className='text-2xl font-medium text-white font-[family-name:var(--font-instrument-serif)]'>
								Track goals & habits
							</h3>
							<p className='text-white/80'>
								Empire guides you to create a routine tailored
								for you.
							</p>
						</div>
						<div className='text-center space-y-6'>
							<div className='w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm'>
								<span className='text-2xl'>🧠</span>
							</div>
							<h3 className='text-2xl font-medium text-white font-[family-name:var(--font-instrument-serif)]'>
								Let the system learn
							</h3>
							<p className='text-white/80'>
								Raise your focus score and feed powerful data to
								the app.
							</p>
						</div>
						<div className='text-center space-y-6'>
							<div className='w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm'>
								<span className='text-2xl'>💡</span>
							</div>
							<h3 className='text-2xl font-medium text-white font-[family-name:var(--font-instrument-serif)]'>
								See what to change
							</h3>
							<p className='text-white/80'>
								Hundreds of data points are analyzed to give
								powerful feedback.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Reviews Section */}
			<section id='reviews' className='py-20 px-8 relative z-20'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-4xl sm:text-5xl font-light text-center mb-16 text-white font-[family-name:var(--font-instrument-serif)]'>
						High performers learn their patterns
					</h2>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{[
							{
								text: "A habit & goal tracker with great design sense. I started using Empire recently and the main reason for switching is that it's designed well. Love this project.",
								author: 'paul.jonathan',
								flag: '🇩🇪',
							},
							{
								text: 'The developer has clearly spent a good time perfecting every aspect of the user experience! Easy to use app with a lovely UI',
								author: 'Saadb93',
								flag: '🇲🇦',
							},
							{
								text: 'Empire has changed the way I stick to my goals. The Insights are really good and help keep me motivated. Truly effective!',
								author: 'pedro.aquino',
								flag: '🇧🇷',
							},
							{
								text: 'App is absolutely amazing and perfect ♥️ I hope you keep updating it for a long while.',
								author: 'ameer.hs',
								flag: '🇵🇰',
							},
							{
								text: "Best habit tracker I've used. In the last 5 years I've tried all the 'best' goal setting and habit tracking apps. Empire is hands down the best.",
								author: 'Kreativekasper',
								flag: '🇫🇮',
							},
							{
								text: "Empire's insights feature is game-changing. I finally understand my patterns and can make real improvements.",
								author: 'sarah.m',
								flag: '🇺🇸',
							},
						].map((review, i) => (
							<div
								key={i}
								className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10'
							>
								<p className='text-white/80 mb-4'>
									"{review.text}"
								</p>
								<div className='flex items-center gap-2'>
									<span>{review.flag}</span>
									<span className='text-white/60 text-sm'>
										{review.author}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 px-8 relative z-20'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-4xl sm:text-5xl font-light mb-8 text-white font-[family-name:var(--font-instrument-serif)]'>
						Build Your Empire Today
					</h2>
					<p className='text-xl text-white/80 mb-12'>
						Join thousands of men transforming their lives through
						powerful habits
					</p>
					<div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
						<a
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
						</a>

						<a
							href='#'
							className='hover:opacity-80 transition-opacity duration-200'
						>
							<Image
								src='/apple-download-button.svg'
								alt='Download on the App Store'
								width={150}
								height={45}
								className='h-12 w-auto'
							/>
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='py-12 px-8 relative z-20 border-t border-white/10'>
				<div className='max-w-6xl mx-auto'>
					<div className='flex flex-col md:flex-row items-center justify-between gap-6'>
						<div className='flex items-center gap-3'>
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
							<a
								href='#'
								className='hover:text-white/80 transition-colors'
							>
								Support
							</a>
							<a
								href='#'
								className='hover:text-white/80 transition-colors'
							>
								Blog
							</a>
						</div>
						<div className='text-white/40 text-sm'>
							© 2024 Empire. All rights reserved.
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
