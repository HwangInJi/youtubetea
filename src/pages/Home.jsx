import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Main from '../components/section/Main';
import Loading from '../components/section/Loading';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/scss/section/_home.scss'; // SCSS 파일 import

// 로컬 이미지를 import 합니다.
import img1 from '../assets/img/main01.jpg';
import img2 from '../assets/img/main02.jpg';
import img3 from '../assets/img/main03.jpg';
import img4 from '../assets/img/main04.jpg';
import img5 from '../assets/img/main05.jpg';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const images = [img1, img2, img3, img4, img5];

    // 로딩 시간 1초 설정
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer); // 타이머 정리
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Main
            title="홈"
            description="홈 페이지입니다. - 추천 이미지: Tea"
        >
            {loading ? (
                <Loading />
            ) : (
                <section id='homePage' className='fade-in'>
                    <div className="home__title">
                        <h1>안녕하세요. Teast Tea입니다.</h1>
                    </div>
                    <div className="home__slider">
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div key={index} className="slick-slide">
                                    <img src={image} alt={`slide-${index}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="home__description">
                        <h2>소개</h2>
                        <p>
                            이 사이트는 차에 대한 모든 것을 다룹니다.
                            다양한 차 종류와 그에 관련된 영상을 통해 차에 대한 지식을 넓히고,
                            새로운 차 문화를 알아보세요!
                        </p>
                    </div>
                </section>
            )}
        </Main>
    );
}

export default Home;
