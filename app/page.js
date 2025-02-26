import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-900">Bai Yue History</h1>
      <p className="text-gray-600 mt-2">Uncovering the lost legacy of the Bai Yue people.</p>
      <div className="mt-6 grid gap-4 max-w-3xl w-full">
        <Link href="/articles/bai-yue-southeast-asia">
          <div className="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-200">
            <h2 className="text-xl font-semibold">The Bai Yue Influence on Southeast Asia</h2>
            <p className="text-gray-500">How the Bai Yue shaped Thailand, Laos, and Vietnam.</p>
          </div>
        </Link>
        <Link href="/articles/bai-yue-resistance">
          <div className="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-200">
            <h2 className="text-xl font-semibold">The Bai Yue Resistance</h2>
            <p className="text-gray-500">How they fought Han Chinese expansion.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}