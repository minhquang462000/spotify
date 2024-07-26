import InfoFooterChild from "@/components/RenderPageChild/InfoFooterChild";
import MainSidebar from "@/components/SideBar/MainSidebar";
import { ILayout } from "@/interfaces";

export function MainLayout({ children }: Readonly<ILayout>) {
  return (
    <section className=" w-full gap-2 relative h-screen px-2 flex text-white ">
      <div className="w-max pt-2  pb-16  h-full relative">
        <MainSidebar />
      </div>
      <div className="w-full pb-16  pt-2 h-full ">{children}</div>
      <InfoFooterChild />
    </section>
  );
}
