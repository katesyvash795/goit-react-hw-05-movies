// App.js
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Nav,Link} from './App.styled'; // Импортируйте Nav из AppStyles.js

const Home = lazy(() => import('../page/Home/Home'));
const Movies = lazy(() => import('../page/Movies/Movies'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const MovieDetails = lazy(() => import('../page/MovieDetails/MovieDetails'));

function App() {
  return (
    <Router>
      <div className="App">
        <Nav> {/* Используйте стилизованный компонент Nav для навигационного меню */}
        <Link to="/"  end>Home</Link>
          <Link to="/movies" >Movies</Link>

        </Nav>

        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
