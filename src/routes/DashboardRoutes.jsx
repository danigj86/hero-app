import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route, NavLink
} from "react-router-dom";

import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/hero/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
            <Routes>
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<HeroScreen />} />
                    
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
               
        </>
    )
}
