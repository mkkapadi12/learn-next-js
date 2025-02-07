// To inform next js, this is a client component
"use client";

// import { useNavigate } from "next/navigation";

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
  // Add more blog posts here
];

const BlogPage = () => {
  // const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            // onClick={() => navigate(`/blog/${post.id}`)}
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
