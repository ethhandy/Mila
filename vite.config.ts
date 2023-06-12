import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/

export default defineConfig({
  root: 'src',
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, './src/assets'),
      Components: path.resolve(__dirname, './src/components'),
      Elements: path.resolve(__dirname, './src/elements'),
      Hocs: path.resolve(__dirname, './src/hocs'),
      Pages: path.resolve(__dirname, './src/pages'),
      Routes: path.resolve(__dirname, './src/routes'),
      Services: path.resolve(__dirname, './src/services'),
      State: path.resolve(__dirname, './src/state'),
      Utils: path.resolve(__dirname, './src/utils')
    }
  }
});
