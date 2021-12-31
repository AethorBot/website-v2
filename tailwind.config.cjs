const typography = require('@tailwindcss/typography');
const scrollbar = require('tailwindcss-scrollbar');
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				body: [
					'Aldrich',
					'Roboto',
					'sans-serif',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji'
				]
			}
		}
	},

	plugins: [typography, scrollbar]
};

module.exports = config;
