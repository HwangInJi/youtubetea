import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ className }) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchKeyword) {
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    }

    return (
        <div id='search' className={className}>
            <div className='search__inner'>
                <input
                    type="search"
                    id='searchInput'
                    placeholder='💚 검색어를 입력해주세요!'
                    autoComplete='off'
                    className='search__input'
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Search;
