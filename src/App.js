import './App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import Counter from './components/Counter'
import Whycgi from './components/Whycgi';
import Photogallery from './components/Photogallery';
import Video from './components/Video';
import Footer from './components/Footer'
import Sponser from './components/Sponser';
import Whoweare from './components/Whoweare';

function App() {
  return (
<div>
    
    <Header/>
    <Slider/>

    <main className="home">

            <Whoweare/>
            <Counter/>
            <Whycgi/>
            <Photogallery/>
            <Video/>
            <Sponser/>

    </main>


    <Footer/>
    
</div>
  );
}

export default App;
