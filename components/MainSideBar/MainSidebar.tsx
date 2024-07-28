import HeaderSidebar from "./HeaderSideBar";
import BodySideBar from "./BodySideBar";
import FooterSideBar from "./FooterSideBar";

export interface IMainSidebarProps {}

export default function MainSidebar(props: IMainSidebarProps) {
  return (
    <div
      style={{ gridArea: "left-sidebar" }}
      className="w-full sticky z-[888] top-0  flex flex-col  h-full "
    >
      <HeaderSidebar />
      <div className="bg-[#121212] w-full h-full overflow-hidden flex flex-col justify-between mt-2 rounded-md ">
        <BodySideBar />
        <FooterSideBar />
      </div>
    </div>
  );
}
