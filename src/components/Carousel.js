import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel } from "react-responsive-carousel";

// import image1 from '../images/foto6.jpg';
// import image2 from '../images/foto4.jpg';
// import image3 from '../images/foto5.jpg';

const image1 = require('../images/foto6.jpg');
const image2 = require('../images/foto4.jpg');
const image3 = require('../images/foto12.jpg');


// const slides = [
//     {
//         image: '../images/foto6.jpg'
//     },
//     {
//         image: '../images/foto4.jpg'
//     },
//     {
//         image: '../images/foto5.jpg'
//     },
// ];
const styleCard = {
    display: 'flex',
    flexDirection:'column',
    // width:'360px',
    // height:'520px'
}

const styleImg = {
    width: '100%',
    height:'100p%',
}
const styleWraper = {
    width:'160px',
    height: '160px',
    marginBottom: '10px',
}

const ImgCarousel = () =>{
    return (
        <div className={styleCard}>
            <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                swipeable={true}
                emulateTouch={true}
                autoPlay={true}
                infiniteLoop={true}
                stopOnHover={true}
            >
                {/*{slides.map((slide) => {*/}
                {/*    <div>*/}
                {/*            <img src={require(`${slide.image}`)} />*/}
                {/*    </div>*/}
                {/*})}*/}
                <div className={styleWraper}>
                    <img src={image1} style ={styleImg}/>
                </div>
                <div className={styleWraper}>
                    <img src={image2} style ={styleImg} />
                </div>
                <div className={styleWraper}>
                    <img src={image3} style ={styleImg}/>
                </div>

            </Carousel>
        </div>
    )
};

export default ImgCarousel;