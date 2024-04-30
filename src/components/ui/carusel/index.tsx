import Carousel from "react-bootstrap/Carousel";


function caruselFun({ imagesTesla }: any) {
  const ls = [imagesTesla, imagesTesla, imagesTesla, imagesTesla];
  return (
    <Carousel>
      {ls.map((elm, index) => (
        <Carousel.Item key={index} className="w-100% mt-[80px]">
          <img src={elm} alt={`Red Tesla ${index + 1}`} />
          
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default caruselFun;