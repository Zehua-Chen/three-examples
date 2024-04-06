import { FC } from 'react';
import { Link } from 'react-router-dom';

const Index: FC = () => (
  <main>
    <ul>
      <li>
        <Link to="rotated-cube">Rotated cube</Link>
      </li>
    </ul>
  </main>
);

Index.displayName = 'Index';

export default Index;
