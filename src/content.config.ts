import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recentNews = defineCollection({
	loader: glob({ base: './src/content/recent-news', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
		}),
})

const featuredResearch = defineCollection({
	loader: glob({ base: './src/content/featured-research', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image().optional(),
			pdfFile: z.string().optional(),
		}),
})

const researchOverview = defineCollection({
	loader: glob({ base: './src/content/research-overview', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			challenge: z.string(),
			approach: z.string(),
			keyFindings: z.string(),
			relatedPublication: z.string(),
			heroImage: image().optional(),
			pdfFile: z.string().optional(),
		}),
})

const researchStatement = defineCollection({
	loader: glob({ base: './src/content/research-statement', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image().optional(),
			pdfFile: z.string().optional(),
		}),
})

export const collections = { recentNews, featuredResearch, researchOverview, researchStatement };
