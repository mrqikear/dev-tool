/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        apple: {
          blue: '#0071E3',
          blueHover: '#0077ED',
          green: '#28CD41',
          orange: '#FF9500',
          red: '#FF3B30',
          grayBg: '#F5F5F7',
          darkBg: '#000000',
          darkCard: '#1C1C1E',
          textDark: '#1D1D1F',
          textLight: '#F5F5F7',
          textMuted: '#86868B',
        },
      },
    },
  },
  plugins: [],
}
