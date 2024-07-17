import * as React from "react";
import TitleList from "./TitleList";
import CardListHome from "../Cards/CardListHome";
import Link from "next/link";
import CardFamousRelease from "../Cards/CardFamousRelease";

export interface IListAlbumHomeProps {

}

export default function ListFamousRelease(props: IListAlbumHomeProps) {

    return (
        <div className="max-w-[1900px]   mt-10">
            <h3 className="text-2xl px-4  font-bold">
                <Link href={""}>Bản phát hành nổi tiếng</Link>
            </h3>
            <div className="w-full px-1  flex gap-y-10 max-h-[280px] overflow-hidden  ">
                <CardFamousRelease
                    info="Bản phát hành mới nhất"
                    title="Đừng làm trái tim anh đau"
                    urlImage="https://bloganchoi.com/wp-content/uploads/2024/06/dung-lam-trai-tim-anh-dau-bloganchoi.jpg"
                />
                <CardFamousRelease
                    info="2024"
                    title="Chúng ta của hiện tại"
                    urlImage="https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d"
                />
                <CardFamousRelease
                    info="Bản phát hành mới nhất"
                    title="Đừng làm trái tim anh đau"
                    urlImage="https://bloganchoi.com/wp-content/uploads/2024/06/dung-lam-trai-tim-anh-dau-bloganchoi.jpg"
                />
            </div>
        </div>
    );
}
