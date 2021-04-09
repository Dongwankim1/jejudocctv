import React from 'react';
import Iframe from 'react-iframe'

const Video = ({urlMap}) =>{

    return(
        <>
        {
          urlMap.map((urlconfig)=>(
            <div>
            <h1>{urlconfig.name}</h1>
            <Iframe url={urlconfig.url}
            width="810px"
            height= "600px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
            </div>

          ))
        }
       
       
         </>
         
    )
}


export default Video;