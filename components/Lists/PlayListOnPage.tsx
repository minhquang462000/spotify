import * as React from 'react';
import TitleList from './TitleList';
import CardListHome from '../Cards/CardListHome';

export interface IPlaylistOnPageProps {
}

export default function PlaylistOnPage(props: IPlaylistOnPageProps) {
    return (
        <div className='max-w-[1900px]'>
            <TitleList titleList='Danh sách phát trên Spotify' urlLink="" showMore={true} />
            <div className="w-full grid grid-cols-6  gap-y-10 max-h-[290px] overflow-hidden  px-3">
                <CardListHome info='Sơn Tùng Mtp' title='All Out 2020s' urlImage='https://i.scdn.co/image/ab67706f000000028e6b9a53f7c37210a843ab0a' />
                <CardListHome info='Sơn Tùng Mtp' title='All Out 2020s' urlImage='https://i.scdn.co/image/ab67706f000000028e6b9a53f7c37210a843ab0a' />
                <CardListHome info='Sơn Tùng Mtp' title='All Out 2020s' urlImage='https://i.scdn.co/image/ab67706f000000028e6b9a53f7c37210a843ab0a' />
                <CardListHome info='Sơn Tùng Mtp' title='All Out 2020s' urlImage='https://i.scdn.co/image/ab67706f000000028e6b9a53f7c37210a843ab0a' />
                <CardListHome info='Sơn Tùng Mtp' title='All Out 2020s' urlImage='https://i.scdn.co/image/ab67706f000000028e6b9a53f7c37210a843ab0a' />
                <CardListHome info='Sơn Tùng Mtp' title='All Out 2020s' urlImage='https://i.scdn.co/image/ab67706f000000028e6b9a53f7c37210a843ab0a' />
                <CardListHome info='Sơn Tùng Mtp' title='All Out 2020s' urlImage='https://i.scdn.co/image/ab67706f000000028e6b9a53f7c37210a843ab0a' />
                <CardListHome info='Sơn Tùng Mtp' title='All Out 2020s' urlImage='https://i.scdn.co/image/ab67706f000000028e6b9a53f7c37210a843ab0a' />
            </div>
        </div>
    );
}
