export function lightenHex(hex: string, percent: number) {
  // Loại bỏ dấu '#' nếu có
  hex = hex.replace(/^#/, "");

  // Chuyển đổi HEX thành RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

    // Giảm độ sáng
    r = Math.max(0, Math.floor(r - r * percent / 100));
    g = Math.max(0, Math.floor(g - g * percent / 100));
    b = Math.max(0, Math.floor(b - b * percent / 100));

  // Chuyển đổi RGB trở lại thành HEX
  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
