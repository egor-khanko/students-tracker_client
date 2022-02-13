import { defineConfig } from 'vite'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import * as path from 'path'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: "antd",
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          }
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  }
})
