const Filaplaylist = () => {
  return (
  <div>
      <div className="container text-center">
        <div className="row">
         <div className="col-md-4">           
          </div>
          <div className="col-md-2">
            #
          </div>
          <div className="col-md-2">
          Videos
          </div>
          <div className="col-md-2">
          Añadido el:
          </div>
          <div className="col-md-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="#000000"/>
          <path d="M13 7H11V13H17V11H13V7Z" fill="#000000"/>
          </svg>
          </div>
        </div>
      </div>
      <table className="table">
        <tbody>

          <tr>
            <th scope="row">1</th>
            <td>video1</td>
            <td>27/03/2023</td>
            <td>15:04</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>video2</td>
            <td>23/03/2023</td>
            <td>13:04</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>video3</td>
            <td>27/12/2023</td>
            <td>15:08</td>
          </tr>
        </tbody>
      </table>
   </div>
  )
}

export default Filaplaylist