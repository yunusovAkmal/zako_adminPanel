import React from "react";
import { Progress } from "antd";
const HolatiBoyicha = () => {
  return (
    <div style={{width:"85%",margin:"0 auto"}}>
        <div className="essential">
        <h1 style={{marginBottom:"30px"}}>Holati bo'yicha analiz</h1>
        <div className="entry_display_grid_holat">
          <div>
            <h4>
              Guruhga qo'shildi 
            </h4>
            <Progress  percent={10} />
          </div>
          <div>
            <h4>
              O'ylab ko'radi
            </h4>
            <Progress percent={1} />
          </div>
          <div>
            <h4>
              Raqam xato 
            </h4>
            <Progress percent={1} />
          </div>
        </div>
        <div className="entry_display_grid_holat">
          <div>
            <h4>
              Ketib qoldi 
            </h4>
            <Progress percent={1} />
          </div>
          <div>
            <h4>
              Probniyga keldi
            </h4>
            <Progress percent={17} />
          </div>
          <div>
            <h4>
              Tel qilish kerak 
            </h4>
            <Progress percent={1} />
          </div>
        </div>
        <div className="entry_display_grid_holat">
          <div>
            <h4>
              Ko'tarmadi 
            </h4>
            <Progress percent={1} />
          </div>
          <div>
            <h4>
              Rad qildi 
            </h4>
            <Progress percent={1}  />
          </div>
        </div>
        </div>
    </div>
  );
};

export default HolatiBoyicha;
