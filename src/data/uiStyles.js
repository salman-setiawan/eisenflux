// Font Size
export const heading1Text = 'text-[24px]';
export const heading2Text = 'text-[20px]';
export const heading3Text = 'text-[15px]';
export const regularText = 'text-[14px]';
export const smallText = 'text-[13px]';
export const tinyText = 'text-[12px]';

// Colour Text
export const brandColourText = 'text-orange-300';
export const brandLighterColourText = 'text-orange-100';
export const baseColourText = 'text-white';
export const semibaseColourText = 'text-white/60';
export const invertedbaseColourText = 'text-black';

// Container Specs
export const containerShape = 'rounded-md';
export const containerBorderColour = 'border border-neutral-800/60';
export const containerCardColour = 'bg-[#202020]';
export const containerBaseColour = 'bg-[#141414]';
export const containerBaseHover = 'hover:bg-[#333333]';
export const backgroundBaseColour = 'bg-[#0c0c0c]';
export const brandBaseColour = 'bg-[#3D3B38]';
export const brandBaseHover = 'hover:bg-orange-200';


export const dotBlink = "w-[10px] h-[10px] rounded-full animate-blink";

export const cardStyles = `p-3 flex flex-col ${containerShape} ${containerBorderColour} ${containerCardColour}`;

export const pdfButton = `w-full py-1.5 px-2 bg-red-700 hover:bg-red-800 text-white ${containerShape} border-3 border-black font-semibold ${regularText} cursor-pointer`;
export const defaultButton = `w-full py-1.5 px-2 bg-white ${brandBaseHover} text-black ${containerShape} border-3 border-black font-semibold ${regularText} cursor-pointer`;

export const dropdownOutter = `absolute md:min-w-[200px] overflow-hidden shadow-xl shadow-black/40 ${containerShape} ${containerBorderColour} ${containerShape} ${containerBaseColour} z-20`;
export const dropdownButton = `p-3 ${containerBaseHover} ${baseColourText} text-start cursor-pointer`;

export const largeTitleText = `${heading1Text} font-semibold mb-1`
export const smallTitleText = `${heading3Text} font-semibold`
export const paragraphText = `${regularText} ${baseColourText} text-justify leading-relaxed`;
export const highlightedText = `${regularText} ${brandColourText} font-semibold`;
export const subText = `${smallText}`