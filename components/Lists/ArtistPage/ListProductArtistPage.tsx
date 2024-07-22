import * as React from "react";
import TitleList from "../TitleList";
import CardListHome from "../../Cards/CardListHome";
import Link from "next/link";
import CardProductArtistPage from "../../Cards/SingerPage/CardProductArtistPage";

export interface IListProductArtistPageProps {
  titleList: string;
  urlLink: string;
  showMore: string;
}

export default function ListProductArtistPage(
  props: IListProductArtistPageProps
) {
  const { titleList, urlLink, showMore } = props;
  return (
    <div className="max-w-[1900px]">
      <nav className="flex justify-between px-4 mb-3 items-center font-bold">
        <h3 className="text-2xl hover:underline">
          <Link href={urlLink}>{titleList}</Link>
        </h3>
        <p
          className={
            showMore.length === 0
              ? "hidden"
              : "text-sm text-[#666] hover:underline"
          }
        >
          <Link href={urlLink}>{showMore}</Link>
        </p>
      </nav>
      <div className="w-full px-1  grid grid-cols-9 max-h-[280px] overflow-hidden  ">
        <CardProductArtistPage
          info="Bản phát hành mới nhất"
          title="Đừng làm trái tim anh đau"
          urlImage="https://bloganchoi.com/wp-content/uploads/2024/06/dung-lam-trai-tim-anh-dau-bloganchoi.jpg"
          type="Album"
        />
        <CardProductArtistPage
          info="2024"
          title="Chúng ta của hiện tại"
          urlImage="https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d"
          type="Album"
        />
        <CardProductArtistPage
          info="Bản phát hành mới nhất"
          title="Đừng làm trái tim anh đau"
          urlImage="https://bloganchoi.com/wp-content/uploads/2024/06/dung-lam-trai-tim-anh-dau-bloganchoi.jpg"
          type="Album"
        />
      </div>
    </div>
  );
}
