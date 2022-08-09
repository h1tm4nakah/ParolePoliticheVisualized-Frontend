import React, {useContext, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import {ExhibitionPage} from "./pages/exhibition.page";
import {NavigationComponent} from "./components/navigation.component";
import {Marquee} from "./components/marquee.component";
import {AdminPage} from "./pages/admin.page";
import {PiecePage} from "./pages/piece.page";
import {ParticipantPage} from "./pages/participant.page";
import {MethodologyPage} from "./pages/methodology.page";
import {AbstractPage} from "./pages/abstract.page";
import {Helmet} from "react-helmet";
import ogimg from '../src/assets/images/gen3.png'
import {useTranslation} from "react-i18next";

function App() {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = "DOEST gallery"
    }, []);

  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>DOEST gallery</title>
            <meta name="description" content={"DOES " + t('SLOGAN')} />
            <meta property="og:title" content={"DOES " + t('SLOGAN')} />
            <meta property="og:image" content={ogimg} />
        </Helmet>
        <div className="container-fluid min-vh-100">
            <BrowserRouter>
                <NavigationComponent/>
                <Routes>
                    <Route path="/" element={<ExhibitionPage/>}/>
                    <Route path="/piece/:tweet_id" element={<PiecePage />} />
                    <Route path="/participant/:username" element={<ParticipantPage />} />
                    <Route path="/admin" element={<AdminPage/>} />
                    <Route path="/methodology" element={<MethodologyPage />} />
                    <Route path="/abstract" element={<AbstractPage />} />
                </Routes>
            </BrowserRouter>
        </div>
        <Marquee slow={true} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum."></Marquee>
    </>
);
}

export default App;
