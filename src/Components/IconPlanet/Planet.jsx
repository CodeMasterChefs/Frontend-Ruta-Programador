export const Planet = (planetIcon = "") => {
  return (
    <div>
      <figure className="figure">
        {/*        <img
          src={planetIcon}
          className="figure-img img-fluid rounded"
          alt={planetIcon}
        />*/}
        <figcaption className="figure-caption">{"" + planetIcon}</figcaption>
      </figure>
    </div>
  );
};
