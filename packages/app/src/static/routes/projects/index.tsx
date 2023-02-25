import React, { FC, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import Home from "@/static/routes/index";
import Drop from "@/static/routes/projects/drop";

const ProjectsRoute: FC = ({ children }) => {
  return (
    <>
      <Routes>
        <Route path="/drop" element={<Drop />} />
        <Route path="/" element={<>Home</>} />
      </Routes>
    </>
  );
};

export default ProjectsRoute;
