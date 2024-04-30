import { Route, Routes } from "react-router-dom";
import { Header, Main } from "./components";

import { Home, Blog , Login ,Faq  , Kursus , Tentang } from "@pages";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/model-3" element={<Blog />} />
          <Route path="/model-x" element={<Faq />} />
          <Route path="/model-y" element={<Kursus />} />
          <Route path="/solar-roof" element={<Login />} />
          <Route path="/solar-panels" element={<Tentang />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
