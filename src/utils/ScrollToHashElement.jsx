import { useEffect } from "react"; 
import { useLocation } from "react-router-dom"; 
 
const ScrollToHashElement = () => { 
    const location = useLocation(); 
 
    useEffect(() => { 
        if (location.hash) { 
            const element = document.getElementById(location.hash.substring(1)); 
            if (element) { 
                element.scrollIntoView({ behavior: "smooth", block: "center" }); 
            } 
        } else { 
            window.scrollTo({ top: 0, behavior: "smooth" }); 
        } 
    }, [location]); 
 
    return null; 
}; 
 
export default ScrollToHashElement;
