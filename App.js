import logo from './logo.svg';
import './App.css';
import RealImage from "./RealImage.jpg"

function App() {
  return (
    <div className="App" style={{border:"solid 1px black", maxWidth:'100vw'}}>
      <h1 className='title' id='red'>REAL MADRID</h1>
      <br />

      <img src={RealImage} alt ='myImage'  className='img1'/>

      <br />

      <img src="/og-image.png" className='img1'/>

      <br />

      <video width="500" height="300" controls>

        <source src="myVideo.mp4" type="video/mp4" />

      </video>

    </div>

  );
}

export default App;
