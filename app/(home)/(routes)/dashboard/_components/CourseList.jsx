import React from "react";
import Image from "next/image";
import { Book } from "lucide-react";
import Link from "next/link";

function CourseList({ courses }) {
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {courses.map((course, index) => (
        <Link href={"/course-preview/" + course.id}>
          <div
            key={index}
            className="border rounded-lg p-2 cursor-pointer hover:border-orange-300"
          >
            <Image
              src={course.banner.url}
              alt={course.name}
              width={850}
              height={500}
              className="rounded-lg"
            />
            <div className="mt-2">
              <h2 className="text-[18px] md:text-[16px] font-medium">
                {course.name}
              </h2>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Book className="h-6 w-6 text-orange-800 rounded-full bg-orange-300 p-1" />
              <h2 className="text-[12px] text-orange-800 font-semibold">
                {course.totalChapters} Chapters
              </h2>
            </div>
            <h2 className="mt-2 text-[14px]">
              {course.free ? "Free" : "Paid"}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CourseList;
