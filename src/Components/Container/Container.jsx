const Container = ({ children }) => {
   return (
      <div className="max-w-[1200px] mx-auto md:px-6 lg:px-0 px-4">
         {children}
      </div>
   );
};

export default Container;
