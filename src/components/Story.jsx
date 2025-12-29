import { useStory } from '../hooks/useStory';

export const Story = ({ id }) => {
  const { story, loading, error } = useStory(id);

  if (loading) return <div>Carregando história...</div>;
  if (error) return <div>Erro ao carregar esta história.</div>;

  return (
    <div className="inline-block bg-neutral-300 rounded-md">
      <p>{story?.title}</p>
      <p>{story?.by}</p>
    </div>
  );
};
