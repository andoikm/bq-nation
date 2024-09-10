import { NOTION_PAGE_IDS } from '../../constants';
import {syncRecordValues} from './sync-record-values';
import {reactNationTaskData} from './react-notion-task-data';
import { simpleNotionPageData } from './simple-notion-page-data';

export const mockData = {
  [NOTION_PAGE_IDS.SYNC_RECORD_NOTION_ID]: syncRecordValues,
  [NOTION_PAGE_IDS.REACT_NOTION_TASK_ID]: reactNationTaskData,
  [NOTION_PAGE_IDS.SIMPLE_NATION_PAGE_ID]: simpleNotionPageData,
};