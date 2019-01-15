import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<html>
				<Head>
					<link rel="icon" type="image/png" href="/static/favicons/favicon-32x32.png" sizes="32x32" />
					<link rel="icon" type="image/png" href="/static/favicons/favicon-16x16.png" sizes="16x16" />
					<link href="https://fonts.googleapis.com/css?family=Montserrat:300,600" rel="stylesheet" />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
