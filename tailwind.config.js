/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                   // Vite 的入口 HTML
    "./src/**/*.{js,ts,jsx,tsx}",     // 你所有 React 元件的位置
    'app/**/*.{ts,tsx}',
    'node_modules/@llamaindex/chat-ui/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

