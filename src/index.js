import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './pages/landingpage';
import reportWebVitals from './reportWebVitals';
import DrawerProvider from './context/drawercontext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const LazyApp = React.lazy(()=>import("./App"))
root.render(
  <React.StrictMode>
    <DrawerProvider>
      <React.Suspense fallback={<LandingPage />}>
          <LazyApp />
      </React.Suspense>
    </DrawerProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
