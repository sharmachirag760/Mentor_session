import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        "screen-3xl": "1920px",
      },
      colors: {
        'vibrant-green': '#2CC84D',
        'orange-color': '#FFDD40',
        'gray-color': '#fef4d1',
        'button-color':'#fec200',
      },
    },
  },
  plugins: [
    tailwindcss(),
    react()],
})