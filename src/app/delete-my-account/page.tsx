import type { Metadata } from 'next';
import BackgroundContainer from '../../components/BackgroundContainer';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Delete My Account',
	description: 'How to delete your Empire account',
};

export default function DeleteMyAccount() {
	return (
		<div className='min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-instrument-sans)]'>
			<BackgroundContainer />

			<div className='max-w-4xl mx-auto z-20'>
				<h1 className='text-4xl font-normal uppercase mb-8 text-center font-[family-name:var(--font-instrument-serif)]'>
					Delete My Account
				</h1>

				<div className='prose prose-lg max-w-none'>
					<p className='text-white dark:white mb-8 text-center'>
						Last updated: {new Date().toLocaleDateString()}
					</p>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							Account Deletion Process
						</h2>
						<p className='mb-4'>
							We understand that you may want to delete your
							Empire account. Please follow the steps below to
							permanently delete your account and all associated
							data.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							Before You Delete Your Account
						</h2>
						<p className='mb-4'>
							Please note that deleting your account is permanent
							and cannot be undone. Once deleted, you will lose:
						</p>
						<ul className='list-disc pl-6 mb-4'>
							<li>All your habit tracking data and progress</li>
							<li>Your goals and milestones</li>
							<li>All insights and analytics</li>
							<li>Your account settings and preferences</li>
						</ul>
						<p className='mb-4'>
							If you&apos;re experiencing issues with the app,
							please consider contacting our support team first.
							We may be able to help resolve your concerns without
							needing to delete your account.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							Steps to Delete Your Account
						</h2>
						<p className='mb-4'>
							To delete your Empire account, please follow these
							steps:
						</p>
						<ol className='list-decimal pl-6 mb-4 space-y-3'>
							<li>
								<strong>Open the Empire app</strong> on your
								device
							</li>
							<li>
								<strong>Go to Settings:</strong> Tap on your
								profile icon in the top right corner, then
								select &ldquo;Settings&rdquo;
							</li>
							<li>
								<strong>Find Account Settings:</strong> Scroll
								down to the &ldquo;Account&rdquo; section
							</li>
							<li>
								<strong>Select Delete Account:</strong> Tap on
								&ldquo;Delete My Account&rdquo; at the bottom of
								the Account section
							</li>
							<li>
								<strong>Confirm Deletion:</strong> You&apos;ll
								be asked to confirm your decision. Type
								&ldquo;DELETE&rdquo; in the confirmation field
							</li>
							<li>
								<strong>Final Confirmation:</strong> Tap the red
								&ldquo;Delete Account Permanently&rdquo; button
							</li>
						</ol>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							Alternative: Contact Support
						</h2>
						<p className='mb-4'>
							If you&apos;re unable to delete your account through
							the app, or if you&apos;re experiencing technical
							difficulties, you can contact our support team
							directly:
						</p>
						<ul className='list-disc pl-6 mb-4'>
							<li>
								<strong>Email:</strong> Send a request to
								support@empire-app.com with the subject line
								&ldquo;Account Deletion Request&rdquo;
							</li>
							<li>
								<strong>Include:</strong> Your registered email
								address and reason for deletion (optional)
							</li>
							<li>
								<strong>Response Time:</strong> We&apos;ll
								process your request within 48 hours
							</li>
						</ul>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							What Happens After Deletion
						</h2>
						<p className='mb-4'>Once your account is deleted:</p>
						<ul className='list-disc pl-6 mb-4'>
							<li>
								All your personal data will be permanently
								removed from our servers
							</li>
							<li>Your data cannot be recovered</li>
						</ul>
						<p className='mb-4'>
							Please note that some anonymized usage data may be
							retained for analytics purposes, but this data
							cannot be linked back to you personally.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-2xl font-medium mb-4 font-[family-name:var(--font-instrument-serif)]'>
							Need Help?
						</h2>
						<p className='mb-4'>
							If you have any questions about the account deletion
							process, please don&apos;t hesitate to contact us:
						</p>
						<p className='mb-4'>
							Email: help@getempireapp.com
							<br />
							Subject: Account Deletion Help
						</p>
						<p className='mb-4'>
							We&apos;re here to help and want to ensure you have
							the best possible experience with Empire.
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
