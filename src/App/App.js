import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/ui/Header';
import CharacterGrid from '../components/characters/CharacterGrid';
import Search from '../components/ui/Search';
import './App.css';

const App = () => {
  // this begins as an empty array until we make a request using useEffect
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  // using async await as opposed to .then
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`,
      );

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
