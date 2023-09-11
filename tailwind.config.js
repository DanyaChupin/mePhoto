/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		colors: {
			black: {
				500: '#050519',
				400: '#2A2A36',
			},
			white: {
				500: '#F4F6FB',
				400: '#ffffff',
			},
		},
		extend: {
			fontSize: {
				DEFAULT: '14px',
			},
			fontWeight: {
				DEFAULT: '400',
				bold: '600',
				light: '200',
			},
			border: {
				DEFAULT: '#707070',
			},
			borderRadius: {
				image: '0.5rem',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
		},
		keyframes: {
			close: {
				'0%': {
					opacity: 1,
				},
				'99%': {
					opacity: 0,
					height: '200',
					width: '200',
				},
				'100%': {
					opacity: 0,
					height: 0,
					width: 0,
				},
			},
			fade: {
				from: { opacity: 0 },
				to: { opacity: 1 },
			},
			scaleIn: {
				'0%': {
					opacity: 0,
					transform: 'scale(0.9)',
				},
				'50%': {
					opacity: 0.3,
				},
				'100%': {
					opacity: 1,
					transform: 'scale(1)',
				},
			},
		},
		animation: {
			fade: 'fade 1.5s ease-in-out',
			sceleIn: 'scaleIn .35s ease-in-out',
		},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.shadow-main': {
					boxShadow: 'rgba(0, 0, 0, 0.1) 10px 10px 300px)',
				},
				'.outline-border-none': {
					outline: 'none',
					border: 'none',
				},
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				},
				'.image-like-bg': {
					objectPosition: 'center',
					objectFit: 'cover',
					pointerEvents: 'none',
				},
			})
		}),
	],
}
