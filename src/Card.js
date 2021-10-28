import React, { useState } from "react";

function Card() {
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,iure totam non neque vero tempora eligendi excepturi a sed, quamitaque expedita obcaecati. Excepturi, voluptatibus. Laborum ratione at quidem fuga!"
  );
  const [readMore, setReadMore] = useState(true);
  return (
    <section>
      <div className="Card">
        <img
          src="https://images.unsplash.com/photo-1506606401543-2e73709cebb4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="NY"
          className="Image"
        />
        <div className="About">
          <p>Best Of New York In 7 Days Tour</p>
          <p className="Price">$1,995</p>
        </div>
        <p className="Description">
          {readMore ? description.substring(0, 150) + "..." : description}
          <a onClick={() => setReadMore(!readMore)} className="ReadMore">
            {readMore ? "Read More" : "Show Less"}
          </a>
        </p>
        <button className="DeleteButton">Not Interested</button>
      </div>
      <div className="Card">
        <img
          src="https://images.unsplash.com/photo-1506606401543-2e73709cebb4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="NY"
          className="Image"
        />
        <div className="About">
          <p>Best Of New York In 7 Days Tour</p>
          <p className="Price">$1,995</p>
        </div>
        <p className="Description">
          {readMore ? description.substring(0, 150) + "..." : description}
          <a onClick={() => setReadMore(!readMore)} className="ReadMore">
            {readMore ? "Read More" : "Show Less"}
          </a>
        </p>
        <button className="DeleteButton">Not Interested</button>
      </div>
      <div className="Card">
        <img
          src="https://images.unsplash.com/photo-1506606401543-2e73709cebb4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="NY"
          className="Image"
        />
        <div className="About">
          <p>Best Of New York In 7 Days Tour</p>
          <p className="Price">$1,995</p>
        </div>
        <p className="Description">
          {readMore ? description.substring(0, 150) + "..." : description}
          <a onClick={() => setReadMore(!readMore)} className="ReadMore">
            {readMore ? "Read More" : "Show Less"}
          </a>
        </p>
        <button className="DeleteButton">Not Interested</button>
      </div>
    </section>
  );
}

export default Card;
