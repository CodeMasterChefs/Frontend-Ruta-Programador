// eslint-disable-next-line react/prop-types
import "./Card.css"
export const Card = ({ Descripcion, Titulo }) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="position-absolute top-0 end-0">
            <button className="option-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="bx-dots-vertical-rounded">
                <path
                  id="Vector"
                  d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                  fill="#F2F2F2"
                />
              </g>
            </svg>
            </button>
            
          </div>
          <div className="card-body">
            <h5 className="card-title">{Titulo}</h5>
            <p className="card-text">{Descripcion}</p>
          </div>
        </div>
      </div>
    </>
  );
};
