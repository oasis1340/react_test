import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <p>여기는 메인 컴포넌트 😎</p> 
            {/* <a href='/intro'>소개 페이지로 이동</a> */}
            <div>
                {/* <Link to={'/intro?title=developer'}>개발자 페이지로 이동</Link>  */}
                <Link to={'/intro/developer'}>개발자 페이지로 이동</Link> 
            </div>
            <div>
                {/* <Link to={'/intro?title=planner'}>기획자 페이지로 이동</Link> */}
                <Link to={'/intro/planner'}>기획자 페이지로 이동</Link>
            </div>
        </div>
    );
};

export default Main;