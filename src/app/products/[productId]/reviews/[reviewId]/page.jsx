// To inform next js, this is a client component
"use client";

import { notFound, useParams } from "next/navigation";

const ReviewPage = () => {
  const params = useParams(); // ✅ Correct way to access dynamic params in Next.js App Router
  const { reviewId, productId } = params;

  if (parseInt(reviewId) < 1 || parseInt(reviewId) > 100) {
    return notFound();
  }

  return (
    <div>
      <h1>Product Review</h1>
      <p>Product ID: {productId}</p>
      <p>Review ID: {reviewId}</p>
      {/* Add more content and styling as needed */}
    </div>
  );
};

export default ReviewPage;
