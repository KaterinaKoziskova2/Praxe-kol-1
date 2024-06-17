import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import CreatePost from './components/CreatePost';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
