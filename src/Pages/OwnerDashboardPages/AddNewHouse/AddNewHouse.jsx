import { useForm } from "react-hook-form";
import useAPI from "../../../Hooks/useAPI";
import useAuth from "../../../Hooks/useAuth";
import TextInput from "./TextInput";

const AddNewHouse = () => {
   const { register, handleSubmit } = useForm();
   const { dbUser } = useAuth();
   const { AddNewHouse } = useAPI();

   // Handle form submit
   const onSubmit = (data) => {
      const userEmail = dbUser?.email;
      const houseData = { ...data, owner: userEmail };
      console.log(houseData);
      AddNewHouse(houseData).then((res) => console.log(res));
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
               Submit
            </button>
         </form>
      </div>
   );
};

export default AddNewHouse;
