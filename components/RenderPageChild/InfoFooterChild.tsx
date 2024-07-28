import Link from 'next/link';
import * as React from 'react';

export interface IInfoFoterChildProps {
}

export default function InfoFooterChild(props: IInfoFoterChildProps) {
    return (
        <nav className="w-full flex fixed bottom-2 justify-between z-[889]  h-14 items-center p-3 text-sm col-span-5 bg-gradient-to-r from-[#af2896] to-[#509bf5]">
            <div>
                <Link href="">
                    <p className="font-bold text-xs mb-1">Xem trước  Spotify</p>
                </Link>
                <Link href="">
                    <p>Đăng ký để nghe không giới hạn các bài hát và podcast với quảng cáo không thường xuyên.Không cần thẻ tín dụng.</p>
                </Link>
            </div>
            <Link href="/register">
                <button
                    className="text-black font-sans font-bold text-sm bg-white py-3 px-8 mr-5 hover:scale-105  rounded-full">
                    Đăng ký miễn phí
                </button>
            </Link>
        </nav>
    );
}
