function Video({ videoData }){
    return (
        <div className="bg-white rounded video_container">
           <video >
            <source src="https://www.youtube.com/watch?v=zrs7u6bdbUw" type="video/mp4"/>
           </video>
           <div className="video-footer px-4 py-2 border-t-2">
            <div className="video-title py-2 flex items-center">
                <img src="" alt="avatar" className="text-s mr-4 rounded-full bg-gray-400"/>
                <span>{videoData.title}</span>
            </div>
            <div className="video-views text-gray-600 text-sm">
                <span className="pr-8">{videoData.views} views</span>
                <span>10:00 mins</span>
            </div>
           </div>
        </div>
    )
}

export default Video;