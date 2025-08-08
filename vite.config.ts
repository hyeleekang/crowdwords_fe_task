import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react(), svgr()],
    resolve: {
        alias: [
            {
                find: '@assets',
                replacement: path.resolve(__dirname, 'src/assets'),
            },
            {
                find: '@components',
                replacement: path.resolve(__dirname, 'src/components'),
            },
            {
                find: '@routes',
                replacement: path.resolve(__dirname, 'src/routes'),
            },
            {
                find: '@pages',
                replacement: path.resolve(__dirname, 'src/pages'),
            },
            {
                find: '@layouts',
                replacement: path.resolve(__dirname, 'src/layouts'),
            },
            {
                find: '@hooks',
                replacement: path.resolve(__dirname, 'src/hooks'),
            },
            {
                find: '@api',
                replacement: path.resolve(__dirname, 'src/api'),
            },
        ],
    },
    server: {
        port: 3000,
    },
    optimizeDeps: {
        include: ['react-pdf'],
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-pdf': ['react-pdf'],
                },
            },
        },
    },
    assetsInclude: ['**/*.worker.js'],
    define: {
        global: 'globalThis',
    },
    publicDir: 'public',
});
