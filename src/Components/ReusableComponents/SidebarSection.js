import React, { useRef, useEffect, useState } from "react";

const SidebarSection = ({ sidebar }) => {
  const sidebarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(true);
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => {
    // Calculate height for sidebar layout stability
    if (sidebarRef.current) setSidebarHeight(sidebarRef.current.offsetHeight);
  }, [isSticky]);

  if (!sidebar) return null;

  return (
    <div
      ref={sidebarRef}
      className={`${isSticky ? "sticky top-20" : "relative"}`}
      style={{ height: sidebarHeight }}
    >
      <h3 className="text-xl font-bold mb-4">{sidebar.title}</h3>
      <ul className="list-disc list-inside">
        {sidebar.guides?.map((guide, index) => (
          <li key={index} className="mb-2">
            <a href={guide.link} className="text-blue-600">{guide.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarSection;
