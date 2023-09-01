import React from 'react'

const Slider = () => {
  return (
    <div>
          <div className="main-slider">
        <div id="formaSliderCaptions" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/slider-image.png" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <div className="row row-eq-height">
                            <div className="col-md-8 mt-5">
                                <h5>Do you want to learn?</h5>
                                <p>Connecting for <em>Contributing</em> Interacting for <span>Innovating</span></p>
                                <div className="w-100 float-left"><a href="#" className="cgi-btn">Join with Us <i
                                            className="fas fa-angle-double-right"></i></a></div>
                            </div>
                            <div className="col-md-4 banner-form">
                                <div className="">
                                    <form className="needs-validation" novalidate>
                                        <div className="form-row">
                                            <div className="col-md-12 mb-4">
                                                <input type="text" className="form-control" placeholder="Name..." required/>
                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <input type="text" className="form-control" placeholder="Email id..." required/>
                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <input type="text" className="form-control" placeholder="Phone No..." required/>
                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <select className="custom-select form-control">
                                                    <option> Are you student</option>
                                                    <option> Are you Entrepreneur</option>
                                                    <option> Are you Investor</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12">
                                                <button className="btn cgi-btn w-100" type="submit">Submit form</button>
                                            </div>
                                        </div>



                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <a className="carousel-control-prev" href="#formaSliderCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#formaSliderCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a> 
        </div>
    </div>
    </div>
  )
}

export default Slider
