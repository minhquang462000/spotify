
import PlaylistPage from "@/components/Pages/PlaylistPage";
import { MainLayout } from "@/layouts";
import * as React from "react";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <MainLayout>
      <main className="bg-[#121212] w-full  h-full rounded-md  overflow-hidden   relative">
    
        <PlaylistPage />
      </main>
    </MainLayout>
  );
}
