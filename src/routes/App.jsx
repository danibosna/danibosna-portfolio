import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home.jsx';
import NotFound from '@pages/NotFound.jsx';
import Contacts from '@pages/Contacts.jsx';
import ModalContext from '@context/ModalContext.js';
import useViewModal from '@hooks/useViewModal.js';
import MenuContext from '@context/MenuContex.js';
import useViewMenu from '@hooks/useViewMenu.js';
import ShoppingCartContext from '@context/ShoppingCartContext.js';
import useCartState from '@hooks/useCartState.js';

const App = () => {
    const cartState = useCartState();
    const viewMenu = useViewMenu();
    const viewModal = useViewModal();
    return (
        <MenuContext.Provider value={viewMenu}>
        <ModalContext.Provider value={viewModal}>
        <ShoppingCartContext.Provider value={cartState}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route exact path='contact' element={<Contacts/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </ShoppingCartContext.Provider>
        </ModalContext.Provider>
        </MenuContext.Provider>
    );
}

export default App;