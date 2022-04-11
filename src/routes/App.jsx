import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home.jsx';
import NotFound from '@pages/NotFound.jsx';
import Contact from '@pages/Contact.jsx';
import AppContext from '../context/AppContext';
import useViewModal from '../hooks/useViewModal';

const App = () => {
    const viewModal = useViewModal();
    return (
        <AppContext.Provider value={viewModal}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route exact path='contact' element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;