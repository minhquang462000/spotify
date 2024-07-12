import ListHomePageSection from "@/components/Lists/ListHomePageSection";
import HeaderChild from "@/components/RenderPageChild/HeaderChid";
import MainSidebar from "@/components/SideBar/MainSidebar";
import { MainLayout } from "@/layouts";

export default function Home() {
  return (
    <main className="w-full grid grid-cols-4  text-white">
      <MainSidebar />
      <div className="col-span-3 bg-[#121212] my-2 rounded-md overflow-hidden">
        <header className="w-full py-2 px-6 bg-[#101010]">
          <HeaderChild />
        </header>
        <div className="bg-gradient-to-t from-transparent to-[#232323]">
          <ListHomePageSection titleList="Nghệ sĩ phổ biến" urlLink="" />
        </div>
      </div>
    </main>
  );
}
