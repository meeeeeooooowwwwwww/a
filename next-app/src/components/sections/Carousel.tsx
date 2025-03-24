'use client';

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import path from 'path';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  centerMode: false,
  centerPadding: '0px',
  cssEase: 'cubic-bezier(0.45, 0, 0.55, 1)',
  pauseOnHover: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ],
  appendDots: (dots: React.ReactNode) => (
    <div
      style={{
        width: "100%",
        backgroundColor: "transparent",
        padding: "20px 10px",
        position: "relative",
        marginTop: "15px"
      }}
    >
      <ul 
        style={{ 
          padding: "0px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          width: "100%",
          maxWidth: "80%",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      > 
        {dots} 
      </ul>
    </div>
  ),
  customPaging: (i: number) => (
    <div
      style={{
        width: "28px",
        height: "28px",
        color: "#333",
        backgroundColor: "#ffebee",
        border: "1px solid #f8bbd0",
        borderRadius: "50%",
        padding: "2px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "11px",
        fontWeight: "bold",
        cursor: "pointer",
        margin: "5px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "all 0.2s ease"
      }}
    >
      {i + 1}
    </div>
  )
};

export default function Carousel({ items }: { items: CarouselItem[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const openModal = (image: string) => {
    const index = items.findIndex(item => item.image === image);
    setCurrentImageIndex(index);
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const goToNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % items.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(items[nextIndex].image);
  };

  const goToPrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + items.length) % items.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(items[prevIndex].image);
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section style={{ position: 'relative', backgroundColor: '#f8f8f8', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
        <div className="carousel-container" style={{ margin: '0 -10px' }}>
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.id} style={{ 
                position: 'relative', 
                height: '250px', 
                borderRadius: '1rem', 
                overflow: 'hidden', 
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '10px', 
                backgroundColor: '#fff',
                margin: '0 10px'
              }} onClick={() => openModal(item.image)}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={240}
                  height={160}
                  style={{ 
                    objectFit: 'cover', 
                    width: '100%', 
                    height: '100%',
                    borderRadius: '8px'
                  }}
                  priority
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {isModalOpen && selectedImage && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ 
            position: 'relative', 
            width: '90%', 
            height: '90vh', 
            borderRadius: '16px', 
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          }}>
            {/* Left Arrow Navigation */}
            <button 
              onClick={goToPrevImage}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 1001,
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                transition: 'all 0.2s ease'
              }}
            >
              <FaChevronLeft size={24} />
            </button>
            
            <div className="image-container" style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                overflow: 'hidden',
                borderRadius: '16px',
                maxWidth: '70%',
                height: '70vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                backgroundColor: 'rgba(0, 0, 0, 0.1)'
              }}>
                <Image
                  src={selectedImage}
                  alt="Enlarged Image"
                  width={1500}
                  height={1200}
                  className="modal-image"
                  style={{ 
                    objectFit: 'contain',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    borderRadius: '12px'
                  }}
                />
              </div>
            </div>
            
            {/* Right Arrow Navigation */}
            <button 
              onClick={goToNextImage}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 1001,
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                transition: 'all 0.2s ease'
              }}
            >
              <FaChevronRight size={24} />
            </button>
            
            <button onClick={closeModal} style={{ 
              position: 'absolute', 
              bottom: '20px', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              background: 'linear-gradient(145deg, #f48fb1, #f06292)',
              color: 'white', 
              border: 'none', 
              borderRadius: '30px', 
              padding: '8px 20px', 
              cursor: 'pointer', 
              fontWeight: 'bold',
              fontSize: '13px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3), inset 0 1px 3px rgba(255,255,255,0.5)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <FaStar style={{ fontSize: '12px', animation: 'sparkle 1.5s infinite', position: 'relative' }} />
              <span>Close</span>
              <style jsx global>{`
                @keyframes sparkle {
                  0% { transform: scale(1); opacity: 0.8; }
                  50% { transform: scale(1.2); opacity: 1; }
                  100% { transform: scale(1); opacity: 0.8; }
                }
              `}</style>
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 