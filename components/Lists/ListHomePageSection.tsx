import Link from "next/link";
import * as React from "react";
import CardSingerHome from "../Cards/CardSingerHome";

export interface IListHomePageSectionProps {
  titleList: string;
  urlLink: string;
}

export default function ListHomePageSection(props: IListHomePageSectionProps) {
  const { titleList, urlLink } = props;
  return (
    <div>
      <nav className="flex justify-between p-6 items-center font-bold">
        <h3 className="text-2xl hover:underline">
          <Link href={urlLink}>{titleList}</Link>
        </h3>
        <p className="text-sm text-[#666] hover:underline">
          <Link href={urlLink}>Hiện tất cả</Link>
        </p>
      </nav>
      <div className="w-full grid grid-cols-6  px-3">
        <CardSingerHome />
        <CardSingerHome />
        <CardSingerHome />
        <CardSingerHome />
        <CardSingerHome />
        <CardSingerHome />
      </div>
    </div>
  );
}
