import { useSearchParams } from "react-router-dom";

const useFilteredLists = () => {
   const [searchParams, setSearchParams] = useSearchParams();

   const courseName = searchParams.get("course");
   const instructor = searchParams.get("instructor");
   console.log(courseName, instructor);

   return { searchParams, setSearchParams };
};

export default useFilteredLists;
