import Image from 'next/image';

export default function Navigation() {
	return (
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
	);
} 