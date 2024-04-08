"use client";

import React, { useEffect, useState } from "react";
import { getCourseList } from "./../../../_services/index";
import CategoryFilter from "./_components/CategoryFilter";
import CourseList from "./_components/CourseList";

function DashboardPage() {
  const [courses, setCourses] = useState([]);
  const [coursesOrg, setCoursesOrg] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = () => {
    getCourseList().then((resp) => {
      console.log(resp);
      setCourses(resp.courseLists);
      setCoursesOrg(resp.courseLists);
    });
  };

  const filterCourse = (category) => {
    if (category == "all") {
      setCourses(coursesOrg);
      return;
    }

    const filteredList = coursesOrg.filter((course) => {
       // Check if course.tag is defined and is an array
    if (course.tags && Array.isArray(course.tags)) {
      return course.tags.includes(category);
    }
    // Handle cases where course.tag is undefined or not an array
    return false;
  });

    setCourses(filteredList);
  };
  return (
    <div>
      <CategoryFilter selectedCategory={(category) => filterCourse(category)} />
      {courses ? <CourseList courses={courses} /> : null}
    </div>
  );
}

export default DashboardPage;
