import React from "react";
import { Stack,Box } from '@mui/material'

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({videos, direction,alignItems}) => {

    if(!videos?.length) return <Loader />;

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="space-evenly" alignItems= {alignItems || "start"} gap={2}>
        {
            videos?.filter((content) => content?.id.hasOwnProperty('channelId')  || content?.id.hasOwnProperty('videoId' )).map((item, i)=>(
                <Box key={i}>
                    {
                        item.id.videoId && <VideoCard video={item} />
                    }
                    {
                        item.id.channelId && <ChannelCard channelDetail={item} />
                    }
                </Box>
            ))
        }
    </Stack>
  )
}

export default Videos