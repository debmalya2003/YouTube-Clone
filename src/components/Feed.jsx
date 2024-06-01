import React, {useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import {SideBar, Videos} from './'



const Feed = () => {
  const [selectedCategory,setSelectedCategory] =useState('New')
  const [videos, setVideos] = useState(null)

  useEffect(()=>{
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=> setVideos(data.items))
}, [selectedCategory])

  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
      <Box sx={{height:{sx:'auto', md:'92vh'}, borderRight:"1px solid #3d3d3d", px:{sx:0, md:2}}}>
    <SideBar
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
      </Box>

      <Box p={2} sx={{overflowY:'auto', height:'92vh' , flex:2}} >
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
          {selectedCategory} <span style={{color:'#1c76d4'}}>Videos</span>
        </Typography>
        
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed;