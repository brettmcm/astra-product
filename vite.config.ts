
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'figma:asset/fb9ab9b963e5ea92eb1c4f8366541f651884bca2.png': path.resolve(__dirname, './src/assets/fb9ab9b963e5ea92eb1c4f8366541f651884bca2.png'),
        'figma:asset/fb91c79af27651da63ebb20e319423c0fde4424f.png': path.resolve(__dirname, './src/assets/fb91c79af27651da63ebb20e319423c0fde4424f.png'),
        'figma:asset/e92a67f81fd098462003a57e57bc7449739a4a7a.png': path.resolve(__dirname, './src/assets/e92a67f81fd098462003a57e57bc7449739a4a7a.png'),
        'figma:asset/e8c32795199603f9ffca6119cc83ce30c50e81c4.png': path.resolve(__dirname, './src/assets/e8c32795199603f9ffca6119cc83ce30c50e81c4.png'),
        'figma:asset/ceeec632a3f898da3030e52e22576c9e330050db.png': path.resolve(__dirname, './src/assets/ceeec632a3f898da3030e52e22576c9e330050db.png'),
        'figma:asset/ce33435ef43713f439afe4faf8ebd8bd48a61796.png': path.resolve(__dirname, './src/assets/ce33435ef43713f439afe4faf8ebd8bd48a61796.png'),
        'figma:asset/bb88f7c96502714e4df8bbc670da9327254498ab.png': path.resolve(__dirname, './src/assets/bb88f7c96502714e4df8bbc670da9327254498ab.png'),
        'figma:asset/420618cdaf6644d4d83a7fce4658e3317e35a167.png': path.resolve(__dirname, './src/assets/420618cdaf6644d4d83a7fce4658e3317e35a167.png'),
        'figma:asset/3ef6c9f61fef479a72ed018844c1b071ee0c3b97.png': path.resolve(__dirname, './src/assets/3ef6c9f61fef479a72ed018844c1b071ee0c3b97.png'),
        'figma:asset/3a225f7473fade72e2c4a9f4b5389b4a6caa0437.png': path.resolve(__dirname, './src/assets/3a225f7473fade72e2c4a9f4b5389b4a6caa0437.png'),
        'figma:asset/3677c4be1b5e03738d7e85e3d47886dd7626e482.png': path.resolve(__dirname, './src/assets/3677c4be1b5e03738d7e85e3d47886dd7626e482.png'),
        'figma:asset/3401bd172bc8c85b9f9200d489a4a8f68b78651d.png': path.resolve(__dirname, './src/assets/3401bd172bc8c85b9f9200d489a4a8f68b78651d.png'),
        'figma:asset/339940db31a3da70f9b9c718a6fdc367bbf5236c.png': path.resolve(__dirname, './src/assets/339940db31a3da70f9b9c718a6fdc367bbf5236c.png'),
        'figma:asset/283e5632abd87b6122f52082ceed2d35fc6db77a.png': path.resolve(__dirname, './src/assets/283e5632abd87b6122f52082ceed2d35fc6db77a.png'),
        'figma:asset/19d555e5c2ae8d7eccf902200fd5ea94f3e7ae8f.png': path.resolve(__dirname, './src/assets/19d555e5c2ae8d7eccf902200fd5ea94f3e7ae8f.png'),
        'figma:asset/11dbcb982f9ba115c7d5cc790cc48a457815fb67.png': path.resolve(__dirname, './src/assets/11dbcb982f9ba115c7d5cc790cc48a457815fb67.png'),
        'figma:asset/005bd6e72905bb213a216db65e5b35edff9c160e.png': path.resolve(__dirname, './src/assets/005bd6e72905bb213a216db65e5b35edff9c160e.png'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });