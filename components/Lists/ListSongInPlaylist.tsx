import { GoClock } from "react-icons/go";
import CardListSongOnPage from "../Cards/CardListSongOnPage";

export interface IListSongInAlbumProps {
  scrollToTop: number;
}

export default function ListSongInPlaylist(props: IListSongInAlbumProps) {
  const { scrollToTop } = props;
  return (
    <div className="text-[#b3b3b3]">
      {" "}
      <nav
        className={`flex border-b-[1px] ${
          scrollToTop > 10
            ? "bg-[#1f1f1f] shadow shadow-[#333] px-5 mx-0"
            : "mx-4 px-1"
        } w-full border-[#ffffff1a]  sticky top-[59px] z-[999]  justify-between  text-xs py-2  items-center font-bold`}
      >
        <ul className="w-full flex px-2  justify-between items-center">
          <li className="flex items-center w-[40%]  gap-3">
            <span className="text-sm text-center w-8 h-max"> #</span>
            <span>Tiêu đề</span>
          </li>
          <li className="flex items-center  w-[45%]">
            <p className="w-1/2">Album</p>
            <p className="w-1/2">Ngày thêm</p>
          </li>
          <li className="w-[150px] flex justify-center relative  group/popup">
            <GoClock size={18} />
          </li>
        </ul>
      </nav>
      <div className="text-sm w-full px-4 py-3">
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
        <CardListSongOnPage showAlbum={true} />
      </div>
    </div>
  );
}
