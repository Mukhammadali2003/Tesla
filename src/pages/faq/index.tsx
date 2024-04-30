import "./style.scss";
import { Footer } from "../../components";
import { Container } from "@containers";
import { ModalXCar, ModalXText } from "@imgs";
import Carusel from "../../components/ui/carusel/";

const index = () => {
  const clas = "active-btn-3";
  return (
    <div>
      <Container>
        <div className=" flex flex-col items-center justify-center  pt-[30px]">
          <img src={ModalXText} alt="img" />
        </div>
        <div className="mt-[-300px]">
          <Carusel imagesTesla={ModalXCar} />
        </div>
      </Container>
      <Footer clas={clas} />
    </div>
  );
};

export default index;
