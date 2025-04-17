import { Link } from "react-router-dom"; 
import "./Button.scss"; 
 
function Button({ className, text, link }) { 
    return ( 
        <div className={`btn ${className}`}> 
            <Link to={link}>{text}</Link> 
        </div> 
    ) 
} 
 
export default Button;
