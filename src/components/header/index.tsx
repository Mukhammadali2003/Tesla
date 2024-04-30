import { NavLink, Outlet } from "react-router-dom";
import logo from "@icons/logo-t.svg";
import "./style.scss";

import { Container } from "@containers";

const index = () => {

  const handleClick = () => {
    // Biron bir funksiya
    console.log('NavLink bosildi');
  };
  return (
    <>
      <header className=" bg-transparent">
        <Container>
          <nav className="flex items-center justify-between py-10">
            <NavLink to={"/"} className="text-[24px] text-white font-bold *:">
              <img src={logo} alt="logo tesla" />
            </NavLink>
            <div className="flex items-center gap-[72px]">
              <ul className="flex items-center gap-[13px]">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeHome text-white font-medium text-[16px] py-[4px] px-[16px]" 
                      : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                  }
                  to={"/"} onClick={()=> handleClick()}
                >
                  Model S
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeModel3 text-white font-medium text-[16px] py-[4px] px-[16px]"
                      : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                  }
                  to={"/model-3"} onClick={()=> handleClick()}
                >
                  Model 3
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeModelx text-white font-medium text-[16px] py-[4px] px-[16px]"
                      : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                  }
                  to={"/model-x"}
                >
                  Model X
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeModely text-white font-medium text-[16px] py-[4px] px-[16px]"
                      : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                  }
                  to={"/model-y"}
                >
                  Model Y
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                  isActive
                    ? "activeModely text-white font-medium text-[16px] py-[4px] px-[16px]"
                    : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                }
                  to={"/solar-roof"}
                >
                  Tesla
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                  isActive
                    ? "activeModely text-white font-medium text-[16px] py-[4px] px-[16px]"
                    : "text-white font-medium text-[16px] py-[4px] px-[16px]"
                }
                  to={"/solar-panels"}
                >
                  Model 2023
                </NavLink>
              </ul>
               <div className="flex items-center gap-[23px]">
                   <div className="w-[174px] h-[40px] bg-[rgba(244,251,255,0.10)] rounded-[86px] relative">
                      <input type="text" className=" w-full h-full  rounded-[86px] outline-none bg-transparent placeholder:text-w placeholder:text-center  text-white text-center   " placeholder="Search"/>
                      <i className="bi bi-search text-white absolute top-2 left-7"></i>           
                   </div>
                   <button className="flex items-center justify-center rounded-[50%] w-[40px] h-[40px] bg-[rgba(244,251,255,0.10)]"><i className="bi bi-person text-white"></i></button>
                   <button className="flex items-center justify-center rounded-[50%] w-[40px] h-[40px] bg-[rgba(244,251,255,0.10)]"><i className="bi bi-list text-white"></i></button>
               </div>
            </div>
          </nav>
        </Container>
      </header>
      <Outlet />
    </>
  );
};

export default index;
