import MainSidebar from "@/components/SideBar/MainSidebar";
import { ILayout } from "@/interfaces";

export function MainLayout({ children }: Readonly<ILayout>) {
  return (
    <section className="w-full text-white  flex ">
      <div className="h-screen w-1/4">
        <MainSidebar />
      </div>
      <div className="w-3/4">{children}</div>
    </section>
  );
}
