import InfoFooterChild from "@/components/RenderPageChild/InfoFooterChild";
import MainSidebar from "@/components/MainSideBar/MainSidebar";
import { ILayout } from "@/interfaces";

export function MainLayout({ children }: Readonly<ILayout>) {
  return (
    <section
      style={{ paddingBottom: "74px" }}
      className=" w-full gap-2 relative h-screen p-2   flex text-white "
    >
      <div className="max-w-[350px]  h-full relative">
        <MainSidebar />
      </div>
      <div className="w-full    h-full ">{children}</div>
      <InfoFooterChild />
    </section>
  );
}
