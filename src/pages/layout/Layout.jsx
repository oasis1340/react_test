import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header>헤더</header>
            <main>
                {/* 자식 컴포넌트를 보여주는 컴포넌트 */}
                <Outlet />
            </main>
            <footer>푸터</footer>
        </div>
    );
};

export default Layout;