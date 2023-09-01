import React from 'react'

const Video = () => {
  return (
    <div>
      <div className="section video-player" >
            <div className="container">
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/A-twOC3W558" data-target="#myModal">
                    <i className="icon fas fa-play"></i>
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">

                            <div className="modal-body">

                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                {/* <!-- 16:9 aspect ratio --> */}
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="" id="video" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Video
