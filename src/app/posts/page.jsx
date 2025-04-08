const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10",
    description: "Description for product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$20",
    description: "Description for product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30",
    description: "Description for product 3",
  },
];

const PostPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  // console.log(posts);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post?.id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{post?.title}</h2>
            <p className="text-gray-700">{post?.body}</p>
            {/* <p className="text-gray-500">{product.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
