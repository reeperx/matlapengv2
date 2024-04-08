"use client";

import React, { useEffect, useState } from "react";
import ChapterNav from "../_components/ChapterNav";
import FullVideoPlayer from "../_components/FullVideoPlayer";
import { UserButton, useUser } from "@clerk/nextjs";
import { getCourseById } from "./../../../../_services/index";
import { CompletedChapterContext } from "./../../../../../app/_context/CompletedChapterContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function ViewCourse({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [userCourse, setUserCourse] = useState();
  const [activeChapter, setActiveChapter] = useState();
  const [completedChapter, setCompletedChapter] = useState();
  const router = useRouter();

  useEffect(() => {
    user ? getCourse() : null;
  }, [user]);

  const getCourse = async () => {
    await getCourseById(
      params?.courseId,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      console.log(resp?.userEnrollCourses[0]?.completedChapter);
      setCourse(resp.courseList);
      setUserCourse(resp.userEnrollCourses);
      setCompletedChapter(resp?.userEnrollCourses[0]?.completedChapter);
    });
  };
  return (
    course?.name && (
      <div className="">
        <CompletedChapterContext.Provider
          value={{ completedChapter, setCompletedChapter }}
        >
          <div className="hidden fixed bg-white md:block md:w-80 border shadow-sm h-screen z-50">
            {course ? (
              <ChapterNav
                course={course}
                userCourse={userCourse}
                setActiveChapter={(chapter) => setActiveChapter(chapter)}
              />
            ) : null}
          </div>
          <div className="ml-80">
            <div className="float-right p-5 flex items-center">
              <Button
                variant="default"
                onClick={() => router.push("/browse")}
                className="ml-2 text-white font-bold py-2 px-4 rounded"
              >
                Go Back
              </Button>
              <div className="ml-4">
                <UserButton />
              </div>
            </div>
            <FullVideoPlayer
              userCourse={userCourse}
              activeChapter={activeChapter}
            />
          </div>
        </CompletedChapterContext.Provider>
      </div>
    )
  );
}

export default ViewCourse;
