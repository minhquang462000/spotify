"use client";
import { useEffect, useRef, useState } from "react";
import ColorThief from "colorThief";

export default function BackgroundPageByImage({ imageUrl, color, setColor }) {
  const canvasRef = (useRef < HTMLCanvasElement) | (null > null);

  useEffect(() => {
    const extractColor = () => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = imageUrl;

      img.onload = () => {
        const colorThief = new ColorThief();

        // Lấy màu tại điểm ảnh (x, y)
        const palette = colorThief.getPalette(img, 6); // Lấy 6 màu chủ đạo
        const arrColor = palette.map(
          (color) =>
            `#${color.map((c) => c.toString(16).padStart(2, "0")).join("")}`
        );
        setColor(arrColor[0]);
        const rgbToHex = (r, g, b) => {
          const toHex = (num) => num.toString(16).padStart(2, "0");
          return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
        };
      };

      img.onerror = (error) => {
        console.error("Error loading image:", error);
      };
    };
    extractColor();
  }, [imageUrl]);
  console.log(color);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, transparent 0%, ${color}  100%)`,
      }}
      className={`absolute w-full h-[500px] top-0 -z-10  `}
    ></div>
  );
}
