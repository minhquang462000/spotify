import Link from "next/link";
import * as React from "react";
import CardSingerHome from "../Cards/CardSingerHome";

export interface IListSingerHomeProps {
  titleList: string;
  urlLink: string;
  showMore: string;
}

export default function ListSingerHome(props: IListSingerHomeProps) {
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
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
      </div>
    </div>
  );
}
