import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import Switch from './Swich';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = ({ recordMap }) => {
  const {isDark, setIsDark} = useTheme();
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const extractHeaders = () => {
      const blocks = Object.values(recordMap.block);
      const headersList = blocks
        .map((block) => {
          const { value } = block;
          if (['header', 'sub_header', 'sub_sub_header'].includes(value.type)) {
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

  return (
    <div>
      <Switch checked={isDark} onChange={e => setIsDark(e.target.checked)} />
      <ul className="bq-react-notion-navigation">
        {headers.map((header) => (
          <li
            key={header.id}
            className={cn('bq-react-notion-navigation-item', `bq-react-notion-navigation--${header.type}`)}
          >
            <a href={`#${header.id.replaceAll('-', '')}`}> {header.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
