import { ReactNode } from "react";

type ArticleProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function ArticleLayout({ title, description, children }: ArticleProps) {
  return (
    <div className="min-h-screen bg-white p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      <p className="text-lg text-gray-600 mt-2">{description}</p>
      <div className="mt-6">{children}</div>
      <div className="mt-10">
        <a href="/" className="text-blue-600 hover:underline">⬅ Back to Home</a>
      </div>
    </div>
  );
}
