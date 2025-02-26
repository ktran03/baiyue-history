import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Hero Section */}
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-900">Bai Yue History</h1>
        <p className="text-lg text-gray-600 mt-2">
          Uncovering the lost legacy of the Bai Yue people and their influence on Asia.
        </p>
      </header>

      {/* Featured Article Section */}
      <section className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">📌 Featured Article</h2>
        <Link href="/articles/who-were-bai-yue">
          <div className="cursor-pointer hover:bg-gray-200 p-4 rounded-lg transition duration-300">
            <img
              src="/images/bai-yue-banner.jpg"
              alt="Bai Yue Influence"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Who Were the Bai Yue?</h3>
            <p className="text-gray-500 mt-1">
              Separating fact from Chinese historical revisionism.
            </p>
          </div>
        </Link>
      </section>

      {/* Latest Articles Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">📖 Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/articles/bai-yue-resistance">
            <div className="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300">
              <h3 className="text-xl font-semibold">The Bai Yue Resistance</h3>
              <p className="text-gray-500">How they fought Han Chinese expansion for centuries.</p>
            </div>
          </Link>
          <Link href="/articles/bai-yue-tea">
            <div className="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300">
              <h3 className="text-xl font-semibold">Tea Culture Did Not Start in Han China</h3>
              <p className="text-gray-500">Discover the Bai Yue origins of tea and how it spread to China.</p>
            </div>
          </Link>
          <Link href="/articles/who-were-bai-yue">
            <div className="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300">
              <h3 className="text-xl font-semibold">Who Were the Bai Yue?</h3>
              <p className="text-gray-500">Separating fact from Chinese historical revisionism.</p>
            </div>
          </Link>
          <Link href="/articles/bai-rice-origins">
            <div className="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300">
              <h3 className="text-xl font-semibold">The True Origins of Rice</h3>
              <p className="text-gray-500">How the Bai Yue, not Han China, pioneered rice cultivation.</p>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}