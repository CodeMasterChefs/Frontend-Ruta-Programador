import React from 'react'

export const Aniadir = () => {
  return (
    <div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                <label for="basic-url" class="form-label">Ingresa la URL del video que quieras añadir a tu playlist</label>
                  <label for="message-text" class="col-form-label"></label>
                  <form class="form-floating">
                    <div class="input-group mb-3">
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Enlace</span>
                        <input type="text" class="form-control" placeholder="URL" aria-label="URL" aria-describedby="basic-addon1"/>
                      </div>

                    </div>

                  </form>

                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Añadir</button>
            </div>
          </div>
        </div>
      </div></div>
  )
}
