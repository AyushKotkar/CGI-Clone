import React from 'react'

const Counter = () => {
  return (
    <div>
        <div className="section counter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 counter-value">
                        <img src="images/counter-first-icon.png" alt="" srcset=""/>
                        <span className="count"> 00</span></div>
                    <div className="col-sm-6 col-md-3 counter-value">
                        <img src="images/counter-second-icon.png" alt="" srcset=""/>
                        <span className="count">00</span></div>
                    <div className="col-sm-6 col-md-3 counter-value">
                        <img src="images/counter-third-icon.png" alt="" srcset=""/>
                        <span className="count">00</span></div>
                    <div className="col-sm-6 col-md-3 counter-value">
                        <img src="images/counter-fourth-icon.png" alt="" srcset=""/>
                        <span className="count">00</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter
