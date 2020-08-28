import React from 'react';
import './home.scss';
import Header from "../../components/header";
import MainBanner from "../../components/mainBanner";
import Footer from "../../components/footer";
import TeaList from "../../components/teaList";

const Home: React.FC = () => {
    const teaInfos = [
        {
            _id: 'id',
            imgSrc: './photo.jpg',
            oldPrice: 220,
            discountPercentage: 45,
            description: 'Да Хун Пао Шу Сян scfsdfsd fdefw ewfew saasssf fewfыф ef wef wefwe f wefwe fwef wefwefwefwefwef',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id2',
            imgSrc: './photo.jpg',
            oldPrice: 220,
            discountPercentage: 45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id3',
            imgSrc: './photo.jpg',
            oldPrice: 220,
            discountPercentage: 45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id4',
            imgSrc: './photo.jpg',
            oldPrice: 220,
            discountPercentage: 45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        }
    ];

    return (
        <>
            <Header/>
            <main>
                <MainBanner/>
                <TeaList name={'Улун'} count={20} teaInfos={teaInfos}/>
                <TeaList name={'Пуэр'} count={85} teaInfos={teaInfos}/>
            </main>
            <Footer/>
        </>
    );
};

export default Home;