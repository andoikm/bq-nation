import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NationRendererContainer from './containers/NationRendererContainer';

import './assets/styles/index.css';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NationRendererContainer />} />
        <Route path="/:pageId" element={<NationRendererContainer />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;