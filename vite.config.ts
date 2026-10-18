import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

import type { Plugin } from 'vite';

const dynamicOgPlugin: Plugin = {
  name: 'dynamic-og-plugin',
  transformIndexHtml(html) {
    const envOrigin = process.env.VITE_APP_URL || process.env.APP_URL;
    if (envOrigin) {
      return html.replace(
        /https:\/\/ais-pre-yt7v5zxzqaoaotxzm4wlhz-402703371058\.asia-southeast1\.run\.app/g,
        envOrigin.replace(/\/$/, '')
      );
    }
    return html;
  },
};

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), dynamicOgPlugin],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
