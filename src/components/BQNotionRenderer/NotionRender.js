import { NotionRenderer } from 'react-notion-x';
import { Pdf } from 'react-notion-x/build/third-party/pdf';
import { Code } from 'react-notion-x/build/third-party/code';
import { Modal } from 'react-notion-x/build/third-party/modal';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Collection } from 'react-notion-x/build/third-party/collection';

import Navigation from '../Navigation';
import { useTheme } from '../../contexts/ThemeContext';

const BQNotionRenderer = ({ recordMap }) => {
  const { isDark } = useTheme();

  return (
    <NotionRenderer
      recordMap={recordMap}
      darkMode={isDark}
      fullPage={true}
      pageAside={<Navigation recordMap={recordMap} />}
      components={{
        Code,
        Pdf,
        Modal,
        Equation,
        Collection
      }}
    />
  );
};

export default BQNotionRenderer;