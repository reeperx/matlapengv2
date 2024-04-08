import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:["/dashboard", "/course-preview/(.*)"]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};