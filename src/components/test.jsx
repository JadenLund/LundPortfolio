import "../App.css";
//two options with this
// Option one - if there is no imageBack, then do not allow for flipping
// I think what to do is on About.js do a ternary -> ImageBack == null ? <image scr={image}/> : <Test image={...}/>

export default function Test({ image, imageBack }) {
  return (
    <div className="flip-card h-b hover:rotate-y-180 w-c">
      <div className="flip-card-inner transition-transform duration-1000 relative text-center shadow-custom ">
        <img
          src={image}
          className="flip-card-front absolute backface-visibility-hidden"
        />
        <img src={imageBack} className="flip-card-back absolute" />
      </div>
    </div>
  );
}
