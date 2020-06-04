import React from 'react';
import BooksList from './containers/InterviewsList';
import BooksForm from './containers/InterviewsForm';

function App() {
  return (
    <div className="App">
      <div className="panel-bg">
        <ul>
          <li className="logo">Get the interview</li>

          <li className="INTERVIEWS">Internships</li>
          <li className="CATEGORIES">Categories</li>
          <li className="icon"><i className="fas fa-user" /></li>
        </ul>
      </div>

      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
