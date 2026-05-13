import React from "react";
import "./TestimonialSection.css";

import testimonialBg from "../../assets/clinic2.png";

function TestimonialSection() {
  return (
    <section
      className="testimonial-section"
      style={{
        backgroundImage: `url(${testimonialBg})`,
      }}
    >

      {/* Overlay */}
      <div className="testimonial-overlay"></div>

      {/* Content */}
      <div className="testimonial-content">

        <span className="quote-icon">”</span>

        <p>
          Donec imperdiet congue orci consequat mattis.
          Donec rutrum porttitor sollicitudin.
          Pellentesque id dolor tempor sapien feugiat
          ultrices nec sed neque. Fusce ac mattis nulla.
          Morbi eget ornare dui.
        </p>

        <div className="testimonial-line"></div>

        <h4>ASANA KORIM</h4>

      </div>

    </section>
  );
}

export default TestimonialSection;