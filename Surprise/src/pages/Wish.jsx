import React, { useEffect, useRef } from 'react'
import './Wish.css'

export default function Wish() {
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Start muted autoplay (allowed by browser)
    audio.muted = true
    audio.play().catch(() => {})

    // Unmute on first user interaction
    const enableSound = () => {
      audio.muted = false
      audio.play()
      document.removeEventListener('click', enableSound)
      document.removeEventListener('touchstart', enableSound)
    }

    document.addEventListener('click', enableSound)
    document.addEventListener('touchstart', enableSound)

    // Cleanup
    return () => {
      audio.pause()
      audio.currentTime = 0
      document.removeEventListener('click', enableSound)
      document.removeEventListener('touchstart', enableSound)
    }
  }, [])

  return (
    <div className="wish-container">
      {/* Background Music (no controls) */}
      <audio ref={audioRef} loop>
        <source src="/audio/celebration.mp3" type="audio/mpeg" />
      </audio>

      {/* Bubble animation */}
      <div className="bubbles">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Greeting Card */}
      <div className="wish-card">
        <h1>🎉 Wish you Many More Happy Birthday ra pottoda 🎉</h1>

        <p>
          May your days be filled with joy,<br />
          your dreams turn into reality,<br />
          and your journey ahead shine brighter than ever ✨<br /><br />

          Ela undhi surprise nachindha 🫂<br />
          Life long nathone ila happy ga undu<br />
          Breakup ani ededho cheppaku<br /><br />

          Eppatiki kalise untam ❤️<br /><br />

          As a husband ga chepthunna 😉<br />
          Live 100 years with me<br /><br />

          Nachithe oka hug 🫂 10 😚 lu ichey 😅
        </p>

        <h3>Love you Ra potti Diamond 💖</h3>
      </div>
    </div>
  )
}
