// eslint-disable-next-line react/prop-types
const Button = ({ Letra, Direccion }) => {
  return (
    <div>
      <button
        className="btn btn-primary"
        data-bs-target={Direccion}
        data-bs-toggle="modal"
      >
        {Letra}
      </button>
    </div>
  );
};

export default Button;
