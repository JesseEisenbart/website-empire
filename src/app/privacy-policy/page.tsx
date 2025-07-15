import type { Metadata } from 'next';
import Link from 'next/link';
import BackgroundContainer from '../../components/BackgroundContainer';

export const metadata: Metadata = {
	title: 'Privacy Policy',
	description: 'Privacy Policy for our website',
};

export default function PrivacyPolicy() {
	return (
		<div className='min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-instrument-sans)]'>
			<BackgroundContainer />
			<div className='max-w-4xl mx-auto'>
				<h1 className='text-4xl font-bold mb-8 text-center font-[family-name:var(--font-instrument-serif)]'>
					Privacy Policy
				</h1>

				<div className='prose prose-lg max-w-none'>
					<p className='text-gray-600 dark:text-gray-400 mb-8 text-center'>
						Last updated: {new Date().toLocaleDateString()}
					</p>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							1. Information We Collect
						</h2>
						<p className='mb-4'>
							We collect information you provide directly to us,
							such as when you create an account, subscribe to our
							newsletter, or contact us for support.
						</p>
						<h3 className='text-xl font-medium mb-2 font-[family-name:var(--font-instrument-serif)]'>
							Personal Information
						</h3>
						<ul className='list-disc pl-6 mb-4'>
							<li>
								Name and contact information (email address,
								phone number)
							</li>
							<li>Account credentials (username, password)</li>
							<li>Profile information and preferences</li>
							<li>Communications with us</li>
						</ul>
						<h3 className='text-xl font-medium mb-2 font-[family-name:var(--font-instrument-serif)]'>
							Automatically Collected Information
						</h3>
						<ul className='list-disc pl-6 mb-4'>
							<li>
								Device information (IP address, browser type,
								operating system)
							</li>
							<li>
								Usage data (pages visited, time spent, clicks)
							</li>
							<li>Cookies and similar tracking technologies</li>
						</ul>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							2. How We Use Your Information
						</h2>
						<p className='mb-4'>
							We use the information we collect to:
						</p>
						<ul className='list-disc pl-6 mb-4'>
							<li>Provide, maintain, and improve our services</li>
							<li>
								Process transactions and send related
								information
							</li>
							<li>
								Send you technical notices, updates, and support
								messages
							</li>
							<li>
								Respond to your comments, questions, and
								customer service requests
							</li>
							<li>
								Communicate with you about products, services,
								and events
							</li>
							<li>
								Monitor and analyze trends, usage, and
								activities
							</li>
							<li>
								Detect, investigate, and prevent fraudulent
								transactions
							</li>
							<li>Comply with legal obligations</li>
						</ul>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							3. Information Sharing and Disclosure
						</h2>
						<p className='mb-4'>
							We may share your information in the following
							situations:
						</p>
						<ul className='list-disc pl-6 mb-4'>
							<li>
								<strong>With your consent:</strong> We may share
								your information when you give us explicit
								consent
							</li>
							<li>
								<strong>Service providers:</strong> We may share
								information with third-party service providers
								who perform services on our behalf
							</li>
							<li>
								<strong>Legal requirements:</strong> We may
								disclose information if required by law or in
								response to valid requests by public authorities
							</li>
							<li>
								<strong>Business transfers:</strong> Information
								may be transferred in connection with a merger,
								acquisition, or sale of assets
							</li>
							<li>
								<strong>Protection of rights:</strong> We may
								disclose information to protect our rights,
								property, or safety
							</li>
						</ul>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							4. Data Security
						</h2>
						<p className='mb-4'>
							We take reasonable measures to help protect your
							personal information from loss, theft, misuse, and
							unauthorized access, disclosure, alteration, and
							destruction. However, no electronic transmission
							over the Internet or information storage technology
							can be guaranteed to be 100% secure.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							5. Cookies and Tracking Technologies
						</h2>
						<p className='mb-4'>
							We use cookies and similar tracking technologies to
							collect and track information and to improve our
							services. You can instruct your browser to refuse
							all cookies or to indicate when a cookie is being
							sent.
						</p>
						<h3 className='text-xl font-medium mb-2 font-[family-name:var(--font-instrument-serif)]'>
							Types of Cookies We Use:
						</h3>
						<ul className='list-disc pl-6 mb-4'>
							<li>
								<strong>Essential cookies:</strong> Required for
								the website to function properly
							</li>
							<li>
								<strong>Analytics cookies:</strong> Help us
								understand how visitors interact with our
								website
							</li>
							<li>
								<strong>Functional cookies:</strong> Enable
								enhanced functionality and personalization
							</li>
							<li>
								<strong>Advertising cookies:</strong> Used to
								deliver relevant advertisements
							</li>
						</ul>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							6. Data Retention
						</h2>
						<p className='mb-4'>
							We retain your personal information for as long as
							necessary to fulfill the purposes outlined in this
							privacy policy, unless a longer retention period is
							required or permitted by law.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							7. Your Rights and Choices
						</h2>
						<p className='mb-4'>
							Depending on your location, you may have certain
							rights regarding your personal information:
						</p>
						<ul className='list-disc pl-6 mb-4'>
							<li>
								<strong>Access:</strong> Request access to your
								personal information
							</li>
							<li>
								<strong>Correction:</strong> Request correction
								of inaccurate information
							</li>
							<li>
								<strong>Deletion:</strong> Request deletion of
								your personal information
							</li>
							<li>
								<strong>Portability:</strong> Request a copy of
								your information in a structured format
							</li>
							<li>
								<strong>Opt-out:</strong> Opt out of certain
								communications and data processing
							</li>
						</ul>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							8. Third-Party Services
						</h2>
						<p className='mb-4'>
							Our website may contain links to third-party
							websites or services. We are not responsible for the
							privacy practices of these third parties. We
							encourage you to read their privacy policies before
							providing any information.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							9. Children&apos;s Privacy
						</h2>
						<p className='mb-4'>
							Our services are not intended for children under the
							age of 13. We do not knowingly collect personal
							information from children under 13. If we become
							aware that we have collected personal information
							from a child under 13, we will take steps to delete
							such information.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							10. International Data Transfers
						</h2>
						<p className='mb-4'>
							Your information may be transferred to and processed
							in countries other than your own. We will take
							appropriate measures to ensure that your personal
							information receives an adequate level of
							protection.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							11. Changes to This Privacy Policy
						</h2>
						<p className='mb-4'>
							We may update this privacy policy from time to time.
							We will notify you of any changes by posting the new
							privacy policy on this page and updating the &ldquo;Last
							updated&rdquo; date.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							12. Contact Us
						</h2>
						<p className='mb-4'>
							If you have any questions about this privacy policy,
							please contact us at:
						</p>
						<p className='mb-4'>
							Email: privacy@example.com
							<br />
							Address: [Your Company Address]
							<br />
							Phone: [Your Phone Number]
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
