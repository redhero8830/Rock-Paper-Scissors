import React from "react";

export default function Box(props) {
  console.log(props);
  return (
    <div className="box">
      <h1>{props.title}</h1>
      {/* useSelect 값은 유저가 선택하고 들어옴, 처음 값음 null */}
      {/* 그런데 처음부터 box는 렌더링을 하긴 해야하는데, null이면 못 그림 -> && 연산자로 가드 */}
      {/* 처음 값이 null -> props.item = null -> falsy ->  */}
      <img className="box-img" src={props.item && props.item.img} alt="" />
      <h1>Win</h1>
    </div>
  );
}
