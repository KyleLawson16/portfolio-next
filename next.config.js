const { PHASE_PRODUCTION_SERVER } = process.env.NODE_ENV === 'development' ? {} : require('next-server/constants');

module.exports = (phase, { defaultConfig }) => {
	if (phase === PHASE_PRODUCTION_SERVER) {
		return {
			/* production only config */
		};
	}
	require('dotenv').config();
	const withSass = require('@zeit/next-sass');
	const webpack = require('webpack');
	return withSass({
		webpack: (config) => {
			config.plugins.push(new webpack.EnvironmentPlugin(process.env));
			return config;
		}
	});
};
