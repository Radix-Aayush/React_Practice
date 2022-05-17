import React from "react";
import image1 from '../assets/card-1.jpg';
import image2 from '../assets/card-2.jpg';
import image3 from '../assets/card-3.jpg';
import image4 from '../assets/card-4.jpg';


let ImageCard = () => {
    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                     <div className="col-md-3">
                          <div className="card shadow-lg">
                          <img src={image1} alt=""/>
                              <div class="card-body">
                                  <h3>Aayush</h3>
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                   when an unknown printer took a galley of type and scrambled it to make a type 
                                   specimen book.</p>
                                   <button className="btn btn-dark btn-sm">Read More</button>
                              </div>
                          </div>
                     </div>
                     <div className="col-md-3">
                          <div className="card shadow-lg">
                          <img src={image2} alt=""/>
                              <div class="card-body">
                                  <h3>Aayush</h3>
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                   when an unknown printer took a galley of type and scrambled it to make a type 
                                   specimen book.</p>
                                   <button className="btn btn-dark btn-sm">Read More</button>
                              </div>
                          </div>
                     </div>
                     <div className="col-md-3">
                          <div className="card shadow-lg">
                          <img src={image3} alt=""/>
                              <div class="card-body">
                                  <h3>Aayush</h3>
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                   when an unknown printer took a galley of type and scrambled it to make a type 
                                   specimen book.</p>
                                   <button className="btn btn-dark btn-sm">Read More</button>
                              </div>
                          </div>
                     </div>
                     <div className="col-md-3">
                          <div className="card shadow-lg">
                          <img src={image4} alt=""/>
                              <div class="card-body">
                                  <h3>Aayush</h3>
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                   when an unknown printer took a galley of type and scrambled it to make a type 
                                   specimen book.</p>
                                   <button className="btn btn-dark btn-sm">Read More</button>
                              </div>
                          </div>
                     </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ImageCard;