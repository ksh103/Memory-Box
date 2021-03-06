import React from 'react';
import { MainLeftWrapper } from '../Main/Main.style';

export default function RegisterLeft(props) {
  const data = props.data;
  return (
    <MainLeftWrapper>
      <div className="title">{data.boxName}</div>
      <div className="content">
        <p className="subTitle">π£ κΈ°μ΅ν¨ μ€λͺ</p>
        <p>{data.boxDescription}</p>
      </div>
      <div className="opendate">
        <p className="subTitle">π λ°μ€ μ€ν μμ  μΌ</p>
        <p>{data.boxOpenAt}</p>
      </div>
      {data.boxLocAddress !== '' && (
        <div className="address">
          <p className="subTitle">π μ€ν μμ  μ₯μ μ΄λ¦</p>
          <p>{data.boxLocName}</p>
          <p className="subTitle">π§­ μ€ν μμ  μ₯μ μ£Όμ</p>
          <p>{data.boxLocAddress}</p>
        </div>
      )}
    </MainLeftWrapper>
  );
}
