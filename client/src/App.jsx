import { useState } from 'react'
import './App.css'
import TestService from "./services/TestService.js";

function App() {
  const [count, setCount] = useState(0)
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState("");

  const getWords = async () => {
    const res = await TestService.getWords();
    if (res.status === 200) {
      setWords(res.data);
    } else {
      console.log(res);
    }
  }

  const handleWordChange = (event) => {
    setNewWord(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await TestService.addNewWord({ word: newWord });
    if (res.status === 200) {
      console.log(`New Data Added: ${res.data.word}`);
    } else {
      console.log(res);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            counter change is: {count}
          </button>
        </p>
        <p>
          <button type="button" onClick={getWords}>Get Words</button>
        </p>
        <p>
          <form onSubmit={handleSubmit}>
            <label>
              Word:
              <input
                type="text"
                value={newWord}
                onChange={handleWordChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </p>
        <p>
          <ul>
            {words.map((element, index) => {
              return <li key={`${index}-${element.word}`}>{element.word}</li>
            })}
          </ul>
        </p>
      </header>
    </div>
  )
}

export default App
