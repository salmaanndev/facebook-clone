import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login';
import Feed from './pages/feed/Feed';
import { useReducer, useState } from 'react';
import PostForm from './components/postForm/PostForm';

const initialState = {
  status: 'loading',
  posts: [],
  seeMore: false,
  title: "See More",
}

function reducer(state, action) {
  switch (action.type) {
    case "more":
      return { ...state, seeMore: !false, status: 'moreitems', title: 'See Less' }
    case "less":
      return { ...state, seeMore: false, status: 'lessitems', title: 'See More' }
    case 'addPost':
      return { ...state, posts: [...state.posts, { id: Date.now(), newPost: action.newPost }] };
    default:
      throw new Error("Action is Unknown")
  }
}

function App() {

  const [newPost, setNewPost] = useState('');

  function handlePost() {
    if (newPost.trim() !== '') {
      dispatch({ type: 'addPost', newPost });
      setNewPost('');
    }
  }

  const [{ status, seeMore, title, posts }, dispatch] = useReducer(reducer, initialState)
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={status === 'loading' && <Login />} />
        <Route path="/feed" element={
          <Feed title={title} seeMore={seeMore} dispatch={dispatch} status={status}>
            <PostForm handlePost={handlePost} newPost={newPost} setNewPost={setNewPost} posts={posts} dispatch={dispatch} />
          </Feed>
        }

        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
