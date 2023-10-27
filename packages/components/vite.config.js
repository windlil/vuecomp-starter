import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      external: ['vue', /\.less/,  /\.scss/],
      input: ['./src/index.ts'],
      output: [
        {
          exports: 'named',
          format: 'es',
          dir: '../../dist/es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          exports: 'named',
          format: 'cjs',
          dir: '../../dist/lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        }
      ]
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs']
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      outDir: '../../dist/es'
    })
  ]
})
