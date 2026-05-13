import React from "react";
import "./ContactMap.css";

function ContactMap() {
  return (

    <section className="contact-map-section">

      <div className="map-container">

        <iframe
          title="Clinic Location"

          src="https://www.google.com/maps?q=200+D-block+Green+lane+USA&output=embed"

          allowFullScreen=""
          loading="lazy"
        ></iframe>

      </div>

    </section>
  );
}

export default ContactMap;