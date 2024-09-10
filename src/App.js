import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Providers from './providers/Providers';
import ErrorBoundary from './error-boundaries/ErrorBoundary';
import NotionRendererContainer from './containers/NotionRendererContainer';

import './assets/styles/index.css';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

const App = () => {
  return (
    <ErrorBoundary>
      <Providers>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NotionRendererContainer />} />
            <Route path="/:pageId" element={<NotionRendererContainer />} />
          </Routes>
        </BrowserRouter>
      </Providers>
    </ErrorBoundary>
  );
};

export default App;