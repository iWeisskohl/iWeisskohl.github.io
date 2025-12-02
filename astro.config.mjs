// @ts-check

import mdx from '@astrojs/mdx';

// Math
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Extra Markdown features
import remarkGfm from "remark-gfm";

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

const mdPlugins = [
    remarkMath,
    remarkGfm];

// https://astro.build/config
export default defineConfig({
    site: 'https://linghuang.co.uk',
    integrations: [mdx({
        remarkPlugins: mdPlugins,
        rehypePlugins: [rehypeKatex],
    }), sitemap(), react()],
    markdown: {
        remarkPlugins: mdPlugins,
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