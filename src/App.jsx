import "./App.css";
import { useSelector } from "react-redux";

import { selectPostIds } from "./redux/postSlice-normalized";
import PostCard from './PostCard';
import PostNormalizedCard from "./PostNormalizedCard";

const App = () => {
  const posts = useSelector((state) => state.posts?.posts);
  const normalizedPosts = useSelector((state) => selectPostIds(state));

  return (
    <div className="container">
      <div className="left">
        <h1>Posts</h1>
        {posts?.map(p => <PostCard key={p?.id} post={p} />)}
      </div>
      <div className="right">
        <h1>Normalized Posts</h1>
        {normalizedPosts?.map(p => <PostNormalizedCard key={p} id={p} />)}
      </div>
    </div>
  );
};

export default App;
