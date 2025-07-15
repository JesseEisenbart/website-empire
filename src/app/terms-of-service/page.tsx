import type { Metadata } from 'next';
import Link from 'next/link';
import BackgroundContainer from '../../components/BackgroundContainer';

export const metadata: Metadata = {
	title: 'Terms of Service',
	description: 'Terms of Service for our website',
};

export default function TermsOfService() {
	return (
		<div className='min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-instrument-sans)]'>
			<BackgroundContainer />

			<div className='max-w-4xl mx-auto z-20'>
				<h1 className='text-4xl font-normal uppercase mb-8 text-center font-[family-name:var(--font-instrument-serif)]'>
					Terms of Service
				</h1>

				<div className='prose prose-lg max-w-none'>
					<p className='text-white dark:white mb-8 text-center'>
						Last updated: {new Date().toLocaleDateString()}
					</p>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							1. Acceptance of Terms
						</h2>
						<p className='mb-4'>
							By accessing and using this website, you accept and
							agree to be bound by the terms and provision of this
							agreement.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							2. Use License
						</h2>
						<p className='mb-4'>
							Permission is granted to temporarily download one
							copy of the materials on our website for personal,
							non-commercial transitory viewing only. This is the
							grant of a license, not a transfer of title, and
							under this license you may not:
						</p>
						<ul className='list-disc pl-6 mb-4'>
							<li>modify or copy the materials</li>
							<li>
								use the materials for any commercial purpose or
								for any public display (commercial or
								non-commercial)
							</li>
							<li>
								attempt to decompile or reverse engineer any
								software contained on our website
							</li>
							<li>
								remove any copyright or other proprietary
								notations from the materials
							</li>
						</ul>
						<p className='mb-4'>
							This license shall automatically terminate if you
							violate any of these restrictions and may be
							terminated by us at any time. Upon terminating your
							viewing of these materials or upon the termination
							of this license, you must destroy any downloaded
							materials in your possession whether in electronic
							or printed format.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							3. Disclaimer
						</h2>
						<p className='mb-4'>
							The materials on our website are provided on an &apos;as
							is&apos; basis. We make no warranties, expressed or
							implied, and hereby disclaim and negate all other
							warranties including without limitation, implied
							warranties or conditions of merchantability, fitness
							for a particular purpose, or non-infringement of
							intellectual property or other violation of rights.
						</p>
						<p className='mb-4'>
							Further, we do not warrant or make any
							representations concerning the accuracy, likely
							results, or reliability of the use of the materials
							on its website or otherwise relating to such
							materials or on any sites linked to this site.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							4. Limitations
						</h2>
						<p className='mb-4'>
							In no event shall our company or its suppliers be
							liable for any damages (including, without
							limitation, damages for loss of data or profit, or
							due to business interruption) arising out of the use
							or inability to use the materials on our website,
							even if we or our authorized representative has been
							notified orally or in writing of the possibility of
							such damage. Because some jurisdictions do not allow
							limitations on implied warranties, or limitations of
							liability for consequential or incidental damages,
							these limitations may not apply to you.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							5. Accuracy of Materials
						</h2>
						<p className='mb-4'>
							The materials appearing on our website could include
							technical, typographical, or photographic errors. We
							do not warrant that any of the materials on its
							website are accurate, complete, or current. We may
							make changes to the materials contained on its
							website at any time without notice. However, we do
							not make any commitment to update the materials.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							6. Links
						</h2>
						<p className='mb-4'>
							We have not reviewed all of the sites linked to our
							website and are not responsible for the contents of
							any such linked site. The inclusion of any link does
							not imply endorsement by us of the site. Use of any
							such linked website is at the user&apos;s own risk.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							7. Modifications
						</h2>
						<p className='mb-4'>
							We may revise these terms of service for its website
							at any time without notice. By using this website,
							you are agreeing to be bound by the then current
							version of these terms of service.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							8. Governing Law
						</h2>
						<p className='mb-4'>
							These terms and conditions are governed by and
							construed in accordance with the laws and you
							irrevocably submit to the exclusive jurisdiction of
							the courts in that state or location.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							9. Contact Information
						</h2>
						<p className='mb-4'>
							If you have any questions about these Terms of
							Service, please contact us at:
						</p>
						<p className='mb-4'>
							Email: support@example.com
							<br />
							Address: [Your Company Address]
						</p>
					</section>
				</div>

				<div className='mt-12 text-center'>
					<Link
						href='/'
						className='inline-flex items-center justify-center rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
					>
						← Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
