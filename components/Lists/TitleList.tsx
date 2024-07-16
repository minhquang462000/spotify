import Link from "next/link";
import * as React from "react";

export interface ITitleListProps {
  titleList: string;
  urlLink: string;
  showMore: string;
}

export default function TitleList({
  titleList,
  urlLink,
  showMore,
}: ITitleListProps) {
  return (
    <nav className="flex justify-between px-6 py-4 items-center font-bold">
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
  );
}
