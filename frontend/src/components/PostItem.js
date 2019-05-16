import React from 'react';
import { Link } from 'react-router-dom';
import { ItemGrid } from '../styles';
import PostInfo from './PostInfo';

const PostItem = ({ post }) => {
  return (
    <ItemGrid>
      <Link to={`/${post.category}/${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
      <PostInfo post={post} />
    </ItemGrid>
  );
};

export default PostItem;
