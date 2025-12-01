// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://linghuang.co.uk',
    integrations: [mdx(), sitemap(), react()],
    vite: {
        server: {
            allowedHosts: ["7f7861e44bb6.ngrok-free.app"],
        },
        preview: {
            allowedHosts: ["7f7861e44bb6.ngrok-free.app"],
        }
    }
});