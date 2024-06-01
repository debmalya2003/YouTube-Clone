import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {
const [channelDetail, setChannelDetail] = useState();
const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'200px',
          background: 'linear-gradient(294deg, rgba(0,238,247,1) 0%, rgba(28,118,212,1) 35%, rgba(0,212,255,1) 100%)',
          zIndex:10,
        }} 
      
        />
        <ChannelCard channelDetail={channelDetail}  marginTop='-140px'/>
      </Box>
      <Box p={2} display='flex'>
        <Box />
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail