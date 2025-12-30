import { useStory } from '../hooks/useGetStory';
import { getTime } from '../utils/getTime';

export const Story = ({ id }) => {
  const { story, loading, error } = useStory(id);

  if (loading) return null;
  if (error) return null;

  return (
    <div className="inline-block">
      <a className="flex" href={story?.url}>
        <p className="text-black leading-tight hover:underline-offset-2 hover:underline cursor-pointer bg-amber-300/30 px-1">
          {story?.title}
        </p>
        <p className="text-[12px] self-end text-neutral-500 hover:underline hover:underline-offset-1 ml-1">
          ({story?.url && new URL(story.url).hostname.replace(/^www\./, '')})
        </p>
      </a>
      <div className="flex items-center">
        <p className="text-[12px] text-neutral-500">by {story?.by}</p>
        <span className="text-[12px] text-neutral-500 mx-1">|</span>
        <p className="text-[12px] text-neutral-500">
          {getTime(Number(story?.time))}
        </p>
      </div>
    </div>
  );
};
