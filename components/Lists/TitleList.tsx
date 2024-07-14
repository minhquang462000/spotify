import Link from 'next/link';
import * as React from 'react';

export interface ITitleListProps {
    titleList: string;
    urlLink: string;
    showMore: boolean;
}

export default function TitleList({ titleList, urlLink, showMore }: ITitleListProps) {
    return (
        <nav className="flex justify-between px-6 py-4 items-center font-bold">
            <h3 className="text-2xl hover:underline">
                <Link href={urlLink}>{titleList}</Link>
            </h3>
            <p className={!showMore ? 'hidden' : 'text-sm text-[#666] hover:underline'}>
                <Link href={urlLink}>Hiện tất cả</Link>
            </p>
        </nav>
    );
}
