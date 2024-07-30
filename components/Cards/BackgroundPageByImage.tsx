"use client";

import { useEffect, useRef, useState } from "react";
interface IBackgroundPageByImageProps {
  imageUrl: string;
  height: string;
}

export default function BackgroundPageByImage({
  imageUrl,
  height, }: IBackgroundPageByImageProps) {
  const [color, setColor] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const extractColor = async () => {
      try {
        if (!canvasRef.current) return;

        // Tạo canvas và context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Tải ảnh từ URL dưới dạng Blob
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const img = new Image();

        // Chuyển đổi Blob thành URL tạm thời
        const imgUrl = URL.createObjectURL(blob);

        // Đặt URL ảnh vào Image object
        img.src = imgUrl;

        img.onload = () => {
          // Vẽ ảnh lên canvas
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          // Lấy dữ liệu hình ảnh từ canvas
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          const rgbToHex = (): string => {
            const toHex = (num: number) => num.toString(16).padStart(2, '0');
            return `#${toHex(data[0])}${toHex(data[1])}${toHex(data[2])}`;
          };

          setColor(rgbToHex());
        };
      } catch (error) {
        console.error('Error extracting color:', error);
        setLoading(false);
      }
    };
    extractColor();
  }, [imageUrl]);
  console.log(color);
  return (
    <div
      className={`absolute w-full top-0 z-10 bg-gradient-to-b from-[${color}] to-transparent h-[${height}px]`}
    >
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
}
