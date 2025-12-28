import React, { useState } from 'react';
import '@/styles/index.css';
import { getStoryIds } from './services/hnApi';

export const App = () => {
  const [storyIds, setStoryIds] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  //getStoryIds() retorna uma promisse, nao o array, sendo necessário o await
  // console.log(getStoryIds());
  React.useEffect(() => {
    async function loadStories() {
      try {
        const ids = await getStoryIds();
        setStoryIds(ids);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadStories();
  }, []);
  
  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro na API</p>;
  }

  return (
    <ul>
      {storyIds.map((id) => (
        <li key={id}>{id}</li>
      ))}
    </ul>
  );
};
