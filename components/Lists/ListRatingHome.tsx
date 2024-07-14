
import CardListHome from '../Cards/CardListHome';
import TitleList from './TitleList';
import imgtopWorld from "@/public/images/topWorld.jpg"
import imgtop50USA from "@/public/images/Top50Usa.jpg"
import imgSongUSA from "@/public/images/TopSongUsa.jpg"
import img50Global from "@/public/images/top50Global.jpg"
import imgViralUsa from "@/public/images/viral50Usa.jpg"
import imgViralGlobal from "@/public/images/viral50Global.jpg"
import { title } from 'process';
import { info } from 'console';
import Link from 'next/link';

const arrList = [
  {
    urlImage: imgtopWorld,
    info: "Thông tin cập nhật hằng tuần về những bản nhạc được nghe nhiều nhất hiện nay tại Toàn Cầu.",
    title: "Bài hát hàng đầu tại Toàn Cầu",
    urlLink: ""
  },
  {
    urlImage: imgSongUSA,
    title: "Bài hát hàng đầu tại Hoa Kỳ",
    info: "Thông tin cập nhật hằng tuần về những bản nhạc được nghe nhiều nhất hiện nay tại Hoa Kỳ.",
    urlLink: "."
  },
  {
    urlImage: img50Global,
    title: "50 bài hát hàng đầu tại Toàn Cầu",
    info: "Thông tin cập nhật hằng ngày về những bản nhạc được nghe nhiều nhất hiện nay tại Toàn Cầu.",
    urlLink: ""
  },
  {
    urlImage: imgtop50USA,
    title: "50 bài hát hàng đầu tại Hoa Kỳ",
    info: "Thông tin cập nhật hằng ngày về những bản nhạc được nghe nhiều nhất hiện nay tại Hoa Kỳ.",
    urlLink: ""
  },
  {
    urlImage: imgViralGlobal,
    info: "Thông tin cập nhật hằng ngày về những bản nhạc thịnh hành nhất hiện nay tại Toàn Cầu.",
    title: "50 bài hát thịnh hành nhất tại Toàn Cầu",
    urlLink: ""
  },
  {
    urlImage: imgViralUsa,
    info: "Thông tin cập nhật hằng ngày về những bản nhạc thịnh hành nhất hiện nay tại Hoa Kỳ.",
    title: "50 bài hát thịnh hành nhất tại Hoa Kỳ",
    urlLink: ""
  },
]
export interface IListRatHomeProps {
}

export default function ListRatingHome(props: IListRatHomeProps) {
  return (
    <div className='max-w-[1900px]'>
      <TitleList titleList='Bảng xếp hạng Nổi bật' urlLink="" showMore={false} />
      <div className="w-full grid grid-cols-6 max-h-[290px] overflow-hidden   px-3">
        {arrList.map((item, index) => (
         <Link href={item.urlLink} key={index}>
          <CardListHome
            urlImage={item.urlImage.src}
            info={item.info}
            title={item.title}
          />
         </Link>
        ))}
      </div>
    </div>
  );
}
