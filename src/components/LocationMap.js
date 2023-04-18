import React from "react";

const LocationMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4726.311612497526!2d-96.66604345665185!3d33.108900041310086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c10d1eab42417%3A0x38dca4811b06a34!2sDon%20Rodenbaugh%20Aquatics%20Center!5e0!3m2!1sen!2sus!4v1681158968629!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;
