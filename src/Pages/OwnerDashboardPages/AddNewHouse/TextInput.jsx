const TextInput = ({ register, label, name }) => {
   return (
      <div>
         <label
            htmlFor={name}
            className="block mb-2 text-sm font-medium text-gray-900">
            {label}
         </label>
         <input
            {...register(name)}
            type="text"
            id={name}
            className="bg-gray-50
                  border-gray-300 border-2 text-gray-900 text-sm rounded-lg
                  focus:border-primary focus:outline-none block w-full p-2.5"
            required
         />
      </div>
   );
};

export default TextInput;
