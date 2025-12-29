import { Story } from '../components/Story';
import { useStories } from '../hooks/useAllStories';

export function StoriesContainer() {
  const { storyIds, loading, error } = useStories(10);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro na API</p>;

  return (
    <div className="flex flex-wrap gap-4 mx-4">
      {storyIds.map((id) => (
        <Story key={id} id={id} />
      ))}
    </div>
  );
}
