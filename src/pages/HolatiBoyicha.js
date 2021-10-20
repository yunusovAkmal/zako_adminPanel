import React from "react";
import { Progress, Button } from "antd";
const HolatiBoyicha = () => {
  return (
    <div style={{ width: "85%", margin: "0 auto" }}>
      <div className="essential">
        <h1 style={{ marginBottom: "50px" }}>Holati bo'yicha analiz</h1>
        <div className="entry_display_grid_holat">
          <div>
            <Button className="holat_btn" type="link">
              Guruhga qo'shildi
            </Button>
            <Progress percent={10} />
          </div>
          <div>
            <Button className="holat_btn" type="link">
              O'ylab ko'radi
            </Button>
            <Progress percent={1} />
          </div>
          <div>
            <Button className="holat_btn" type="link">
              Raqam xato
            </Button>
            <Progress percent={1} />
          </div>
        </div>
        <div className="entry_display_grid_holat">
          <div>
            <Button className="holat_btn" type="link">
              Ketib qoldi
            </Button>
            <Progress percent={1} />
          </div>
          <div>
            <Button className="holat_btn" type="link">
              Probniyga keldi
            </Button>
            <Progress percent={17} />
          </div>
          <div>
            <Button className="holat_btn" type="link">
              Tel qilish kerak
            </Button>
            <Progress percent={1} />
          </div>
        </div>
        <div className="entry_display_grid_holat">
          <div>
            <Button className="holat_btn" type="link">
              Ko'tarmadi
              </Button>
            <Progress percent={1} />
          </div>
          <div>
            <Button className="holat_btn" type="link">
              Rad qildi
              </Button>
            <Progress percent={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolatiBoyicha;
