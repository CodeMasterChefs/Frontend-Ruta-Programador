import React from 'react'
import Button from '../Button/Button'
import { Planet } from '../IconPlanet/Planet'
export const Playlist = () => {
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Crear una nueva Playlist</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Dale un nombre a tu Playlist:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Añade una descripción a tu Playlist:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                                <div>
                                    <Planet/>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Selecciona un Planeta</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <Button/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
