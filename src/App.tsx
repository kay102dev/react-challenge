import React from 'react';
import './App.scss';
import Header from "./feature/header/header";
import Slider from "./feature/slider/slider";
import WhatWeDo from "./feature/what-we-do/what-we-do";
import CaseStudies from "./feature/case-studies/case-studies";
import {ApiProvider} from "./utils/dataProvider";
import GoodCompany from "./feature/good-company/good-company";
import Footer from "./feature/footer/footer";
import Survey from "./feature/survey/survey";

function App() {
    return (
        <>
            <ApiProvider>
                <Header/>
                <Slider/>
                <WhatWeDo/>
                <CaseStudies/>
                <GoodCompany/>
                <Footer/>
                <Survey/>
            </ApiProvider>
        </>
    );
}

export default App;
