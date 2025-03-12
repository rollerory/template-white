import { useState } from "react";
import { useModal } from "@/context/ModalContext";
import "./form.scss";

export default function Form() {
    const { openModal } = useModal();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const inputs = form.querySelectorAll("input");
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");

        if (allFilled) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                openModal();
                inputs.forEach(input => input.value = "");
            }, 200);
        }
    };

    return (
        <>
            {loading && <div className="modal-loader"></div>}
            <form id="register-form" className="register-form" onSubmit={handleSubmit}>
                <label className="register-form__input">
                    <input required type="text" name="firstName" placeholder="First Name" />
                </label>
                <label className="register-form__input">
                    <input required type="email" name="email" placeholder="E-mail" />
                </label>
                <div className="btn register-form__btn">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

