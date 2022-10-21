import React from "react";
import HeroCap from "./comps/HeroCap";
import StartScreen from "./comps/StartScreen";
import PartyTitle from "./comps/PartyTitle";
import Table from "./comps/Table";
import Footer from "./comps/Footer";
import {requestUrl} from './env'

export default function App() {

    fetch(`${requestUrl}api/party`)
        .then((res) => res.json())
        .then((data) => console.log(data));

    return (
        <>
            <StartScreen />
            <HeroCap />
            <PartyTitle />
            <Table />
            <Footer />
        </>
    );
}
