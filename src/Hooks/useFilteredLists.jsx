import { useSearchParams } from "react-router-dom";
import useAPI from "./useAPI";

const useFilteredLists = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const { sortCourses } = useAPI();

   // const courseName = searchParams.get("course");
   // const instructor = searchParams.get("instructor");

   // // Fetch courses
   // const { data } = useQuery({
   //    queryKey: ["sortedCourses", courseName, instructor],
   //    queryFn: () => sortCourses(courseName, instructor),
   // });

   return { searchParams, setSearchParams };
};

export default useFilteredLists;
