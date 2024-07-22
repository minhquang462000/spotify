import PagePlayList from "@/components/Pages/PagePlayList";
import * as React from "react";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <main className="bg-[#121212] w-full  h-full rounded-md  overflow-hidden   relative">
      <div className="absolute w-full top-0 z-10 bg-gradient-to-b from-[#FF9F75] to-transparent h-[500px]" />
      <PagePlayList />
    </main>
  );
}
