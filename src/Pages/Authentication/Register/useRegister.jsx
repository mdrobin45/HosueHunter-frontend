import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAPI from "../../../Hooks/useAPI";

const useRegister = () => {
   const { userRegister } = useAPI();
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   // Server request
   const { isPending, mutate } = useMutation({
      mutationKey: ["userRegister"],
      mutationFn: (userInfo) => userRegister(userInfo),
      onSuccess: () => {
         toast.success("Registration successful");
         navigate("/login");
      },
      onError: (data) => {
         const errMsg = data.response.data.error;
         toast.error(errMsg);
      },
   });

   // Form submit
   const onSubmit = (data) => {
      console.log("Clicked");
      console.log(data);
      mutate(data);
   };

   return { register, handleSubmit, onSubmit, errors, isPending };
};

export default useRegister;
