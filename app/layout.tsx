import "./globals.css"

export const metadata = {
	title: "Messenger by Hossein",
	description: "Experience realtime chat with this web application",
	keywords:
		"chat, messenger, web, app, realtime, hossein, next, js, development",
	author: "Hossein Mirzapur",
	type: "website",
	robots: "index, follow",
	googlebot: "index, follow",
	googlebotIndex: "follow",
	googlebotFollow: "index",
	googlebotSnippet: "Index, follow",
	googlebotDisplay: "index, follow",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
