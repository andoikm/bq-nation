import React, { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion-x';
import 'react-notion-x/src/styles.css';
import { getData } from './data'; // Import default styles

const NotionPage = ({ notionData }) => {
  return (
    <div>
      <NotionRenderer recordMap={notionData.recordMap} /> {/* Use recordMap instead of blockMap */}
    </div>
  );
};

const App = () => {
  const [notionData, setNotionData] = useState(null);
  useEffect(() => {

    const res = getData();
    if (validateNotionData(res)) {
      debugger;
      setNotionData(res);
    }

  }, [])

  return (
    <div className="App">
      <h1>Notion Page Viewer</h1>
      {notionData && <NotionPage notionData={notionData} />}
    </div>
  );
};

export default App;
function validateNotionData(data) {
  const { recordMap } = data;

  // Validate block IDs
  Object.keys(recordMap.block).forEach(id => {
    if (!isValidUUID(id)) {
      console.error(`Invalid UUID format for ID: ${id}`);
      return false;
    }
  });

  // Check content references
  Object.values(recordMap.block).forEach(block => {
    if (block.value.content) {
      block.value.content.forEach(contentId => {
        if (!recordMap.block[contentId]) {
          console.error(`Content ID ${contentId} does not match any block ID.`);
          return false
        }
      });
    }
  });

  return true;
}

function isValidUUID(id){
  const regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return regex.test(id);
}
