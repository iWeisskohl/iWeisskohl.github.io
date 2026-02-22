import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

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
		}),
})

const researchStatement = defineCollection({
	loader: glob({ base: './src/content/research-statement', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image().optional(),
		}),
})

export const collections = { blog, recentNews, featuredResearch, researchOverview, researchStatement };
