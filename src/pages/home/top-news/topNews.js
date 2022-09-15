import React, { useEffect, useState } from 'react'
import './topNews.css'
import { MdOutlineAdd } from 'react-icons/md'
import House from '../../../assets/house-door.jpg'
import Door from '../../../assets/shop-door.jpg'
import Shoe from '../../../assets/shoe.png'
import { getNewsApi } from '../../../apiService'

export default function TopNews(props) {

  const { data } = props
  const [newsCard, setNewsCard] = useState([])

  // function onClick() {
  //   props.handleBtnClick && props.handleBtnClick();
  // }

  useEffect(() => {
    console.log('zahid');
    getNewsCardApi();
  }, []);

  function getNewsCardApi() {
    getNewsApi().then((result) => {
      console.log(result);
      setNewsCard(result.data.articles);
      console.log(result.data.articles);
    })
  }




  return (
    <div className='p-4'>
      <div className='row justify-content-between'>
        <div className="col-6">
          <p className='m-0'>Top News</p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <MdOutlineAdd className="plus" />
        </div>
      </div>
      <div className='scroll-area'>
        <div className="row mt-3 mx-0">
          { newsCard.map((data) => {
            return( <div className="col-md-4 mb-4">
              <div className="card1">
                <img src={data.urlToImage} className="card-img-top" alt="Image" />
                <p className='news-name'>{data.source.name}</p>
                <div className="card-body">
                  <a href={data.url} className="card-text">{data.title}</a>
                </div>
              </div>
            </div>)
          })}
        </div>
      </div>
    </div>
  )
}
