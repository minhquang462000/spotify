export interface IPopupTextProps {
  content: string;
}

export default function PopupText({ content }: IPopupTextProps) {
  return (
    <span className="text-white  z-[999] group-hover/popup:block bg-[#282828] hidden rounded-md w-max py-1 px-2 absolute -top-14 -left-7   shadow shadow-[#191919] font-medium ">
      {content}
    </span>
  );
}
