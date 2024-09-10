import React from 'react';
import cn from 'classnames';
import Switch from './Swich';
import { useTheme } from '../contexts/ThemeContext';
import useNavigationData from '../hooks/useNavigationData';

const Navigation = ({ recordMap }) => {
  const { isDark, setIsDark } = useTheme();
  const { headers } = useNavigationData(recordMap);

  return (
    <div>
      <Switch checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
      <ul className="bq-react-notion-navigation">
        {headers.map((header) => (
          <li
            key={header.id}
            className={cn(
              'bq-react-notion-navigation-item',
              `bq-react-notion-navigation--${header.type}`,
            )}
          >
            <a href={`#${header.id.replaceAll('-', '')}`}> {header.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
