import React from 'react'
import { Link } from "react-router-dom"
import { CheckCircle } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"


import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle  } from "../utils/constants"


const VideoCard = ({video: {id:{videoId}, snippet}}) => {
  
  return (
    <Card sx={{width:{xs:'100%', sm:'358px', md:'320px' }, boxShadow:'none', borderRadius:0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia 
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl }
        alt={snippet?.title}
        sx={{width:{xs:'100%', sm:'358px', md:'320px'}, height:180}}
        />
        </Link>
        <CardContent 
        sx={{backgroundColor:"#1e1e1e", width:{xs:'100%', sm:'326px', md:'290px'}, height:'106px'}}
        >
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography
             variant="subtitle1" 
              fontWeight="bold" 
              color="#FFF"
              sx={{width:'300px',wordBreak: "break-word", marginRight:'0px' }}  
            >
              {snippet?.title.replaceAll('&#39;', "'").slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ?  `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography
             variant="subtitle2" 
              color="gray"
            >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx ={{fontSize:12, color:'gray', ml:'5px'}}/>
            </Typography>
          </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard