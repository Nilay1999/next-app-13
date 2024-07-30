import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Reddit Clone',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={inter.className}
				style={{ backgroundColor: 'rgb(14, 17, 19)', color: 'white' }}>
				{children}
			</body>
		</html>
	);
}
