import * as React from 'react';
import BlogPosts from './BlogPosts/BlogPosts';
import FeaturedPost from './FeaturedPost/FeaturedPost';

export default function BlogPage() {
    return (
    <div>
        <FeaturedPost/>
        <BlogPosts/>
    </div>
  );
};
