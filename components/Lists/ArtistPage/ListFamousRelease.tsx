import * as React from "react";
import TitleList from "../TitleList";
import CardListHome from "../../Cards/CardListHome";
import Link from "next/link";
import CardProductArtistPage from "../../Cards/SingerPage/CardProductArtistPage";

export interface IListAlbumHomeProps {}

export default function ListFamousRelease(props: IListAlbumHomeProps) {
  return (
    <div className="max-w-[1900px]   mt-10">
      <h3 className="text-2xl px-4 mb-3  font-bold">Bản phát hành nổi tiếng</h3>
      <div className="w-full px-1 grid grid-cols-9 max-h-[280px] overflow-hidden  ">
        <CardProductArtistPage
          info="Bản phát hành mới nhất"
          title="Đừng làm trái tim anh đau"
          urlImage="https://bloganchoi.com/wp-content/uploads/2024/06/dung-lam-trai-tim-anh-dau-bloganchoi.jpg"
          type="Đĩa đơn"
        />
        <CardProductArtistPage
          info="2024"
          title="Chúng ta của hiện tại"
          urlImage="https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d"
          type="Đĩa đơn"
        />
        <CardProductArtistPage
          info="Bản phát hành mới nhất"
          title="Đừng làm trái tim anh đau"
          urlImage="https://bloganchoi.com/wp-content/uploads/2024/06/dung-lam-trai-tim-anh-dau-bloganchoi.jpg"
          type="Đĩa đơn"
        />
      </div>
    </div>
  );
}
