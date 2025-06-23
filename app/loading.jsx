import { ThreeDot } from "react-loading-indicators";
import React from 'react'

const loading = () => {
  return (
    <>
     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
          <ThreeDot
            variant="bob"
            color="#32cd32"
            size="medium"
            text="Please wait..."
            textColor="#c08f70"
          />
        </div>
    </>
  )
}

export default loading
