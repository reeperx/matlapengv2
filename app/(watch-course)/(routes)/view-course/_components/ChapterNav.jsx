import React from 'react'

function ChapterNav({course, userCourse}) {
  return (
    <div>
      <div className="border-b p-5">
        <h2 className="font-medium text-[20px]">{course.name}</h2>
        <h2 className='text-gray-500 text-[14px]'>{course.author}</h2>
      </div>
    </div>
  )
}

export default ChapterNav