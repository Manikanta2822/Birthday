import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// 🔹 Image list (same index = same year)
const images = Array.from({ length: 21 }, (_, i) =>
  `/src/assets/photos/${i + 1}.jpg`
)

export default function Celebratepage() {
  const [count, setCount] = useState(1)
  const navigate = useNavigate()

  const handleNext = () => {
    if (count < 21) {
      setCount(prev => prev + 1)
    } else {
      navigate('/question')
    }
  }

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: 'linear-gradient(135deg, #667eea, #f797a7)',
      }}
    >
      {/* Wrapper for 3 cards */}
      <div className="d-flex align-items-center gap-4">

        {/* LEFT IMAGE CARD */}
        <div className="card border-0 p-3" style={glassCardStyle}>
          <img
            key={`left-${count}`}
            src={images[count - 1]}
            onError={e => {
              e.currentTarget.onerror = null
              e.currentTarget.src = images[count - 1].replace('.jpg', '.jpeg')
            }}
            alt="memory left"
            className="img-fluid rounded-4 animate-fade"
            style={imageStyle}
          />
        </div>

        {/* CENTER CARD */}
        <div className="card border-0 text-center p-5" style={glassCardStyle}>
          <h2 className="fw-bold mb-4 text-white">
            🎂 Happy birthday dear 🎉
          </h2>

          <div key={count} className="mb-4 animate-bounce">
            <span
              className="d-inline-block rounded-circle fw-bold"
              style={numberStyle}
            >
              {count}
            </span>
          </div>

          <p className="text-white mb-4 fs-5">
            Each year reminds us a beautiful memory ✨
          </p>

          <button
            onClick={handleNext}
            className="btn btn-lg px-5 py-3 rounded-pill fw-semibold"
            style={buttonStyle}
          >
            {count < 21 ? 'Next 🎉' : 'Finish 💖'}
          </button>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="card border-0 p-3" style={glassCardStyle}>
          <img
            key={`right-${count}`}
            src={images[count - 1]}
            onError={e => {
              e.currentTarget.onerror = null
              e.currentTarget.src = images[count - 1].replace('.jpg', '.jpeg')
            }}
            alt="memory right"
            className="img-fluid rounded-4 animate-fade"
            style={imageStyle}
          />
        </div>

      </div>
    </div>
  )
}

/* 🔹 Shared styles (UNCHANGED) */
const glassCardStyle = {
  width: '420px',
  borderRadius: '28px',
  background: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(18px)',
  WebkitBackdropFilter: 'blur(18px)',
  boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
}

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

const numberStyle = {
  width: '160px',
  height: '160px',
  lineHeight: '160px',
  fontSize: '4rem',
  color: 'white',
  background: 'linear-gradient(135deg, #ff5da2, #845ec2)',
  boxShadow: '0 15px 30px rgba(132, 94, 194, 0.5)',
}

const buttonStyle = {
  background: 'linear-gradient(135deg, #00c9ff, #92fe9d)',
  border: 'none',
  color: '#1f2933',
  boxShadow: '0 10px 25px rgba(0, 201, 255, 0.4)',
  transition: 'all 0.3s ease',
}
