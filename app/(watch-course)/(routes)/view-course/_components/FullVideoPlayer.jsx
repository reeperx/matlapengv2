import React, { useContext } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { CompletedChapterContext } from "./../../../../../app/_context/CompletedChapterContext";
import { markChapterCompletedService } from "./../../../../_services/index";

function FullVideoPlayer({ activeChapter, userCourse }) {
  const { completedChapter, setCompletedChapter } = useContext(
    CompletedChapterContext
  );

  const isChapterCompleted = (chapterId) => {
    return completedChapter?.find((item) => item.chapterId == chapterId);
  };

  const markChapterCompleted = async () => {
    // If completedChapter is not initialized yet, set it to an empty array
    if (!completedChapter) {
      setCompletedChapter([]);
    }

    // Check if the chapter is already marked as completed
    if (!isChapterCompleted(activeChapter.chapterNumber)) {
      // Update the completedChapter state with the new chapter
      setCompletedChapter((prevCompletedChapters) => [
        ...prevCompletedChapters,
        {
          chapterId: activeChapter.chapterNumber + "",
        },
      ]);
      console.log(completedChapter);
    }

    await markChapterCompletedService(userCourse.id, activeChapter.chapterNumber).then(resp => {
      console.log(resp);
    })
  };

  return (
    activeChapter && (
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
          <h2 className="text-[20px] font-medium">{activeChapter?.name}</h2>
          {!isChapterCompleted(activeChapter.chapterNumber) ? (
            <button
              className="bg-orange-300 text-white p-2 px-5 rounded-lg flex gap-2 hover:bg-orange-700"
              onClick={() => markChapterCompleted()}
            >
              <CheckCircle2 />
              <h2>Mark as Completed</h2>
            </button>
          ) : (
            <button className="text-orange-800 border border-amber-600 p-2 px-5 rounded-lg flex gap-2 hover:bg-orange-200">
              <XCircle />
              <h2>Mark as Incomplete</h2>
            </button>
          )}
        </div>
      </div>
    )
  );
}

export default FullVideoPlayer;
