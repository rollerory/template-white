import { Link } from "react-router-dom"
import LogoImg from "@/assets/images/logo.svg";
import "./logo.scss"

export default function Logo() {
    return (
        <Link to="/" className="logo">
            <img src={LogoImg} alt="Logo icon" />
            <span>Company Name</span>
        </Link>
    )
}
