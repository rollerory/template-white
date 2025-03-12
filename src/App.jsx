import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Policy from "@/pages/Policy";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToHashElement from "./utils/ScrollToHashElement";
import { ModalProvider } from "./context/ModalContext";
import "@/styles/style.scss";

function App() {
    return (
        <ModalProvider>
            <HashRouter basename="/">
                <ScrollToTop />
                <ScrollToHashElement />
                <div className="wrapper">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Index />} exact />
                        <Route path="/about" element={<About />} exact />
                        <Route path="/policy" element={<Policy />} exact />
                    </Routes>
                    <Footer />
                </div>
                <Modal />
            </HashRouter>
        </ModalProvider>
    );
}

export default App;
