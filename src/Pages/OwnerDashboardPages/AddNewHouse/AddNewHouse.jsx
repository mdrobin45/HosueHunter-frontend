import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAPI from "../../../Hooks/useAPI";
import useAuth from "../../../Hooks/useAuth";
import TextInput from "./TextInput";

const AddNewHouse = () => {
   const { register, handleSubmit, reset } = useForm();
   const { dbUser } = useAuth();
   const { AddNewHouse } = useAPI();

   // Tan stack query save house
   const { isPending, mutate } = useMutation({
      mutationKey: ["newHouse"],
      mutationFn: (houseData) => AddNewHouse(houseData),
      onSuccess: () => {
         toast.success("House Added");
         reset();
      },
   });

   // Handle form submit
   const onSubmit = (data) => {
      const userEmail = dbUser?.email;
      const houseData = { ...data, owner: userEmail };
      mutate(houseData);
   };
   return (
      <div>
         <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ boxShadow: "0 0 40px 5px rgb(0 0 0 / 5%)" }}
            className="pt-10 pb-32 rounded-md p-6 my-10">
            <h2 className="text-4xl font-bold text-center py-3">
               Add New House
            </h2>
            <div className="grid pt-6 grid-cols-1 md:grid-cols-2 gap-5">
               <TextInput register={register} label="Title" name="title" />
               <TextInput register={register} label="Photo" name="thumbnail" />
            </div>

            <div className="grid my-3 grid-cols-1 md:grid-cols-2 gap-5">
               <TextInput
                  register={register}
                  label="Location"
                  name="location"
               />
               <TextInput
                  register={register}
                  label="Number of Bedrooms"
                  name="bedrooms"
               />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               <TextInput
                  register={register}
                  label="Number of Bathrooms"
                  name="bathrooms"
               />
               <TextInput register={register} label="Price" name="price" />
            </div>

            <button
               type="submit"
               className="align-middle mt-4 select-none w-full font-normal tracking-wider text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg bg-primary text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
               size="lg">
               {!isPending ? (
                  "Submit"
               ) : (
                  <>
                     <svg
                        aria-hidden="true"
                        className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-900"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                           fill="currentColor"
                        />
                        <path
                           d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                           fill="currentFill"
                        />
                     </svg>
                  </>
               )}
            </button>
         </form>
      </div>
   );
};

export default AddNewHouse;
