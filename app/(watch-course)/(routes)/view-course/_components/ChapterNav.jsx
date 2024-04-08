import React, { useContext, useEffect, useState } from "react";
import { PlayCircle, PauseCircle, Checkcircle2 } from "lucide-react";

function ChapterNav({ course, userCourse, setActiveChapter }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { completedChapter, setCompletedChapter } =
    useContext(completedChapter);

  useEffect(() => {
    setActiveChapter(course?.chapter[0]);
  }, []);

  const isChapterCompleted = (chapterId) => {
    return completedChapter.find((item) => item.chapterId == chapterId);
  };

  return (
    <div>
      <div className="border-b p-5">
        <h2 className="font-medium text-[20px]">{course.name}</h2>
      </div>
      <div>
        {course.chapter.map((chapter, index) => (
          <div
            onClick={() => {
              setActiveIndex(index);
              setActiveChapter(chapter);
            }}
            key={index}
            className={`flex gap-2 text-gray-500 md:text-[14px] text-[12px] px-5 p-4 cursor-pointer hover:bg-orange-200 ${isChapterCompleted(chapter.chapterNumber)&&activeIndex==!index? "bg-orange-100 text-orange-600" : null} ${
              activeIndex == index ? "bg-amber-100 text-orange-700" : null
            }`}
          >
            {activeIndex == index ? 
              <PauseCircle height={25} width={25} />
             : isChapterCompleted(chapter.chapterNumber) ? 
              <Checkcircle2 height={25} width={25} />
             : 
              <PlayCircle height={25} width={25} />
            }
            <h2 className="line-clamp-2">{chapter.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterNav;
