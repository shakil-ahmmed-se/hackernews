
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [stories, setStories] = useState([]);
  console.log(stories)

  useEffect(()=>{
    fetch('https://hacker-news-ykvv.onrender.com/api/top-stories')
   .then(res => res.json())
   .then(data => setStories(data))
   .catch(err => console.error(err))

  },[])

  return (
    <div>
      <h1>Top 10 New HackerNews Stories</h1>
      <ul>
        {stories.map((story, index) => (
          <li key={index}>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
            <p>By: {story.author}</p>
            <p>Score: {story.score}</p>
            <p>Posted: {story.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
