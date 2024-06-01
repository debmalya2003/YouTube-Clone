import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import {Videos} from './'



const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();


  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=> setVideos(data.items))
}, [searchTerm])

  return (
      <Box p={2} minHeight="95vh" >
        <Typography variant='h4' fontWeight="bold" mb={3} ml={{ sm: "100px"}} color="white">
          Search Results for <span style={{color:'#1c76d4'}}>{searchTerm}</span> videos
        </Typography>
        <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
      </Box>
  )
}

export default SearchFeed;