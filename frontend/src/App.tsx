import React from 'react';
import HeroCap from './comps/HeroCap'
import StartScreen from './comps/StartScreen';
import PartyTitle from './comps/PartyTitle';
import Table from './comps/Table';
import Footer from './comps/Footer';

export default function App() {
    return (
    <>
        <StartScreen />
        <HeroCap />
        <PartyTitle />
        <Table />
        <Footer />
    </>
    )
}