import defaultTheme from 'tailwindcss/defaultTheme'

const iconsColors = {
	"github": "#d1d7e0",
	"linkedin": "#0e76a8",
	"bluesky": "#1185fe",
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Lato"', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				github: iconsColors.github,
				linkedin: iconsColors.linkedin,
				bluesky: iconsColors.bluesky,
			}
		}
	},
	safelist: [
		{
			pattern: /(stroke|fill|text)-(github|linkedin|bluesky)/,
			variants: ['hover', 'focus'],
		},
	],

	plugins: [
		require('@tailwindcss/typography'),
	],

}
