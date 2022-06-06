import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // 把单文件组件中的样式，插入到html中的style标签
      css: true,
      // 把组件转换成 render 函数
      compileTemplate: true,
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/XDatetimePicker/index.ts'),
      name: 'XDatetimePicker',
      fileName: (format) => `x-datetime-picker.${format}.js`
    },
    rollupOptions: {
      // 确保外部处理那些你不想打包进库的依赖
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
