import "./style.scss";
import { Footer } from "../../components";

const index = () => {
  const clas = "active-btn-5";
  return (
    <>
      {/* <section classNameName="page_404">
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-sm-12 ">
            <div classNameName="col-sm-10 col-sm-offset-1  text-center">
              <div classNameName="four_zero_four_bg">
                <h1 classNameName="text-center ">404</h1>
              </div>

              <div classNameName="contant_box_404">
                <h3 classNameName="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
      <div className="tesla_main--wrapper">
         <div className="tesla_main">
      </div>
        
        <h1 className="tesla_model text-center text-[24px] font-semibold text-white ">Model  2023</h1>
        
        <span></span>
        <img
          src="https://freepngimg.com/thumb/tesla/29695-5-tesla-picture.png"
          alt=""
          className="tesla_car"
        />
        {/* <div className="tesla_detail">
          <div className="tesla_info">
            <h2>3.1 s</h2>
            <p>0-60mph*</p>
          </div>
          <div className="tesla_info">
            <h2>358 mi</h2>
            <p>Range (EPA est.)</p>
          </div>
          <div className="tesla_info">
            <h2>AWD</h2>
            <p>Dual Motor</p>
          </div>
          <div className="tesla_btn">
            <p>Order Now</p>
          </div>
        </div> */}
      </div>
      <Footer clas={clas} />
    </>
  );
};

export default index;
