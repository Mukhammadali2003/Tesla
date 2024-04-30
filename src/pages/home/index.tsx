import { Footer } from "../../components";
import { Container } from "@containers";
import { ModalSCar, ModalSText } from "@imgs";
import Carusel from "../../components/ui/carusel/";
// import {Card} from "@ui"

import "./style.scss";

const index = () => {
  const clas = "active-btn-1";
  return (
    <>
      <Container>
        <div className=" flex flex-col items-center justify-center  pt-[30px]">
          <img src={ModalSText} alt="img" />
        </div>
        <div className="mt-[-300px]">
          <Carusel imagesTesla={ModalSCar} />
        </div>
      </Container>
      {/* <Card/> */}
      <Footer clas={clas} />
    </>
  );
};

export default index;
