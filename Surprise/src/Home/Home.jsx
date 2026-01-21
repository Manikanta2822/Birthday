import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={HomeContainer}
    >
      <div
        className="card border-0 text-center p-5"
        style={{
          maxWidth: '560px',   // ⬅ increased width
          width: '100%',
          borderRadius: '26px',

          /* Glassmorphism */
          background: 'rgba(255, 255, 255, 0.18)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',

          /* Enhanced glow for bigger card */
          boxShadow: '0 30px 60px rgba(80, 0, 120, 0.3)',
        }}
      >
        <div className="card-body">
          <h1
            className="fw-bold mb-4"
            style={{
              color: '#4a145d',
              letterSpacing: '0.7px',
              fontSize: '2.8rem',   // ⬅ slightly bigger heading
            }}
          >
            🎉 Many More Happy Returns Of The Day Ra Potti🎂
          </h1>

          <p
            className="mb-5"
            style={{
              color: '#2f2f2f',
              fontSize: '1.15rem',  // ⬅ bigger text
              lineHeight: '1.7',
            }}
          >
            May your day be filled with warmth, laughter,
            and moments that make your heart smile ✨
          </p>

          <button
            className="btn btn-lg px-5 py-3 rounded-pill"
            onClick={()=>{navigate("/celebrate")}}
            style={{
              background: 'linear-gradient(135deg, #ff5da2, #845ec2)',
              color: 'white',
              border: 'none',
              boxShadow: '0 12px 28px rgba(132, 94, 194, 0.5)',
              transition: 'all 0.35s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.08)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)'
            }}
          >
            lets Celebrate 💖
          </button>
        </div>
      </div>
    </div>
  )
}

/* background styles */
const HomeContainer=
{
   minHeight: '100vh',
  backgroundImage: "url('/photos/home-background.png')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}
