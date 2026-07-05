/**** Tailwind Config — Last Light ****/
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        canvas: { DEFAULT: '#3A2A20', deep: '#2B1D14' },
        surface: { DEFAULT: '#463326', raised: '#54402F' },
        ink: { DEFAULT: '#F3E7D3', soft: '#C8B39B', muted: '#B69E83', inverse: '#2B1D14' },
        accent: { DEFAULT: '#8FB8DE', hover: '#A6C7E7' },
        sunset: { amber: '#E8A05C', rose: '#D98E8E', peach: '#F2C9A0', gold: '#F6D8B8' },
      },
      boxShadow: {
        soft: '0 2px 10px rgba(20,10,5,0.30), 0 10px 30px rgba(20,10,5,0.35)',
        lift: '0 4px 16px rgba(20,10,5,0.35), 0 20px 50px rgba(20,10,5,0.45)',
        glow: '0 0 80px rgba(232,160,92,0.25)',
      },
      borderRadius: { '4xl': '2rem' },
    },
  },
  plugins: [],
}
