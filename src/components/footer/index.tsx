import "./style.scss";

import { Container } from "@containers";

const index = ({clas}:any) => {
  return (
    <footer className=" bg-transparent">
      
      <section className="w-[100%] bg-transparent">
        <Container>
          <div className="flex items-center justify-between py-[30px]">
            <ul className="flex items-center gap-[100px]">
                <li className="flex items-center flex-col">
                  <h1 className="text-[24px] text-white">396 mi</h1>
                  <p className="text-[12px] text-white">Range (EPA est.)</p>
                </li>
                <li className="flex items-center flex-col">
                  <h1 className="text-[24px] text-white">1.99 s</h1>
                  <p className="text-[12px] text-white">0-60 mph*</p>
                </li> 
                <li className="flex items-center flex-col">
                  <h1 className="text-[24px] text-white">200mph</h1>
                  <p className="text-[12px] text-white">Top Speed†</p>
                </li> 
                <li className="flex items-center flex-col">
                  <h1 className="text-[24px] text-white">1,020hp</h1>
                  <p className="text-[12px] text-white">Peak Power</p>
                </li>  
            </ul>
            <button className={clas}>Order Now <i className="bi bi-chevron-double-right"></i></button>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default index;
