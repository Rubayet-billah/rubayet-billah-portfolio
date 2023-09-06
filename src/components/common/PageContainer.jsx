/* eslint-disable react/prop-types */
const PageContainer = ({ id, children }) => {
  return (
    <div id={id} className="min-h-[70vh] py-12">
      {children}
    </div>
  );
};

export default PageContainer;
