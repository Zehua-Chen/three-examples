import { FC } from 'react';
import { Link } from 'react-router-dom';

import { PAGE_URLS } from '../utils/pages';

const PAGES = {
  [PAGE_URLS.ROTATED_CUBE]: {
    title: 'Rotated cube',
  },
  [PAGE_URLS.LINES]: {
    title: 'Lines',
  },
};

const Index: FC = () => (
  <main>
    <ul>
      {Object.keys(PAGES).map((url) => {
        const { title } = PAGES[url];

        return (
          <li key={url}>
            <Link to={url}>{title}</Link>
          </li>
        );
      })}
    </ul>
  </main>
);

Index.displayName = 'Index';

export default Index;
