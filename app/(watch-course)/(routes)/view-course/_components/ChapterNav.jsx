import React, { useContext, useEffect, useState } from "react";
import { PlayCircle, PauseCircle, CheckCircle2 } from "lucide-react";
import { CompletedChapterContext } from "./../../../../../app/_context/CompletedChapterContext";


function ChapterNav({ course, userCourse, setActiveChapter }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { completedChapter, setCompletedChapter } = useContext(
    CompletedChapterContext
  );

  useEffect(() => {
    setActiveChapter(course?.chapter[0]);
  }, []);

  const isChapterCompleted = (chapterId) => {
    return completedChapter?.find((item) => item.chapterId == chapterId);
  };

  return (
    <div>
      <div className="border-b p-5">
        <h2 className="font-medium text-[20px]">{course.name}</h2>
        <h2 className="text-gray-500 text-[14px]">{course.author}</h2>
      </div>
      <div>
        {course.chapter.map((chapter, index) => (
          <div
            onClick={() => {
              setActiveIndex(index);
              setActiveChapter(chapter);
            }}
            key={index}
            className={`flex gap-2 text-gray-500 md:text-[14px] text-[12px] px-5 p-4 cursor-pointer ${
              isChapterCompleted(chapter.chapterNumber)
                ? "bg-orange-100 text-orange-600"
                : "hover:bg-orange-200"
            } ${
              activeIndex === index
                ? "bg-amber-100 text-orange-700"
                : ""
            }`}
          >
            {activeIndex === index ? (
              <PauseCircle height={25} width={25} />
            ) : isChapterCompleted(chapter.chapterNumber) ? (
              <CheckCircle2 height={25} width={25} />
            ) : (
              <PlayCircle height={25} width={25} />
            )}
            <h2 className="line-clamp-2">{chapter.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterNav;
