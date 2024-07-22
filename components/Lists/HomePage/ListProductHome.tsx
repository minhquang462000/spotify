import CardListHome from "../../Cards/CardListHome";
import Link from "next/link";

export interface IListProductHomeProps {
  titleList: string;
  urlLink: string;
  showMore: string;
}

export default function ListProductHome(props: IListProductHomeProps) {
  const { titleList, urlLink, showMore } = props;
  return (
    <div className="max-w-[1900px]">
      <nav className="flex justify-between px-5  mb-3 items-center font-bold">
        <h3 className="text-2xl hover:underline">
          <Link href={urlLink}>{titleList}</Link>
        </h3>
        <p
          className={
            showMore.length === 0
              ? "hidden"
              : "text-sm text-[#666] hover:underline"
          }
        >
          <Link href={urlLink}>{showMore}</Link>
        </p>
      </nav>
      <div className="w-full px-2 grid grid-cols-9  max-h-[280px] overflow-hidden  ">
        <CardListHome
          info="Sơn Tùng Mtp"
          title={`mtp M-TP`}
          urlImage="https://tse1.mm.bing.net/th?id=OIP.HrxGNwAbBFy98wkBUh_0tgHaD3&pid=Api&P=0&h=220"
        />
        <CardListHome
          info="Sơn Tùng Mtp"
          title="m-tp M-TP"
          urlImage="https://tse1.mm.bing.net/th?id=OIP.HrxGNwAbBFy98wkBUh_0tgHaD3&pid=Api&P=0&h=220"
        />
        <CardListHome
          info="Sơn Tùng Mtp"
          title="m-tp M-TP"
          urlImage="https://tse1.mm.bing.net/th?id=OIP.HrxGNwAbBFy98wkBUh_0tgHaD3&pid=Api&P=0&h=220"
        />
        <CardListHome
          info="Sơn Tùng Mtp"
          title="m-tp M-TP"
          urlImage="https://tse1.mm.bing.net/th?id=OIP.HrxGNwAbBFy98wkBUh_0tgHaD3&pid=Api&P=0&h=220"
        />
        <CardListHome
          info="Sơn Tùng Mtp"
          title="m-tp M-TP"
          urlImage="https://tse1.mm.bing.net/th?id=OIP.HrxGNwAbBFy98wkBUh_0tgHaD3&pid=Api&P=0&h=220"
        />
        <CardListHome
          info="Sơn Tùng Mtp"
          title="m-tp M-TP"
          urlImage="https://tse1.mm.bing.net/th?id=OIP.HrxGNwAbBFy98wkBUh_0tgHaD3&pid=Api&P=0&h=220"
        />
      </div>
    </div>
  );
}
