import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css'; 
import Loading from './components/Loading';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CourseDetailPage = lazy(() => import('./components/CourseDetailPage'));

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

