import { useEffect, useState } from 'react';

const menuTypes = ['header', 'sub_header', 'sub_sub_header'];
const useNavigationData = (recordMap) => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const extractHeaders = () => {
      const blocks = Object.values(recordMap.block);
      const headersList = blocks
        .map((block) => {
          const { value } = block;
          if (menuTypes.includes(value.type)) {
            return {
              id: value.id,
              type: value.type,
              text: value.properties?.title?.[0]?.[0] || ''
            };
          }
          return null;
        })
        .filter(Boolean); // Remove null values
      setHeaders(headersList);
    };

    extractHeaders();
  }, [recordMap]);

  return { headers };
};

export default useNavigationData
