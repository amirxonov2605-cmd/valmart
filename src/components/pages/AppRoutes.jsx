import { Routes, Route } from 'react-router-dom';

import Layout from '../layout/Layout';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import ForCosms from './forCosms/ForCosms';
import Sales from './Sales/Sales';
import Center from './Center/Center';
import Schedule from './Schedule/Schedule';
import Price from './Price/Price';
import SpecialPrice from './Special/Special';
import Articles from './Article/Articles';
import ErrorPage from './Error';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="courses" element={<Courses />} />
        <Route path="for-cosms" element={<ForCosms />} />
        <Route path="sales" element={<Sales />} />
        <Route path="center" element={<Center />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="price" element={<Price />} />
        <Route path="special" element={<SpecialPrice />} />
        <Route path="articles" element={<Articles />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}