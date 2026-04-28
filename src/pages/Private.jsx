import Seo from "../components/Seo";

function Private() {
  return (
    <div className="pt-[76px] min-h-screen bg-[#0b0b0b] text-white md:pt-[114px]">
      <Seo
        title="Private Area | Rai Metals"
        description="Restricted Rai Metals page for authenticated or internal users."
        keywords="private page, restricted access, Rai Metals internal"
        robots="noindex, nofollow"
        canonicalPath="/private"
        image="/uploads/Logo1.jpeg"
        ogType="website"
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gray-400">
          Restricted
        </p>
        <h1 className="mb-6 text-4xl font-extrabold">
          Private <span className="text-[#c9a34e]">Dashboard</span>
        </h1>
        <p className="max-w-3xl text-gray-300">
          This page intentionally uses <code>noindex, nofollow</code> so search
          engines do not index or follow links from this route.
        </p>
      </section>
    </div>
  );
}

export default Private;
