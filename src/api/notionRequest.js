import { mockData } from './mocks';

export const notionRequest = (pageId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData[pageId]);
    }, 100);
  });
};
