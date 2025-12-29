import { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';

export function useStories(limit = 10) {
  const [storyIds, setStoryIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadIds() {
      try {
        const ids = await getStoryIds();
        if (isMounted) {
          setStoryIds(ids.slice(0, limit));
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
    loadIds();

    return () => (isMounted = false);
  }, [limit]);

  return { storyIds, loading, error };
}
