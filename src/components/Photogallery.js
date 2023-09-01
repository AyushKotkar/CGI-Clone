import React from 'react'

const Photogallery = () => {
  return (
    <div>
              <div className="section photgallery pt-0">
            <div className="container">
                <h2 className="section-heading text-center">Photo <em>Gallery</em></h2>
                <div className="col-md-12 mt-4 float-left">
                    <div className="row row-eq-height">
                        <div className="col-6 col-md-4 photo">
                            <img src="images/gallery-1.png" alt="" srcset=""/>
                        </div>
                        <div className="col-6 col-md-4 photo">
                            <img src="images/gallery-2.png" alt="" srcset=""/>
                        </div>
                        <div className="col-6 col-md-4 photo">
                            <img src="images/gallery-3.png" alt="" srcset=""/>
                        </div>
                        <div className="col-6 col-md-4 photo">
                            <img src="images/gallery-4.png" alt="" srcset=""/>
                        </div>
                        <div className="col-6 col-md-4 photo">
                            <img src="images/gallery-5.png" alt="" srcset=""/>
                        </div>
                        <div className="col-6 col-md-4 photo">
                            <img src="images/gallery-6.png" alt="" srcset=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Photogallery
