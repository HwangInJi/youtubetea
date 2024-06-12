import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import Loading from '../components/section/Loading';
import VideoView from '../components/video/VideoView';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=다양한Tea&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
                const data = await response.json();

                // 50개의 결과 중 8개를 랜덤으로 선택
                const shuffledVideos = data.items.sort(() => 0.5 - Math.random());
                const selectedVideos = shuffledVideos.slice(0, 8);

                setVideos(selectedVideos);

                // 최소 로딩 시간 1초 유지
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchVideos();
    }, []);

    return (
        <Main
            title="홈"
            description="홈 페이지입니다. - 추천 영상: Tea"
        >
            {loading ? (
                <Loading />
            ) : (
                <section id='homePage' className='fade-in'>
                    <div className="home__inner">
                        <VideoView videos={videos} />
                    </div>
                </section>
            )}
        </Main>
    );
}

export default Home;
