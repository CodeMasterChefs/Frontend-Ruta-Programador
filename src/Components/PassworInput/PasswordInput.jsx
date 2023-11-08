const PasswordInput = ({showPassword, password, onInputChange, setShowPassword}) => {
    return (
        <div style={{ position: "relative" }}>
            <input
                type={showPassword ? "text" : "password"} // CAMBIAR TIPO DE INPUT
                className="form-control"
                name="password"
                placeholder="Ingresar contraseña"
                value={password}
                onInput={onInputChange}
            />
            <button
                className="btn"
                type="button"
                onClick={() => setShowPassword(!showPassword)} // MOSTRAR U OCULTAR CONTRASEÑA
                style={{ cursor: "pointer", position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", color: "black" }} //CAMBIAR COLOR
            >
                {showPassword ?
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 19C12.946 19 13.81 18.897 14.598 18.719L12.841 16.962C12.568 16.983 12.291 17 12 17C6.649 17 4.576 13.154 4.074 12C4.45095 11.1588 4.96005 10.3834 5.582 9.70303L4.184 8.30503C2.646 9.97203 2.063 11.651 2.052 11.684C1.98302 11.8894 1.98302 12.1117 2.052 12.317C2.073 12.383 4.367 19 12 19ZM12 5.00003C10.163 5.00003 8.654 5.39603 7.396 5.98103L3.707 2.29303L2.293 3.70703L20.293 21.707L21.707 20.293L18.388 16.974C21.002 15.023 21.935 12.359 21.949 12.317C22.018 12.1117 22.018 11.8894 21.949 11.684C21.927 11.617 19.633 5.00003 12 5.00003ZM16.972 15.558L14.692 13.278C14.882 12.888 15 12.459 15 12C15 10.359 13.641 9.00003 12 9.00003C11.541 9.00003 11.112 9.11803 10.723 9.30903L8.915 7.50103C9.90752 7.16044 10.9507 6.99103 12 7.00003C17.351 7.00003 19.424 10.846 19.926 12C19.624 12.692 18.76 14.342 16.972 15.558Z" fill="black" />
                    </svg> :
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9C11.206 9.00524 10.4459 9.32299 9.88447 9.88447C9.32299 10.4459 9.00524 11.206 9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9Z" fill="black" />
                        <path d="M12 5C4.367 5 2.073 11.617 2.052 11.684L1.946 12L2.051 12.316C2.073 12.383 4.367 19 12 19C19.633 19 21.927 12.383 21.948 12.316L22.054 12L21.949 11.684C21.927 11.617 19.633 5 12 5ZM12 17C6.649 17 4.576 13.154 4.074 12C4.578 10.842 6.652 7 12 7C17.351 7 19.424 10.846 19.926 12C19.422 13.158 17.348 17 12 17Z" fill="black" />
                    </svg>}
            </button>
        </div>
    )
}

export default PasswordInput;