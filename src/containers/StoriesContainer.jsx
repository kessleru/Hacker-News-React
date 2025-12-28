import React from 'react';
import { getStoryIds, getStory } from '../services/hnApi';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  //getStoryIds() retorna uma promisse, nao o array, sendo necessário o await
  // console.log(getStoryIds());
  React.useEffect(() => {
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
