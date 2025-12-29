import React, { useEffect, useState } from 'react';
import { getStory } from '../services/hnApi';

export function useStory(id) {
  const [story, setStory] = useState({});
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadStory() {
      try {
        const story = await getStory(id);
        if (isMounted) {
          setStory(story);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    loadStory();
    return () => (isMounted = false);
  }, [id]);

  return { story, loading, error };
}
