import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import ForCosms from './forCosms/ForCosms';
import Lessons from './Lessons/Lessons';
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
        <Route path="Courses" element={<Courses />} />
        <Route path="ForCosms" element={<ForCosms />} />
        <Route path="Lessons" element={<Lessons />} />
        <Route path="Sales" element={<Sales />} />
        <Route path="Center" element={<Center />} />
        <Route path='Schedule' element={<Schedule />} />
        <Route path='Price' element={<Price />} />
        <Route path='Special' element={<SpecialPrice />} />
        <Route path='Articles' element={<Articles />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}