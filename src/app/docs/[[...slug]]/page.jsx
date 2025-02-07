// To inform next js, this is a client component
"use client";

import { useParams } from "next/navigation";

const Docs = () => {
  const { slug } = useParams();

  if (slug?.length === 2) {
    return (
      <div className="p-4 bg-gray-100">
        <h1 className="text-2xl font-bold">
          Viewing Features of {slug[0]} and concept {slug[1]}
        </h1>
      </div>
    );
  } else if (slug?.length === 1) {
    return (
      <div className="p-4 bg-gray-100">
        <h1 className="text-2xl font-bold">Viewing Features of {slug[0]}</h1>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-2xl font-bold">Docs Home Page</h1>
    </div>
  );
};

export default Docs;
