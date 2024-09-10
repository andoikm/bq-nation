import { NotionRenderer } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Pdf } from 'react-notion-x/build/third-party/pdf';
import { Modal } from 'react-notion-x/build/third-party/modal';


const NotionRender = ({ block }) => {

  const customBlockRenderers = {
    sub_header: (block) => <h2>aaaaaaaaaaa{block.properties.title[0][0]}</h2>,
    text: (block) => <p>aaaaaaaaaaa{block.properties.title[0][0]}</p>,
    // Add more custom renderers as needed
  };

  return (
    <NotionRenderer
      fullPage={true}
      darkMode={true}

      blockId="575d3ec5-9020-4c93-8adc-349bef9cabc9"
      hideBlockId="205ec137-2a8a-4bb3-9010-fca2b64424b9"
      isLinkCollectionToUrlProperty={true}
      linkTableTitleProperties={true}
      showCollectionViewDropdown={true}
      showTableOfContents={true}
      key={block.spaceId}
      recordMap={{block}}
      // blockId={block.id}
      components={{
        Code,
        Collection,
        Equation,
        Pdf,
        Modal,
        customBlockRenderers
      }}
    />
  );
};

export default NotionRender;