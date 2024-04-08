/* eslint-disable react/prop-types */
const PageContainer = ({ id, children }) => {
  return (
    <div
      id={id}
      className="min-h-[70vh] py-12 w-full max-w-[1440px] mx-auto px-5 lg:px-10"
    >
      {children}
    </div>
  );
};

export default PageContainer;
