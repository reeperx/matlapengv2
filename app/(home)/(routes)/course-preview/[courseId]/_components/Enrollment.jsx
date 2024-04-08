import { EnrollCourse, PublishCourse } from "@/app/_services";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function Enrollment({ courseDetail, userCourse }) {
  const { user } = useUser();
  const router = useRouter();

  const enrollCourse = async () => {
    if (user) {
      await EnrollCourse(
        courseDetail.id,
        user.primaryEmailAddress.emailAddress
      ).then(async (resp) => {
        console.log("Enroll Course Response=>", resp);
        if (resp) {
          await PublishCourse(resp?.createUserEnrollCourse?.id).then(
            (result) => {
              console.log(result);
              if (result) {
                router.push("/view-course/" + courseDetail.id);
              }
            }
          );
        }
      });
    } else {
      router.push("/sign-in");
    }
  };
  return (
    <div>
      {userCourse?.courseId ? (
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-500">Get more lessons</h2>
          <button
            className="p-2 w-full bg-orange-300 text-white rounded-lg text-[14px] mt-2 hover:bg-orange-700"
            onClick={() => router.push("/view-course/" + courseDetail.id)}
          >
            Continue
          </button>
        </div>
      ) : null}
      {courseDetail.free && !userCourse?.courseId ? (
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-500">Get lessons and Tutoring for free</h2>
          <button
            className="p-2 w-full bg-orange-300 text-white rounded-lg text-[14px] mt-2 hover:bg-orange-700"
            onClick={() => enrollCourse()}
          >
            Enroll Now
          </button>
        </div>
      ) : !userCourse?.courseId ? (
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-500">Pay for extra classes and Lessons</h2>
          <button className="p-2 w-full bg-orange-300 text-white rounded-lg text-[14px] mt-2 hover:bg-orange-700">
            Pay Now ZAR 30.00
          </button>
        </div>
      ) : null}
      <div className="mt-5 border rounded-lg p-2 text-center">
        <h2 className="text-gray-500">
          Buy monthly membership to get full access to tutors and lessons
        </h2>
        <button className="p-2 w-full bg-orange-300 text-white rounded-lg text-[14px] mt-2 hover:bg-orange-700">
          Buy Membership ZAR 50.00/Month
        </button>
      </div>
    </div>
  );
}

export default Enrollment;
