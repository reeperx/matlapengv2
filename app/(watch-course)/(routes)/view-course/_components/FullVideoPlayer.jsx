import React, { useContext } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

function FullVideoPlayer({ activeChapter }) {
  console.log(activeChapter);
  const { completedChapter, setCompletedChapter } =
    useContext(completedChapter);
  const isChapterCompleted = (chapterId) => {
    return completedChapter.find((item) => item.chapterId == chapterId);
  };

  const markChapterCompleted = () => {
    if (!completedChapter?.length) {
      setCompletedChapter([]);
    }
    completedChapter?.setCompletedChapter([
      ...completedChapter,
      {
        chapterId: activeChapter?.chapterNumber + "",
      },
    ]);
    setCompletedChapter([
      {
        chapterId: activeChapter?.chapterNumber + "",
      },
    ]);
  };

  return (
    <div className="p-5">
      <video
        key={activeChapter?.video?.url}
        width="1500"
        height="250"
        controls
        controlsList="nodownload"
      >
        <source src={activeChapter?.video?.url} type="video/mp4" />
      </video>
      <div className="p-5 border rounded-lg mt-5 flex justify-between items-center">
        <h2 className="text-[20px] font-medium">{activeChapter.name}</h2>
        {!isChapterCompleted(activeChapter.chapterNumber) ? (
          <button
            className="bg-orange-300 text-white p-2 px-5 rounded-lg flex gap-2 hover:bg-orange-700"
            onClick={() => markChapterCompleted()}
          >
            <h2>
              <CheckCircle2 /> Mark as Completed
            </h2>
          </button>
        ) : null}
        {/* 
          <button className="text-orange-800 border border-amber-600 p-2 px-5 rounded-lg flex gap-2 hover:bg-orange-200">
            <h2>
              <XCircle /> Mark as Incompleted
            </h2>
          </button>
          */}
      </div>
    </div>
  );
}

export default FullVideoPlayer;
