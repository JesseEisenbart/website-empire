interface BackgroundContainerProps {
	backgroundImage?: string;
	blurAmount?: string;
	overlayOpacity?: string;
	gridOpacity?: string;
}

export default function BackgroundContainer({
	backgroundImage = '/bg.jpeg',
	blurAmount = '50px',
	overlayOpacity = '0.8',
	gridOpacity = '0.01',
}: BackgroundContainerProps) {
	return (
		<div className='fixed inset-0 -z-10'>
			{/* Background Image */}
			<div
				className='absolute inset-0 bg-cover bg-center bg-no-repeat'
				style={{
					backgroundImage: `url(${backgroundImage})`,
					filter: `blur(${blurAmount})`,
					transform: 'scale(1.2)', // Prevent blur edge artifacts
				}}
			/>

			{/* Frosted Black Overlay */}
			<div
				className='absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm'
				style={{ opacity: overlayOpacity }}
			/>

			{/* Grid Background */}
			<div
				className='absolute inset-0'
				style={{
					opacity: gridOpacity,
					backgroundImage: `
            linear-gradient(white 1px, transparent 1px),
            linear-gradient(90deg, #ffffff 1px, transparent 1px)
          `,
					backgroundSize: '20px 20px',
				}}
			/>
		</div>
	);
}
