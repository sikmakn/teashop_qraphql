import React from 'react';
import './home.scss';
import Header from "../../components/header";
import MainBanner from "../../components/mainBanner";

const Home: React.FC = () => (
    <div>
        <Header/>
        <main>
            <MainBanner/>
        </main>
    </div>
);

export default Home;