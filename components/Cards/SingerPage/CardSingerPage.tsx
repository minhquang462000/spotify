export interface ICardSingerPageProps {}

export default function CardSingerPage(props: ICardSingerPageProps) {
  return (
    <div className="w-full max-h-[380px]   flex justify-end items-end px-4 h-full">
      <nav className="flex flex-col  leading-[65px] font-medium w-full">
        <span className="flex items-center mb-5 gap-2 ">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            fill="#0c67d3"
            className="Svg-sc-ytk21e-0 gxNUVX b0NcxAbHvRbqgs2S8QDg w-6 h-6 "
            viewBox="0 0 24 24"
          >
            <path d="M10.814.5a1.658 1.658 0 0 1 2.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 0 1 1.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 0 1-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 0 1-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 0 1-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 0 1 0-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 0 1 1.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"></path>
          </svg>
          <p className="text-sm">Nghệ sĩ được xác minh</p>
        </span>
        <h2 className="text-[80px] font-bold">Sơn Tùng M-TP</h2>
        <p>2.005.644 người nghe hàng tháng</p>
      </nav>
    </div>
  );
}