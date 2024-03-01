import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { Properties } from './components/Properties';
import { Layout } from './app.styled';
import { PropertyPage } from './components/PropertyPage/PropertyPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:propertyId" element={<PropertyPage />} />
            {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
