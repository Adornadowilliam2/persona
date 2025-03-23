import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Features() {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
        <Navbar setShowDetails={setShowDetails} showDetails={showDetails} />
        <h1>Features</h1>
    </div>
  )
}
