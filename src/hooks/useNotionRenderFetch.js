import { NOTION_PAGE_ID_DEPS, NOTION_PAGE_IDS } from '../constants';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { notionRequest } from '../api/notionRequest';
import { formatNotionDataToRender } from '../utils/formatter';

const useNotionRenderFetch = () => {
  const { pageId = NOTION_PAGE_IDS.REACT_NOTION_TASK_ID } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const callbackIds = [pageId];
      if (NOTION_PAGE_ID_DEPS[pageId]) {
        callbackIds.push(...NOTION_PAGE_ID_DEPS[pageId]);
      }

      const response = await Promise.all(callbackIds.map(notionRequest));
      const formatedResponse = response.map(formatNotionDataToRender);

      const combineAll = formatedResponse.reduce((acc, curr) => ({
        ...acc,
        recordMap: {
          ...acc.recordMap,
          block: {
            ...acc.recordMap.block,
            ...curr.recordMap.block,
          },
        },
      }));

      setData(combineAll);
    };

    fetchData();

    return () => {
      //Abort Request logic here
    };
  }, [pageId]);

  return { data };
};

export default useNotionRenderFetch;
