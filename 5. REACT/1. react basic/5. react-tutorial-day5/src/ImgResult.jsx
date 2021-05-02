import React from "react";
const ImgResult = (props) => {
  const img1 = `https://source.unsplash.com/602x405/?${props.name}`;
  const img2 = `https://source.unsplash.com/603x400/?${props.name}`;
  const img3 = `https://source.unsplash.com/600x401/?${props.name}`;
  const img4 = `https://source.unsplash.com/600x402/?${props.name}`;
  const img5 = `https://source.unsplash.com/600x403/?${props.name}`;
  const img6 = `https://source.unsplash.com/605x404/?${props.name}`;
  const img7 = `https://source.unsplash.com/607x405/?${props.name}`;
  const img8 = `https://source.unsplash.com/608x406/?${props.name}`;
  const img9 = `https://source.unsplash.com/600x407/?${props.name}`;
  return (
    <>
      <div className="gallary">
        <img src={img1} alt="img-data" />
        <img src={img2} alt="img-data" />
        <img src={img3} alt="img-data" />
        <img src={img4} alt="img-data" />
        <img src={img5} alt="img-data" />
        <img src={img6} alt="img-data" />
        <img src={img7} alt="img-data" />
        <img src={img8} alt="img-data" />
        <img src={img9} alt="img-data" />
      </div>
    </>
  );
};
export default ImgResult;
