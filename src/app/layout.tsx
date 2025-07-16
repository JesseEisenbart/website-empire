import type { Metadata } from 'next';
import { Instrument_Sans, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/next"

const instrumentSans = Instrument_Sans({
	variable: '--font-instrument-sans',
	subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
	variable: '--font-instrument-serif',
	subsets: ['latin'],
	weight: '400',
});

export const metadata: Metadata = {
	title: 'Empire: Self Mastery & Habits',
	description: 'Empire: Self Mastery & Habits',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Analytics />
			<body
				className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
