// Tailwind build for index.html. Rebuild after changing classes:
//   npx tailwindcss@3.4.17 -i src/tailwind.css -o assets/site.css --minify
const v = name => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ['./index.html'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: { DEFAULT: v('brand'), dk: v('brand-dk'), lt: v('brand-lt') },
        page: v('page'), card: v('card'), line: v('line'),
        ink: v('ink'), body: v('body'), muted: v('muted'),
        charcoal: { DEFAULT: '#2D2D2D', dk: '#1F1F1F' },
        ember: '#F2463F',
      },
      keyframes: {
        dash: { to: { strokeDashoffset: '-24' } },
        spin360: { to: { transform: 'rotate(360deg)' } },
        glow: { '0%,100%': { opacity: '.55' }, '50%': { opacity: '1' } },
      },
      animation: {
        dash: 'dash 1.2s linear infinite',
        ring: 'spin360 18s linear infinite',
        glow: 'glow 6s ease-in-out infinite',
      },
    },
  },
};
