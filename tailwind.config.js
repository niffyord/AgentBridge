/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ─── Colour system driven by CSS vars ─────────────── */
      colors: {
        surface:        'var(--bg-surface)',       // #151029
        'surface-2':    'var(--bg-surface-2)',     // #201842
        primary:        'var(--text-primary)',     // #D8DAFF
        muted:          'var(--text-muted)',       // #9CA0D9
        accent:         'var(--accent)',           // #A463FF
        'accent-light': 'var(--accent-light)',     // #C59CFF
        edge:           'var(--accent-edge)',      // #FF4FAD
      },

      /* hero background shortcut */
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(180deg,#18122B 0%,#241859 35%,#864CFF 65%,#151029 100%)',
      },

      /* soft glass shadow */
      boxShadow: {
        glass: '0 10px 40px -12px rgba(0,0,0,0.5)',
      },

      /* Typography */
      fontFamily: {
        heading: ['Space Grotesk', 'var(--font-primary)', 'sans-serif'],
        body:    ['Space Grotesk', 'var(--font-primary)', 'sans-serif'],
        code:    ['var(--font-geist-mono)', 'monospace'], // Geist Mono
      },
    },
  },
  plugins: [],
};
