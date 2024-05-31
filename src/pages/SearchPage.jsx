import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { useParams } from 'react-router-dom';
import Loading from '../components/section/Loading';
import VideoView from '../components/video/VideoView';

const SearchPage = () => {
    const { searchID } = useParams();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&type=video&q=${searchID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
                const data = await response.json();
                setVideos(data.items);
                setNextPageToken(data.nextPageToken);

                // 최소 로딩 소스 1초 유지
                setTimeout(() => {
                    setLoading(false);
                }, 1000);

            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchVideos();
    }, [searchID]);

    const loadMoreVideos = async () => {
        if (nextPageToken) {
            try {
                const nextVideo = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&type=video&q=${searchID}&pageToken=${nextPageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
                const nextdata = await nextVideo.json();

                setVideos(prevVideos => [...prevVideos, ...nextdata.items]);
                setNextPageToken(nextdata.nextPageToken);
            } catch (error) {
                console.log('추가 영상을 가져오지 못했습니다.', error);
            }
        }
    }

    return (
        <Main
            title={`유튜브 검색 : ${searchID}`}
            description={`유튜브 검색 결과 페이지 입니다. - 검색 키워드 : ${searchID}`}
        >
            {loading ? (
                <Loading />
            ) : (
                <section id='searchPage' className='fade-in'>
                    <h2><em>{searchID}</em>를 검색한 결과입니다.</h2>
                    <div className="video__inner">
                        <VideoView videos={videos} />
                    </div>
                    <div className='search__more'>
                        {nextPageToken && (
                            <button onClick={loadMoreVideos}>더보기</button>
                        )}
                    </div>
                </section>
            )}
        </Main>
    )
}

export default SearchPage;
