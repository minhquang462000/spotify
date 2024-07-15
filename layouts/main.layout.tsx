import InfoFooterChild from "@/components/RenderPageChild/InfoFooterChild";
import MainSidebar from "@/components/SideBar/MainSidebar";
import { ILayout } from "@/interfaces";

export function MainLayout({ children }: Readonly<ILayout>) {
  return (
    <section className="">
   
      <div className="w-full pb-16  pt-2 h-full ">
        {children}
      </div>
     
    </section>
  );
}
