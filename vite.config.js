import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/ 第二版>deploy github >> AI也可以用
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/bizlution_ai_react_web2/' : '/',
  plugins: [react()],
}))


// https://vite.dev/config/最原始
// export default defineConfig({
//   plugins: [react()],
// })

// https://vitejs.dev/config/ 第三版>>測試 類似proxy
// export default defineConfig(({ mode }) => ({
//   base: mode === 'production' ? '/bizlution_ai_react_web2/' : '/',
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://127.0.0.1:80', // 🔥 你的後端server位址
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '/chatbotrouter'), // 🔥 重新寫路徑
//       },
//     },
//   },
// }))