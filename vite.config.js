import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

//import babel interpreters
import { babel } from '@rollup/plugin-babel';

//Path to make Relative alias
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            template: {
                transformAssetUrls: {
                    includeAbsolute: true
                }
            }
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [['babel-plugin-styled-components', { displayName: true }]]
        })
    ],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/Components'),
            '@containers': path.resolve(__dirname, './src/Containers'),
            '@styles': path.resolve(__dirname, './src/Styles'),
            '@templates': path.resolve(__dirname, './src/Templates'),
            '@utils': path.resolve(__dirname, './src/Utils'),
            '@context': path.resolve(__dirname, './src/Context'),
            '@pages': path.resolve(__dirname, './src/Pages')
            
        }
    }
});
