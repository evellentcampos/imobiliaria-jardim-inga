import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://imobiliariajardiminga.com.br";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/bairros`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/diferenciais`,
      lastModified: new Date(),
    },
  ];
}