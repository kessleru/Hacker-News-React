import { Story } from '../components/Story';
import { useStories } from '../hooks/useAllStories';

export function StoriesContainer() {
  const { storyIds, loading, error } = useStories(20);

  if (loading) return null;
  if (error) return null;

  return (
    <div className="grid gap-2 mx-4">
      {storyIds.map((id, index) => (
        <div key={id} className="flex gap-1">
          <span className="text-neutral-500">{index + 1}.</span>
          <Story id={id} />
        </div>
      ))}
    </div>
  );
}
