import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="container">
            {/* <!-- newsletter section starts --> */}
            <div className="news-letter">
                <div className="heading">Join Newsletter</div>
                <div className="col-md-8 offset-md-2 float-left mt-4">
                    <div className="row">
                        <input type="text" className="col-md-9" name="" placeholder="Enter Email id here ..." id=""/>
                        <button className="col-md-3">subscribe</button>
                    </div>
                </div>
            </div>
            {/* <!-- newsletter section starts --> */}
            <div className="col-md-12 footer-section">
                <div className="row">
                    <div className="col-md-3"><img src="images/logo.png" alt="" srcset=""/></div>
                    <div className="col-md-5 pr-5">
                        <div className="heading text-left">Our Office</div>
                        <address>
                            Chandigarh University CU-TBI office, 
                            Gharuan, Punjab 140413
                        </address>
                    </div>
                    <div className="col-md-4">
                        <div className="heading text-left">Our Office</div>
                        <address>
                            You should connect social area
                            for Any update
                        </address>
                        <p className="social-icon">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className="copyright">
        © Confederation of Global Innovators 2019 - 2020
    </div>
</div>
  )
}

export default Footer
