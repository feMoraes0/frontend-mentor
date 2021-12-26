import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App, { AppPath } from '../App';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppPath} element={<App />} />
      </Routes>
    </BrowserRouter>
    
  );
};


export default Router;
