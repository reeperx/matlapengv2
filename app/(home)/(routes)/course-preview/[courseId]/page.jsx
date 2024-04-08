"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getCourseById } from "@/app/_services";
import VideoPlayer from "./_components/VideoPlayer";
import CourseDetails from "./_components/CourseDetails";
import EnrollmentSection from "./_components/EnrollmentSection";
import Enrollment from "./_components/Enrollment";

function CoursePreview({ params }) {
  const [courseDetail, setCourseDetail] = useState([]);
  const [userCourse, setUserCourse] = useState([]);

  const { user } = useUser();
  useEffect(() => {
    params.courseId ? getCourse(params.courseId) : null;
  }, [user]);

  const getCourse = () => {
    getCourseById(
      params.courseId,
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      console.log(resp);
      setCourseDetail(resp.courseList);
      setUserCourse(resp?.userEnrollCourses[0]);
    });
  };
  return (
    courseDetail?.name && (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            {courseDetail?.chapter[0] ?
              <VideoPlayer videoUrl={courseDetail?.chapter[0]?.video.url} /> : null}
            <CourseDetails courseDetail={courseDetail} />
          </div>
          <div className="mt-5 md:mt-0">
            <EnrollmentSection />
            <Enrollment courseDetail={courseDetail} userCourse={userCourse} />
          </div>
        </div>
      </div>
    )
  );
}

export default CoursePreview;
