/** @type {import('tailwindcss').Config} */

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
			fade: 'fade .5s ease-in-out',
			sceleIn: 'scaleIn .35s ease-in-out',
		},
	},
	plugins: [],
}
