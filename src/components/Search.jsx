import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainPage from './MainPage';
import "./search_style.css"

const Search = () => {
    const navigate = useNavigate();
    const [searchWord, setsearchWord] = useState("");
    const marketlist = ["안양 중앙 시장", "안양 남부 시장", "안양 호계 시장", "명학 시장", "박달시장", "부평 종합 시장", "통진 시장", "새마을전통시장"];
    const onSearch = (e) => {
        setsearchWord(e.target.value);
    }
    const goHome = () => {
        navigate('/');
    }
    const onSubmit = () => {
        navigate('/MainPage');
    }
    const findMarket = marketlist.filter((item) =>
        item.includes(searchWord)
    );
    return (
        <div>
            <fieldset className='searchFrame'>
                <div className="div">내 주변 시장 찾기</div>
                <button className='backButton' onClick={goHome}>back</button>
                <input className='search' required type="text" onChange={onSearch} />
                <button onClick={onSubmit}>search</button>
                <MainPage name={searchWord}>{searchWord}</MainPage>
                {searchWord.length === 0 ?
                    <div>검색어를 입력하세요</div> :
                    <div>{findMarket.map(
                        (item) => <div key={item}>{item}
                        </div>)}
                    </div>}
            </fieldset>
        </div>
    );
};

export default Search;