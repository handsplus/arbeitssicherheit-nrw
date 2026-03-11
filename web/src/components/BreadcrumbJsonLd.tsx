import { SITE } from "@/lib/constants";

type BreadcrumbItem = { name: string; url?: string };

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const baseUrl = SITE.url;
  const itemListElement = items.map((item, i) => {
    const listItem: { "@type": string; position: number; name: string; item?: { "@type": string; "@id": string } } = {
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
    };
    if (item.url) {
      listItem.item = { "@type": "WebPage", "@id": `${baseUrl}${item.url}` };
    }
    return listItem;
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
