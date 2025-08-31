import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import axios from 'axios';

function App() {
const [movie, setMovie] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [result, setResult] = useState([]);

async function fetchMovieData(){

try{
const API_URL = `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${import.meta.env.VITE_API_KEY}`;

const { data } = await axios.get(API_URL);

console.log(data);
setResult(data.results);
}

catch(error){
console.error("Something went wrong! ", error);
}
  
}

  return (
    <>
      <SearchBar movie={movie} setMovie={setMovie}/>
      <button onClick={fetchMovieData}>search</button>

      <div>
        {result.map(m => (
          <div key={m.id}>
            <h3>{m.title}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default App