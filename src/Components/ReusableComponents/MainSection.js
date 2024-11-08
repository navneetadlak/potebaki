import React from "react";

const MainSection = ({ mainSection }) => {
  if (!mainSection) return null;

  return (
    <div>
      <h1 className="text-5xl font-medium mb-4 text-center">{mainSection.title}</h1>
      {mainSection.description?.map((para, index) => (
        <p key={index} className="mb-4">{para}</p>
      ))}
      {mainSection.subTitle && (
        <>
          <h2 className="text-xl font-semibold mb-4">{mainSection.subTitle}</h2>
          <p>{mainSection.subDescription}</p>
        </>
      )}
    </div>
  );
};

export default MainSection;
