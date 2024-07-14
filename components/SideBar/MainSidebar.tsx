import HeaderSidebar from "./HeaderSideBar";
import BodySideBar from "./BodySideBar";
import FooterSideBar from "./FooterSideBar";

export interface IMainSidebarProps {}

export default function MainSidebar(props: IMainSidebarProps) {
  return (
    <section style={{ gridArea: "left-sidebar" }} className="w-full sticky top-0  flex flex-col  h-full ">
      <HeaderSidebar />
      <div className="bg-[#121212] h-full flex flex-col justify-between mt-2 rounded-md ">
        <BodySideBar />
        <FooterSideBar />
      </div>
    </section>
  );
}
