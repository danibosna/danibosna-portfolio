import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home.jsx';
import NotFound from '@pages/NotFound.jsx';
import Contact from '@pages/Contact.jsx';

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route exact path='contact' element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;