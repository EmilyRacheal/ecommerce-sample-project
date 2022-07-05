import React from "react";
import Wrapper from "../../component/Wrapper";

import { Route, Routes } from "react-router-dom";
import Home from "./Home/index";

const Index = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Wrapper>
  );
};

export default Index;
