import FirstView from './Components/FirstView';
import NavBar from './Components/NavBar';
import Products from './Components/Products';
import ProductRain from './Assets/img/ProductRain.jpg'
import ProductPuff from './Assets/img/ProductPuff.jpg'
import ProductCart from './Assets/img/ProductCart.jpg'
import ProductNap from './Assets/img/ProductNap.png'
import DetailRain from './Assets/img/DetailRain.png'
import DetailPuff from './Assets/img/DetailPuff.png'
import DetailCart from './Assets/img/DetailCart.png'
import DetailNap from './Assets/img/DetailNap.png'
import Instagram from './Components/Instagram';
import Footer from './Components/Footer';
import NewsLetter from './Components/NewsLetter';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <FirstView />
        <Products
          position={"left"}
          img1={ProductRain}
          img2={DetailRain}
          name={"Pufi RAIN"}
        />
        <Products
          position={"right"}
          img1={ProductPuff}
          img2={DetailPuff}
          name={"Pufi PUFF"}
        />
        <Products
          position={"left"}
          img1={ProductCart}
          img2={DetailCart}
          name={"Pufi CART"}
        />
        <Products
          position={"right"}
          img1={ProductNap}
          img2={DetailNap}
          name={"Pufi NAP"}
        />
        <Instagram />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
