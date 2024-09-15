import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [stories, setStories] = useState([]);
  console.log(stories)

  useEffect(()=>{
    fetch('https://hacker-news-ykvv.onrender.com/api/top-stories/')
   .then(res => res.json())
   .then(data => setStories(data))
   .catch(err => console.error(err))

  },[])

  return (
    <div className="top-stories">
    <h1>Top 10 New HackerNews <span style={{color:'blue'}}>Stories</span></h1>
    <ul>
      {stories.map((story, index) => (
        <li key={index} className="story">
          <a href={story.url} target="_blank" rel="noopener noreferrer" className="story-title">
            {story.title}
          </a>
          <div className="story-meta">
            <p>Author: {story.by}</p>
            <p>Score: {story.score}</p>
            <p>Posted: {new Date(story.time * 1000).toLocaleString()}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;
