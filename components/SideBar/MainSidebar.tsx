import HeaderSidebar from "./HeaderSideBar";
import BodySideBar from "./BodySideBar";
import FooterSideBar from "./FooterSideBar";

export interface IMainSidebarProps {}

export default function MainSidebar(props: IMainSidebarProps) {
  return (
    <section className="w-full flex flex-col  h-screen p-2">
      <HeaderSidebar />
      <div className="bg-[#121212] h-full flex flex-col justify-between mt-2 rounded-md ">
        <BodySideBar />
        <FooterSideBar />
      </div>
    </section>
  );
}
