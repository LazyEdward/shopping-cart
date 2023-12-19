// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tsconfigPaths from 'vite-tsconfig-paths'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/shopping-cart/",
//   server: {
//     port: 3333,
//   },
//   plugins: [react(), tsconfigPaths()],
// })

import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'

const viteConfig = defineViteConfig({
  base: "/shopping-cart/",
  server: {
    port: 3333,
  },
  plugins: [react({fastRefresh: false}), tsconfigPaths()],
});

const vitestConfig = defineVitestConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		css: true,
		setupFiles: './src/test/setup.ts',
	},
});

export default mergeConfig(viteConfig, vitestConfig);