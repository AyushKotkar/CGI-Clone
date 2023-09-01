import React from 'react'

const Whoweare = () => {
  return (
    <div>
        <div className="section who-we-are">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h3 className="page-heading">Who are we</h3>
                        <p>The Confederation of Global Innovators (also known as CGI) is a platform created for the demographic dividend of our nation. We strongly believe that today our country’s youth, which comprises more than 65% of the total population,
                            is the biggest asset for our country. From the point of inception, the CGI, as a community, has worked tirelessly in the field of bridging the gap between the stakeholders of development (like students, professional aspirants
                            etc) and the opportunities like the corporate houses. The CGI is created to serve as a platform to connect innovators, stakeholders of development and the student community.</p>
                        <p><a href="aboutus.html" className="cgi-btn"> Read more...</a></p>

                    </div>
                    <div className="col-md-5"><img src="images/about-us-image.png" alt="" className="img-fluid" srcset=""/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whoweare
