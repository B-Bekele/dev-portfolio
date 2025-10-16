/**** Tailwind Config ****/
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { grotesk: ['"Space Grotesk"', 'system-ui', 'sans-serif'] },
      colors: { neon: '#00E5FF' },
      boxShadow: {
        glow: '0 0 40px rgba(0,229,255,0.35)',
        glowSoft: '0 0 60px rgba(0,229,255,0.25)'
      },
    },
  },
  plugins: [],
}
