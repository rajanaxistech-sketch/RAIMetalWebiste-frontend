import { Link, Navigate, useParams } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import { getCategoryBySlug } from "../data/categories";

function CategoryPage() {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-[76px] md:pt-[114px]">
      
      {/* -------- CATEGORY HERO -------- */}
      <section className="page-section border-b border-gold/10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          
          {/* Left Content */}
          <div>
            <span className="section-tag">Category</span>

            <h1 className="section-title">
              {category.label}
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
              {category.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Request Supply
              </Link>

              {category.subcategories?.length > 0 && (
                <a href="#subcategory-grid" className="btn-outline">
                  View Sub Categories
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* -------- SUBCATEGORIES -------- */}
      {category.subcategories?.length > 0 && (
        <section id="subcategory-grid" className="page-section bg-dark-300">
          
          <div className="mx-auto mb-12 max-w-7xl">
            <span className="section-tag">Sub Categories</span>

            <h2 className="section-title">
              Explore <span className="text-gold">{category.label}</span>
            </h2>
          </div>

          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            
            {category.subcategories.map((item) => (
              <article
                key={item.slug}
                className="metal-panel overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
              >
                
                {/* ✅ FIXED HEIGHT WRAPPER */}
                <div className="h-56 w-full overflow-hidden">
                  <ImageCarousel
                    images={item.images || [item.image]}
                    fallbackImage={item.fallbackImage}
                    alt={item.name}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3 font-bebas text-3xl tracking-[0.08em] text-silver-light">
                    {item.name}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>

                  <Link
                    to={`/categories/${category.slug}/${item.slug}`}
                    className="btn-outline"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default CategoryPage;