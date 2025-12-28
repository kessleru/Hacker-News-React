import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async () => {
  // const { data } = await axios.get(newStoriesUrl);
  // return data;

  const response = await axios.get(newStoriesUrl)
  const result = response.data;
  return result;
}