import request, { gql } from "graphql-request";

const MASTER_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_KEY +
  "/master";

export const getCourseList = async () => {
  const query = gql`
    query CourseList {
      courseLists {
        name
        free
        banner {
          url
        }
        id
        totalChapters
        tags
        createdBy {
          name
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const getCourseById = async (id, userEmail) => {
  const query =
    gql`
    query course {
      courseList(where: { id: "` +
    id +
    `" }) {
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
            youtubeUrl
            chapterNumber
          }
        }
        description
        name
        id
        free
        totalChapters
        author
      }
      userEnrollCourses(where: {courseId: "` +
    id +
    `", userEmail: "` +
    userEmail +
    `"}) {
        courseId
        userEmail
        completedChapter {
            ... on CompletedChapter {
                chapterId
            }
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const EnrollCourse = async (courseId, userEmail) => {
  const mutationQuery =
    gql`
    mutation enrollCourse {
      createUserEnrollCourse(
        data: { userEmail: "` +
    userEmail +
    `", courseId: "` +
    courseId +
    `" }
      ) {
        id
      }
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

export const PublishCourse = async (id) => {
  const mutationQuery =
    gql`
    mutation EnrollCourse {
      publishUserEnrollCourse(where: {id: "`+id+`"})
      {
        id
      }
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};
