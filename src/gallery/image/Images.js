import ImageModal from '../../Modals/ImageModal/ImageModal';
import styles from './Images.module.css';

import { useState } from 'react';

let caro1 = './images/caro1.jpeg';
let caro2 = './images/caro2.jpeg';
let caro3 = './images/caro3.jpeg';

let img4 = './images/img4.jpg';
let img5 = './images/img5.jpg';
let img6 = './images/img6.jpg';

let img7 = './images/img7.jpg';
let img8 = './images/img8.jpg';
let img9 = './images/img9.jpg';

let img10 = './images/img10.jpg';
let img11 = './images/img11.jpg';
let img12 = './images/img12.jpg';

let img13 = './images/img13.jpg';
let img14 = './images/img14.jpg';
let img15 = './images/img15.jpg';

let img16 = './images/img16.jpg';
let img17 = './images/img17.jpg';
let img18 = './images/img18.jpg';

let img19 = './images/img19.jpg';
let img20 = './images/img20.jpg';
let img21 = './images/img21.jpg';

let img22 = './images/img22.jpg';
let img23 = './images/img23.jpg';
let img24 = './images/img24.jpg';

let img25 = './images/img25.jpg';
let img26 = './images/img26.jpg';
let img27 = './images/img27.jpg';

let img28 = './images/img28.jpg';
let img29 = './images/img29.jpg';
let img30 = './images/img30.jpg';

let img31 = './images/img31.jpg';
let img32 = './images/img32.jpg';
let img33 = './images/img33.jpg';

let img34 = './images/img34.jpg';
let img35 = './images/img35.jpg';
let img36 = './images/img36.jpg';

let img37 = './images/img37.jpg';
let img38 = './images/img38.jpg';
let img39 = './images/img39.jpg';

let img40 = './images/img40.jpg';
let img41 = './images/img41.jpg';
let img42 = './images/img42.jpg';

let img43 = './images/img43.jpg';
let img44 = './images/img44.jpg';
let img45 = './images/img45.jpg';

let img46 = './images/img46.jpg';
let img47 = './images/img47.jpg';
let img48 = './images/img48.jpg';

let img49 = './images/img49.jpg';
let img50 = './images/img50.jpg';
let img51 = './images/img51.jpg';

let img52 = './images/img52.jpg';
let img53 = './images/img53.jpg';
let img54 = './images/img54.jpg';

let img55 = './images/img55.jpg';
let img56 = './images/img56.jpg';
let img57 = './images/img57.jpg';

let img58 = './images/img58.jpg';
let img59 = './images/img59.jpg';
let img60 = './images/img60.jpg';

let img61 = './images/img61.jpg';











export default function Images() {


  let [viewImage, setViewImage] = useState("");




  return (

    <div className={`${styles.imageDiv} container`} >

      <ImageModal view={viewImage} />

      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-4">
        <div className="col" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(caro1)} >
          <div className="card">
            <img src={caro1} className="card-img-top" alt="nysc" />

          </div>
        </div>

        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(caro2)}>
            <img src={caro2} className="card-img-top" alt="nysc" />

          </div>
        </div>
        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(caro3)}>
            <img src={caro3} className="card-img-top" alt="nysc" />

          </div>

        </div>



        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img5)}>
            <img src={img5} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img6)}>
            <img src={img6} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img7)}>
            <img src={img7} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img8)}>
            <img src={img8} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img9)}>
            <img src={img9} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img10)}>
            <img src={img10} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img11)}>
            <img src={img11} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img12)}>
            <img src={img12} className="card-img-top" alt="nysc" />

          </div>
        </div> */}





        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img14)}>
            <img src={img14} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img15)}>
            <img src={img15} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img16)}>
            <img src={img16} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img17)}>
            <img src={img17} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img18)}>
            <img src={img18} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img19)}>
            <img src={img19} className="card-img-top" alt="nysc" />

          </div>
        </div> */}



        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img21)}>
            <img src={img21} className="card-img-top" alt="nysc" />

          </div>
        </div> */}





        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img23)}>
            <img src={img23} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img24)}>
            <img src={img24} className="card-img-top" alt="nysc" />

          </div>
        </div> */}





        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img26)}>
            <img src={img26} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img27)}>
            <img src={img27} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img28)}>
            <img src={img28} className="card-img-top" alt="nysc" />

          </div>
        </div> */}





        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img30)}>
            <img src={img30} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img31)}>
            <img src={img31} className="card-img-top" alt="nysc" />

          </div>
        </div> */}







        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img34)}>
            <img src={img34} className="card-img-top" alt="nysc" />

          </div>
        </div>


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img35)}>
            <img src={img35} className="card-img-top" alt="nysc" />

          </div>
        </div>





        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img37)}>
            <img src={img37} className="card-img-top" alt="nysc" />

          </div>
        </div> */}









        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img44)}>
            <img src={img44} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img45)}>
            <img src={img45} className="card-img-top" alt="nysc" />

          </div>
        </div>


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img46)}>
            <img src={img46} className="card-img-top" alt="nysc" />

          </div>
        </div>


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img47)}>
            <img src={img47} className="card-img-top" alt="nysc" />

          </div>
        </div>


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img48)}>
            <img src={img48} className="card-img-top" alt="nysc" />

          </div>
        </div>


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img49)}>
            <img src={img49} className="card-img-top" alt="nysc" />

          </div>
        </div>


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img50)}>
            <img src={img50} className="card-img-top" alt="nysc" />

          </div>
        </div>


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img47)}>
            <img src={img47} className="card-img-top" alt="nysc" />

          </div>
        </div>


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img51)}>
            <img src={img51} className="card-img-top" alt="nysc" />

          </div>
        </div> */}




        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img57)}>
            <img src={img57} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img58)}>
            <img src={img58} className="card-img-top" alt="nysc" />

          </div>
        </div> */}






        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img61)}>
            <img src={img61} className="card-img-top" alt="nysc" />

          </div>
        </div>







        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img4)}>
            <img src={img4} className="card-img-top img-fluid" alt="nysc" />

          </div>
        </div>


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img13)}>
            <img src={img13} className="card-img-top" alt="nysc" />

          </div>
        </div> */}

        {/* <div className="col" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img20)}>
          <div className="card">
            <img src={img20} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img22)}>
            <img src={img22} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img25)}>
            <img src={img25} className="card-img-top" alt="nysc" />

          </div>
        </div> */}



        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img29)}>
            <img src={img29} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img33)}>
            <img src={img33} className="card-img-top" alt="nysc" />

          </div>
        </div>

        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img36)}>
            <img src={img36} className="card-img-top" alt="nysc" />

          </div>
        </div>


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img38)}>
            <img src={img38} className="card-img-top" alt="nysc" />

          </div>
        </div>



        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img39)}>
            <img src={img39} className="card-img-top" alt="nysc" />

          </div>
        </div>


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img40)}>
            <img src={img40} className="card-img-top" alt="nysc" />

          </div>
        </div>


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img41)}>
            <img src={img41} className="card-img-top" alt="nysc" />

          </div>
        </div>


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img42)}>
            <img src={img42} className="card-img-top" alt="nysc" />

          </div>
        </div>


        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img52)}>
            <img src={img52} className="card-img-top" alt="nysc" />

          </div>
        </div>


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img53)}>
            <img src={img53} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img54)}>
            <img src={img54} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


        {/* <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img55)}>
            <img src={img55} className="card-img-top" alt="nysc" />

          </div>
        </div> */}

        {/* 
        <div className="col">
          <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setViewImage(img59)}>
            <img src={img59} className="card-img-top" alt="nysc" />

          </div>
        </div> */}


      </div>


    </div>
  )
}