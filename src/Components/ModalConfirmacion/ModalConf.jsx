// eslint-disable-next-line react/prop-types
export const ModalConf = ({ Texto, ide }) => {
  return (
    <>
      <div
        className="modal fade"
        id={ide}
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">{Texto}</div>
            <div className="d-flex flex-row-reverse">
              <div className="p-2">
                <button className="btn btn-primary">Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
