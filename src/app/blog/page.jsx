"use client";

import { useRouter } from "next/navigation";

const blogPosts = [
  {
    id: "first",
    title: "First Blog Post",
    description: "This is the description for the first blog post.",
  },
  {
    id: "second",
    title: "Second Blog Post",
    description: "This is the description for the second blog post.",
  },
];

const BlogPage = () => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/blog/${id}`);
  };

  console.log("Blog posts:");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.description}</p>
            <button
              type="button"
              onClick={() => handleClick(post.id)}
              className="bg-blue-500 px-2 py-1 mt-4 text-white rounded-lg"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
