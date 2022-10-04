import { Tweet } from './components/Tweet';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ]);

  function createTweet() {
    setTweets([...tweets, 'Tweet 5']);
  }

  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet text={tweet} />;
      })}

      <button
        onClick={createTweet}
        style={{
          backgroundColor: 'aqua',
          border: 0,
          padding: '6px 12px',
          color: 'black',
        }}
      >
        Adicionar tweet
      </button>
    </div>
  );
}

export default App;
