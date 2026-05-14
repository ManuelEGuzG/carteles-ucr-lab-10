import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: '/carteles-ucr-lab-10/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
})
