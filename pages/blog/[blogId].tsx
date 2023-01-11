import { useRouter } from 'next/router';
import React from 'react'

const BlogId = () => {
   const router = useRouter();
//    const blogId = router.query.blogId;
   const {blogId} = router.query;
  return (
    <div>
        BlogID = {blogId}
    </div>
  )
}

export default BlogId;