import Header from "../components/Header";
import carousel from '../assets/images/carousel.jpg'
import '../styles/home.css'

function Home() {
    return ( 
        <div className="home">
            <Header/>
            <div className="container_carousel">
                <img src={carousel} alt="carousel" className="img_carousel"/>
            </div>
            <div className="text_parent">
                Why ?
                <p className="text_child">
                   왜 독서일까요?
                </p>
            </div>
        </div>
     );
}

export default Home;