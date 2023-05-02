import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [postPerPage] = useState(10);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
    setLoading(false);
  };

  const paginate = (pageNumber) => {
    setCurrPage(pageNumber);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const indexOfLastPost = currPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className="container  mt-3">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
