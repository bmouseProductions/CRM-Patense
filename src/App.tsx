import {BrowserRouter as Router ,Routes, Route, } from "react-router-dom";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
      <Router>
        <>
          <header className="hidden"><Header /></header>
          
  
          <main className=''>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/*" element={<ErrorPage />}/>
            </Routes>
          </main>
            
          <footer className="hidden">
            <Footer />
          </footer>

        </>
      </Router>
    )
}