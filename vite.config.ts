import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      $assets: resolve('./src/assets'),
      $components: resolve('./src/components'),
      $stores: resolve('./src/stores'),
      $views: resolve('./src/views'),
    },
  },
})
