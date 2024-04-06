import { FC } from 'react';
import {
  RouterProvider,
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Index, { PAGE_URLS } from './pages/index';

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" Component={Index} />
      <Route
        path={PAGE_URLS.ROTATED_CUBE}
        lazy={() => import('./pages/rotated-cube')}
      />
      <Route path={PAGE_URLS.LINES} lazy={() => import('./pages/lines')} />
    </>
  )
);

const App: FC = () => <RouterProvider router={router} />;

App.displayName = 'App';

export default App;
