import { FC, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import RotatedCube from './pages/rotated-cube';

const App: FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" Component={Index} />
      <Route path="rotated-cube" Component={RotatedCube} />
    </Routes>
  </HashRouter>
);

App.displayName = 'App';

export default App;
