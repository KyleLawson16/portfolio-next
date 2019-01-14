import Head from 'next/head';

const ROOT_URL = process.env.ROOT_URL;

const HeadCommon = ({ title, description }) => (
	<Head>
		{/* Global site tag (gtag.js) - Google Analytics */}
		{/* <script
			dangerouslySetInnerHTML={{
				__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','UA-114310231-1');`
			}}
		/> */}

		{/* Device Config */}
		<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
		<meta name="apple-mobile-web-app-capable" content="yes" />

		{/* Page Info */}
		<title>Kyle Lawson | {title}</title>
		<meta name="description" content={description} />
		<meta name="author" content="Kyle Lawson" />

		{/* Favicon */}
		<link rel="shortcut icon" href={`${ROOT_URL}static/favicon.png`} />

		{/* Manifest */}
		<link rel="manifest" href={`${ROOT_URL}static/manifest.json`} />

		{/* Social Sharing */}
		<meta property="og:image" content={`${ROOT_URL}static/social.png`} />
		<meta property="og:title" content={`LOU | ${title}`} />
		<meta property="og:description" content={description} />
		<meta name="twitter:title" content={`LOU | ${title}`} />

		{/* Twitter */}
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:site" content="@LOUassistant" />
		<meta name="twitter:creator" content="@KyleLaws0n" />

		{/* Preconnect */}
		<link rel="preconnect" href="https://images.ctfassets.net" />

		{/* Fonts */}
		<link href="https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:300,400,500" rel="stylesheet" />
	</Head>
);

export { HeadCommon };
