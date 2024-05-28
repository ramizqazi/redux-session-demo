/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactSwitch from "react-switch";

import { togglePost, selectPostById } from "./redux/postSlice-normalized";

const PostNormalizedCard = ({ id }) => {
  const dispatch = useDispatch();
  const post = useSelector(state => selectPostById(state, id));

  const [toggle, setToggle] = useState(post.isActive);

  const handleChange = (value) => {
    setToggle(value);
    dispatch(togglePost({ id: post.id, value }));
  };

  console.log('Normalized Post Rerenderd', post?.id)
  return (
    <div className="post">
      <h4>{post?.title}</h4>
      <p>{post?.author?.name}</p>
      <ReactSwitch onChange={handleChange} checked={toggle} />
    </div>
  );
};

export default PostNormalizedCard;

