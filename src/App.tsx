import { FC } from 'react';
import {
  RouterProvider,
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Index from './pages/index';

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" Component={Index} />
      <Route path="rotated-cube" lazy={() => import('./pages/rotated-cube')} />
    </>
  )
);

const App: FC = () => <RouterProvider router={router} />;

App.displayName = 'App';

export default App;
