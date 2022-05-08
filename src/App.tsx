import React, { Fragment } from 'react';
import MainPage from 'pages/main/MainPage';
import { Route, Routes } from 'react-router-dom';
import EditPage from 'pages/edit/EditPage';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/todos/new" element={<EditPage />} />
        <Route path="/todos/:todoId" element={<EditPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
