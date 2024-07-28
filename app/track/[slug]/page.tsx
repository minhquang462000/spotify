import TrackPage from "@/components/Pages/TrackPage";
import TrackRightSidebar from "@/components/RenderPageChild/SideBarTrack/TrackRightSidebar";
import MainSidebar from "@/components/MainSideBar/MainSidebar";
import * as React from "react";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <main
      style={{ paddingBottom: "74px" }}
      className=" w-full gap-2 relative h-screen p-2   flex text-white "
    >
      <div className="min-w-[350px]  h-full relative">
        <MainSidebar />
      </div>
      <div className="min-w-[50%] w-full h-full relative">
        <TrackPage />
      </div>
      <div className="min-w-[350px]  h-full relative">
        <TrackRightSidebar />
      </div>
    </main>
  );
}
