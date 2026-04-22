export const categories = [
  {
    slug: "ferrous-metal",
    label: "Ferrous Metal",
    description:
      "Heavy-duty ferrous scrap grades prepared for mills, foundries, and industrial recycling programs.",
    image: "/uploads/HMS/HMS1.png",
    fallbackImage: "/uploads/HMS/HMS1.png",
    subcategories: [
      {
        slug: "hms-12",
        name: "HMS-12",
        description: "About Heavy Metal Scrap",
        images: [
          "/uploads/HMS/HMS1.png",
          "/uploads/HMS/HMS2.png",
          "/uploads/HMS/HMS3.jpg",
        ],
        fallbackImage: "/uploads/fm1.jpg",
        details: [
          "We supply quality Heavy Melting Scraps that is widely obtained from demolition of industries and factories. Commonly known as heavy metal/melting scrap, this scrap is black in color and is rust-free. Our range is widely acclaimed for 1% non-metal impurities and contains mixture of:", "The scrap is ideal for steel mills and recycling plants looking to produce high- grade steel products.We ensure minimal contamination, consistent sizing, and reliable weight to maximize processing efficiency and output quality",
          "• Industrial scrap (nuts, bolts, miscellaneous items, fittings, plate pieces, parts)",
          "• Construction scrap (plate bars, angle pieces, rods, steel pipes)",
          "• Mill scraps (Stampings, Cuttings and Bars)"
        ],
      },
      {
        slug: "cast-iron-scrap",
        name: "Cast Iron Scrap",
        description: "About Cast Iron Scrap",
        images: [
          "/uploads/CastIron/CastIron1.jpg",
          "/uploads/CastIron/CastIron2.jpg",
          "/uploads/CastIron/CastIron3.jpg",
        ],
        fallbackImage: "/uploads/fm2.jpg",
        details: [
          "We are leading importers of quality Cast Iron Scraps that finds wide application in several industries. It is a ferrous alloy with high grade of carbon that consist of gray iron, ductile iron, and white cast iron grades. Our streamlined operations enable us in offering our products at most reasonable prices.",
          "Our Cast Iron Scrap is sourced from trusted vendors and undergoes rigorous quality checks to ensure superior durability and performance. Known for its excellent machinability, strength, and wear resistance, it is ideal for use in manufacturing automotive components, pipes, machinery parts, and heavy equipment. By offering consistent quality and competitive pricing, we have built long-term relationships with clients across various sectors.",
        ],
      },
      {
        slug: "shredded-steel-scrap",
        name: "Shredded Steel Scrap",
        description: "Uniform shredded steel...",
        images: [
          "/uploads/SteelScrap/SteelScrap1.jpg",
          "/uploads/SteelScrap/SteelScrap2.jpg",
          "/uploads/SteelScrap/SteelScrap3.jpg",
        ],
        fallbackImage: "/uploads/fm3.jpg",
        details: [
          "We are leading importers of high-quality shredded steel scrap, widely used in various industries for recycling and manufacturing. Our products are sourced and processed to meet stringent quality standards, ensuring excellent performance and value", "Our commitment to quality and customer satisfaction sets us apart in the industry. We ensure that every batch of shredded steel scrap is carefully inspected, processed, and delivered to meet international standards. By partnering with us, you gain access to reliable supply chains, competitive pricing, and exceptional service. Our scrap materials contribute to sustainable practices, helping businesses lower production costs while promoting environmental responsibility.",
        ],
      },
    ],
  },
  {
    slug: "non-ferrous-metal",
    label: "Non Ferrous Metal",
    description:
      "Sorted non-ferrous grades covering reusable sections, scrap lots, and mill-ready commercial material.",
    image: "/uploads/pipes/pipes1.jpg",
    fallbackImage:
      "/uploads/pipes/pipes1.jpg",
    subcategories: [
      {
        slug: "pipes",
        name: "Pipes",
        description:
          "About Non-Ferrous Metal Pipes",
        images: [
          "/uploads/pipes/pipes1.jpg",
          "/uploads/pipes/pipes2.jpg",
          "/uploads/pipes/pipes3.jpg",
        ],
        fallbackImage:
          "https://images.unsplash.com/photo-1581092918484-8313b4e1e6d2?auto=format&fit=crop&w=800&q=80",
        details: [
          "We supply a premium range of non-ferrous metal pipes designed for a variety of industrial and commercial applications. Made from metals that do not contain significant amounts of iron, these pipes offer exceptional resistance to corrosion, lightweight properties, and excellent thermal and electrical conductivity.",
          "• Copper Pipes – Excellent for plumbing, heating, and cooling systems due to high corrosion resistance.",
          "• Aluminum Pipes – Lightweight and strong, perfect for structural and aerospace applications.",
          "• Brass Pipes – Known for durability and used extensively in fittings, valves, and decorative applications."
        ],
      },
      {
        slug: "re-bars",
        name: "Re-bars",
        description:
          "About Non-Ferrous Metal Re-bars",
        images: [
          "/uploads/re-bars/re-bars1.jpg",
          "/uploads/re-bars/re-bars2.jpg",
          "/uploads/re-bars/re-bars3.jpg",
        ],
        fallbackImage:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
        details: [
          "We provide high-quality non-ferrous metal re-bars, engineered to meet the demanding requirements of modern construction and industrial projects. Unlike traditional steel re-bars, non-ferrous re-bars offer superior resistance to corrosion, lighter weight, and excellent durability, making them ideal for environments exposed to moisture, chemicals, or extreme temperatures.",
          "• Aluminum Re-bars – Lightweight and corrosion-resistant, ideal for specialized construction and infrastructure projects.",
          "• Copper Re-bars – Excellent for use in high-conductivity and anti-corrosion applications.",
          "• Brass Re-bars – Durable and aesthetically pleasing, suitable for architectural and decorative use."
        ],
      },
      {
        slug: "plates",
        name: "Plates",
        description:
          "Cut and full-size non-ferrous plates for recycling and resale channels.",
        images: [
          "/uploads/plates/plates1.jpg",
          "/uploads/plates/plates2.jpg",
          "/uploads/plates/plates3.jpg",
        ],
        fallbackImage:
          "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80",
        details: [
          "Available in mixed or single-grade plate lots.",
          "Suitable for downstream cutting, resale, or remelting demand.",
          "Handled with practical commercial sizing and dispatch support.",
        ],
      },
    ],
  },
];

export const getCategoryBySlug = (slug) =>
  categories.find((category) => category.slug === slug);

export const getSubcategoryBySlug = (categorySlug, subcategorySlug) => {
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return null;
  }

  const subcategory = category.subcategories.find(
    (item) => item.slug === subcategorySlug,
  );

  return subcategory ? { category, subcategory } : null;
};
