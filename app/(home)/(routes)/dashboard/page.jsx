"use client";

import React, { useEffect, useState } from "react";
import { getCourseList } from "@/app/_services";
import CategoryFilter from "./_components/CategoryFilter";
import CourseList from "./_components/CourseList";

function DashboardPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = () => {
    getCourseList().then((resp) => {
      console.log(resp);
      setCourses(resp.courseLists);
    });
  };
  return (
    <div>
      <CategoryFilter />
      {courses ? <CourseList courses={courses} /> : null}
    </div>
  );
}

export default DashboardPage;
