import React from "react";
import data from "./data";

function Travel() {
  console.log(data);
  return (
    <div className="travel">
      <div className="travel--wrapper">
        {data.map((item) => (
          <div className="img--" key={item.id}>
            <img className="img" src={item.imageUrl} alt="" />
            <div className="details">
              <span className="location">
                <i className=" location--icon fa-solid fa-location-dot"></i>
                {item.location}
              </span>
              <a
                className="ahref"
                href="https://www.google.com/maps/place/%CE%A6%CE%BF%CF%8D%CF%84%CE%B6%CE%B9/@35.3606237,138.7098538,14z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!5m1!1e4"
              >
                View on Google maps
              </a>
              <h1 className="title">{item.title}</h1>
              <span className="date">
                {item.startDate} - {item.endDate}
              </span>
              <span className="desc">{item.description}</span>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Travel;
