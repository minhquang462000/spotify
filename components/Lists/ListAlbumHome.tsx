import * as React from "react";
import TitleList from "./TitleList";
import CardListHome from "../Cards/CardListHome";

export interface IListAlbumHomeProps {}

export default function ListAlbumHome(props: IListAlbumHomeProps) {
  return (
    <div className="max-w-[1900px]">
      <TitleList titleList="Album  phổ biến" urlLink="" showMore={"Hiện tất cả"} />
      <div className="w-full flex gap-y-10 max-h-[280px] overflow-hidden  px-3">
        <CardListHome
          info="Sơn Tùng Mtp"
          title="m-tp M-TP"
          urlImage="https://tse1.mm.bing.net/th?id=OIP.HrxGNwAbBFy98wkBUh_0tgHaD3&pid=Api&P=0&h=220"
        />
        <CardListHome
          info="Sơn Tùng Mtp"
          title="m-tp M-TP"
          urlImage="https://tse1.mm.bing.net/th?id=OIP.HrxGNwAbBFy98wkBUh_0tgHaD3&pid=Api&P=0&h=220"
        />
        <CardListHome
          info="Sơn Tùng Mtp"
          title="m-tp M-TP"
          urlImage="https://tse1.mm.bing.net/th?id=OIP.HrxGNwAbBFy98wkBUh_0tgHaD3&pid=Api&P=0&h=220"
        />
        <CardListHome
          info="Sơn Tùng Mtp"
          title="m-tp M-TP"
          urlImage="https://tse1.mm.bing.net/th?id=OIP.HrxGNwAbBFy98wkBUh_0tgHaD3&pid=Api&P=0&h=220"
        />
        <CardListHome
          info="Sơn Tùng Mtp"
          title="m-tp M-TP"
          urlImage="https://tse1.mm.bing.net/th?id=OIP.HrxGNwAbBFy98wkBUh_0tgHaD3&pid=Api&P=0&h=220"
        />
        <CardListHome
          info="Sơn Tùng Mtp"
          title="m-tp M-TP"
          urlImage="https://tse1.mm.bing.net/th?id=OIP.HrxGNwAbBFy98wkBUh_0tgHaD3&pid=Api&P=0&h=220"
        />
      </div>
    </div>
  );
}
