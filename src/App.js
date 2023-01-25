import Navbar from "./components/Navbar";
import logo from './logo2.png';
import f1 from './f1.jpg';
import f5 from './f5.jpg';
import f6 from './f6.jpg';
import './App.css';

function App() {
  return (
    // <div className="App">
    <header className='App-header'>
      <div className='nav-area'>
        <img src={logo} alt="React Logo" className="logo" />
        <Navbar />
        <span className="p2">cart</span>&emsp;|&emsp;
        <span className="p3">login</span>
      </div>
      <div className='container'>
        <img src={f1} alt="React Logo" className="m1" />
        <div className="text-block1">
          <h2>Stylish clothes,&emsp;&emsp;&emsp;
            <br></br>&emsp;&emsp;&emsp;Stylish  life.</h2>
          <div >
            <a href="shop.html" className="option-block1"><h5>SHOP NOW</h5></a>
          </div>
        </div>
      </div>
      <br></br>
      <center>
        <h2>Let's explore</h2>
        <br></br><br></br>
        <p>Give a perfect start to your style with our newly launched product.</p>
      </center>
      <br></br><br></br><br></br>
      <div className='container1'>
        <img src={f5} alt="React Logo" className="m2" />
        <div className="text-block2">
          <h2>new fashion for her.</h2>
          <div >
            <a href="shop.html" className="option-block2"><h5>SHOP NOW</h5></a>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br>
      <div className='container2'>
        <img src={f6} alt="React Logo" className="m2" />
        <div className="text-block3">
          <h2>new fashion for her.</h2>
          <div >
            <a href="shop.html" className="option-block3"><h5>SHOP NOW</h5></a>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br>
      <div className="footer" >
        <br></br>
        <center>
          <span className="footer1">about</span> | <span className="footer1">contact</span> | <span className="footer1" >FAQs</span>
          <br></br><br></br>
          <span className="footer1">&copy; All rights are reserved. Powered by <a href="http://www.blissit.org">abc Technologies</a></span>
          <br></br><br></br>
          <span className="footer1">phone no:874101x877;960237x303.<br></br>address:f-52;nandapuri ext. ; hawa sadak ; jaipur ; rajasthan .</span>
          <br></br><br></br>
        </center>
      </div>
    </header >
  );
};

export default App;
