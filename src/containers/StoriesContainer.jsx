import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //getStoryIds() retorna uma promisse, nao o array, sendo necessário o await
  // console.log(getStoryIds());
  useEffect(() => {
    async function loadIds() {
      try {
        const ids = await getStoryIds();
        setStoryIds(ids);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadIds();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro na API</p>;
  }

  return (
    <div className='flex flex-wrap gap-4 mx-4'>
      {storyIds.slice(0, 10).map((id) => <Story key={id} id={id} />)}
   </div>
  );
};
