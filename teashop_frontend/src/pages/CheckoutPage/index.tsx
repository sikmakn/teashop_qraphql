import React from "react";
import styles from './checkoutPage.module.scss';
import Header from "../../components/header";
import Footer from "../../components/footer";
import InscriptionWithCount from "../../components/inscriptionWithCount";

const CheckoutPage:React.FC = () =>{
    const count = 2;
    return (
        <>
            <Header/>
            <main>
                <InscriptionWithCount inscription={'Корзина'} count={2}/>
            </main>
            <Footer/>
        </>
    );
};

export default CheckoutPage;