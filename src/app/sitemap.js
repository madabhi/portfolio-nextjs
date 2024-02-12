export default function sitemap() {
  return [
    {
      url: "https://imabhinavsingh.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://imabhinavsingh.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://imabhinavsingh.vercel.app/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: "https://imabhinavsingh.vercel.app/projects-achievements",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
  ];
}
