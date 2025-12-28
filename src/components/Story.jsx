import React, { useEffect, useState } from 'react';
import { getStory } from '../services/hnApi';

export const Story = ({ id }) => {
  const [story, setStory] = useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    async function loadStory() {
      try {
        const story = await getStory(id);
        setStory(story);
        console.log(story);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadStory();
  }, []);

  if (loading) return <div>Carregando história...</div>;
  if (error) return <div>Erro ao carregar esta história.</div>;

  return <div className='inline-block bg-neutral-300 rounded-md'>
  <p>{story?.title}</p>
  <p>{story?.type}</p>
  <p>{story?.by}</p>

  </div>;
};
