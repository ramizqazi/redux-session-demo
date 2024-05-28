/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch } from "react-redux";
import ReactSwitch from "react-switch";

import { togglePost } from "./redux/postsSlice";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(post.isActive);

  const handleChange = (value) => {
    setToggle(value);
    dispatch(togglePost({ id: post.id, value }));
  };

  console.log('Post Rerenderd', post?.id)
  return (
    <div className="post">
      <h4>{post?.title}</h4>
      <p>{post?.author?.name}</p>
      <ReactSwitch onChange={handleChange} checked={toggle} />
    </div>
  );
};

export default PostCard;

