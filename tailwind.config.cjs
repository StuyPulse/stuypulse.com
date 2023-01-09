/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/tw-elements/dist/js/**/*.js'],
	theme: {
		extend: {},
	},
	plugins: [
		require('tw-elements/dist/plugin')
	],
}
