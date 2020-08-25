import React from 'react'
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className='recommendedVideos'>
           <h2>Recommended</h2> 
           <div className='recommendedVideos__videos'>
            <VideoCard
             title='Become a web dev in 10 mins'
             views='2.3M views'
             timestamp='3 days ago'
             channelImage='../public/Batie.jpg'
             channel='Batie react'
             image='https://www.eschoolnews.com/files/2020/01/coding-science.jpg'
            />
            <VideoCard
             title='React in 5 steps'
             views='100k views'
             timestamp='7 days ago'
             channelImage='../public/logo192.png'
             channel='react guru'
             image='https://media.wired.com/photos/5cc244c9af643e2f373ebb28/master/pass/Coding-Becomes-Criminal.jpg'
            />
            <VideoCard
             title='How I became a self-taught web dev'
             views='200k views'
             timestamp='5 days ago'
             channelImage='../public/logo512.png'
             channel='Learn code'
             image='https://www.kayafm.co.za/wp-content/uploads/2018/03/Learn-coding-online.jpeg'
            />
            <VideoCard
             title='Become a web dev in 10 mins'
             views='2.3M views'
             timestamp='3 days ago'
             channelImage='../public/Batie.jpg'
             channel='Batie react'
             image='https://d1y8sb8igg2f8e.cloudfront.net/images/shutterstock_148972376.width-800.jpg'
            />
            <VideoCard
             title='React in 5 steps'
             views='100k views'
             timestamp='7 days ago'
             channelImage='../public/logo192.png'
             channel='react guru'
             image='https://miro.medium.com/max/3840/1*eBU_xHJvtbDGuejusf4cLA.jpeg'
            />
            <VideoCard
             title='How I became a self-taught web dev'
             views='200k views'
             timestamp='5 days ago'
             channelImage='../public/logo512.png'
             channel='Learn code'
             image='https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2-1024x439.jpg'
            />
            <VideoCard
             title='Become a web dev in 10 mins'
             views='2.3M views'
             timestamp='3 days ago'
             channelImage='../public/Batie.jpg'
             channel='love to code'
             image='https://www.kajeet.net/hs-fs/hubfs/blog_images/Coding-Classroom-Blog.png?width=749&name=Coding-Classroom-Blog.png'
            />
            <VideoCard
             title='React in 5 steps'
             views='100k views'
             timestamp='7 days ago'
             channelImage='../public/logo192.png'
             channel='mad coders'
             image='https://www.thoughtfulminds.org/wp-content/uploads/2019/08/Technical-Content-writer.jpg'
            />
            <VideoCard
             title='How I became a self-taught web dev'
             views='200k views'
             timestamp='5 days ago'
             channelImage='../public/logo512.png'
             channel='code junky'
             image='https://marj3.azureedge.net/wp-content/uploads/2019/01/Coding-body-image-.jpg'
            />
           </div>
        </div>
    )
}

export default RecommendedVideos
