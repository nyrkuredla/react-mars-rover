import React from 'react';

const PhotoCard = (props) => {
  let photoInfo = props.photoInfo;
  return (
    <div className="card col-md-4">
      <img className="card-img-top mars-photo mx-auto" src={photoInfo.img_src} alt="" />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Date: {photoInfo.earth_date}</li>
        <li className="list-group-item">Rover: {photoInfo.rover.name}</li>
        <li className="list-group-item">Rover status: {photoInfo.rover.status}</li>
      </ul>
    </div>
  )
}

export default PhotoCard;
