import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import Loading from '../components/section/Loading';
import '../assets/scss/section/_home.scss'; // SCSS 파일 import

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const keyword = 'Tea추천'; // 검색 키워드
                const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // .env 파일에 저장된 유튜브 API 키
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&type=video&maxResults=48&key=${apiKey}`);
                const data = await response.json();
                const videos = data.items.filter(item => item.id.videoId); // videoId가 있는 항목만 필터링
                if (videos.length > 0) {
                    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
                    setVideoUrl(`https://www.youtube.com/embed/${randomVideo.id.videoId}`);
                }
            } catch (error) {
                console.error('비디오를 가져오는 중 오류가 발생했습니다.', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    return (
        <Main
            title="홈"
            description="홈 페이지입니다. - 추천 이미지: Tea"
        >
            {loading ? (
                <Loading />
            ) : (
                <section id='homePage' className='fade-in'>
                    <div className="home__content">
                        <div className="home__video-container">
                            {videoUrl ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={videoUrl}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Random Tea Video"
                                ></iframe>
                            ) : (
                                <p>비디오를 불러오는 중 오류가 발생했습니다.</p>
                            )}
                        </div>
                        <div className="home__description">
                            <h1>WELCOME</h1>
                            <p>
                                이 웹사이트는 차에 대한 정보를 제공하며, 유튜브에서 차 관련 콘텐츠를 검색할 수 있습니다.<br/>
                                여기서는 다양한 차 종류, 차의 역사, 차를 만드는 방법, 차의 효능과 건강에 미치는 긍정적인 영향에 대해 알아볼 수 있으며,<br/>
                                세계 각국의 차를 비교하고 추천하는 콘텐츠도 만나볼 수 있습니다.
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </Main>
    );
}

export default Home;
