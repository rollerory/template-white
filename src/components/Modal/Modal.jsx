import { useState, useEffect } from "react";
import { useModal } from "../../context/ModalContext";
import Loader from "@/assets/images/loader.svg";
import "./Modal.scss";
import getImageURL from "@/utils/getImageUrl";

export default function Modal() {
    const { isModalOpen, closeModal } = useModal();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            setLoading(true);
            setTimeout(() => setLoading(false), 3000);
            document.body.classList.add('hidden');
        } else {
            document.body.classList.remove('hidden');
        }
        return () => {
            document.body.classList.remove('hidden');
        };
    }, [isModalOpen]);

    return (
        <div className={`modal ${isModalOpen ? "open" : ""}`}>
            {loading ? (
                <div className="modal-loader">
                    <img src={Loader} alt="" />
                </div>
            ) : (
                <div className="modal__inner">
                    <button className="modal__close" onClick={closeModal}>
                        <img src={getImageURL("close.svg")} alt='close' loading='lazy' />
                    </button>
                    <div className="modal__checkmark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="63" viewBox="0 0 66 63" fill="none">
                            <path d="M65.5417 31.5L58.3233 23.2758L59.3292 12.3892L48.6496 9.96333L43.0583 0.555832L33 4.875L22.9417 0.555832L17.3504 9.96333L6.67084 12.3596L7.67668 23.2463L0.458344 31.5L7.67668 39.7242L6.67084 50.6404L17.3504 53.0662L22.9417 62.4738L33 58.125L43.0583 62.4442L48.6496 53.0367L59.3292 50.6108L58.3233 39.7242L65.5417 31.5ZM27.0833 46.2917L15.25 34.4583L19.4213 30.2871L27.0833 37.9196L46.5788 18.4242L50.75 22.625L27.0833 46.2917Z" fill="#CB8958" />
                        </svg>
                    </div>
                    <h3 className="modal__title">
                        Dziękujemy bardzo za rejestrację!
                    </h3>
                    <p className="modal__subtitle">
                        <b>Wysłaliśmy do Państwa e-mail z potwierdzeniem</b>
                    </p>
                    <p className="modal__text">
                        Proszę sprawdzić swoją skrzynkę odbiorczą (a jeśli to konieczne, także folder ze spamem) i potwierdzić rejestrację, aby kontynuować.
                    </p>
                </div>
            )}
        </div>
    );
}
