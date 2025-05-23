import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
	base: '/site-portfolio/',
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				additionalData: `
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_mixins.scss";
        `,
			},
		},
	},
	server: {
		host: '0.0.0.0',
		port: 5173,
	},
});
