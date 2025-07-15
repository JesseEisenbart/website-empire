export default function ComparisonSection() {
	return (
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
									You don&apos;t know why you&apos;re not making
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
									and analyze what&apos;s not working
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
} 