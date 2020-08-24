import React from 'react';
import './home.scss';
import Header from "../../components/header";
import MainBanner from "../../components/mainBanner";
import TeaList from "../../components/teaList";

const Home: React.FC = () => {
    return (
        <div>
            <Header/>
            <main>
                <MainBanner/>
                <TeaList name={'Улун'} count={20} teaInfos={[]}/>
            </main>
        </div>
    );
};

export default Home;