import { NOTION_PAGE_IDS } from '../../constants';
import {syncRecordValues} from './sync-record-values';
import {reactNotionTaskData} from './react-notion-task-data';
import { simpleNotionPageData } from './simple-notion-page-data';

export const mockData = {
  [NOTION_PAGE_IDS.SYNC_RECORD_NOTION_ID]: syncRecordValues,
  [NOTION_PAGE_IDS.REACT_NOTION_TASK_ID]: reactNotionTaskData,
  [NOTION_PAGE_IDS.SIMPLE_NOTION_PAGE_ID]: simpleNotionPageData,
};