import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const path = require('path')
function _resolve(dir) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: _resolve('packages/index.js'),
      name: 'x-datetimepicker-vue3'
    },
    terserOptions: {
      compress: {
        keep_infinity: true,
        // 删除console
        drop_console: true
      }
    },
    // 禁用该功能可能会提高大型项目的构建性能
    brotliSize: false,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
