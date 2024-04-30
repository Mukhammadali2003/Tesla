import "./style.scss";
import { Footer } from "../../components";
import { Container } from "@containers";
import { Modal3Car, Modal3Text } from "@imgs";
import Carusel from "../../components/ui/carusel/";

const index = () => {
  const clas = "active-btn-2";
  return (
    <div>
      <Container>
        <div className=" flex flex-col items-center justify-center  pt-[30px]">
          <img src={Modal3Text} alt="img" />
        </div>
        <div className="mt-[-300px]">
          <Carusel imagesTesla={Modal3Car} />
        </div>
      </Container>
      <Footer clas={clas} />
    </div>
  );
};

export default index;
