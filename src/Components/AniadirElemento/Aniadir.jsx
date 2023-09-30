import React from 'react'
import Button from '../Button/Button'
import { Anuncio } from '../Anuncio/Anuncio'

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
              <Anuncio/>
            </div>
            <div class="modal-footer">
              <Button />
            </div>
          </div>
        </div>
      </div></div>
  )
}
