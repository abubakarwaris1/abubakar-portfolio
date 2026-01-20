import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.abubakarwaris.com' // Replace with your actual domain

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add more routes here as needed, e.g., projects
        // {
        //   url: `${baseUrl}/projects`,
        //   lastModified: new Date(),
        //   changeFrequency: 'weekly',
        //   priority: 0.8,
        // },
    ]
}
