import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://imobiliariajardiminga.com.br",
      lastModified: new Date(),
    },
    {
      url: "https://imobiliariajardiminga.com.br/sobre",
      lastModified: new Date(),
    },
    {
      url: "https://imobiliariajardiminga.com.br/contato",
      lastModified: new Date(),
    },
    {
      url: "https://imobiliariajardiminga.com.br/bairros",
      lastModified: new Date(),
    },
  ];
}