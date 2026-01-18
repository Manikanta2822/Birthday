import React, { useState } from 'react'

// import images
import option1 from '../assets/Questionphotos/photo-1.png'
import option2 from '../assets/Questionphotos/photo-2.png'
import option3 from '../assets/Questionphotos/photo-3.png'
import { useNavigate } from 'react-router-dom'

const options = [
  { id: 1, label: 'Option One', image: option1 },
  { id: 2, label: 'Option Two', image: option2 },
  { id: 3, label: 'Option Three', image: option3 },
]

const glassCardStyle = {
  background: 'rgba(255,255,255,0.15)',
  backdropFilter: 'blur(12px)',
  borderRadius: '20px',
}

export default function Question() {
  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

   const handleSubmit = () => {
    if (!selected) return
    console.log('Selected option:', selected)
    navigate("/wish")
  }

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: 'linear-gradient(135deg,#667eea,#f797a7)',
      }}
    >
      <div className="card border-0 text-center p-5" style={glassCardStyle}>
        <h2 className="fw-bold mb-4 text-white">
          Choose the one you like most
        </h2>

        {/* Selected value */}
        <div
          className="dropdown-toggle bg-white p-3 rounded d-flex align-items-center justify-content-between"
          style={{ cursor: 'pointer' }}
          onClick={() => setOpen(!open)}
        >
          {selected ? (
            <div className="d-flex align-items-center gap-3">
              <img
                src={selected.image}
                alt={selected.label}
                width={100}
                height={100}
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
              <span>{selected.label}</span>
            </div>
          ) : (
            <span className="text-muted">Select an option</span>
          )}
        </div>

        {/* Dropdown list */}
        {open && (
          <div className="bg-white rounded mt-2 shadow">
            {options.map((opt) => (
              <div
                key={opt.id}
                className="d-flex align-items-center gap-3 p-3 dropdown-item"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setSelected(opt)
                  setOpen(false)
                }}
              >
                <img
                  src={opt.image}
                  alt={opt.label}
                  width={100}
                  height={100}
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
                <span>{opt.label}</span>
              </div>
            ))}
          </div>
        )}
        {/* Submit Button */}
        <button
          className="btn btn-light fw-bold mt-4 px-5 py-2"
          disabled={!selected}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
}
