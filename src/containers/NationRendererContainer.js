import { NotionRenderer } from 'react-notion-x';
import { useEffect, useState } from 'react';
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Pdf } from 'react-notion-x/build/third-party/pdf';
import { Modal } from 'react-notion-x/build/third-party/modal';
import { formatNotionDataToRender } from '../utils/formatter';
import { useParams } from 'react-router-dom';
import { NOTION_PAGE_ID_DEPS, NOTION_PAGE_IDS } from '../constants';
import { notionRequest } from '../api/notionRequest';

const NationRendererContainer = () => {
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
          }
        }
      }));

      setData(combineAll);
    }

    fetchData();

    return () => {
      //Abort Request logic here
    }
  }, [pageId]);

  if (!data) return 'Loading...';

  return <>
    <NotionRenderer
      recordMap={data.recordMap}
      darkMode={true}
      fullPage={true}
      components={{
        Code,
        Collection,
        Equation,
        Pdf,
        Modal
      }} />
  </>;
}

export default NationRendererContainer;