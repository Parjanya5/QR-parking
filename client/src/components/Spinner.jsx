import React from 'react'
import { RingLoader , CircleLoader , ClipLoader , FadeLoader } from 'react-spinners'
function Spinner({loader}) {
  return (
   <>
    <div className='d-flex justify-content-center mt-5 '>
        
      <FadeLoader
    cssOverride={{}}
    loading = {loader}
     size={80}
    speedMultiplier={0.5}
/>
      </div>
   </>
  )
}

export default Spinner
