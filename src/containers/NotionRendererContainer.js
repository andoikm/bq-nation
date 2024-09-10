import useNotionRenderFetch from '../hooks/useNotionRenderFetch';
import BQNotionRenderer from '../components/BQNotionRenderer/NotionRender';

const NotionRendererContainer = () => {
  const { data } = useNotionRenderFetch();

  if (!data) return 'Loading...';

  return <BQNotionRenderer recordMap={data.recordMap} />;
}

export default NotionRendererContainer;