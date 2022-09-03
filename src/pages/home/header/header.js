import React, { useEffect, useState } from 'react'
import './header.css'
import { MdOutlineAdd } from 'react-icons/md'
import House from '../../../assets/house-door.jpg'
import Door from '../../../assets/shop-door.jpg'
import Shoe from '../../../assets/shoe.png'
import { getPhotoApi } from '../../../apiService'

export default function Header(props) {

  const { data } = props
  const [photoCard, setPhotoCard] = useState([])

  // function onClick() {
  //   props.handleBtnClick && props.handleBtnClick();
  // }

  useEffect(() => {
    console.log('zahid');
    getPhotoCardApi();
  }, []);

  function getPhotoCardApi() {
    getPhotoApi().then((result) => {
      console.log(result);
      setPhotoCard(result.data.content);
      console.log(result.data.content);
    })
  }




  return (
    <div className='p-4'>
      <div className='row justify-content-between'>
        <div className="col-6">
          <p className='m-0'>Discover</p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <MdOutlineAdd className="plus" />
        </div>
      </div>
      <div className='scroll-area'>
        <div className="row mt-3 mx-0">
          { photoCard.map((data) => {
            return( <div className="col-md-4 mb-4">
              <div className="card1">
                <img src={data.coverImageUrl} className="card-img-top" alt="House Image" />
                <div className="card-body">
                  <p className="card-text">{data.title}</p>
                </div>
              </div>
            </div>)
          })}
        </div>
      </div>
    </div>
  )
}
