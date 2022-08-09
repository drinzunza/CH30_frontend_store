import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import Catalog from './components/catalog';
import ShoppingList from './components/shoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Catalog />

      <AboutMe />

      <ShoppingList />

      <Footer></Footer>
    </div>
  );
}

export default App;
