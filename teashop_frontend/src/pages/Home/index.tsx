import React from 'react';
import './home.scss';
import Header from "../../components/header";
import MainBanner from "../../components/mainBanner";
import Footer from "../../components/footer";
import TeaList from "../../components/teaList";
import {gql, useQuery} from "@apollo/client";

const PRODUCTS = gql`
    query GetProducts {
        products {
            id
            price
            weight
            shortDescription
            discount
        }
    }
`;

const Home: React.FC = () => {
    const {loading, error, data} = useQuery(PRODUCTS);

    const teaInfos = [
        {
            id: 'id',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            discount: 0.45,
            shortDescription: 'Да Хун Пао Шу Сян scfsdfsd fdefw ewfew saasssf fewfыф ef wef wefwe f wefwe fwef wefwefwefwefwef',
            price: 265,
            weight: 100,
        },
        {
            id: 'id2',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            discount: 0.45,
            shortDescription: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            id: 'id3',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            discount: 0.45,
            shortDescription: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            id: 'id4',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            discount: 0.45,
            shortDescription: 'Да Хун Пао Шу Сян',
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