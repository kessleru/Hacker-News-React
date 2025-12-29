import axios from 'axios';
import { selectFields } from '../utils/selectFields';

const api = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/',
});

export async function getStory(id) {
  // const response = await axios.get(`${storyUrl + storyId}.json`);
  // const result = selectFileds(response.data);
  // return result;

  const { data } = await api.get(`item/${id}.json`);
  return selectFields(data);
}

export const getStoryIds = async () => {
  // const { data } = await axios.get(newStoriesUrl);
  // // return data;

  // const response = await axios.get(newStoriesUrl);
  // const result = response.data;
  // return result;

  const { data } = await api.get(`newstories.json`);
  return data;
};
