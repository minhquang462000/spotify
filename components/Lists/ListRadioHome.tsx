import * as React from "react";
import TitleList from "./TitleList";
import CardRadioHome from "../Cards/CardRadioHome";

export interface IListRadioHomeProps {}

export default function ListRadioHome(props: IListRadioHomeProps) {
  return (
    <div className="max-w-[1900px]">
      <TitleList titleList="Radio phổ biến" urlLink="" showMore={"Hiện tất cả"} />
      <div className="w-full flex flex-wrap max-h-[280px] overflow-hidden   px-3">
        <CardRadioHome />
        <CardRadioHome />
        <CardRadioHome />
        <CardRadioHome />
        <CardRadioHome />
        <CardRadioHome />
      </div>
    </div>
  );
}
