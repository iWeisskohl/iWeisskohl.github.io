// @ts-check

import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://linghuang.co.uk',
    integrations: [mdx({
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    }), sitemap(), react()],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
    vite: {
        server: {
            allowedHosts: ["7f7861e44bb6.ngrok-free.app"],
        },
        preview: {
            allowedHosts: ["7f7861e44bb6.ngrok-free.app"],
        }
    }
});