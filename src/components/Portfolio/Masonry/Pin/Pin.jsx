import { urlFor } from "../../../../utils/client";

import "./Pin.scss";

const Pin = ({ pin }) => {
  return (
    <div className="app__pin">
      <div className="app__pin-image">
        <picture>
          <source
            type="image/jpeg"
            src={urlFor(pin?.imgUrl[0]).width(500).url()}
            alt={pin?.title}
          />
          <img
            src={urlFor(pin?.imgUrl[0]).width(500).url()}
            alt={pin?.title}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  );
};

export default Pin;
