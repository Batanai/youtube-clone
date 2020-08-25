import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow'

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr/>
      <ChannelRow
        image='https://media-exp1.licdn.com/dms/image/C5603AQE6f4XruNhZzw/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=BA5dYmqNm_9EIiPcI4dk7Ik-YbZmGfa7JAxLivSdqYY'
        channel='batie react'
        verified
        subs='603k'
        NoOfVideos={290}
        description='The coding struggle continues out here. On this channel I document the journey of being a javascript framework/library dev'
      />
      <hr/>

      <VideoRow
        views='20k'
        subs='600k'
        description='From angular to react- How i did it'
        timestamp='a day ago'
        channel='batie react'
        title='Transition from angular to react'
        image='https://media-exp1.licdn.com/dms/image/C5603AQE6f4XruNhZzw/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=BA5dYmqNm_9EIiPcI4dk7Ik-YbZmGfa7JAxLivSdqYY'
      />
      <VideoRow
        views='20k'
        subs='600k'
        description='From angular to react- How i did it'
        timestamp='a day ago'
        channel='batie react'
        title='Transition from angular to react'
        image='https://media-exp1.licdn.com/dms/image/C5603AQE6f4XruNhZzw/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=BA5dYmqNm_9EIiPcI4dk7Ik-YbZmGfa7JAxLivSdqYY'
      />
      <VideoRow
        views='20k'
        subs='600k'
        description='From angular to react- How i did it'
        timestamp='a day ago'
        channel='batie react'
        title='Transition from angular to react'
        image='https://media-exp1.licdn.com/dms/image/C5603AQE6f4XruNhZzw/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=BA5dYmqNm_9EIiPcI4dk7Ik-YbZmGfa7JAxLivSdqYY'
      />
      <VideoRow
        views='20k'
        subs='600k'
        description='From angular to react- How i did it'
        timestamp='a day ago'
        channel='batie react'
        title='Transition from angular to react'
        image='https://media-exp1.licdn.com/dms/image/C5603AQE6f4XruNhZzw/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=BA5dYmqNm_9EIiPcI4dk7Ik-YbZmGfa7JAxLivSdqYY'
      />
      <VideoRow
        views='20k'
        subs='600k'
        description='From angular to react- How i did it'
        timestamp='a day ago'
        channel='batie react'
        title='Transition from angular to react'
        image='https://media-exp1.licdn.com/dms/image/C5603AQE6f4XruNhZzw/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=BA5dYmqNm_9EIiPcI4dk7Ik-YbZmGfa7JAxLivSdqYY'
      />
      <VideoRow
        views='20k'
        subs='600k'
        description='From angular to react- How i did it'
        timestamp='a day ago'
        channel='batie react'
        title='Transition from angular to react'
        image='https://media-exp1.licdn.com/dms/image/C5603AQE6f4XruNhZzw/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=BA5dYmqNm_9EIiPcI4dk7Ik-YbZmGfa7JAxLivSdqYY'
      />
      <VideoRow
        views='20k'
        subs='600k'
        description='From angular to react- How i did it'
        timestamp='a day ago'
        channel='batie react'
        title='Transition from angular to react'
        image='https://media-exp1.licdn.com/dms/image/C5603AQE6f4XruNhZzw/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=BA5dYmqNm_9EIiPcI4dk7Ik-YbZmGfa7JAxLivSdqYY'
      />
      <VideoRow
        views='20k'
        subs='600k'
        description='From angular to react- How i did it'
        timestamp='a day ago'
        channel='batie react'
        title='Transition from angular to react'
        image='https://media-exp1.licdn.com/dms/image/C5603AQE6f4XruNhZzw/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=BA5dYmqNm_9EIiPcI4dk7Ik-YbZmGfa7JAxLivSdqYY'
      />
    </div>
  );
}

export default SearchPage;
