import Head from 'next/head';

const ROOT_URL = process.env.ROOT_URL;

const HeadCommon = ({ title, description }) => (
	<Head>
		{/* Device Config */}
		<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
		<meta name="apple-mobile-web-app-capable" content="yes" />

		{/* Page Info */}
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta name="author" content="Kyle Lawson" />

		{/* Manifest */}
		<link rel="manifest" href="/static/manifest.json" />

		{/* Social Sharing */}
		<meta property="og:image" content="/static/social.png" />
		<meta property="og:title" content={`${title}`} />
		<meta property="og:description" content={description} />
		<meta name="twitter:title" content={`${title}`} />

		{/* Twitter */}
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:site" content="@LOUassistant" />
		<meta name="twitter:creator" content="@KyleLaws0n" />

		{/* Preconnect */}
		<link rel="preconnect" href="https://images.ctfassets.net" />
	</Head>
);

export { HeadCommon };
