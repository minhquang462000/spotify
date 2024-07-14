import Link from 'next/link';
import * as React from 'react';
import { CiInstagram } from 'react-icons/ci';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

export interface IFooterChildProps {
}

export default function FooterChild(props: IFooterChildProps) {
    return (
        <footer className='w-full text-[#a7a7a7] p-8 text-sm'>
            <ul className='grid grid-cols-5 mb-8'>
                <li className='flex flex-col gap-3'>
                    <p className='font-extrabold text-white'>Công ty</p>
                    <p className='hover:underline hover:text-white hover:font-medium' ><Link href="">Giới thiệu</Link></p>
                    <p className='hover:underline hover:text-white hover:font-medium' ><Link href="">Việc làm</Link></p>
                    <p className='hover:underline hover:text-white hover:font-medium' ><Link href="">For the Record</Link></p>
                </li>
                <li className='flex flex-col gap-3'>
                    <p className='font-extrabold text-white'>Cộng đồng</p>
                    <p className='hover:underline hover:text-white hover:font-medium' ><Link href="">Dành cho các Nghệ sĩ</Link></p>
                    <p className='hover:underline hover:text-white hover:font-medium' ><Link href="">Nhà phát triển</Link></p>
                    <p className='hover:underline hover:text-white hover:font-medium' ><Link href="">Quảng cáo</Link></p>
                    <p className='hover:underline hover:text-white hover:font-medium' ><Link href="">Nhà đầu tư</Link></p>
                    <p className='hover:underline hover:text-white hover:font-medium' ><Link href="">Nhà cung cấp</Link></p>
                </li>
                <li className='flex flex-col gap-3'>
                    <p className='font-extrabold text-white'>Liên kết hữu ích</p>
                    <p className='hover:underline hover:text-white hover:font-medium' ><Link href="">Hỗ trợ</Link></p>
                    <p className='hover:underline hover:text-white hover:font-medium' ><Link href="">Ứng dụng di động miễn phí</Link></p>
                </li>
                <li className='flex flex-col gap-3'>
                    <p className='font-extrabold text-white'>Các gói của Spotify</p>
                    <p className='hover:underline hover:text-white hover:font-medium' ><Link href="">Premium Individual</Link></p>
                    <p className='hover:underline hover:text-white hover:font-medium' ><Link href="">Premium Student</Link></p>
                    <p className='hover:underline hover:text-white hover:font-medium' ><Link href="">Spotify Free</Link></p>
                </li>
                <li className='flex w-full justify-end gap-3'>
                    <button className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-40 bg-opacity-15 bg-[#fff]'>
                        <Link href=""> <CiInstagram size={18} color='white' /></Link>
                    </button>
                    <button className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-40 bg-opacity-15 bg-[#fff]'>
                        <Link href=""> <FaTwitter size={18} color='white' /></Link>
                    </button>
                    <button className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-40 bg-opacity-15 bg-[#fff]'>
                        <Link href=""> <FaFacebook size={18} color='white' /></Link>
                    </button>
                </li>
            </ul>
            <p className='text-[#a7a7a7] font-light border-t-[1px] border-[#75757578] py-8'>© 2024 Spotify AB</p>
        </footer>
    );
}
