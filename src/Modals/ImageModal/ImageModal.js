import styles from './ImageModal.module.css'
let caro1 = './images/caro1.jpeg';

export default function ImageModal({ view }) {





  return (

    <div>
      {/* <!-- Button trigger modal --> */}


      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

      {/* <!-- Modal --> */}


      <div className={`${styles.modalCont} modal fade  modal-lg`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className={`${styles.modalCont} modal-content`} >
            <div className="modal-header">
              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className={`${styles.modalBody} modal-body`}>
              <img src={view} alt="dhhdhd" className="img-fluid" />
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}