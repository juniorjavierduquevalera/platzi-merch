import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages//
import Home from './containers/home/Index'
import Checkout from './containers/checkout/Index'
import Information from './containers/information/Index'
import Payment from './containers/payment/Index'
import Success from './containers/success/Index'
import NotFound from './containers/NotFound/Index'
//components
import Layout from './components/layout/Index'
//context//
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';

function App() {
    const initialState = useInitialState();

    return (
    <AppContext.Provider value={initialState}>
        <BrowserRouter className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route exact path="/checkout" element={ <Checkout /> } />
                    <Route exact path="/checkout/information" element={ <Information />} />
                    <Route exact path="/checkout/payment" element={ <Payment /> } />
                    <Route exact path="/checkout/success" element={ <Success />} />
                    <Route element={ <NotFound /> } />
                </Routes>
            </Layout>
        </BrowserRouter>
    </AppContext.Provider>
    )
  }

export default App