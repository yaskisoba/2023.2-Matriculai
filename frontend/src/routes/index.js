import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ExclusionTrilhas from "../pages/ExclusionTrilhas";
import ExclusionEletivas from "../pages/ExclusionEletivas"
import CreateEletivas from "../pages/CreateEletivas";
import CreateTrilhas from "../pages/CreateTrilhas";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/criar-eletiva" element={<CreateEletivas />} />
          <Route path="/excluir-eletivas" element={<ExclusionEletivas />} />
          <Route path="/criar-trilha" element={<CreateTrilhas />} />
          <Route path="/excluir-trilhas" element={<ExclusionTrilhas />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;