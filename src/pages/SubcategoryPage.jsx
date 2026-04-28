import { Link, Navigate, useParams } from "react-router-dom";
import { getSubcategoryBySlug } from "../data/categories";
import ImageCarousel from "../components/ImageCarousel";
import Seo from "../components/Seo";

function SubcategoryPage() {
  const { categorySlug, subcategorySlug } = useParams();
  const result = getSubcategoryBySlug(categorySlug, subcategorySlug);

  if (!result) {
    return <Navigate to="/" replace />;
  }

  const { category, subcategory } = result;

  return (
    <div className="pt-[76px] md:pt-[114px]">
      <Seo
        title={`${subcategory.name} | ${category.label} | Rai Metals`}
        description={subcategory.description}
        keywords={`${subcategory.name}, ${category.label}, Rai Metals, scrap metal trading`}
        canonicalPath={`/categories/${category.slug}/${subcategory.slug}`}
        image={subcategory.fallbackImage?.startsWith("/") ? subcategory.fallbackImage : `/${subcategory.fallbackImage}`}
      />

      {/* -------- HERO SECTION -------- */}
      <section className="page-section border-b border-gold/10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="section-tag">{category.label}</span>

            <h1 className="section-title">
              {subcategory.name}
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-400">
              {subcategory.description}
            </p>

            {/* DETAILS */}
            <div className="grid max-w-2xl gap-3">
              {subcategory.details.map((detail) => (
                <div key={detail} className="metal-card">
                  <p className="text-sm leading-relaxed text-gray-300">
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={`/categories/${category.slug}`}
                className="btn-outline"
              >
                Back to {category.label}
              </Link>

              <Link to="/contact" className="btn-primary">
                Enquire Now
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE CAROUSEL (FIXED SIZE) */}
          <div className="h-[320px] md:h-[500px] overflow-hidden">
            <ImageCarousel
              images={subcategory.images || [subcategory.image]}
              fallbackImage={subcategory.fallbackImage}
              alt={subcategory.name}
            />
          </div>
        </div>
      </section>

      {/* -------- INFO SECTION -------- */}
      {/* <section className="page-section bg-dark-300">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          IMAGE INFO
          <div className="metal-panel p-8">
            <span className="section-tag">Image Source</span>

            <h2 className="mb-3 font-bebas text-3xl tracking-[0.1em] text-silver-light">
              Upload Folder Ready
            </h2>

            <p className="text-sm leading-relaxed text-gray-400">
              This page first looks for the image in the public uploads folder,
              so when you add the real file there, it will appear automatically.
            </p>

            <p className="mt-4 font-rajdhani text-xs uppercase tracking-[0.22em] text-gold">
              Expected file: {subcategory.image}
            </p>
          </div>

          NOTES
          <div className="metal-panel p-8">
            <span className="section-tag">Commercial Notes</span>

            <h2 className="mb-4 font-bebas text-3xl tracking-[0.1em] text-silver-light">
              Ready for Category-Specific Content
            </h2>

            <p className="text-sm leading-relaxed text-gray-400">
              You can replace the current text with exact specifications,
              chemical composition, dimensions, loading terms, or inspection
              notes for this sub category.
            </p>
          </div>
        </div>
      </section> */}

    </div>
  );
}

export default SubcategoryPage;
