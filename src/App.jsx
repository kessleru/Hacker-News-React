import React, { useState } from 'react';
import '@/styles/index.css';
import { getStoryIds } from './services/hnApi';

export const App = () => {
  const [storyIds, setStoryIds] = React.useState([]);

  React.useEffect(() => {
    async function loadStories() {
      const ids = await getStoryIds();
      setStoryIds(ids);
    }

    loadStories();
  }, []);

  return (
    <>
      <ul>
        {storyIds.map((id, index) => (
          <li key={id}>
            #{index + 1} — {id}
          </li>
        ))}
      </ul>
    </>
  );
};
