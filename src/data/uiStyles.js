// Text Sizes
export const textHeading1 = 'text-[24px] font-semibold mb-1';
export const textHeading2 = 'text-[18px] font-medium';
export const textHeading3 = 'text-[14px] font-medium';
export const articleHeading = 'font-semibold';
export const textArticle = 'text-[16px]';
export const textRegular = 'text-[14px]';
export const textSmall = 'text-[13px]';
export const textTiny = 'text-[12px]';
export const textMicro = 'text-[11px]';

// Text Colors
export const textBrand = 'text-orange-300';
export const textBrandLight = 'text-orange-200';
export const textBase = 'text-white';
export const textBaseSemi = 'text-white/60';
export const textBaseUltraMuted = 'text-white/8';
export const textInverted = 'text-black';

// Container Styles
export const containerShape = 'rounded-md';
export const containerBorder = 'border border-neutral-800/60';
export const containerCard = 'bg-[#202020]';
export const containerBase = 'bg-[#141414]';
export const containerBaseHover = 'hover:bg-[#333333]';
export const bgBase = 'bg-[#0c0c0c]';
export const bgBrand = 'bg-[#3D3B38]';
export const bgBrandHover = 'hover:bg-orange-200';

// Utility Styles
export const dotBlink = "w-[10px] h-[10px] rounded-full animate-blink";

// Component Styles
export const cardStyles = `p-3 flex flex-col ${containerShape} ${containerBorder} ${containerCard}`;

export const buttonPdf = `w-full py-1.5 px-2 bg-red-700 hover:bg-red-800 text-white ${containerShape} border-3 border-black font-semibold ${textRegular} cursor-pointer`;
export const buttonDefault = `w-full py-1.5 px-2 bg-white ${bgBrandHover} text-black ${containerShape} border-3 border-black font-semibold ${textRegular} cursor-pointer`;

export const dropdownOuter = `absolute md:min-w-[200px] overflow-hidden shadow-xl shadow-black/40 ${containerShape} ${containerBorder} ${containerShape} ${containerBase} z-20`;
export const dropdownButton = `p-3 ${containerBaseHover} ${textBase} text-start cursor-pointer ${textHeading3}`;

// Typography Styles
export const textParagraph = `${textRegular} ${textBase} text-justify leading-relaxed`;
export const textParagraphArticle = `${textArticle} ${textBase} text-justify leading-relaxed`;
export const textHighlighted = `${textRegular} ${textBrand} font-semibold`;
export const textSub = `${textSmall}`;
export const textSubSemi = `${textSmall} ${textBaseSemi}`;

// Semantic Colors (for Content component)
export const textSemanticWarning = 'text-yellow-200';
export const textSemanticError = 'text-orange-400';
export const textSemanticSuccess = 'text-emerald-400';