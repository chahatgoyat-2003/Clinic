// ExpertDoctors.jsx
import React, { useState, useEffect } from 'react';
import './ExpertDoctors.css';

// Import doctor images
import doctor1 from '../../assets/doctor1.png';
import doctor2 from '../../assets/doctor2.png';
import doctor3 from '../../assets/doctor3.png';
import doctor4 from '../../assets/doctor4.png';
import doctor5 from '../../assets/doctor5.png';
import doctor6 from '../../assets/doctor6.png';

const allDoctors = [
  { id: 1, name: 'Mirazul Alom', specialty: 'Neurologist', img: doctor1 },
  { id: 2, name: 'John Smith', specialty: 'Cardiologist', img: doctor2 },
  { id: 3, name: 'Sarah Lee', specialty: 'Dentist', img: doctor3 },
  { id: 4, name: 'David Miller', specialty: 'Neurologist', img: doctor4 },
  { id: 5, name: 'Sarah Johnson', specialty: 'Cardiologist', img: doctor5 },
  { id: 6, name: 'Michael Chen', specialty: 'Dermatologist', img: doctor6 },
];

const ExpertDoctors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 900) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, cardsToShow]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + cardsToShow >= allDoctors.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? allDoctors.length - cardsToShow : prev - 1
    );
  };

  const visibleDoctors = allDoctors.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  // Wrap-around support
  if (visibleDoctors.length < cardsToShow) {
    visibleDoctors.push(
      ...allDoctors.slice(0, cardsToShow - visibleDoctors.length)
    );
  }

  return (
    <div className="expert-doctors-section">
      <h2 className="section-title">Expert Doctors</h2>

      <div className="carousel-container">
        {/* Left Arrow */}
        <button className="carousel-arrow prev-arrow" onClick={prevSlide}>
          ❮
        </button>

        {/* Doctors */}
        <div className="doctors-carousel">
          <div className="doctors-grid">
            {visibleDoctors.map((doctor) => (
              <div className="doctor-card" key={doctor.id}>
                <div className="doctor-img-wrapper">
                  <img src={doctor.img} alt={doctor.name} />
                </div>

                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button className="carousel-arrow next-arrow" onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {allDoctors.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertDoctors;