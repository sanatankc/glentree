/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'md': '1000px',
			},
			colors: {
				accent:'#C07C47',
				'accent-bold':'#FF9D51',
				accent2:'#4A7C60', 
				green: {
					300: '#65B086',
					400: '#4A7C60',
					500: '#3C674F',
					600: '#0A5E2F'
				},
				gray: {
					200: '#FAFAFA',
					300: '#E2E2E2',
					500: '#D9DBE9',
					600: '#A4A4A4'
				},
				red: {
					500: '#A9342D',
				},
			}
		},
		fontFamily: {
			'display': ['"MADE Gentle"', 'sans-serif'],
			'sans': ['"Nunito Sans"', 'sans-serif'],
		}
	},
	plugins: [],
}
