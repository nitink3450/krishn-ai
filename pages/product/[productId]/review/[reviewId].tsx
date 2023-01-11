import { useRouter } from "next/router";
import React from "react";

const ReviewId = () => {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return (
    <div>
      ReviewId = {reviewId} and product ID ={productId}
    </div>
  );
};

export default ReviewId;
