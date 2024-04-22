import React from "react";
import "../Map/Map.css";

const Map = () => {
  return (
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.6672626922577!2d28.855717477399857!3d46.98786973049735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9794cde7c1b3f%3A0x1463dce1bdcd9fcd!2sSTEP%20IT%20Academy!5e0!3m2!1sru!2s!4v1709832836037!5m2!1sru!2s"
      // width="100%"
      // height="auto"
      // style={{ border: '0', borderRadius: '0 16px 16px 0' }}
      className="mapFrame"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowFullScreen
    ></iframe>
  );
};

export default Map;
