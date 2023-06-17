import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
let data=[{image:["https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg",
"https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg",
"https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg"]}]
const DetailsPage = () => {
    const [Img,setImg]=useState(data.image[0])
    let i=0
    setInterval(()=>{
   if(i==data.image.length){
    i=0
   }
   else {
    i++
    setImg(data.image[i])
   }
    },2000)
  return (
  <Box>
    <Box className='carosoul'>
      <img src={Img} alt="" />
    </Box>
  </Box>
  )
}

export default DetailsPage