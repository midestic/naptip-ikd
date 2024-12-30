


export default function VideoModal({ viewVid }) {





    return (

        <div>
            {/* <!-- Button trigger modal --> */}


            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#videoModal">
  Launch demo modal
</button> */}

            {/* <!-- Modal --> */}


            <div className="modal fade  modal-lg" id="videoModal" tabindex="-1" aria-labelledby="videoModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <video width='100%' height="100%" controls>

                                <source src={viewVid} type="video/mp4" />

                            </video>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}