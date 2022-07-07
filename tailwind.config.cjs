const typography = require('@tailwindcss/typography');
const scrollbar = require('tailwindcss-scrollbar');
const daisui = require('daisyui');
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	safelist: [
		'mr-1',
		'opacity-20',
		'hover:opacity-60',
		'text-base',
		'font-bold',
		'inline-block',
		'align-middle',
		'relative',
		'-mt-1',
		'animate-pulse-slow'
	],
	theme: {
		extend: {
			animation: {
				'pulse-slow': ' pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
			},
			fontFamily: {
				body: [
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
	daisyui: {
		logs: false,
		themes: [
			{
				aethor: {
					primary: '#06283D',
					'primary-content': '#ffff',
					secondary: '#1363DF',
					accent: '#47B5FF',
					neutral: '#191D24',
					'base-100': '#2A303C',
					'base-200': '#262b36',
					'base-300': '#272d38',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	},
	plugins: [typography, scrollbar, daisui]
};

module.exports = config;
