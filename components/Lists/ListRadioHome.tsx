import * as React from 'react';
import TitleList from './TitleList';
import CardRadioHome from '../Cards/CardRadioHome';

export interface IListRadioHomeProps {
}

export default function ListRadioHome(props: IListRadioHomeProps) {
    return (
        <div className='max-w-[1900px]'>
            <TitleList titleList='Radio phổ biến' urlLink="" showMore={true} />
            <div className="w-full grid grid-cols-6 max-h-[290px] overflow-hidden   px-3">
                <CardRadioHome />
                <CardRadioHome />
                <CardRadioHome />
                <CardRadioHome />
                <CardRadioHome />
                <CardRadioHome />
            </div>
        </div>
    );
}
