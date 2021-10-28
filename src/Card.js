import React, { useEffect, useState } from "react";

function Card({ data }) {
  const [readMore, setReadMore] = useState(true);

  return (
    <section>
      {data.map((data) => (
        <div className="Card" key={data.id}>
          <img src={data.image} alt={data.name} className="Image" />

          <div className="About">
            <p>{data.name}</p>
            <p className="Price">${data.price}</p>
          </div>

          <p className="Description">
            {readMore ? data.info.substring(0, 150) + "..." : data.info}
            <a onClick={() => setReadMore(!readMore)} className="ReadMore">
              {readMore ? "Read More" : "Show Less"}
            </a>
          </p>
        </div>
      ))}
    </section>
  );
}

export default Card;
