import React from "react";
import Gallery1 from "../utils/img/galeria01.jpg";
import Gallery2 from "../utils/img/galeria02.jpg";
import Gallery3 from "../utils/img/galeria03.jpg";
import Gallery4 from "../utils/img/galeria04.jpg";
import Gallery5 from "../utils/img/galeria05.jpg";
import Gallery6 from "../utils/img/galeria06.jpg";

export function ImageGallery() {
  return (
    <div className="container py-5">
      <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">
        Galeria de Images
      </h2>
      <div className="row">
        <div className="col-md-4 px-2">
            <div className="my-3">
                <img src={Gallery1} className="img-fluid img-fluid border rounded" alt="" />
            </div>
            <div className="my-3">
                <img src={Gallery2} className="img-fluid img-fluid border rounded" alt="" />
            </div>
        </div>

        <div className="col-md-4 px-2">
            <div className="my-3">
                <img src={Gallery3} className="img-fluid img-fluid border rounded" alt="" />
            </div>
            <div className="my-3">
                <img src={Gallery4} className="img-fluid img-fluid border rounded" alt="" />
            </div>
        </div>

        <div className="col-md-4 px-2">
            <div className="my-3">
                <img src={Gallery5} className="img-fluid img-fluid border rounded" alt="" />
            </div>
            <div className="my-3">
                <img src={Gallery6} className="img-fluid img-fluid border rounded" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}
