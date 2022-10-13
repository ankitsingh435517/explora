import {useState} from 'react';
import Video from "../components/Video";

const dummyVideos = [
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
  {
    title: "Learn react and redux | crash course 2022",
    video: null,
    description: "Crash course on React and redux",
    views: 72,
    likes: 4,
  },
];

function Videos(){
    const [videos, setVideos] = useState(dummyVideos);
  return (
    <div className="container mx-auto my-6 grid grid-rows-4 grid-flow-col gap-4">
      {videos.map((video) => {
        return <Video videoData={video}/>;
      })}
    </div>
  );
}

export default Videos;