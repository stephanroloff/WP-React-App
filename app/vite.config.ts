// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/'
//   // base: '/wp-content/themes/wp-react-app/app/dist'
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // Obtén la variable de entorno
// const base = process.env.VITE_BASE_URL || '/'

// export default defineConfig({
//   plugins: [react()],
//   base: base
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    plugins: [react()],
    base: isProduction ? '/wp-content/themes/wp-react-app/app/dist' : '/'
  }
})


