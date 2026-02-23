import { useRef, useState, useEffect } from 'react';
import svgPaths from "./svg-al9hxu7byt";
import imgImage from "figma:asset/f88a406291577cd3331249e32aa5d35c759e6aa3.png";
import imgImage1 from "figma:asset/02471e1a66d7c99d3051ce90d680d612d9f9e9c4.png";
import imgImage2 from "figma:asset/ff911fab9b999e90473ce23bf9ff6950acb6f3ed.png";
import imgImage3 from "figma:asset/a64bd8d9d1373c4cc36392bf1a3eefad678c010a.png";
import imgImage4 from "figma:asset/0745e7842ee5676ba775ea3ad2a970096f6865cf.png";
import imgImage5 from "figma:asset/76aabf0b354b30847824817809eb15fe10924c17.png";
import imgImage6 from "figma:asset/35ad7c3c99f50cb9c8e5c922e209efda878ba3ce.png";
import imgImage7 from "figma:asset/632521edaa90d8295f60f4e72f92355433963a26.png";
import imgImage8 from "figma:asset/47699cf2aa46b0eeeec36c017c3806e86c65e384.png";
import imgImage9 from "figma:asset/fa1bf6b8847462ba0dff667962efa33d4051a3df.png";

function ColorsHqWhite() {
  return (
    <div className="absolute inset-[10.87%_3.1%_6.52%_5.17%]" data-name="Colors/HQ-White">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 91.5813 66.087">
        <g id="Colors/HQ-White">
          <path clipRule="evenodd" d={svgPaths.paf941f0} fill="var(--fill-0, #273A60)" fillRule="evenodd" id="Mask" />
        </g>
      </svg>
    </div>
  );
}

function IconsNextweb() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.p394ad700} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 15" />
      </svg>
    </div>
  );
}

function Group3Copy() {
  return (
    <div className="absolute contents inset-0" data-name="Group 3 Copy">
      <div className="absolute inset-[0_0.02%_0_0]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p3d2d0300} fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
      <div className="absolute inset-[3.56%_0]" data-name="Shape">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
          <path d={svgPaths.p37cafab0} fill="var(--fill-0, #3D3D3C)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb1() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group3Copy />
    </div>
  );
}

function IconsNextweb2() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.p176f3400} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 16" />
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[48px]" data-name="Icon button/Big/Transparent">
        <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 opacity-0 rounded-[16px]" />
        <div className="absolute inset-[29.17%]" data-name="search">
          <IconsNextweb />
        </div>
      </div>
      <div className="relative shrink-0 size-[48px]" data-name="Icon button/Big/Transparent">
        <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 opacity-0 rounded-[16px]" />
        <div className="absolute inset-[29.17%]" data-name="heart">
          <IconsNextweb1 />
        </div>
      </div>
      <div className="relative shrink-0 size-[48px]" data-name="Icon button/Big/Transparent">
        <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 opacity-0 rounded-[16px]" />
        <div className="absolute inset-[29.17%]" data-name="cart">
          <IconsNextweb2 />
        </div>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute content-stretch flex items-start pr-[126px] right-0 top-[36px]" data-name="Icons">
      <Frame117 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="content-stretch flex h-[16px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Navbar item">
        <div className="flex flex-col font-['Husqvarna_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3c] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">Products</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="content-stretch flex h-[16px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Navbar item">
        <div className="flex flex-col font-['Husqvarna_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3c] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">{`Parts & Accessories`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[26px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[48px]" data-name="Icon button/Big/Transparent">
        <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 opacity-0 rounded-[16px]" />
        <div className="absolute inset-[29.17%] overflow-clip" data-name="menu">
          <div className="absolute inset-[14.29%_0_78.57%_0]" data-name="Vector 1 (Stroke)">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1.42857">
              <path clipRule="evenodd" d={svgPaths.p36412cf0} fill="var(--fill-0, #1F2742)" fillRule="evenodd" id="Vector 1 (Stroke)" />
            </svg>
          </div>
          <div className="absolute bottom-[14.29%] left-0 right-1/4 top-[78.57%]" data-name="Vector 2 (Stroke)">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.42857">
              <path clipRule="evenodd" d={svgPaths.p17540100} fill="var(--fill-0, #1F2742)" fillRule="evenodd" id="Vector 2 (Stroke)" />
            </svg>
          </div>
          <div className="absolute inset-[46.43%_46.43%_46.43%_0]" data-name="Vector 3 (Stroke)">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7143 1.42857">
              <path clipRule="evenodd" d={svgPaths.p38207300} fill="var(--fill-0, #1F2742)" fillRule="evenodd" id="Vector 3 (Stroke)" />
            </svg>
          </div>
        </div>
      </div>
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function MenuLinks() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pl-[126px] top-[36px]" data-name="Menu / Links">
      <Frame12 />
    </div>
  );
}

function IconsNextweb3() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Delviery">
          <path d={svgPaths.p3ebcfd00} fill="var(--fill-0, white)" id="Combined Shape" />
          <path d="M15.9997 0H0V16H15.9997V0Z" fill="var(--fill-0, white)" id="Rectangle" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function HbdIcons() {
  return (
    <div className="absolute contents inset-0" data-name="HBD   Icons">
      <IconsNextweb3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 content-stretch flex h-[20px] items-center justify-center ml-0 mt-0 relative rounded-[5px] row-1" data-name="Inline link/Microcopy inverted">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] underline">Free shipping over £50</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[300px]">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="delivery">
        <HbdIcons />
      </div>
      <Group5 />
    </div>
  );
}

function IconsNextweb4() {
  return (
    <div className="absolute inset-[0.01%_0_-0.01%_0]" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0001 16">
        <g id="Icons Nextweb">
          <path d={svgPaths.p7986200} fill="var(--fill-0, white)" id="Combined Shape Copy" />
        </g>
      </svg>
    </div>
  );
}

function HbdIcons1() {
  return (
    <div className="absolute contents inset-[0.01%_0_-0.01%_0]" data-name="HBD   Icons">
      <IconsNextweb4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[300px]">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="return">
        <HbdIcons1 />
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Free returns within 30 days
      </p>
    </div>
  );
}

function HbdIcons2() {
  return (
    <div className="absolute contents inset-0" data-name="HBD   Icons">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons Nextweb">
          <path d={svgPaths.pfe07900} fill="var(--fill-0, white)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[300px]">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="secure">
        <HbdIcons2 />
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Smooth and secure payment
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1400px]">
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#273a60] content-stretch flex flex-col inset-[0_0_75.31%_0] items-center justify-center px-[492px] py-[10px]">
      <Frame16 />
    </div>
  );
}

function Pages() {
  return (
    <div className="content-stretch flex gap-[4px] h-[59px] items-center pb-[18px] pt-[19px] relative shrink-0" data-name="Pages">
      <div className="content-stretch flex h-[16px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Inline link/Microcopy">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] underline">Home</p>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[20px]">/</p>
      </div>
      <div className="content-stretch flex h-[16px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Inline link/Body 3">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] underline">Battery Chainsaws</p>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[20px]">/</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[20px]">Husqvarna 540i XP</p>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[calc(50%-20px)]">
      <div className="h-[533px] relative shrink-0 w-[800px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Group7Copy() {
  return (
    <div className="absolute contents inset-0" data-name="Group 7 Copy">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.p1e332200} fill="var(--fill-0, #3D3D3C)" id="Combined Shape" />
      </svg>
    </div>
  );
}

function IconsNextweb5() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group7Copy />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="expand">
        <IconsNextweb5 />
      </div>
    </div>
  );
}

function Expand() {
  return (
    <div className="absolute bg-black bottom-[9.77%] content-stretch flex gap-[8px] items-center justify-end opacity-41 px-[12px] py-[4px] right-[16px] rounded-[12px] top-[84.64%]" data-name="Expand">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        1/6
      </p>
      <Frame1 />
    </div>
  );
}

function Group3Copy1() {
  return (
    <div className="absolute contents inset-0" data-name="Group 3 Copy">
      <div className="absolute inset-[3.56%_0]" data-name="Shape">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
          <path d={svgPaths.p37cafab0} fill="var(--fill-0, #3D3D3C)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb6() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group3Copy1 />
    </div>
  );
}

function Favourite() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip p-[2px] relative shrink-0 w-[32px]" data-name="Favourite">
      <div className="aspect-[28/27.99546241760254] flex-[1_0_0] min-h-px min-w-px relative" data-name="heart">
        <IconsNextweb6 />
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#3d3d3c] w-full whitespace-pre-wrap" data-name="Copy">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[28px] tracking-[-0.2px] w-full">Product description</p>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] opacity-80 relative shrink-0 text-[18px] tracking-[0.4px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Husqvarna 540i XP is a powerful and efficient battery-powered chainsaw, equivalent to a 40cc pro petrol saw when fitted with a BLi300 battery. It’s ideal for removal of small and mid-sized trees where you need smooth and efficient cuts. Designed for professionally oriented users who want a lightweight, high …
      </p>
    </div>
  );
}

function IconsNextweb7() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function ShowMore() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Show more">
      <div className="content-stretch flex gap-[12px] h-[16px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Icon text link/Body 2">
        <div className="relative shrink-0 size-[12px]" data-name="plus">
          <IconsNextweb7 />
        </div>
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline">Show more</p>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Copy />
      <ShowMore />
    </div>
  );
}

function ProductInformation1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Product information">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#3d3d3c] text-[28px] tracking-[-0.2px]">Product information</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">{`Manuals & Documents`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(31)</p>
      </div>
    </div>
  );
}

function IconsNextweb8() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb8 />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title1 />
      <Icon />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Accessories</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(10)</p>
      </div>
    </div>
  );
}

function IconsNextweb9() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex h-[28px] items-start py-[6px] relative shrink-0 w-[16px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb9 />
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title3 />
      <Icon1 />
    </div>
  );
}

function TitleCount() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-[350] gap-[8px] items-center leading-[0] relative shrink-0 text-left tracking-[0.4px] whitespace-nowrap" data-name="Title & count">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Features</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(12)</p>
      </div>
    </div>
  );
}

function IconsNextweb10() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex h-[28px] items-start py-[6px] relative shrink-0 w-[16px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb10 />
      </div>
    </div>
  );
}

function AccordionRow() {
  return (
    <div className="content-stretch flex items-start justify-between relative rounded-[4px] shrink-0 w-full" data-name="Accordion row">
      <div aria-hidden="true" className="absolute border-12 border-[rgba(0,0,0,0)] border-solid inset-[-12px] pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex items-start relative rounded-[4px] self-stretch shrink-0" data-name="Accordion item/Body 1">
        <TitleCount />
      </div>
      <Icon2 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Specifications</p>
      </div>
    </div>
  );
}

function Group5Copy() {
  return (
    <div className="absolute contents inset-0" data-name="Group 5 Copy 3">
      <div className="absolute inset-[46.43%_0]" data-name="Combined Shape Copy 9">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 2">
          <path d={svgPaths.p382f82c0} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 9" />
        </svg>
      </div>
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d="M27.9995 0H0V28H27.9995V0Z" fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
      </svg>
    </div>
  );
}

function IconsNextweb11() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group5Copy />
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex h-[28px] items-start py-[6px] relative shrink-0 w-[16px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="minus">
        <IconsNextweb11 />
      </div>
    </div>
  );
}

function AccordionRow1() {
  return (
    <div className="content-stretch flex items-start justify-between relative rounded-[4px] shrink-0 w-full" data-name="Accordion row">
      <div aria-hidden="true" className="absolute border-12 border-[rgba(0,0,0,0)] border-solid inset-[-12px] pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex items-start relative rounded-[4px] self-stretch shrink-0" data-name="Accordion item/Body 1">
        <Title4 />
      </div>
      <Icon3 />
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pb-px px-[32px] relative shrink-0" data-name="Button text">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#3d3d3c] text-[14px] text-center tracking-[1px] uppercase">Mobile view</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[12px] relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Compare specifications and features with similar Husqvarna products.
      </p>
      <a href="/mobile.html" style={{ textDecoration: "none" }}>
        <div className="content-stretch flex h-[48px] items-center relative rounded-[16px] shrink-0" data-name="Secondary button">
          <div aria-hidden="true" className="absolute border border-[#3d3d3c] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <ButtonText />
        </div>
      </a>
    </div>
  );
}

function HeadingCell() {
  return <div className="h-full shrink-0 w-[300px]" data-name="heading-cell" />;
}

function HeadingCell1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center not-italic p-[8px] relative shrink-0 text-[#3d3d3c] w-[213px] whitespace-pre-wrap" data-name="heading-cell">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] h-[56px] leading-[28px] relative shrink-0 text-[20px] w-full">{`540 XP® Mark III (13" - .325" - SP33G)`}</p>
      <p className="font-['Roboto:Bold',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] tracking-[0.4px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Art.nr: 970 79 30‑14
      </p>
    </div>
  );
}

function HeadingCell2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center not-italic p-[8px] relative shrink-0 text-[#3d3d3c] w-[213px] whitespace-pre-wrap" data-name="heading-cell">
      <div className="font-['Husqvarna_Gothic:Bold',sans-serif] h-[56px] leading-[28px] relative shrink-0 text-[20px] w-full">
        <p className="mb-0">{`540 XP® Mark III (15" - `}</p>
        <p>{`3/8" mini - S93D)`}</p>
      </div>
      <p className="font-['Roboto:Bold',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] tracking-[0.4px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Art.nr: 970 79 30‑13
      </p>
    </div>
  );
}

function BodyCell() {
  return (
    <div className="content-stretch flex items-center min-h-[60px] px-[24px] py-[12px] relative shrink-0 w-[300px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Kedjehastighet vid max effekt
      </p>
    </div>
  );
}

function BodyCell1() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        20,2 m/s
      </p>
    </div>
  );
}

function BodyCell2() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        20,3 m/s
      </p>
    </div>
  );
}

function BodyCell3() {
  return (
    <div className="content-stretch flex items-center min-h-[60px] px-[24px] py-[12px] relative shrink-0 w-[300px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Cylindervolym
      </p>
    </div>
  );
}

function BodyCell4() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        39,1 cm³
      </p>
    </div>
  );
}

function BodyCell5() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        39,1 cm³
      </p>
    </div>
  );
}

function BodyCell6() {
  return (
    <div className="content-stretch flex items-center min-h-[60px] px-[24px] py-[12px] relative shrink-0 w-[300px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Axeleffekt
      </p>
    </div>
  );
}

function BodyCell7() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        1,9 kW
      </p>
    </div>
  );
}

function BodyCell8() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        1,9 kW
      </p>
    </div>
  );
}

function BodyCell9() {
  return (
    <div className="content-stretch flex items-center min-h-[60px] px-[24px] py-[12px] relative shrink-0 w-[300px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Minsta svärdslängd
      </p>
    </div>
  );
}

function BodyCell10() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        33 cm
      </p>
    </div>
  );
}

function BodyCell11() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        30 cm
      </p>
    </div>
  );
}

function BodyCell12() {
  return (
    <div className="content-stretch flex items-center min-h-[60px] px-[24px] py-[12px] relative shrink-0 w-[300px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Kedjedelning
      </p>
    </div>
  );
}

function BodyCell13() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`.325"`}</p>
    </div>
  );
}

function BodyCell14() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`3/8" mini`}</p>
    </div>
  );
}

function BodyCell15() {
  return (
    <div className="content-stretch flex items-center min-h-[60px] px-[24px] py-[12px] relative shrink-0 w-[300px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Rekommenderad svärdslängd, max
      </p>
    </div>
  );
}

function BodyCell16() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        38 cm
      </p>
    </div>
  );
}

function BodyCell17() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        40 cm
      </p>
    </div>
  );
}

function BodyCell18() {
  return (
    <div className="content-stretch flex items-center min-h-[60px] px-[24px] py-[12px] relative shrink-0 w-[300px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Typ av kedja
      </p>
    </div>
  );
}

function BodyCell19() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        SP33G
      </p>
    </div>
  );
}

function BodyCell20() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        SP33G
      </p>
    </div>
  );
}

function BodyCell21() {
  return (
    <div className="content-stretch flex items-center min-h-[60px] px-[24px] py-[12px] relative shrink-0 w-[300px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Svärdlängde
      </p>
    </div>
  );
}

function BodyCell22() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        33 cm
      </p>
    </div>
  );
}

function BodyCell23() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        35 cm
      </p>
    </div>
  );
}

function BodyCell24() {
  return (
    <div className="content-stretch flex items-center min-h-[60px] px-[24px] py-[12px] relative shrink-0 w-[300px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Ljudtrycksnivå vid användarens öra, dB(A)
      </p>
    </div>
  );
}

function BodyCell25() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        102 dB(A)
      </p>
    </div>
  );
}

function BodyCell26() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        102 dB(A)
      </p>
    </div>
  );
}

function BodyCell27() {
  return (
    <div className="content-stretch flex items-center min-h-[60px] px-[24px] py-[12px] relative shrink-0 w-[300px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Ljudeffektnivå, garanterad LWA i dB(A)
      </p>
    </div>
  );
}

function BodyCell28() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        113 dB(A)
      </p>
    </div>
  );
}

function BodyCell29() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        114 dB(A)
      </p>
    </div>
  );
}

function BodyCell30() {
  return (
    <div className="content-stretch flex items-center min-h-[60px] px-[24px] py-[12px] relative shrink-0 w-[300px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Ekvivalent vibrationsnivå bakre handtag
      </p>
    </div>
  );
}

function BodyCell31() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5,2 m/s²
      </p>
    </div>
  );
}

function BodyCell32() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5,2 m/s²
      </p>
    </div>
  );
}

function BodyCell33() {
  return (
    <div className="content-stretch flex items-center min-h-[60px] px-[24px] py-[12px] relative shrink-0 w-[300px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Ekvivalent vibrationsnivå främre handtag
      </p>
    </div>
  );
}

function BodyCell34() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5,9 m/s²
      </p>
    </div>
  );
}

function BodyCell35() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        3,7 m/s²
      </p>
    </div>
  );
}

function BodyCell36() {
  return (
    <div className="content-stretch flex items-center min-h-[60px] px-[24px] py-[12px] relative shrink-0 w-[300px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Vikt (exkl. skärutrustning)
      </p>
    </div>
  );
}

function BodyCell37() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        4,1 kg
      </p>
    </div>
  );
}

function BodyCell38() {
  return (
    <div className="content-stretch flex h-[60px] items-center p-[10px] relative shrink-0 w-[213px]" data-name="body-cell">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        4,0 kg
      </p>
    </div>
  );
}

function SpecificationTable() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[800px]" data-name="specification table">
      <div className="bg-[#f4f4f3] content-stretch flex h-[140px] items-center justify-between pt-[16px] relative rounded-tl-[36px] rounded-tr-[36px] shrink-0 w-full" data-name="Heading">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-tl-[36px] rounded-tr-[36px]" />
        <HeadingCell />
        <HeadingCell1 />
        <HeadingCell2 />
      </div>
      <div className="bg-white min-h-[60px] relative shrink-0 w-full" data-name="Group title">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[24px] relative w-full">
            <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3d3d3c] text-[20px] w-full whitespace-pre-wrap">Motor</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Group row">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <BodyCell />
        <BodyCell1 />
        <BodyCell2 />
      </div>
      <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Group row">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <BodyCell3 />
        <BodyCell4 />
        <BodyCell5 />
      </div>
      <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Group row">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <BodyCell6 />
        <BodyCell7 />
        <BodyCell8 />
      </div>
      <div className="bg-white min-h-[60px] relative shrink-0 w-full" data-name="Group title">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[24px] relative w-full">
            <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3d3d3c] text-[20px] w-full whitespace-pre-wrap">Utrustning</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Group row">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <BodyCell9 />
        <BodyCell10 />
        <BodyCell11 />
      </div>
      <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Group row">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <BodyCell12 />
        <BodyCell13 />
        <BodyCell14 />
      </div>
      <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Group row">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <BodyCell15 />
        <BodyCell16 />
        <BodyCell17 />
      </div>
      <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Group row">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <BodyCell18 />
        <BodyCell19 />
        <BodyCell20 />
      </div>
      <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Group row">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <BodyCell21 />
        <BodyCell22 />
        <BodyCell23 />
      </div>
      <div className="bg-white min-h-[60px] relative shrink-0 w-full" data-name="Group title">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[24px] relative w-full">
            <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3d3d3c] text-[20px] w-full whitespace-pre-wrap">Ljud och buller</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Group row">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <BodyCell24 />
        <BodyCell25 />
        <BodyCell26 />
      </div>
      <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Group row">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <BodyCell27 />
        <BodyCell28 />
        <BodyCell29 />
      </div>
      <div className="bg-white min-h-[60px] relative shrink-0 w-full" data-name="Group title">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[24px] relative w-full">
            <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3d3d3c] text-[20px] w-full whitespace-pre-wrap">Vibrationer</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Group row">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <BodyCell30 />
        <BodyCell31 />
        <BodyCell32 />
      </div>
      <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Group row">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <BodyCell33 />
        <BodyCell34 />
        <BodyCell35 />
      </div>
      <div className="bg-white min-h-[60px] relative shrink-0 w-full" data-name="Group title">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[24px] relative w-full">
            <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3d3d3c] text-[20px] w-full whitespace-pre-wrap">Dimensioner</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center justify-between pb-[16px] relative rounded-bl-[36px] rounded-br-[36px] shrink-0 w-full" data-name="Group row">
        <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-solid inset-0 pointer-events-none rounded-bl-[36px] rounded-br-[36px]" />
        <BodyCell36 />
        <BodyCell37 />
        <BodyCell38 />
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <SpecificationTableScrollable />
    </div>
  );
}

function AccordionsSpecificationsXLarge() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[800px]" data-name="Accordions/Specifications/X large">
      <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Divider top" />
        <AccordionRow1 />
        <div className="bg-[rgba(0,0,0,0.08)] h-px opacity-0 shrink-0 w-full" data-name="Divider bottom" />
      </div>
      <Frame50 />
      <Frame119 />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Reviews</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(32)</p>
      </div>
    </div>
  );
}

function IconsNextweb12() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb12 />
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title6 />
      <Icon4 />
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Bundles</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(1)</p>
      </div>
    </div>
  );
}

function IconsNextweb13() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb13 />
      </div>
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title8 />
      <Icon5 />
    </div>
  );
}

function Title10() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Spare parts</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(8)</p>
      </div>
    </div>
  );
}

function IconsNextweb14() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex h-[28px] items-start py-[6px] relative shrink-0 w-[16px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb14 />
      </div>
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title10 />
      <Icon6 />
    </div>
  );
}

function Title12() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Services</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(2)</p>
      </div>
    </div>
  );
}

function IconsNextweb15() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb15 />
      </div>
    </div>
  );
}

function Title11() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title12 />
      <Icon7 />
    </div>
  );
}

function Title14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Owner Support</p>
      </div>
    </div>
  );
}

function IconsNextweb16() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb16 />
      </div>
    </div>
  );
}

function Title13() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title14 />
      <Icon8 />
    </div>
  );
}

function Title16() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Related Articles</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(3)</p>
      </div>
    </div>
  );
}

function IconsNextweb17() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb17 />
      </div>
    </div>
  );
}

function Title15() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title16 />
      <Icon9 />
    </div>
  );
}

function AccordionList() {
  return (
    <div className="content-stretch flex flex-col h-[1723px] items-start relative shrink-0 w-[800px]" data-name="Accordion list">
      <div className="content-stretch flex flex-col gap-[17px] items-start pb-[17px] relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
        <Title />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Accordions/Accessories">
        <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[800px]" data-name="Accordion">
          <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
          <Title2 />
          <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Divider bottom" />
        </div>
      </div>
      <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" data-name="Accordions/Features">
        <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[800px]" data-name="Accordion">
          <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Divider top" />
          <AccordionRow />
          <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Divider bottom" />
        </div>
      </button>
      <AccordionsSpecificationsXLarge />
      <div className="content-stretch flex flex-col gap-[17px] items-start pb-[17px] relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px opacity-0 shrink-0 w-full" data-name="Devider top" />
        <Title5 />
      </div>
      <div className="content-stretch flex flex-col gap-[17px] items-start pb-[17px] relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
        <Title7 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordions/Spare parts">
        <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[800px]" data-name="Accordion">
          <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
          <Title9 />
          <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider bottom" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[17px] items-start pb-[17px] relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
        <Title11 />
      </div>
      <div className="content-stretch flex flex-col gap-[17px] items-start pb-[17px] relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
        <Title13 />
      </div>
      <div className="content-stretch flex flex-col gap-[17px] items-start pb-[17px] relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
        <Title15 />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[2722px] items-start relative shrink-0">
      <ProductInformation1 />
      <AccordionList />
    </div>
  );
}

function ProductInformation() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product information">
      <Frame45 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[800px]">
        <Frame57 />
      </div>
      <ProductInformation />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <div className="h-[573px] relative shrink-0 w-[800.001px]" data-name="Gallery">
        <Frame80 />
        <div className="absolute inset-[0_0_88.83%_0]" data-name="Overlay" />
        <div className="absolute bottom-0 content-stretch flex gap-[8px] items-start left-0 right-0 top-full" data-name="Segmented scroller">
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 1" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 2" opacity="0.32" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 2" opacity="0.32" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 2" opacity="0.32" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 2" opacity="0.32" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 2" opacity="0.32" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
        <Expand />
        <div className="absolute content-stretch flex items-start justify-end left-0 px-[16px] top-[16px] w-[800px]" data-name="Favourite">
          <Favourite />
        </div>
      </div>
      <Frame56 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#3d3d3c] whitespace-pre-wrap">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[18px] tracking-[0.4px] w-[440px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Battery Chainsaws
      </p>
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[44px] tracking-[-0.4px] w-[440px]">Husqvarna 540i XP</p>
    </div>
  );
}

function IconsNextweb18() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb19() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb20() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb21() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb22() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function Rating1() {
  return (
    <div className="content-stretch flex gap-[5px] items-start pb-[4px] pt-[2px] relative shrink-0" data-name="Rating">
      <div className="relative shrink-0 size-[16px]" data-name="rating-filled">
        <IconsNextweb18 />
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="rating-filled">
        <IconsNextweb19 />
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="rating-filled">
        <IconsNextweb20 />
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="rating-filled">
        <IconsNextweb21 />
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="rating-filled">
        <IconsNextweb22 />
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Rating1 />
      <p className="font-['Roboto:Medium',sans-serif] font-[450] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        4.2
      </p>
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[440px]" data-name="Rating">
      <Frame82 />
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] text-right tracking-[0.4px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        32 reviews
      </p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame42 />
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <Rating />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Frame81 />
      <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0" data-name="Price">
        <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#3d3d3c] text-[28px] tracking-[-0.2px]">$959</p>
        <p className="font-['Heebo_350:350',sans-serif] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px]">MSRP</p>
      </div>
    </div>
  );
}

function ViewList() {
  return (
    <div className="content-stretch flex items-start pb-[2px] pt-[6px] relative shrink-0" data-name="View list">
      <div className="content-stretch flex h-[20px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Inline link/Body 2">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline">View list</p>
        </div>
      </div>
    </div>
  );
}

function ProductVariant1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[440px]" data-name="Product variant">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#3d3d3c] text-[28px] tracking-[-0.2px]">Product variant</p>
      <ViewList />
    </div>
  );
}

function ButtonMatrix() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Button matrix">
      <button className="bg-[rgba(34,119,48,0.08)] content-stretch cursor-pointer flex h-[32px] items-center justify-center pb-[4px] pt-[5px] px-[16px] relative rounded-[12px] shrink-0" data-name="Matrix button">
        <div aria-hidden="true" className="absolute border-2 border-[#227730] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[14px] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[20px]">Alt 1</p>
        </div>
      </button>
      <div className="content-stretch flex h-[32px] items-center justify-center pb-[4px] pt-[5px] px-[16px] relative rounded-[12px] shrink-0" data-name="Matrix button">
        <div aria-hidden="true" className="absolute border border-[#3D3D3C] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[14px] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[20px]">Alt 2</p>
        </div>
      </div>
    </div>
  );
}

function ButtonMatrix1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Button matrix 1">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Bar length (inch)
      </p>
      <ButtonMatrix />
    </div>
  );
}

function ButtonMatrix3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Button matrix">
      <button className="bg-[rgba(34,119,48,0.08)] content-stretch cursor-pointer flex h-[32px] items-center justify-center pb-[4px] pt-[5px] px-[16px] relative rounded-[12px] shrink-0" data-name="Matrix button">
        <div aria-hidden="true" className="absolute border-2 border-[#227730] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[14px] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[20px]">Alt 1</p>
        </div>
      </button>
      <div className="content-stretch flex h-[32px] items-center justify-center pb-[4px] pt-[5px] px-[16px] relative rounded-[12px] shrink-0" data-name="Matrix button">
        <div aria-hidden="true" className="absolute border border-[#3D3D3C] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[14px] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[20px]">Alt 2</p>
        </div>
      </div>
    </div>
  );
}

function ButtonMatrix2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Button matrix 2">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Include battery and charger?
      </p>
      <ButtonMatrix3 />
    </div>
  );
}

function ProductVariant() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[28px] relative shrink-0" data-name="Product variant">
      <ProductVariant1 />
      <ButtonMatrix1 />
      <ButtonMatrix2 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <ProductVariant />
      <div className="h-0 relative shrink-0 w-[440px]" data-name="Devider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 1">
            <line id="Devider" stroke="var(--stroke-0, black)" strokeOpacity="0.08" x2="440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconsNextweb23() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Delviery">
          <path d={svgPaths.p3ebcfd00} fill="var(--fill-0, #3D3D3C)" id="Combined Shape" />
          <path d="M15.9997 0H0V16H15.9997V0Z" fill="var(--fill-0, #227730)" id="Rectangle" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function HbdIcons3() {
  return (
    <div className="absolute contents inset-0" data-name="HBD   Icons">
      <IconsNextweb23 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="delivery">
        <HbdIcons3 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame8 />
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Home delivery
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="box">
        <div className="absolute inset-[1.66%_6.22%]" data-name="Polygon 1 (Stroke)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0095 15.4696">
            <path clipRule="evenodd" d={svgPaths.p93c8c00} fill="var(--fill-0, #3D3D3C)" fillRule="evenodd" id="Polygon 1 (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[23.65%_9%_5.36%_9%]" data-name="Vector 14 (Stroke)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1187 11.3588">
            <path clipRule="evenodd" d={svgPaths.p37dd5440} fill="var(--fill-0, #3D3D3C)" fillRule="evenodd" id="Vector 14 (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[11.18%_28.6%_59.39%_26.81%]" data-name="Vector 15 (Stroke)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 7.13378 4.70921">
            <path clipRule="evenodd" d={svgPaths.p353684f0} fill="var(--fill-0, #3D3D3C)" fillRule="evenodd" id="Vector 15 (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame18 />
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Collect at dealer
      </p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame7 />
      <Frame17 />
    </div>
  );
}

function ButtonText1() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Button text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] relative size-full">
          <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.8px] uppercase">add to cart</p>
        </div>
      </div>
    </div>
  );
}

function ButtonText2() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Button text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-px px-[32px] relative size-full">
          <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#3d3d3c] text-[14px] text-center tracking-[1px] uppercase">Find nearest dealer</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <div className="bg-[#227730] content-stretch flex h-[60px] items-center relative rounded-[20px] shrink-0 w-[440px]" data-name="CTA button">
        <ButtonText1 />
      </div>
      <div className="content-stretch flex h-[48px] items-center relative rounded-[16px] shrink-0 w-[440px]" data-name="Secondary button">
        <div aria-hidden="true" className="absolute border border-[#3d3d3c] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <ButtonText2 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame20 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[440px]" data-name="Availability">
        <Frame84 />
        <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Shipping time 3-5 working days
        </p>
      </div>
      <Frame19 />
    </div>
  );
}

function Group3Copy2() {
  return (
    <div className="absolute contents inset-0" data-name="Group 3 Copy">
      <div className="absolute inset-[0_0.02%_0_0]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p3d2d0300} fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
      <div className="absolute inset-[3.56%_0]" data-name="Shape">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
          <path d={svgPaths.p37cafab0} fill="var(--fill-0, #3D3D3C)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb24() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group3Copy2 />
    </div>
  );
}

function IconTextLinkBody() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Icon text link/Body 4">
      <div className="relative shrink-0 size-[12px]" data-name="heart">
        <IconsNextweb24 />
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline">Add to favorites</p>
      </div>
    </div>
  );
}

function IconsNextweb25() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.p28aeb100} fill="var(--fill-0, #3D3D3C)" id="Compare" />
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Frame83 />
      <IconTextLinkBody />
      <div className="content-stretch flex gap-[12px] h-[16px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Icon text link/Body 3">
        <div className="relative shrink-0 size-[12px]" data-name="compare">
          <IconsNextweb25 />
        </div>
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline">Compare</p>
        </div>
      </div>
    </div>
  );
}

function Specs2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Specs 1">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px]">14”</p>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] min-w-full relative shrink-0 text-[14px] tracking-[0.4px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Bar length (inch)
      </p>
    </div>
  );
}

function Specs3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Specs 2">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px]">40 V</p>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] min-w-full relative shrink-0 text-[14px] tracking-[0.4px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Battery voltage
      </p>
    </div>
  );
}

function Specs4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Specs 3">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px]">42 V</p>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] min-w-full relative shrink-0 text-[14px] tracking-[0.4px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Battery voltage
      </p>
    </div>
  );
}

function Specs1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start py-[20px] relative shrink-0 text-[#3d3d3c] w-[440px]" data-name="Specs">
      <Specs2 />
      <Specs3 />
      <Specs4 />
    </div>
  );
}

function Specs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Specs">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Specs1 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="check-hq">
        <div className="absolute inset-[3.57%_8%_0_3.57%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1483 15.4286">
            <path d={svgPaths.p3fbded00} fill="var(--fill-0, #3D3D3C)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.08%_8.64%_30.91%_24%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7773 7.52143">
            <path d={svgPaths.p3191e780} fill="var(--fill-0, #3D3D3C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Icon10 />
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Husqvarna Connect
      </p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="check-hq">
        <div className="absolute inset-[3.57%_8%_0_3.57%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1483 15.4286">
            <path d={svgPaths.p3fbded00} fill="var(--fill-0, #3D3D3C)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.08%_8.64%_30.91%_24%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7773 7.52143">
            <path d={svgPaths.p3191e780} fill="var(--fill-0, #3D3D3C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Icon11 />
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        High chain speed
      </p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="check-hq">
        <div className="absolute inset-[3.57%_8%_0_3.57%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1483 15.4286">
            <path d={svgPaths.p3fbded00} fill="var(--fill-0, #3D3D3C)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.08%_8.64%_30.91%_24%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7773 7.52143">
            <path d={svgPaths.p3191e780} fill="var(--fill-0, #3D3D3C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Icon12 />
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Low maintenance
      </p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Group7Copy1() {
  return (
    <div className="absolute contents inset-0" data-name="Group 7 Copy">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.p1e332200} fill="var(--fill-0, #3D3D3C)" id="Combined Shape" />
      </svg>
    </div>
  );
}

function IconsNextweb26() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group7Copy1 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="expand">
        <IconsNextweb26 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Icon13 />
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        View all features
      </p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start py-[28px] relative shrink-0" data-name="List">
      <Frame85 />
      <Frame6 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <List />
      <div className="h-0 relative shrink-0 w-[440px]" data-name="Devider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 1">
            <line id="Devider" stroke="var(--stroke-0, black)" strokeOpacity="0.08" x2="440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconsNextweb27() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function PriceIncludes() {
  return (
    <div className="content-stretch flex items-center justify-between py-[16px] relative shrink-0 w-[440px]" data-name="Price includes">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[0] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <span className="leading-[28px]">{`$959 `}</span>
        <span className="leading-[28px] text-[#3D3D3C]">– Price includes</span>
      </p>
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb27 />
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[160px] items-start pb-[60px] px-[140px] relative shrink-0">
      <Frame55 />
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Sidebar">
        <Frame41 />
        <Frame43 />
        <div className="content-stretch flex flex-col items-start pb-[36px] pt-[24px] relative shrink-0" data-name="Buttons/Available online">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
          <Frame46 />
        </div>
        <Specs />
        <Frame44 />
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
          <PriceIncludes />
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[calc(50%-20px)]">
      <div className="h-[533px] relative shrink-0 w-[800px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Group7Copy2() {
  return (
    <div className="absolute contents inset-0" data-name="Group 7 Copy">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.p1e332200} fill="var(--fill-0, #3D3D3C)" id="Combined Shape" />
      </svg>
    </div>
  );
}

function IconsNextweb28() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group7Copy2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="expand">
        <IconsNextweb28 />
      </div>
    </div>
  );
}

function Expand1() {
  return (
    <div className="absolute bg-black bottom-[9.77%] content-stretch flex gap-[8px] items-center justify-end opacity-41 px-[12px] py-[4px] right-[16px] rounded-[12px] top-[84.64%]" data-name="Expand">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        1/6
      </p>
      <Frame2 />
    </div>
  );
}

function Group3Copy3() {
  return (
    <div className="absolute contents inset-0" data-name="Group 3 Copy">
      <div className="absolute inset-[3.56%_0]" data-name="Shape">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
          <path d={svgPaths.p37cafab0} fill="var(--fill-0, #3D3D3C)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb29() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group3Copy3 />
    </div>
  );
}

function Favourite1() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip p-[2px] relative shrink-0 w-[32px]" data-name="Favourite">
      <div className="aspect-[28/27.99546241760254] flex-[1_0_0] min-h-px min-w-px relative" data-name="heart">
        <IconsNextweb29 />
      </div>
    </div>
  );
}

function Copy1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#3d3d3c] w-full whitespace-pre-wrap" data-name="Copy">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[28px] tracking-[-0.2px] w-full">Product description</p>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] opacity-80 relative shrink-0 text-[18px] tracking-[0.4px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Husqvarna 540i XP is a powerful and efficient battery-powered chainsaw, equivalent to a 40cc pro petrol saw when fitted with a BLi300 battery. It’s ideal for removal of small and mid-sized trees where you need smooth and efficient cuts. Designed for professionally oriented users who want a lightweight, high …
      </p>
    </div>
  );
}

function IconsNextweb30() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function ShowMore1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Show more">
      <div className="content-stretch flex gap-[12px] h-[16px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Icon text link/Body 2">
        <div className="relative shrink-0 size-[12px]" data-name="plus">
          <IconsNextweb30 />
        </div>
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline">Show more</p>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Copy1 />
      <ShowMore1 />
    </div>
  );
}

function ProductInformation3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Product information">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#3d3d3c] text-[28px] tracking-[-0.2px]">Product information</p>
    </div>
  );
}

function Title18() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">{`Manuals & Documents`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(31)</p>
      </div>
    </div>
  );
}

function IconsNextweb31() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb31 />
      </div>
    </div>
  );
}

function Title17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title18 />
      <Icon14 />
    </div>
  );
}

function Title20() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Accessories</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(10)</p>
      </div>
    </div>
  );
}

function IconsNextweb32() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="content-stretch flex h-[28px] items-start py-[6px] relative shrink-0 w-[16px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb32 />
      </div>
    </div>
  );
}

function Title19() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title20 />
      <Icon15 />
    </div>
  );
}

function TitleCount1() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-[350] gap-[8px] items-center leading-[0] relative shrink-0 text-left tracking-[0.4px] whitespace-nowrap" data-name="Title & count">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Features</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(12)</p>
      </div>
    </div>
  );
}

function IconsNextweb33() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="content-stretch flex h-[28px] items-start py-[6px] relative shrink-0 w-[16px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb33 />
      </div>
    </div>
  );
}

function AccordionRow2() {
  return (
    <div className="content-stretch flex items-start justify-between relative rounded-[4px] shrink-0 w-full" data-name="Accordion row">
      <div aria-hidden="true" className="absolute border-12 border-[rgba(0,0,0,0)] border-solid inset-[-12px] pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex items-start relative rounded-[4px] self-stretch shrink-0" data-name="Accordion item/Body 1">
        <TitleCount1 />
      </div>
      <Icon16 />
    </div>
  );
}

function Title21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Specifications</p>
      </div>
    </div>
  );
}

function Group5Copy1() {
  return (
    <div className="absolute contents inset-0" data-name="Group 5 Copy 3">
      <div className="absolute inset-[46.43%_0]" data-name="Combined Shape Copy 9">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 2">
          <path d={svgPaths.p382f82c0} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 9" />
        </svg>
      </div>
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d="M27.9995 0H0V28H27.9995V0Z" fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
      </svg>
    </div>
  );
}

function IconsNextweb34() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group5Copy1 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="content-stretch flex h-[28px] items-start py-[6px] relative shrink-0 w-[16px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="minus">
        <IconsNextweb34 />
      </div>
    </div>
  );
}

function AccordionRow3() {
  return (
    <div className="content-stretch flex items-start justify-between relative rounded-[4px] shrink-0 w-full" data-name="Accordion row">
      <div aria-hidden="true" className="absolute border-12 border-[rgba(0,0,0,0)] border-solid inset-[-12px] pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex items-start relative rounded-[4px] self-stretch shrink-0" data-name="Accordion item/Body 1">
        <Title21 />
      </div>
      <Icon17 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex items-start left-[16px] top-[10px] w-[221px]">
      <div className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3D3D3C] text-[18px] tracking-[0.4px] w-[315px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">{`540 XP® Mark III (13" - .325" - SP33G)`}</p>
        <p>Art.nr: 970 79 30‑13</p>
      </div>
    </div>
  );
}

function Group14Copy() {
  return (
    <div className="absolute contents inset-0" data-name="Group 14 Copy">
      <div className="absolute flex inset-[25.02%_0_24.91%_0] items-center justify-center">
        <div className="flex-none h-[28px] rotate-90 w-[14.019px]">
          <div className="relative size-full" data-name="Line 3 Copy 8">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0187 28">
              <path d={svgPaths.p2e741000} fill="var(--fill-0, #3D3D3C)" id="Line 3 Copy 8" />
            </svg>
          </div>
        </div>
      </div>
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d="M28 0H0V27.9988H28V0Z" fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
      </svg>
    </div>
  );
}

function IconsNextweb35() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group14Copy />
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[76px] relative shrink-0 w-[403px]" data-name="Text input">
      <div className="absolute bg-white border border-[#90908f] border-solid inset-0 rounded-[12px]" data-name="Rectangle Copy 2" />
      <Frame21 />
      <div className="absolute right-[16px] size-[20px] top-[14px]" data-name="chevron-down">
        <IconsNextweb35 />
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="h-[116px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start pr-[40px] relative size-full">
        <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[836px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[24px] whitespace-pre-wrap">Select product variant</p>
        </div>
        <TextInput />
      </div>
    </div>
  );
}

function ButtonText3() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pb-px px-[32px] relative shrink-0" data-name="Button text">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#3d3d3c] text-[14px] text-center tracking-[1px] uppercase">Mobile view</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[12px] relative shrink-0 w-full">
      <Frame118 />
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Compare specifications and features with similar Husqvarna products.
      </p>
      <a href="/mobile.html" style={{ textDecoration: "none" }}>
        <div className="content-stretch flex h-[48px] items-center relative rounded-[16px] shrink-0" data-name="Secondary button">
          <div aria-hidden="true" className="absolute border border-[#3d3d3c] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <ButtonText3 />
        </div>
      </a>
    </div>
  );
}

function TableRow() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col items-start justify-center justify-self-start min-h-[60px] px-[24px] relative row-2 self-start shrink-0 w-[960px]" data-name="Table row">
      <div aria-hidden="true" className="absolute border-[#eeeeed] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3d3d3c] text-[24px] w-[912px] whitespace-pre-wrap">Motor</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col items-start justify-center justify-self-start min-h-[60px] px-[24px] relative row-6 self-start shrink-0 w-[960px]" data-name="Table row">
      <div aria-hidden="true" className="absolute border-[#eeeeed] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3d3d3c] text-[24px] w-[912px] whitespace-pre-wrap">Utrustning</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex inset-[24.74%_0_28.59%_0] items-start justify-between px-[16px] whitespace-pre-wrap">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3d3d3c] text-[24px] w-[239px]">Ljud och buller</p>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] text-right tracking-[0.4px] w-[128px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        15 min
      </p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="col-[1/span_4] h-[60px] justify-self-stretch relative row-12 self-start shrink-0" data-name="Table row">
      <div className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-[0_0_1.92%_0]" />
      <Frame />
    </div>
  );
}

function SpecificationTable1() {
  return (
    <div className="bg-white relative rounded-bl-[36px] rounded-tl-[36px] shrink-0 w-[960px]" data-name="specification-table">
      <div className="grid grid-cols-[____minmax(0,1.50fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[______________fit-content(100%)_fit-content(100%)_60px_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)] overflow-clip pb-[16px] relative rounded-[inherit] w-full">
        <div className="bg-[#f4f4f3] col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="heading-cell">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[12px] items-center not-italic pb-[16px] pt-[24px] px-[8px] relative text-[#3d3d3c] w-full whitespace-pre-wrap">
              <div className="font-['Husqvarna_Gothic:Bold',sans-serif] h-[56px] leading-[0] relative shrink-0 text-[0px] w-full">
                <p className="leading-[28px] mb-0 text-[20px]">{`540 XP® Mark III (13" - .325" - SP33G)`}</p>
                <p className="font-['Roboto:Bold',sans-serif] font-[350] leading-[24px] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Art.nr: 970 79 30‑13
                </p>
              </div>
              <p className="font-['Roboto:Bold',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] tracking-[0.4px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Art.nr: 970 79 30‑13
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f4f4f3] col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="heading-cell">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[12px] items-center not-italic pb-[16px] pt-[24px] px-[8px] relative text-[#3d3d3c] w-full whitespace-pre-wrap">
              <div className="font-['Husqvarna_Gothic:Bold',sans-serif] h-[56px] leading-[0] relative shrink-0 text-[0px] w-full">
                <p className="leading-[28px] mb-0 text-[20px]">{`540 XP® Mark III (14" - `}</p>
                <p className="leading-[28px] mb-0 text-[20px]">{`3/8" mini - S93G)`}</p>
                <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Art.nr: 970 79 31‑14
                </p>
              </div>
              <p className="font-['Roboto:Bold',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] tracking-[0.4px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Art.nr: 970 79 30‑13
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                20,2 m/s
              </p>
            </div>
          </div>
        </div>
        <TableRow />
        <div className="col-3 h-[60px] justify-self-stretch relative row-3 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                20 m/s
              </p>
            </div>
          </div>
        </div>
        <div className="col-1 justify-self-stretch min-h-[60px] relative row-3 self-start shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex items-center min-h-[inherit] px-[24px] py-[12px] relative w-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cylindervolym
              </p>
            </div>
          </div>
        </div>
        <div className="col-1 content-stretch flex items-center justify-self-start min-h-[60px] px-[24px] py-[12px] relative row-4 self-start shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Cylindervolym
          </p>
        </div>
        <div className="col-2 h-[60px] justify-self-stretch relative row-4 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                39,1 cm³
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 h-[60px] justify-self-stretch relative row-4 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                39,1 cm³
              </p>
            </div>
          </div>
        </div>
        <div className="col-1 h-[60px] justify-self-stretch min-h-[60px] relative row-5 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
              <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] min-h-px min-w-px relative text-[#3d3d3c] text-[18px] tracking-[0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Axeleffekt
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 h-[60px] justify-self-stretch relative row-5 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                1,9 kW
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 h-[60px] justify-self-stretch relative row-5 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                1,9 kW
              </p>
            </div>
          </div>
        </div>
        <TableRow1 />
        <div className="col-1 h-[60px] justify-self-stretch min-h-[60px] relative row-7 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
              <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] min-h-px min-w-px relative text-[#3d3d3c] text-[18px] tracking-[0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Minsta svärdslängd
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 h-[60px] justify-self-stretch relative row-7 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                33 cm
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 h-[60px] justify-self-stretch relative row-7 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                30 cm
              </p>
            </div>
          </div>
        </div>
        <div className="col-1 h-[60px] justify-self-stretch min-h-[60px] relative row-8 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
              <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] min-h-px min-w-px relative text-[#3d3d3c] text-[18px] tracking-[0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Kedjedelning
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 h-[60px] justify-self-stretch relative row-8 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`.325"`}</p>
            </div>
          </div>
        </div>
        <div className="col-3 h-[60px] justify-self-stretch relative row-8 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`3/8" mini`}</p>
            </div>
          </div>
        </div>
        <div className="col-1 justify-self-stretch min-h-[60px] relative row-9 self-start shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex items-center min-h-[inherit] px-[24px] py-[12px] relative w-full">
              <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] min-h-px min-w-px relative text-[#3d3d3c] text-[18px] tracking-[0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Rekommenderad svärdslängd, max
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 h-[80px] justify-self-stretch relative row-9 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                38 cm
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 h-[80px] justify-self-stretch relative row-9 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                40 cm
              </p>
            </div>
          </div>
        </div>
        <div className="col-1 h-[60px] justify-self-stretch min-h-[60px] relative row-10 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
              <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] min-h-px min-w-px relative text-[#3d3d3c] text-[18px] tracking-[0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Typ av kedja
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 h-[60px] justify-self-stretch relative row-10 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                SP33G
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 h-[60px] justify-self-stretch relative row-10 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                S93G
              </p>
            </div>
          </div>
        </div>
        <div className="col-1 h-[60px] justify-self-stretch min-h-[60px] relative row-11 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
              <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] min-h-px min-w-px relative text-[#3d3d3c] text-[18px] tracking-[0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Svärdlängde
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 h-[60px] justify-self-stretch relative row-11 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                33 cm
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 h-[60px] justify-self-stretch relative row-11 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                35 cm
              </p>
            </div>
          </div>
        </div>
        <TableRow2 />
        <div className="col-1 justify-self-stretch min-h-[60px] relative row-13 self-start shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex items-center min-h-[inherit] px-[24px] py-[12px] relative w-full">
              <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-[350] h-full leading-[28px] min-h-px min-w-px relative text-[#3d3d3c] text-[18px] tracking-[0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Ljudtrycksnivå vid användarens öra, dB(A)
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 justify-self-stretch relative row-13 self-stretch shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                102 dB(A)
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 justify-self-stretch relative row-13 self-stretch shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                102 dB(A)
              </p>
            </div>
          </div>
        </div>
        <div className="col-1 justify-self-stretch min-h-[60px] relative row-14 self-start shrink-0" data-name="body-cell">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex items-center min-h-[inherit] px-[24px] py-[12px] relative w-full">
              <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] min-h-px min-w-px relative text-[#3d3d3c] text-[18px] tracking-[0.4px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Ljudeffektnivå, garanterad LWA i dB(A)
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 h-[60px] justify-self-stretch relative row-14 shrink-0" data-name="body-cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                113 dB(A)
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 h-[60px] justify-self-stretch relative row-14 shrink-0" data-name="body-cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                113 dB(A)
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f4f4f3] col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="heading-cell">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[12px] items-center not-italic pb-[16px] pt-[24px] px-[8px] relative text-[#3d3d3c] w-full whitespace-pre-wrap">
              <div className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[0] relative shrink-0 text-[0px] w-full">
                <p className="leading-[28px] mb-0 text-[20px]">{`540 XP® Mark III (14" - `}</p>
                <p className="leading-[28px] mb-0 text-[20px]">{`3/8" mini - S93G)`}</p>
                <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Art.nr: 970 79 31‑14
                </p>
              </div>
              <p className="font-['Roboto:Bold',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] tracking-[0.4px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Art.nr: 970 79 30‑13
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 h-[60px] justify-self-stretch relative row-3 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                20 m/s
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 h-[60px] justify-self-stretch relative row-4 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                39,1 cm³
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 h-[60px] justify-self-stretch relative row-5 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                1,9 kW
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 h-[60px] justify-self-stretch relative row-7 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                30 cm
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 h-[60px] justify-self-stretch relative row-8 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`3/8" mini`}</p>
            </div>
          </div>
        </div>
        <div className="col-4 justify-self-stretch relative row-9 self-stretch shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                40 cm
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 h-[60px] justify-self-stretch relative row-10 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                S93G
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 h-[60px] justify-self-stretch relative row-11 shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                35 cm
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 justify-self-stretch relative row-13 self-stretch shrink-0" data-name="body-cell">
          <div aria-hidden="true" className="absolute border-[#d2d2d1] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                102 dB(A)
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 h-[60px] justify-self-stretch relative row-14 shrink-0" data-name="body-cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative size-full">
              <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                113 dB(A)
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f4f4f3] col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="heading-cell">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[12px] items-center not-italic pb-[16px] pt-[24px] px-[8px] relative size-full text-[#3d3d3c] whitespace-pre-wrap">
              <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] w-full">&nbsp;</p>
              <p className="font-['Roboto:Bold',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] tracking-[0.4px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Art.nr: 970 79 30‑13
              </p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeeed] border-b border-l border-solid inset-0 pointer-events-none rounded-bl-[36px] rounded-tl-[36px]" />
    </div>
  );
}

function ArrowIcon({ filterId, mirrored }: { filterId: string; mirrored?: boolean }) {
  return (
    <div style={mirrored ? { transform: "scaleX(-1)" } : undefined}>
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter={`url(#${filterId})`}>
          <rect x="24" y="20" width="48" height="48" rx="16" fill="white" />
        </g>
        <path d="M43.1953 34.2121C43.4356 33.9547 43.8137 33.9349 44.0753 34.1527L44.1381 34.2121L52.8213 43.5141C53.0774 43.7885 53.0774 44.2143 52.8213 44.4887L44.1381 53.7907C43.8777 54.0696 43.4556 54.0696 43.1953 53.7907C42.9549 53.5333 42.9365 53.1282 43.1398 52.848L43.1953 52.7807L51.3901 44.0008L43.1953 35.2221C42.9549 34.9647 42.9365 34.5596 43.1398 34.2794L43.1953 34.2121Z" fill="#3D3D3C" />
        <defs>
          <filter id={filterId} x="0" y="0" width="96" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="12" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function SpecificationTableScrollable() {
  const products = [
    { name: `540 XP® Mark III (13" - .325" - SP33G)`, article: "970 79 30\u201114" },
    { name: `540 XP® Mark III (15" - 3/8" mini - S93D)`, article: "970 79 30\u201113" },
    { name: `540 XP® Mark III (16" - 3/8" mini - S93T)`, article: "970 79 30\u201116" },
    { name: `540 XP® Mark III (14" - 3/8" mini - S95G)`, article: "970 79 30\u201118" },
  ];

  const specs: Array<{ section?: string; label?: string; values?: string[] }> = [
    { section: "Motor" },
    { label: "Kedjehastighet vid max effekt",             values: ["20,2 m/s",   "20 m/s",    "20,3 m/s",  "20 m/s"]    },
    { label: "Cylindervolym",                             values: ["39,1 cm³",   "39,2 cm³",  "40,1 cm³",  "39,1 cm³"]  },
    { label: "Axeleffekt",                                values: ["1,9 kW",     "2,0 kW",    "1,9 kW",    "1,9 kW"]    },
    { section: "Utrustning" },
    { label: "Minsta svärdslängd",                        values: ["33 cm",      "30 cm",     "33 cm",     "30 cm"]     },
    { label: "Kedjedelning",                              values: [`.325"`,      `3/8" mini`, `.325"`,     `3/8" mini`] },
    { label: "Rekommenderad svärdslängd, max",            values: ["38 cm",      "40 cm",     "38 cm",     "40 cm"]     },
    { label: "Typ av kedja",                              values: ["SP33G",      "S93G",      "SP33G",     "SP33G"]     },
    { label: "Svärdlängde",                               values: ["33 cm",      "35 cm",     "33 cm",     "35 cm"]     },
    { section: "Ljud och buller" },
    { label: "Ljudtrycksnivå vid användarens öra, dB(A)", values: ["102 dB(A)",  "102 dB(A)", "103 dB(A)", "102 dB(A)"] },
    { label: "Ljudeffektnivå, garanterad LWA i dB(A)",   values: ["113 dB(A)",  "110 dB(A)", "113 dB(A)", "114 dB(A)"] },
    { section: "Vibrationer" },
    { label: "Ekvivalent vibrationsnivå bakre handtag",   values: ["5,2 m/s²",  "5,1 m/s²",  "5,2 m/s²",  "5,2 m/s²"] },
    { label: "Ekvivalent vibrationsnivå främre handtag",  values: ["5,9 m/s²",  "3,7 m/s²",  "5,9 m/s²",  "3,7 m/s²"] },
    { section: "Dimensioner" },
    { label: "Vikt (exkl. skärutrustning)",               values: ["4,1 kg",    "4,0 kg",    "4,1 kg",    "4,0 kg"]   },
  ];

  const hdrBg    = "#f4f4f3";
  const bodyBg   = "#ffffff";
  const text     = "#3d3d3c";
  const fontHd   = "'Husqvarna Gothic:Bold', sans-serif";
  const fontBody = "'Roboto:Regular', sans-serif";
  const bdrData  = "0.5px solid #d2d2d1";
  const bdrSec   = "1px solid #eeeeed";

  const wrapperRef        = useRef<HTMLDivElement>(null);
  const theadRef          = useRef<HTMLTableSectionElement>(null);
  const stickyRef         = useRef<HTMLDivElement>(null);
  const sentinelRef       = useRef<HTMLDivElement>(null);
  const bottomSentinelRef = useRef<HTMLDivElement>(null);
  const syncing            = useRef(false);
  const programmaticScroll = useRef(false); // true while scrollToCol smooth animation is running
  const [topAbove,    setTopAbove]    = useState(false);
  const [bottomAbove, setBottomAbove] = useState(false);
  const sticky = topAbove && !bottomAbove;
  const [stickyLeft, setStickyLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Track wrapper's left offset for fixed header alignment
  useEffect(() => {
    const update = () => {
      if (wrapperRef.current) {
        setStickyLeft(wrapperRef.current.getBoundingClientRect().left);
      }
    };
    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update);
    };
  }, []);

  // Top sentinel: table heading has scrolled above viewport → show clone header.
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setTopAbove(!entry.isIntersecting && entry.boundingClientRect.top < 0); },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Bottom sentinel: last table row has scrolled above viewport → hide clone header.
  useEffect(() => {
    const el = bottomSentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setBottomAbove(!entry.isIntersecting && entry.boundingClientRect.top < 0); },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Sync horizontal scroll between main wrapper and fixed clone header
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const stickyEl = stickyRef.current;
    if (!wrapper || !stickyEl) return;

    // Init clone scroll to current position
    stickyEl.scrollLeft = wrapper.scrollLeft;

    const onWrapperScroll = () => {
      if (syncing.current) return;
      syncing.current = true;
      stickyEl.scrollLeft = wrapper.scrollLeft;
      syncing.current = false;
    };
    const onStickyScroll = () => {
      // Skip if syncing, or if a programmatic smooth-scroll is in progress
      // (otherwise this handler cancels the smooth animation on wrapperRef)
      if (syncing.current || programmaticScroll.current) return;
      syncing.current = true;
      wrapper.scrollLeft = stickyEl.scrollLeft;
      syncing.current = false;
    };
    // Clear the programmatic flag once the smooth animation finishes
    const onWrapperScrollEnd = () => {
      programmaticScroll.current = false;
    };
    wrapper.addEventListener('scroll', onWrapperScroll);
    stickyEl.addEventListener('scroll', onStickyScroll);
    wrapper.addEventListener('scrollend', onWrapperScrollEnd);
    return () => {
      wrapper.removeEventListener('scroll', onWrapperScroll);
      stickyEl.removeEventListener('scroll', onStickyScroll);
      wrapper.removeEventListener('scrollend', onWrapperScrollEnd);
    };
  }, [sticky]); // re-bind whenever sticky clone mounts/unmounts

  // Update left/right arrow visibility based on scroll position
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const update = () => {
      setCanScrollLeft(wrapper.scrollLeft > 0);
      setCanScrollRight(wrapper.scrollLeft < wrapper.scrollWidth - wrapper.clientWidth - 1);
      if (wrapper.scrollLeft > 0) setHasScrolled(true);
    };
    update();
    wrapper.addEventListener('scroll', update, { passive: true });
    return () => wrapper.removeEventListener('scroll', update);
  }, []);

  const colWidth = 200;
  const scrollToCol = (direction: 'left' | 'right') => {
    // Use wrapperRef as source of truth for current scroll position
    const el = wrapperRef.current ?? stickyRef.current;
    if (!el) return;
    const current = el.scrollLeft;
    const target = direction === 'right'
      ? Math.ceil((current + 1) / colWidth) * colWidth
      : Math.floor((current - 1) / colWidth) * colWidth;
    const safeTarget = Math.max(0, target);
    // Set flag so onStickyScroll doesn't cancel the smooth animation mid-flight.
    // The flag is cleared by the 'scrollend' event on wrapperRef.
    programmaticScroll.current = true;
    wrapperRef.current?.scrollTo({ left: safeTarget, behavior: 'smooth' });
  };

  const headerRow = (
    <tr>
      <th style={{
        position: "sticky", left: 0, zIndex: 3,
        background: hdrBg, minWidth: "260px", width: "260px",
        padding: "24px 8px 16px", textAlign: "left",
        borderBottom: bdrSec,
      }} />
      {products.map((p, i) => (
        <th key={i} style={{
          position: "relative", zIndex: 1,
          background: hdrBg, minWidth: "200px",
          padding: "24px 8px 16px", textAlign: "left", verticalAlign: "top",
          borderBottom: bdrSec,
          overflow: "hidden",
        }}>
          <p style={{ fontFamily: fontHd, fontSize: 20, lineHeight: "28px", color: text, margin: "0 0 4px 0" }}>
            {p.name}
          </p>
          <p style={{ fontFamily: fontBody, fontSize: 16, lineHeight: "24px", letterSpacing: "0.4px", color: text, margin: 0, fontWeight: 350 }}>
            Art.nr: {p.article}
          </p>
        </th>
      ))}
    </tr>
  );

  return (
    <div style={{ position: "relative", width: "800px" }}>
      {/* Sentinel: 0-height div at the very top of the table area.
          When it exits the viewport top, the heading has just reached the top → show clone. */}
      <div ref={sentinelRef} style={{ height: 0 }} />
      {/* Fixed clone header — appears when original thead scrolls above viewport */}
      {sticky && (
        <div style={{ position: "fixed", top: 0, left: stickyLeft, width: "800px", zIndex: 50 }}>
          {/* Scrollable clone header */}
          <div
            ref={stickyRef}
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "none",
              background: hdrBg,
              borderBottom: bdrSec,
            }}
          >
            <table style={{ borderCollapse: "collapse", minWidth: "840px", width: "100%" }}>
              <thead>{headerRow}</thead>
            </table>
          </div>
          {/* Right edge gradient on sticky header */}
          {!hasScrolled && canScrollRight && (
            <div style={{
              position: "absolute", top: 0, right: 0, bottom: 0,
              width: 120,
              background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%)",
              pointerEvents: "none",
              zIndex: 4,
            }} />
          )}
          {/* Right arrow on sticky header */}
          {canScrollRight && (
            <button
              onClick={() => scrollToCol('right')}
              style={{
                position: "absolute", right: -48, top: 14,
                width: 96, height: 96,
                background: "none", border: "none", cursor: "pointer", padding: 0,
                zIndex: 10,
              }}
            >
              <ArrowIcon filterId="arr-sticky-right" />
            </button>
          )}
          {/* Left arrow on sticky header */}
          {canScrollLeft && (
            <button
              onClick={() => scrollToCol('left')}
              style={{
                position: "absolute", left: 172, top: 14,
                width: 96, height: 96,
                background: "none", border: "none", cursor: "pointer", padding: 0,
                zIndex: 10,
              }}
            >
              <ArrowIcon filterId="arr-sticky-left" mirrored />
            </button>
          )}
        </div>
      )}

      {/* Right edge gradient — scroll hint, disappears once user scrolls horizontally */}
      {!hasScrolled && canScrollRight && (
        <div style={{
          position: "absolute", top: 0, right: 0, bottom: 0,
          width: 140,
          background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%)",
          pointerEvents: "none",
          zIndex: 4,
        }} />
      )}

      {/* Right scroll arrow */}
      {canScrollRight && (
        <button
          onClick={() => scrollToCol('right')}
          style={{
            position: "absolute", right: -48, top: 14,
            width: 96, height: 96,
            background: "none", border: "none", cursor: "pointer", padding: 0,
            zIndex: 10,
          }}
        >
          <ArrowIcon filterId="arr-right" />
        </button>
      )}

      {/* Left scroll arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scrollToCol('left')}
          style={{
            position: "absolute", left: 172, top: 14,
            width: 96, height: 96,
            background: "none", border: "none", cursor: "pointer", padding: 0,
            zIndex: 10,
          }}
        >
          <ArrowIcon filterId="arr-left" mirrored />
        </button>
      )}

      {/* Main scroll wrapper */}
      <div
        ref={wrapperRef}
        style={{
          width: "800px",
          overflowX: "auto",
          overflowY: "clip",
          borderRadius: "36px 0 0 36px",
          border: "1px solid #eeeeed",
          borderRight: "none",
          scrollbarWidth: "thin",
          scrollbarColor: "#d2d2d1 transparent",
        }}
      >
        <table style={{ borderCollapse: "collapse", minWidth: "840px", width: "100%" }}>
          <thead ref={theadRef}>
            {headerRow}
          </thead>
          <tbody>
            {specs.map((row, i) =>
              row.section ? (
                <tr key={i}>
                  <td style={{
                    position: "sticky", left: 0, zIndex: 1, background: bodyBg,
                    fontFamily: fontHd, fontSize: 24, lineHeight: "28px", color: text,
                    padding: "16px 24px", borderBottom: bdrSec,
                  }}>
                    {row.section}
                  </td>
                  {products.map((_, j) => (
                    <td key={j} style={{ background: bodyBg, borderBottom: bdrSec }} />
                  ))}
                </tr>
              ) : (
                <tr key={i}>
                  <td style={{
                    position: "sticky", left: 0, zIndex: 1, background: bodyBg,
                    fontFamily: fontBody, fontSize: 18, lineHeight: "28px",
                    letterSpacing: "0.4px", color: text,
                    padding: "12px 24px", fontWeight: 350,
                    minWidth: "260px", borderBottom: bdrData,
                  }}>
                    {row.label}
                  </td>
                  {(row.values ?? []).map((v, j) => (
                    <td key={j} style={{
                      fontFamily: fontBody, fontSize: 16, lineHeight: "24px",
                      letterSpacing: "0.4px", color: text,
                      padding: "10px", fontWeight: 350, height: 60,
                      minWidth: "200px", borderBottom: bdrData,
                    }}>
                      {v}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      {/* Bottom sentinel: when this exits the viewport top, the last row has passed the clone header → hide it. */}
      <div ref={bottomSentinelRef} style={{ height: 0 }} />
    </div>
  );
}

function AccordionsSpecifications() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[16px] relative shrink-0 w-[800px]" data-name="Accordions/Specifications">
      <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Divider top" />
        <AccordionRow3 />
        <div className="bg-[rgba(0,0,0,0.08)] h-px opacity-0 shrink-0 w-full" data-name="Divider bottom" />
      </div>
      <Frame51 />
      <SpecificationTableScrollable />
    </div>
  );
}

function Title23() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Reviews</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(32)</p>
      </div>
    </div>
  );
}

function IconsNextweb36() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb36 />
      </div>
    </div>
  );
}

function Title22() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title23 />
      <Icon18 />
    </div>
  );
}

function Title25() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Bundles</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(1)</p>
      </div>
    </div>
  );
}

function IconsNextweb37() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb37 />
      </div>
    </div>
  );
}

function Title24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title25 />
      <Icon19 />
    </div>
  );
}

function Title27() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Spare parts</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(8)</p>
      </div>
    </div>
  );
}

function IconsNextweb38() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="content-stretch flex h-[28px] items-start py-[6px] relative shrink-0 w-[16px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb38 />
      </div>
    </div>
  );
}

function Title26() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title27 />
      <Icon20 />
    </div>
  );
}

function Title29() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Services</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(2)</p>
      </div>
    </div>
  );
}

function IconsNextweb39() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb39 />
      </div>
    </div>
  );
}

function Title28() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title29 />
      <Icon21 />
    </div>
  );
}

function Title31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Owner Support</p>
      </div>
    </div>
  );
}

function IconsNextweb40() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb40 />
      </div>
    </div>
  );
}

function Title30() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title31 />
      <Icon22 />
    </div>
  );
}

function Title33() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 tracking-[0.4px] whitespace-nowrap" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px]">Related Articles</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#3D3D3C] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(3)</p>
      </div>
    </div>
  );
}

function IconsNextweb41() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="content-stretch flex items-start py-[6px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb41 />
      </div>
    </div>
  );
}

function Title32() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Title">
      <Title33 />
      <Icon23 />
    </div>
  );
}

function AccordionList1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[800px]" data-name="Accordion list">
      <div className="content-stretch flex flex-col gap-[17px] items-start pb-[17px] relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
        <Title17 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Accordions/Accessories">
        <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[800px]" data-name="Accordion">
          <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
          <Title19 />
          <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Divider bottom" />
        </div>
      </div>
      <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" data-name="Accordions/Features">
        <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[800px]" data-name="Accordion">
          <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Divider top" />
          <AccordionRow2 />
          <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Divider bottom" />
        </div>
      </button>
      <AccordionsSpecifications />
      <div className="content-stretch flex flex-col gap-[17px] items-start pb-[17px] relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px opacity-0 shrink-0 w-full" data-name="Devider top" />
        <Title22 />
      </div>
      <div className="content-stretch flex flex-col gap-[17px] items-start pb-[17px] relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
        <Title24 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordions/Spare parts">
        <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[800px]" data-name="Accordion">
          <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
          <Title26 />
          <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider bottom" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[17px] items-start pb-[17px] relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
        <Title28 />
      </div>
      <div className="content-stretch flex flex-col gap-[17px] items-start pb-[17px] relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
        <Title30 />
      </div>
      <div className="content-stretch flex flex-col gap-[17px] items-start pb-[17px] relative shrink-0 w-full" data-name="Accordion">
        <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" data-name="Devider top" />
        <Title32 />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[2722px] items-start relative shrink-0">
      <ProductInformation3 />
      <AccordionList1 />
    </div>
  );
}

function ProductInformation2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product information">
      <Frame47 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[800px]">
        <Frame61 />
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <div className="h-[573px] relative shrink-0 w-[800.001px]" data-name="Gallery">
        <Frame86 />
        <div className="absolute inset-[0_0_88.83%_0]" data-name="Overlay" />
        <div className="absolute bottom-0 content-stretch flex gap-[8px] items-start left-0 right-0 top-full" data-name="Segmented scroller">
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 1" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 2" opacity="0.32" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 2" opacity="0.32" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 2" opacity="0.32" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 2" opacity="0.32" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 2" opacity="0.32" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
        <Expand1 />
        <div className="absolute content-stretch flex items-start justify-end left-0 px-[16px] top-[16px] w-[800px]" data-name="Favourite">
          <Favourite1 />
        </div>
      </div>
      <Frame60 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#3d3d3c] whitespace-pre-wrap">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[18px] tracking-[0.4px] w-[440px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Battery Chainsaws
      </p>
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[44px] tracking-[-0.4px] w-[440px]">Husqvarna 540i XP</p>
    </div>
  );
}

function IconsNextweb42() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb43() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb44() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb45() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb46() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function Rating3() {
  return (
    <div className="content-stretch flex gap-[5px] items-start pb-[4px] pt-[2px] relative shrink-0" data-name="Rating">
      <div className="relative shrink-0 size-[16px]" data-name="rating-filled">
        <IconsNextweb42 />
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="rating-filled">
        <IconsNextweb43 />
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="rating-filled">
        <IconsNextweb44 />
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="rating-filled">
        <IconsNextweb45 />
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="rating-filled">
        <IconsNextweb46 />
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Rating3 />
      <p className="font-['Roboto:Medium',sans-serif] font-[450] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        4.2
      </p>
    </div>
  );
}

function Rating2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[440px]" data-name="Rating">
      <Frame88 />
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] text-right tracking-[0.4px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        32 reviews
      </p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame49 />
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <Rating2 />
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Frame87 />
      <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0" data-name="Price">
        <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#3d3d3c] text-[28px] tracking-[-0.2px]">$959</p>
        <p className="font-['Heebo_350:350',sans-serif] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px]">MSRP</p>
      </div>
    </div>
  );
}

function ViewList1() {
  return (
    <div className="content-stretch flex items-start pb-[2px] pt-[6px] relative shrink-0" data-name="View list">
      <div className="content-stretch flex h-[20px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Inline link/Body 2">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline">View list</p>
        </div>
      </div>
    </div>
  );
}

function ProductVariant3() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[440px]" data-name="Product variant">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#3d3d3c] text-[28px] tracking-[-0.2px]">Product variant</p>
      <ViewList1 />
    </div>
  );
}

function ButtonMatrix5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Button matrix">
      <button className="bg-[rgba(34,119,48,0.08)] content-stretch cursor-pointer flex h-[32px] items-center justify-center pb-[4px] pt-[5px] px-[16px] relative rounded-[12px] shrink-0" data-name="Matrix button">
        <div aria-hidden="true" className="absolute border-2 border-[#227730] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[14px] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[20px]">Alt 1</p>
        </div>
      </button>
      <div className="content-stretch flex h-[32px] items-center justify-center pb-[4px] pt-[5px] px-[16px] relative rounded-[12px] shrink-0" data-name="Matrix button">
        <div aria-hidden="true" className="absolute border border-[#3D3D3C] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[14px] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[20px]">Alt 2</p>
        </div>
      </div>
    </div>
  );
}

function ButtonMatrix4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Button matrix 1">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Bar length (inch)
      </p>
      <ButtonMatrix5 />
    </div>
  );
}

function ButtonMatrix7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Button matrix">
      <button className="bg-[rgba(34,119,48,0.08)] content-stretch cursor-pointer flex h-[32px] items-center justify-center pb-[4px] pt-[5px] px-[16px] relative rounded-[12px] shrink-0" data-name="Matrix button">
        <div aria-hidden="true" className="absolute border-2 border-[#227730] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[14px] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[20px]">Alt 1</p>
        </div>
      </button>
      <div className="content-stretch flex h-[32px] items-center justify-center pb-[4px] pt-[5px] px-[16px] relative rounded-[12px] shrink-0" data-name="Matrix button">
        <div aria-hidden="true" className="absolute border border-[#3D3D3C] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[14px] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[20px]">Alt 2</p>
        </div>
      </div>
    </div>
  );
}

function ButtonMatrix6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Button matrix 2">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Include battery and charger?
      </p>
      <ButtonMatrix7 />
    </div>
  );
}

function ProductVariant2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[28px] relative shrink-0" data-name="Product variant">
      <ProductVariant3 />
      <ButtonMatrix4 />
      <ButtonMatrix6 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <ProductVariant2 />
      <div className="h-0 relative shrink-0 w-[440px]" data-name="Devider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 1">
            <line id="Devider" stroke="var(--stroke-0, black)" strokeOpacity="0.08" x2="440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconsNextweb47() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Delviery">
          <path d={svgPaths.p3ebcfd00} fill="var(--fill-0, #3D3D3C)" id="Combined Shape" />
          <path d="M15.9997 0H0V16H15.9997V0Z" fill="var(--fill-0, #227730)" id="Rectangle" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function HbdIcons4() {
  return (
    <div className="absolute contents inset-0" data-name="HBD   Icons">
      <IconsNextweb47 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="delivery">
        <HbdIcons4 />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame23 />
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Home delivery
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="box">
        <div className="absolute inset-[1.66%_6.22%]" data-name="Polygon 1 (Stroke)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0095 15.4696">
            <path clipRule="evenodd" d={svgPaths.p93c8c00} fill="var(--fill-0, #3D3D3C)" fillRule="evenodd" id="Polygon 1 (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[23.65%_9%_5.36%_9%]" data-name="Vector 14 (Stroke)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1187 11.3588">
            <path clipRule="evenodd" d={svgPaths.p37dd5440} fill="var(--fill-0, #3D3D3C)" fillRule="evenodd" id="Vector 14 (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[11.18%_28.6%_59.39%_26.81%]" data-name="Vector 15 (Stroke)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 7.13378 4.70921">
            <path clipRule="evenodd" d={svgPaths.p353684f0} fill="var(--fill-0, #3D3D3C)" fillRule="evenodd" id="Vector 15 (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame25 />
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Collect at dealer
      </p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame22 />
      <Frame24 />
    </div>
  );
}

function ButtonText4() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Button text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] relative size-full">
          <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.8px] uppercase">add to cart</p>
        </div>
      </div>
    </div>
  );
}

function ButtonText5() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Button text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-px px-[32px] relative size-full">
          <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#3d3d3c] text-[14px] text-center tracking-[1px] uppercase">Find nearest dealer</p>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <div className="bg-[#227730] content-stretch flex h-[60px] items-center relative rounded-[20px] shrink-0 w-[440px]" data-name="CTA button">
        <ButtonText4 />
      </div>
      <div className="content-stretch flex h-[48px] items-center relative rounded-[16px] shrink-0 w-[440px]" data-name="Secondary button">
        <div aria-hidden="true" className="absolute border border-[#3d3d3c] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <ButtonText5 />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame27 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[440px]" data-name="Availability">
        <Frame90 />
        <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Shipping time 3-5 working days
        </p>
      </div>
      <Frame26 />
    </div>
  );
}

function Group3Copy4() {
  return (
    <div className="absolute contents inset-0" data-name="Group 3 Copy">
      <div className="absolute inset-[0_0.02%_0_0]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p3d2d0300} fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
      <div className="absolute inset-[3.56%_0]" data-name="Shape">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
          <path d={svgPaths.p37cafab0} fill="var(--fill-0, #3D3D3C)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb48() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group3Copy4 />
    </div>
  );
}

function IconTextLinkBody1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Icon text link/Body 4">
      <div className="relative shrink-0 size-[12px]" data-name="heart">
        <IconsNextweb48 />
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline">Add to favorites</p>
      </div>
    </div>
  );
}

function IconsNextweb49() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.p28aeb100} fill="var(--fill-0, #3D3D3C)" id="Compare" />
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Frame89 />
      <IconTextLinkBody1 />
      <div className="content-stretch flex gap-[12px] h-[16px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Icon text link/Body 3">
        <div className="relative shrink-0 size-[12px]" data-name="compare">
          <IconsNextweb49 />
        </div>
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline">Compare</p>
        </div>
      </div>
    </div>
  );
}

function Specs7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Specs 1">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px]">14”</p>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] min-w-full relative shrink-0 text-[14px] tracking-[0.4px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Bar length (inch)
      </p>
    </div>
  );
}

function Specs8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Specs 2">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px]">40 V</p>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] min-w-full relative shrink-0 text-[14px] tracking-[0.4px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Battery voltage
      </p>
    </div>
  );
}

function Specs9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Specs 3">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px]">42 V</p>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] min-w-full relative shrink-0 text-[14px] tracking-[0.4px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Battery voltage
      </p>
    </div>
  );
}

function Specs6() {
  return (
    <div className="content-stretch flex gap-[20px] items-start py-[20px] relative shrink-0 text-[#3d3d3c] w-[440px]" data-name="Specs">
      <Specs7 />
      <Specs8 />
      <Specs9 />
    </div>
  );
}

function Specs5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Specs">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Specs6 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="check-hq">
        <div className="absolute inset-[3.57%_8%_0_3.57%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1483 15.4286">
            <path d={svgPaths.p3fbded00} fill="var(--fill-0, #3D3D3C)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.08%_8.64%_30.91%_24%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7773 7.52143">
            <path d={svgPaths.p3191e780} fill="var(--fill-0, #3D3D3C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Icon24 />
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Husqvarna Connect
      </p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="check-hq">
        <div className="absolute inset-[3.57%_8%_0_3.57%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1483 15.4286">
            <path d={svgPaths.p3fbded00} fill="var(--fill-0, #3D3D3C)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.08%_8.64%_30.91%_24%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7773 7.52143">
            <path d={svgPaths.p3191e780} fill="var(--fill-0, #3D3D3C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Icon25 />
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        High chain speed
      </p>
    </div>
  );
}

function Icon26() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="check-hq">
        <div className="absolute inset-[3.57%_8%_0_3.57%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1483 15.4286">
            <path d={svgPaths.p3fbded00} fill="var(--fill-0, #3D3D3C)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.08%_8.64%_30.91%_24%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7773 7.52143">
            <path d={svgPaths.p3191e780} fill="var(--fill-0, #3D3D3C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Icon26 />
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Low maintenance
      </p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame28 />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Group7Copy3() {
  return (
    <div className="absolute contents inset-0" data-name="Group 7 Copy">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.p1e332200} fill="var(--fill-0, #3D3D3C)" id="Combined Shape" />
      </svg>
    </div>
  );
}

function IconsNextweb50() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group7Copy3 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="expand">
        <IconsNextweb50 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Icon27 />
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        View all features
      </p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start py-[28px] relative shrink-0" data-name="List">
      <Frame91 />
      <Frame31 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <List1 />
      <div className="h-0 relative shrink-0 w-[440px]" data-name="Devider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 1">
            <line id="Devider" stroke="var(--stroke-0, black)" strokeOpacity="0.08" x2="440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconsNextweb51() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function PriceIncludes1() {
  return (
    <div className="content-stretch flex items-center justify-between py-[16px] relative shrink-0 w-[440px]" data-name="Price includes">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[0] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <span className="leading-[28px]">{`$959 `}</span>
        <span className="leading-[28px] text-[#3D3D3C]">– Price includes</span>
      </p>
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb51 />
      </div>
    </div>
  );
}

function Group6Copy() {
  return (
    <div className="absolute contents inset-0" data-name="Group 6 Copy">
      <div className="absolute bottom-0 left-1/4 right-[24.93%] top-[0.02%]" data-name="Line 3 Copy 6">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0187 28">
          <path d={svgPaths.p2e741000} fill="var(--fill-0, #3D3D3C)" id="Line 3 Copy 6" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_0.02%_0]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d="M28 0H0V27.9988H28V0Z" fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb52() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group6Copy />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[160px] items-start pb-[60px] px-[140px] relative shrink-0">
      <Frame59 />
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Sidebar">
        <Frame48 />
        <Frame62 />
        <div className="content-stretch flex flex-col items-start pb-[36px] pt-[24px] relative shrink-0" data-name="Buttons/Available online">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
          <Frame63 />
        </div>
        <Specs5 />
        <Frame64 />
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
          <PriceIncludes1 />
        </div>
      </div>
      <div className="absolute bg-gradient-to-r from-[rgba(255,255,255,0)] h-[1301px] left-[789px] to-[rgba(255,255,255,0.8)] top-[1448px] w-[160px]" />
      <div className="absolute left-[912px] size-[48px] top-[1477px]" data-name="Scroller button/Large">
        <div className="absolute bg-white inset-0 rounded-[16px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.12)]" />
        <div className="absolute inset-[29.17%]" data-name="chevron-right">
          <IconsNextweb52 />
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f4f4f3] h-[3101px] items-start relative shrink-0 to-[27.285%] to-white">
      <div className="content-stretch flex flex-col h-[60px] items-start px-[140px] relative shrink-0 w-[1680px]" data-name="Breadcrumbs">
        <Pages />
      </div>
      <Frame54 />
      <Frame58 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-end min-h-px min-w-px relative">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#3d3d3c] text-[28px] tracking-[-0.2px]">You may also be interested in</p>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3D3D3C] text-[16px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">(8)</p>
      </div>
    </div>
  );
}

function Group7Copy4() {
  return (
    <div className="absolute contents inset-0" data-name="Group 7 Copy">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.p1e332200} fill="var(--fill-0, #3D3D3C)" id="Combined Shape" />
      </svg>
    </div>
  );
}

function IconsNextweb53() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group7Copy4 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-[350] gap-[32px] items-end leading-[28px] px-[140px] relative shrink-0 text-[#3d3d3c] text-[18px] tracking-[0.4px] underline w-[1680px]" data-name="Tabs">
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Recommended
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Bundles
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Offers
      </p>
    </div>
  );
}

function Group9Copy() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="Group 9 Copy">
      <div className="absolute inset-[0_0.01%_0.02%_0.01%]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p3d2d0300} fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
      <div className="absolute inset-[15.32%_0_15.34%_0]" data-name="Line 10 Copy">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 19.4142">
          <path d={svgPaths.p87df400} fill="var(--fill-0, #3D3D3C)" id="Line 10 Copy" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb54() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="Icons Nextweb">
      <Group9Copy />
    </div>
  );
}

function HbdIcons5() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="HBD   Icons">
      <IconsNextweb54 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check">
        <HbdIcons5 />
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] text-right tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Available online
      </p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#3d3d3c] whitespace-pre-wrap">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] h-[20px] leading-[20px] relative shrink-0 text-[14px] tracking-[0.4px] w-[272px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Batteries
      </p>
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[24px] w-[272px]">Battery BLi 300</p>
    </div>
  );
}

function IconsNextweb55() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb56() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb57() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb58() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb59() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function Frame98() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-start left-0 top-[7.5px]">
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb55 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb56 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb57 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb58 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb59 />
      </div>
    </div>
  );
}

function IconsNextweb60() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb61() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb62() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb63() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb64() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[2px] items-start overflow-clip pt-[3.5px] relative shrink-0 w-[61px]">
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb60 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb61 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb62 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb63 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb64 />
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Frame97 />
      <p className="font-['Roboto:Medium',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        4.2
      </p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[56px] top-[180px] w-[260px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product info">
        <div className="content-stretch flex flex-col h-[44px] items-start relative shrink-0 w-[272px]" data-name="Secondary badge">
          <div className="bg-[rgba(217,217,217,0)] flex-[1_0_0] min-h-px min-w-px w-full" />
        </div>
        <Frame67 />
        <div className="content-stretch flex gap-[4px] items-start pt-[4px] relative shrink-0" data-name="Star rating">
          <Frame98 />
          <Frame92 />
          <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            (102)
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="bg-[#d73f0d] content-stretch flex h-[24px] items-start px-[8px] py-[5px] relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="Badge/Large">
        <div className="flex flex-col font-['Husqvarna_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[14px]">Offer</p>
        </div>
      </div>
      <div className="bg-[#ffc800] content-stretch flex h-[24px] items-start px-[8px] py-[5px] relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="Badge/Large">
        <div className="flex flex-col font-['Husqvarna_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3c] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[14px]">Necessary</p>
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[48px] items-start left-0 px-[24px] top-px w-[308px]">
      <div className="absolute content-stretch flex flex-col items-start left-0 pt-[24px] px-[24px] top-0 w-[308px]" data-name="Primary badge">
        <Frame104 />
      </div>
    </div>
  );
}

function Group3Copy5() {
  return (
    <div className="absolute contents inset-0" data-name="Group 3 Copy">
      <div className="absolute inset-[0_0.02%_0_0]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p3d2d0300} fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
      <div className="absolute inset-[3.56%_0]" data-name="Shape">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
          <path d={svgPaths.p37cafab0} fill="var(--fill-0, #3D3D3C)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb65() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group3Copy5 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 4" />
        </svg>
      </div>
      <div className="col-1 ml-[10px] mt-[10px] relative row-1 size-[20px]" data-name="heart">
        <IconsNextweb65 />
      </div>
    </div>
  );
}

function Group9Copy1() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="Group 9 Copy">
      <div className="absolute inset-[0_0.01%_0.02%_0.01%]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p3d2d0300} fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
      <div className="absolute inset-[15.32%_0_15.34%_0]" data-name="Line 10 Copy">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 19.4142">
          <path d={svgPaths.p87df400} fill="var(--fill-0, #3D3D3C)" id="Line 10 Copy" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb66() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="Icons Nextweb">
      <Group9Copy1 />
    </div>
  );
}

function HbdIcons6() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="HBD   Icons">
      <IconsNextweb66 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check">
        <HbdIcons6 />
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] text-right tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Available online
      </p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#3d3d3c] whitespace-pre-wrap">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] h-[20px] leading-[20px] relative shrink-0 text-[14px] tracking-[0.4px] w-[272px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Batteries
      </p>
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[24px] w-[272px]">Battery BLi 300</p>
    </div>
  );
}

function IconsNextweb67() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb68() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb69() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb70() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb71() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function Frame99() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-start left-0 top-[7.5px]">
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb67 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb68 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb69 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb70 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb71 />
      </div>
    </div>
  );
}

function IconsNextweb72() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb73() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb74() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb75() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb76() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex gap-[2px] items-start overflow-clip pt-[3.5px] relative shrink-0 w-[61px]">
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb72 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb73 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb74 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb75 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb76 />
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Frame100 />
      <p className="font-['Roboto:Medium',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        4.2
      </p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[56px] top-[180px] w-[260px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product info">
        <div className="content-stretch flex flex-col h-[44px] items-start relative shrink-0 w-[272px]" data-name="Secondary badge">
          <div className="bg-[rgba(217,217,217,0)] flex-[1_0_0] min-h-px min-w-px w-full" />
        </div>
        <Frame70 />
        <div className="content-stretch flex gap-[4px] items-start pt-[4px] relative shrink-0" data-name="Star rating">
          <Frame99 />
          <Frame93 />
          <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            (102)
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="bg-[#d73f0d] content-stretch flex h-[24px] items-start px-[8px] py-[5px] relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="Badge/Large">
        <div className="flex flex-col font-['Husqvarna_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[14px]">Offer</p>
        </div>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[48px] items-start left-0 px-[24px] top-px w-[308px]">
      <div className="absolute content-stretch flex flex-col items-start left-0 pt-[24px] px-[24px] top-0 w-[308px]" data-name="Primary badge">
        <Frame106 />
      </div>
    </div>
  );
}

function Group3Copy6() {
  return (
    <div className="absolute contents inset-0" data-name="Group 3 Copy">
      <div className="absolute inset-[0_0.02%_0_0]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p3d2d0300} fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
      <div className="absolute inset-[3.56%_0]" data-name="Shape">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
          <path d={svgPaths.p37cafab0} fill="var(--fill-0, #3D3D3C)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb77() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group3Copy6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 4" />
        </svg>
      </div>
      <div className="col-1 ml-[10px] mt-[10px] relative row-1 size-[20px]" data-name="heart">
        <IconsNextweb77 />
      </div>
    </div>
  );
}

function Group9Copy2() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="Group 9 Copy">
      <div className="absolute inset-[0_0.01%_0.02%_0.01%]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p3d2d0300} fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
      <div className="absolute inset-[15.32%_0_15.34%_0]" data-name="Line 10 Copy">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 19.4142">
          <path d={svgPaths.p87df400} fill="var(--fill-0, #3D3D3C)" id="Line 10 Copy" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb78() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="Icons Nextweb">
      <Group9Copy2 />
    </div>
  );
}

function HbdIcons7() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="HBD   Icons">
      <IconsNextweb78 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check">
        <HbdIcons7 />
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] text-right tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Available online
      </p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#3d3d3c] whitespace-pre-wrap">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] h-[20px] leading-[20px] relative shrink-0 text-[14px] tracking-[0.4px] w-[272px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Batteries
      </p>
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[24px] w-[272px]">Battery BLi 300</p>
    </div>
  );
}

function IconsNextweb79() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb80() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb81() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb82() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb83() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function Frame101() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-start left-0 top-[7.5px]">
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb79 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb80 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb81 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb82 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb83 />
      </div>
    </div>
  );
}

function IconsNextweb84() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb85() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb86() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb87() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb88() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[2px] items-start overflow-clip pt-[3.5px] relative shrink-0 w-[61px]">
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb84 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb85 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb86 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb87 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb88 />
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Frame102 />
      <p className="font-['Roboto:Medium',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        4.2
      </p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[56px] top-[180px] w-[260px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product info">
        <div className="content-stretch flex flex-col h-[44px] items-start relative shrink-0 w-[272px]" data-name="Secondary badge">
          <div className="bg-[rgba(217,217,217,0)] flex-[1_0_0] min-h-px min-w-px w-full" />
        </div>
        <Frame73 />
        <div className="content-stretch flex gap-[4px] items-start pt-[4px] relative shrink-0" data-name="Star rating">
          <Frame101 />
          <Frame94 />
          <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            (102)
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="bg-[#d73f0d] content-stretch flex h-[24px] items-start px-[8px] py-[5px] relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="Badge/Large">
        <div className="flex flex-col font-['Husqvarna_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[14px]">Offer</p>
        </div>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[48px] items-start left-0 px-[24px] top-px w-[308px]">
      <div className="absolute content-stretch flex flex-col items-start left-0 pt-[24px] px-[24px] top-0 w-[308px]" data-name="Primary badge">
        <Frame108 />
      </div>
    </div>
  );
}

function Group3Copy7() {
  return (
    <div className="absolute contents inset-0" data-name="Group 3 Copy">
      <div className="absolute inset-[0_0.02%_0_0]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p3d2d0300} fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
      <div className="absolute inset-[3.56%_0]" data-name="Shape">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
          <path d={svgPaths.p37cafab0} fill="var(--fill-0, #3D3D3C)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb89() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group3Copy7 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 4" />
        </svg>
      </div>
      <div className="col-1 ml-[10px] mt-[10px] relative row-1 size-[20px]" data-name="heart">
        <IconsNextweb89 />
      </div>
    </div>
  );
}

function Group9Copy3() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="Group 9 Copy">
      <div className="absolute inset-[0_0.01%_0.02%_0.01%]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p3d2d0300} fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
      <div className="absolute inset-[15.32%_0_15.34%_0]" data-name="Line 10 Copy">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 19.4142">
          <path d={svgPaths.p87df400} fill="var(--fill-0, #3D3D3C)" id="Line 10 Copy" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb90() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="Icons Nextweb">
      <Group9Copy3 />
    </div>
  );
}

function HbdIcons8() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="HBD   Icons">
      <IconsNextweb90 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check">
        <HbdIcons8 />
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] text-right tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Available online
      </p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#3d3d3c] whitespace-pre-wrap">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] h-[20px] leading-[20px] relative shrink-0 text-[14px] tracking-[0.4px] w-[272px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Chainsaw Bars
      </p>
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[24px] w-[272px]">{`Carving Chainsaw Guide Bar, 1/4" pitch, .050 gauge, small mount`}</p>
    </div>
  );
}

function IconsNextweb91() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb92() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb93() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb94() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb95() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function Frame109() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-start left-0 top-[7.5px]">
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb91 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb92 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb93 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb94 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb95 />
      </div>
    </div>
  );
}

function IconsNextweb96() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb97() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb98() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb99() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb100() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[2px] items-start overflow-clip pt-[3.5px] relative shrink-0 w-[61px]">
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb96 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb97 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb98 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb99 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb100 />
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Frame110 />
      <p className="font-['Roboto:Medium',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        4.2
      </p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[56px] top-[180px] w-[260px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product info">
        <div className="content-stretch flex flex-col h-[44px] items-start relative shrink-0 w-[272px]" data-name="Secondary badge">
          <div className="bg-[rgba(217,217,217,0)] flex-[1_0_0] min-h-px min-w-px w-full" />
        </div>
        <Frame76 />
        <div className="content-stretch flex gap-[4px] items-start pt-[4px] relative shrink-0" data-name="Star rating">
          <Frame109 />
          <Frame95 />
          <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            (102)
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="bg-[#d73f0d] content-stretch flex h-[24px] items-start px-[8px] py-[5px] relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="Badge/Large">
        <div className="flex flex-col font-['Husqvarna_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[14px]">Offer</p>
        </div>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[48px] items-start left-0 px-[24px] top-px w-[308px]">
      <div className="absolute content-stretch flex flex-col items-start left-0 pt-[24px] px-[24px] top-0 w-[308px]" data-name="Primary badge">
        <Frame112 />
      </div>
    </div>
  );
}

function Group3Copy8() {
  return (
    <div className="absolute contents inset-0" data-name="Group 3 Copy">
      <div className="absolute inset-[0_0.02%_0_0]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p3d2d0300} fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
      <div className="absolute inset-[3.56%_0]" data-name="Shape">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
          <path d={svgPaths.p37cafab0} fill="var(--fill-0, #3D3D3C)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb101() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group3Copy8 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 4" />
        </svg>
      </div>
      <div className="col-1 ml-[10px] mt-[10px] relative row-1 size-[20px]" data-name="heart">
        <IconsNextweb101 />
      </div>
    </div>
  );
}

function Group9Copy4() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="Group 9 Copy">
      <div className="absolute inset-[0_0.01%_0.02%_0.01%]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p3d2d0300} fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
      <div className="absolute inset-[15.32%_0_15.34%_0]" data-name="Line 10 Copy">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 19.4142">
          <path d={svgPaths.p87df400} fill="var(--fill-0, #3D3D3C)" id="Line 10 Copy" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb102() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="Icons Nextweb">
      <Group9Copy4 />
    </div>
  );
}

function HbdIcons9() {
  return (
    <div className="absolute contents inset-[0_0_0.02%_0]" data-name="HBD   Icons">
      <IconsNextweb102 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check">
        <HbdIcons9 />
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] text-right tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Available online
      </p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#3d3d3c] whitespace-pre-wrap">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] h-[20px] leading-[20px] relative shrink-0 text-[14px] tracking-[0.4px] w-[272px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Arborist Essentials Tools `}</p>
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[24px] w-[272px]">Chainsaw Carrying Strap</p>
    </div>
  );
}

function IconsNextweb103() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb104() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb105() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb106() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb107() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function Frame113() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-start left-0 top-[7.5px]">
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb103 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb104 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb105 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb106 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb107 />
      </div>
    </div>
  );
}

function IconsNextweb108() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb109() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb110() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb111() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function IconsNextweb112() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0024 28.002">
        <path d={svgPaths.p1855da00} fill="var(--fill-0, #3D3D3C)" id="Rectangle Copy 5" />
      </svg>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[2px] items-start overflow-clip pt-[3.5px] relative shrink-0 w-[61px]">
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb108 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb109 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb110 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb111 />
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="rating-filled">
        <IconsNextweb112 />
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Frame114 />
      <p className="font-['Roboto:Medium',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[#3d3d3c] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        4.2
      </p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[56px] top-[180px] w-[260px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product info">
        <div className="content-stretch flex flex-col h-[44px] items-start relative shrink-0 w-[272px]" data-name="Secondary badge">
          <div className="bg-[rgba(217,217,217,0)] flex-[1_0_0] min-h-px min-w-px w-full" />
        </div>
        <Frame79 />
        <div className="content-stretch flex gap-[4px] items-start pt-[4px] relative shrink-0" data-name="Star rating">
          <Frame113 />
          <Frame96 />
          <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            (102)
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="bg-[#d73f0d] content-stretch flex h-[24px] items-start px-[8px] py-[5px] relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="Badge/Large">
        <div className="flex flex-col font-['Husqvarna_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[14px]">Offer</p>
        </div>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[48px] items-start left-0 px-[24px] top-px w-[308px]">
      <div className="absolute content-stretch flex flex-col items-start left-0 pt-[24px] px-[24px] top-0 w-[308px]" data-name="Primary badge">
        <Frame116 />
      </div>
    </div>
  );
}

function Group3Copy9() {
  return (
    <div className="absolute contents inset-0" data-name="Group 3 Copy">
      <div className="absolute inset-[0_0.02%_0_0]" data-name="Rectangle">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p3d2d0300} fill="var(--fill-0, #3D3D3C)" id="Rectangle" opacity="0" />
        </svg>
      </div>
      <div className="absolute inset-[3.56%_0]" data-name="Shape">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
          <path d={svgPaths.p37cafab0} fill="var(--fill-0, #3D3D3C)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function IconsNextweb113() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <Group3Copy9 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 4" />
        </svg>
      </div>
      <div className="col-1 ml-[10px] mt-[10px] relative row-1 size-[20px]" data-name="heart">
        <IconsNextweb113 />
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip pb-[4px] relative shrink-0 w-[1400px]" data-name="List">
      <div className="h-[432px] relative shrink-0 w-[308px]" data-name="Cross sell card/Scroller">
        <div className="absolute bg-white inset-0 rounded-[32px] shadow-[3px_3px_2px_0px_rgba(0,0,0,0.04)]" data-name="Product card base/Scroller/White">
          <div className="absolute bottom-[20px] content-stretch flex items-end justify-between left-[24px] w-[260px]" data-name="Bottom section">
            <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] items-start relative shrink-0 tracking-[0.4px]" data-name="Price/Small">
              <p className="font-[450] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                $1,699
              </p>
              <p className="font-[350] h-[20px] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] w-[132px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                MSRP
              </p>
            </div>
            <Frame65 />
          </div>
        </div>
        <div className="absolute h-[172px] left-[24px] right-[24px] rounded-[24px] top-[16px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage1} />
        </div>
        <Frame66 />
        <Frame103 />
        <div className="absolute content-stretch flex flex-col items-end left-0 pl-[24px] pr-[16px] pt-[16px] top-0 w-[308px]" data-name="Action area">
          <Group />
        </div>
      </div>
      <div className="h-[432px] relative shrink-0 w-[308px]" data-name="Cross sell card/Scroller">
        <div className="absolute bg-white inset-0 rounded-[32px] shadow-[3px_3px_2px_0px_rgba(0,0,0,0.04)]" data-name="Product card base/Scroller/White">
          <div className="absolute bottom-[20px] content-stretch flex items-end justify-between left-[24px] w-[260px]" data-name="Bottom section">
            <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] items-start relative shrink-0 tracking-[0.4px]" data-name="Price/Small">
              <p className="font-[450] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                $1,699
              </p>
              <p className="font-[350] h-[20px] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] w-[132px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                MSRP
              </p>
            </div>
            <Frame68 />
          </div>
        </div>
        <div className="absolute h-[172px] left-[24px] right-[24px] rounded-[24px] top-[16px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage1} />
        </div>
        <Frame69 />
        <Frame105 />
        <div className="absolute content-stretch flex flex-col items-end left-0 pl-[24px] pr-[16px] pt-[16px] top-0 w-[308px]" data-name="Action area">
          <Group1 />
        </div>
      </div>
      <div className="h-[432px] relative shrink-0 w-[308px]" data-name="Cross sell card/Scroller">
        <div className="absolute bg-white inset-0 rounded-[32px] shadow-[3px_3px_2px_0px_rgba(0,0,0,0.04)]" data-name="Product card base/Scroller/White">
          <div className="absolute bottom-[20px] content-stretch flex items-end justify-between left-[24px] w-[260px]" data-name="Bottom section">
            <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] items-start relative shrink-0 tracking-[0.4px]" data-name="Price/Small">
              <p className="font-[450] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                $1,699
              </p>
              <p className="font-[350] h-[20px] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] w-[132px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                MSRP
              </p>
            </div>
            <Frame71 />
          </div>
        </div>
        <div className="absolute h-[172px] left-[24px] right-[24px] rounded-[24px] top-[16px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage1} />
        </div>
        <Frame72 />
        <Frame107 />
        <div className="absolute content-stretch flex flex-col items-end left-0 pl-[24px] pr-[16px] pt-[16px] top-0 w-[308px]" data-name="Action area">
          <Group2 />
        </div>
      </div>
      <div className="h-[432px] relative shrink-0 w-[308px]" data-name="Cross sell/White">
        <div className="absolute bg-white inset-0 rounded-[32px] shadow-[3px_3px_2px_0px_rgba(0,0,0,0.04)]" data-name="Product card base/Scroller/White">
          <div className="absolute bottom-[20px] content-stretch flex items-end justify-between left-[24px] w-[260px]" data-name="Bottom section">
            <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] items-start relative shrink-0 tracking-[0.4px]" data-name="Price/Small">
              <p className="font-[450] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                $1,699
              </p>
              <p className="font-[350] h-[20px] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] w-[132px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                MSRP
              </p>
            </div>
            <Frame74 />
          </div>
        </div>
        <div className="absolute h-[172px] left-[24px] right-[24px] rounded-[24px] top-[16px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
        </div>
        <Frame75 />
        <Frame111 />
        <div className="absolute content-stretch flex flex-col items-end left-0 pl-[24px] pr-[16px] pt-[16px] top-0 w-[308px]" data-name="Action area">
          <Group3 />
        </div>
      </div>
      <div className="h-[432px] relative shrink-0 w-[308px]" data-name="Cross sell/White">
        <div className="absolute bg-white inset-0 rounded-[32px] shadow-[3px_3px_2px_0px_rgba(0,0,0,0.04)]" data-name="Product card base/Scroller/White">
          <div className="absolute bottom-[20px] content-stretch flex items-end justify-between left-[24px] w-[260px]" data-name="Bottom section">
            <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] items-start relative shrink-0 tracking-[0.4px]" data-name="Price/Small">
              <p className="font-[450] leading-[28px] relative shrink-0 text-[#3d3d3c] text-[18px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                $1,699
              </p>
              <p className="font-[350] h-[20px] leading-[20px] relative shrink-0 text-[#3D3D3C] text-[14px] w-[132px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                MSRP
              </p>
            </div>
            <Frame77 />
          </div>
        </div>
        <div className="absolute h-[172px] left-[24px] right-[24px] rounded-[24px] top-[16px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
        </div>
        <Frame78 />
        <Frame115 />
        <div className="absolute content-stretch flex flex-col items-end left-0 pl-[24px] pr-[16px] pt-[16px] top-0 w-[308px]" data-name="Action area">
          <Group4 />
        </div>
      </div>
    </div>
  );
}

function Copy2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[8px] relative text-[#3d3d3c] whitespace-pre-wrap" data-name="Copy">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] tracking-[0.4px] w-[336px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Learn more
      </p>
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] w-[336px]">Lorem ipsum dolor sit amet</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="relative rounded-[16px] shrink-0 size-[68px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage4} />
      </div>
      <Copy2 />
    </div>
  );
}

function Copy3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[8px] relative text-[#3d3d3c] whitespace-pre-wrap" data-name="Copy">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] tracking-[0.4px] w-[336px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Learn more
      </p>
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] w-[336px]">Lorem ipsum dolor sit amet</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="relative rounded-[16px] shrink-0 size-[68px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage5} />
      </div>
      <Copy3 />
    </div>
  );
}

function Copy4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[8px] relative text-[#3d3d3c] whitespace-pre-wrap" data-name="Copy">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] tracking-[0.4px] w-[336px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Learn more
      </p>
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] w-[336px]">Lorem ipsum dolor sit amet</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="relative rounded-[16px] shrink-0 size-[68px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage6} />
      </div>
      <Copy4 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0" data-name="row 1">
      <div className="bg-[#f4f4f3] content-stretch flex flex-col items-start p-[8px] relative rounded-[24px] shrink-0 w-[440px]" data-name="Also view/Grey">
        <Content />
      </div>
      <div className="bg-[#f4f4f3] content-stretch flex flex-col items-start p-[8px] relative rounded-[24px] shrink-0 w-[440px]" data-name="Also view/Grey">
        <Content1 />
      </div>
      <div className="bg-[#f4f4f3] content-stretch flex flex-col items-start p-[8px] relative rounded-[24px] shrink-0 w-[440px]" data-name="Also view/Grey">
        <Content2 />
      </div>
    </div>
  );
}

function Copy5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[8px] relative text-[#3d3d3c] whitespace-pre-wrap" data-name="Copy">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] tracking-[0.4px] w-[336px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Learn more
      </p>
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] w-[336px]">Lorem ipsum dolor sit amet</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="relative rounded-[16px] shrink-0 size-[68px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage7} />
      </div>
      <Copy5 />
    </div>
  );
}

function Copy6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[8px] relative text-[#3d3d3c] whitespace-pre-wrap" data-name="Copy">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] tracking-[0.4px] w-[336px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Learn more
      </p>
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] w-[336px]">Lorem ipsum dolor sit amet</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="relative rounded-[16px] shrink-0 size-[68px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage8} />
      </div>
      <Copy6 />
    </div>
  );
}

function Copy7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[8px] relative text-[#3d3d3c] whitespace-pre-wrap" data-name="Copy">
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[24px] relative shrink-0 text-[16px] tracking-[0.4px] w-[336px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Learn more
      </p>
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] w-[336px]">Lorem ipsum dolor sit amet</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="relative rounded-[16px] shrink-0 size-[68px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage9} />
      </div>
      <Copy7 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0" data-name="row 2">
      <div className="bg-[#f4f4f3] content-stretch flex flex-col items-start p-[8px] relative rounded-[24px] shrink-0 w-[440px]" data-name="Also view/Grey">
        <Content3 />
      </div>
      <div className="bg-[#f4f4f3] content-stretch flex flex-col items-start p-[8px] relative rounded-[24px] shrink-0 w-[440px]" data-name="Also view/Grey">
        <Content4 />
      </div>
      <div className="bg-[#f4f4f3] content-stretch flex flex-col items-start p-[8px] relative rounded-[24px] shrink-0 w-[440px]" data-name="Also view/Grey">
        <Content5 />
      </div>
    </div>
  );
}

function MainTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-white whitespace-pre-wrap" data-name="Main title">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[36px] tracking-[0.3px] w-[440px]">{`You’re at Husqvarna Forest & Gardens Global site `}</p>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[18px] tracking-[0.4px] w-[440px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`With over 330 years of innovation and passion, Husqvarna provides professionals with forest, park and garden products. We let high performance meet usability and safety, making you ready to get the job done efficiently. `}</p>
    </div>
  );
}

function Subtitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-white whitespace-pre-wrap" data-name="Subtitle">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[28px] tracking-[-0.2px] w-[440px]">Get the latest updates!</p>
      <p className="font-['Roboto:Regular',sans-serif] font-[350] leading-[28px] relative shrink-0 text-[18px] tracking-[0.4px] w-[440px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Sign up for our newsletter to get the latest on new products, promotions and special offers.
      </p>
    </div>
  );
}

function ButtonText6() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pb-px px-[32px] relative shrink-0" data-name="Button text">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#3d3d3c] text-[14px] text-center tracking-[1px] uppercase">newsletter sign-up</p>
    </div>
  );
}

function ButtonText7() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pb-px px-[32px] relative shrink-0" data-name="Button text">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] uppercase">Pro newsletter sign-up</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white w-[440px] whitespace-pre-wrap">Are you a professional?</p>
      <div className="content-stretch flex h-[48px] items-center justify-center relative rounded-[16px] shrink-0" data-name="Secondary button inverted">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
        <ButtonText7 />
      </div>
    </div>
  );
}

function Copy8() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0" data-name="Copy">
      <MainTitle />
      <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0" data-name="Newsletter section">
        <Subtitle />
        <div className="bg-white content-stretch flex h-[48px] items-center justify-center relative rounded-[16px] shrink-0 w-[234px]" data-name="Primary button/Inverted">
          <ButtonText6 />
        </div>
        <Frame36 />
      </div>
    </div>
  );
}

function LinkList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link list">
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="h-0 relative shrink-0 w-full" data-name="Devider top">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Heebo:Regular',sans-serif] font-normal h-[47px] justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">Robotic lawn mowers</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">Chainsaws</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">Leaf blowers</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">Riding Lawn Mowers</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">Lawn Tractors</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">Forestry Clearing Saws</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">Walk Behind Mowers</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">Pressure Washers</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">Hedge Trimmers</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">Bruschcutters</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[4px] relative shrink-0">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[28px] text-white tracking-[-0.2px]">Explore our range</p>
      <LinkList />
    </div>
  );
}

function IconsNextweb114() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Plus() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Plus">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb114 />
      </div>
    </div>
  );
}

function LinkPlus() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Link + plus">
      <div className="flex flex-col font-['Heebo:Regular',sans-serif] font-normal h-[47px] justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[0.4px] w-[296px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Payment options & Financing`}</p>
      </div>
      <Plus />
    </div>
  );
}

function IconsNextweb115() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Plus1() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Plus">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb115 />
      </div>
    </div>
  );
}

function LinkPlus1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Link + plus">
      <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-[296px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Terms & Conditions`}</p>
      </div>
      <Plus1 />
    </div>
  );
}

function IconsNextweb116() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Plus2() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Plus">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb116 />
      </div>
    </div>
  );
}

function LinkPlus2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Link + plus">
      <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-[296px]">
        <p className="leading-[24px] whitespace-pre-wrap">Husqvarna brands</p>
      </div>
      <Plus2 />
    </div>
  );
}

function IconsNextweb117() {
  return (
    <div className="absolute contents inset-0" data-name="Icons Nextweb">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.pad16980} fill="var(--fill-0, #3D3D3C)" id="Combined Shape Copy 14" />
      </svg>
    </div>
  );
}

function Plus3() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Plus">
      <div className="relative shrink-0 size-[16px]" data-name="plus">
        <IconsNextweb117 />
      </div>
    </div>
  );
}

function LinkPlus3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Link + plus">
      <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-[296px]">
        <p className="leading-[24px] whitespace-pre-wrap">External links</p>
      </div>
      <Plus3 />
    </div>
  );
}

function LinkList1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link list">
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="h-0 relative shrink-0 w-full" data-name="Devider top">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">MyHusqvarna</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">Dealer Locator</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">Contact</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="flex flex-col font-['Roboto-350:350',sans-serif] h-[47px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">{`Press & News`}</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[47px] justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[0.4px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[24px] whitespace-pre-wrap">Sustainability</p>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <LinkPlus />
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <LinkPlus1 />
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <div className="h-0 relative shrink-0 w-full" data-name="Devider top">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <LinkPlus2 />
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-[320px]" data-name="Accordion/Small/Inverted">
        <LinkPlus3 />
        <div className="h-0 relative shrink-0 w-full" data-name="Devider bottom">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
              <line id="Devider top" opacity="0.25" stroke="var(--stroke-0, white)" x2="320" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[4px] relative shrink-0">
      <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[28px] text-white tracking-[-0.2px]">Handy links</p>
      <LinkList1 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[160px] items-start relative shrink-0 w-[1400px]">
      <Copy8 />
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function InEllipse() {
  return (
    <div className="absolute contents inset-0" data-name="In Ellipse">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 56.0005 60.0001">
        <g id="Group 6">
          <g id="Group 22 Copy">
            <g id="Group 30">
              <path d={svgPaths.p30a32340} fill="var(--fill-0, white)" id="Combined Shape" />
            </g>
            <path d={svgPaths.p1ce9ce00} fill="var(--fill-0, white)" id="Path" />
          </g>
          <path d={svgPaths.p3e1a12a4} fill="var(--fill-0, white)" id="Path Copy 13" />
        </g>
      </svg>
    </div>
  );
}

function HbdIcons10() {
  return (
    <div className="absolute contents inset-0" data-name="HBD   Icons">
      <InEllipse />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-0">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 58 60">
        <g id="Group 7">
          <path d={svgPaths.p83a2600} fill="var(--fill-0, white)" id="Path Copy 6" />
          <path d={svgPaths.p2528e080} fill="var(--fill-0, white)" id="Path Copy 2" />
        </g>
      </svg>
    </div>
  );
}

function InEllipse1() {
  return (
    <div className="absolute contents inset-0" data-name="In Ellipse">
      <Group6 />
    </div>
  );
}

function HbdIcons11() {
  return (
    <div className="absolute contents inset-0" data-name="HBD   Icons">
      <InEllipse1 />
    </div>
  );
}

function InEllipse2() {
  return (
    <div className="absolute contents inset-0" data-name="In Ellipse">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 56.0005 60.0001">
        <g id="Group 5">
          <g id="Group 29">
            <path d={svgPaths.p2fd3b580} fill="var(--fill-0, white)" id="Combined Shape Copy 3" />
          </g>
          <path d={svgPaths.p3e1a12a4} fill="var(--fill-0, white)" id="Path Copy 14" />
        </g>
      </svg>
    </div>
  );
}

function HbdIcons12() {
  return (
    <div className="absolute contents inset-0" data-name="HBD   Icons">
      <InEllipse2 />
    </div>
  );
}

function InEllipse3() {
  return (
    <div className="absolute contents inset-0" data-name="In Ellipse">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 56.0005 60.0001">
        <g id="Group 4">
          <path d={svgPaths.p3fb29600} fill="var(--fill-0, white)" id="Path Copy 4" />
          <path d={svgPaths.p17d60200} fill="var(--fill-0, white)" id="Combined Shape" />
          <path d={svgPaths.pd6e9700} fill="var(--fill-0, white)" id="Path Copy 15" />
        </g>
      </svg>
    </div>
  );
}

function HbdIcons13() {
  return (
    <div className="absolute contents inset-0" data-name="HBD   Icons">
      <InEllipse3 />
    </div>
  );
}

function InEllipse4() {
  return (
    <div className="absolute contents inset-0" data-name="In Ellipse">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 56.0005 60.0001">
        <g id="Group 3">
          <g id="Group 27">
            <path d={svgPaths.p2dc54d00} fill="var(--fill-0, white)" id="Path Copy 10" />
          </g>
          <path d={svgPaths.p3e1a12a4} fill="var(--fill-0, white)" id="Path Copy 16" />
        </g>
      </svg>
    </div>
  );
}

function HbdIcons14() {
  return (
    <div className="absolute contents inset-0" data-name="HBD   Icons">
      <InEllipse4 />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Social media">
      <div className="h-[60px] overflow-clip relative shrink-0 w-[56px]" data-name="ellipse-instagram">
        <HbdIcons10 />
      </div>
      <div className="h-[60px] overflow-clip relative shrink-0 w-[58px]" data-name="ellipse-facebook">
        <HbdIcons11 />
      </div>
      <div className="h-[60px] overflow-clip relative shrink-0 w-[56px]" data-name="ellipse-youtube">
        <HbdIcons12 />
      </div>
      <div className="h-[60px] overflow-clip relative shrink-0 w-[56px]" data-name="ellipse-pinterest">
        <HbdIcons13 />
      </div>
      <div className="h-[60px] overflow-clip relative shrink-0 w-[56px]" data-name="ellipse-twitter">
        <HbdIcons14 />
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[16px] items-start leading-[20px] relative shrink-0 text-[14px] underline" data-name="Links">
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Sitemap
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Privacy policy
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Cookie Policy
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Do Not Sell My Personal Information (CA Residents)
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Shipping conditions
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Return policy
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0">
      <SocialMedia />
      <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-[350] gap-[12px] items-start relative shrink-0 text-white tracking-[0.4px]" data-name="Legal section">
        <p className="leading-[24px] relative shrink-0 text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Copyright – 2023 Husqvarna AB. All rights reserved. `}</p>
        <Links />
      </div>
    </div>
  );
}

function ColorsHqWhite1() {
  return (
    <div className="absolute inset-[10.87%_3.1%_6.52%_5.17%]" data-name="Colors/HQ-White">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 146.759 105.904">
        <g id="Colors/HQ-White">
          <path clipRule="evenodd" d={svgPaths.p1fdaaf00} fill="var(--fill-0, white)" fillRule="evenodd" id="Mask" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame40 />
      <div className="h-[128.2px] relative shrink-0 w-[160px]" data-name="Logotype/Standing">
        <ColorsHqWhite1 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0">
      <Frame32 />
      <Frame39 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#1f2742] col-1 content-stretch flex flex-col items-start ml-0 mt-0 px-[140px] py-[132px] relative row-1">
      <Frame35 />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame34 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame53 />
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f4f4f3] from-[68.935%] gap-[32px] items-center overflow-clip py-[60px] relative shrink-0 to-[108.51%] to-white w-[1680px]" data-name="X-large/Cross sell/Grey bg">
        <div className="content-stretch flex gap-[16px] items-end px-[140px] relative shrink-0 w-[1680px]" data-name="List title">
          <Frame33 />
          <div className="content-stretch flex gap-[12px] h-[16px] items-center justify-end pb-[8px] relative rounded-[5px] shrink-0" data-name="Icon text link/Body 2">
            <div className="relative shrink-0 size-[12px]" data-name="expand">
              <IconsNextweb53 />
            </div>
            <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#3d3d3c] text-[16px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline">Expand</p>
            </div>
          </div>
        </div>
        <Tabs />
        <List2 />
        <div className="content-stretch flex gap-[8px] items-start pt-[16px] px-[140px] relative shrink-0 w-[1680px]" data-name="Segmented scroller">
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 1" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 1" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 1" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 1" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.667 1.5">
                <line id="Line 1" stroke="var(--stroke-0, #3D3D3C)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="125.917" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168 1.5">
                <line id="Line 6" stroke="var(--stroke-0, #D2D2D1)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="167.25" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168 1.5">
                <line id="Line 6" stroke="var(--stroke-0, #D2D2D1)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="167.25" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168 1.5">
                <line id="Line 6" stroke="var(--stroke-0, #D2D2D1)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="167.25" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-[140px] py-[60px] relative shrink-0" data-name="X-large/Content link list/White bg">
        <p className="font-['Husqvarna_Gothic:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#3d3d3c] text-[28px] tracking-[-0.2px]">Read more</p>
        <Row />
        <Row1 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start pt-[60px] relative shrink-0" data-name="Footer">
        <Group7 />
      </div>
    </div>
  );
}

export function SpecificationTableScrollableMobile() {
  const products = [
    { name: `540 XP® Mark III (13" - .325" - SP33G)`,    article: "970 79 30\u201114" },
    { name: `540 XP® Mark III (15" - 3/8" mini - S93D)`, article: "970 79 30\u201113" },
    { name: `540 XP® Mark III (16" - 3/8" mini - S93T)`, article: "970 79 30\u201116" },
    { name: `540 XP® Mark III (14" - 3/8" mini - S95G)`, article: "970 79 30\u201118" },
  ];

  const specs: Array<{ section?: string; label?: string; values?: string[] }> = [
    { section: "Motor" },
    { label: "Kedjehastighet vid max effekt",             values: ["20,2 m/s",   "20 m/s",    "20,3 m/s",  "20 m/s"]    },
    { label: "Cylindervolym",                             values: ["39,1 cm³",   "39,2 cm³",  "40,1 cm³",  "39,1 cm³"]  },
    { label: "Axeleffekt",                                values: ["1,9 kW",     "2,0 kW",    "1,9 kW",    "1,9 kW"]    },
    { section: "Utrustning" },
    { label: "Minsta svärdslängd",                        values: ["33 cm",      "30 cm",     "33 cm",     "30 cm"]     },
    { label: "Kedjedelning",                              values: [`.325"`,      `3/8" mini`, `.325"`,     `3/8" mini`] },
    { label: "Rekommenderad svärdslängd, max",            values: ["38 cm",      "40 cm",     "38 cm",     "40 cm"]     },
    { label: "Typ av kedja",                              values: ["SP33G",      "S93G",      "SP33G",     "SP33G"]     },
    { label: "Svärdlängde",                               values: ["33 cm",      "35 cm",     "33 cm",     "35 cm"]     },
    { section: "Ljud och buller" },
    { label: "Ljudtrycksnivå vid användarens öra, dB(A)", values: ["102 dB(A)",  "102 dB(A)", "103 dB(A)", "102 dB(A)"] },
    { label: "Ljudeffektnivå, garanterad LWA i dB(A)",   values: ["113 dB(A)",  "110 dB(A)", "113 dB(A)", "114 dB(A)"] },
    { section: "Vibrationer" },
    { label: "Ekvivalent vibrationsnivå bakre handtag",   values: ["5,2 m/s²",  "5,1 m/s²",  "5,2 m/s²",  "5,2 m/s²"] },
    { label: "Ekvivalent vibrationsnivå främre handtag",  values: ["5,9 m/s²",  "3,7 m/s²",  "5,9 m/s²",  "3,7 m/s²"] },
    { section: "Dimensioner" },
    { label: "Vikt (exkl. skärutrustning)",               values: ["4,1 kg",    "4,0 kg",    "4,1 kg",    "4,0 kg"]   },
  ];

  const hdrBg    = "#f4f4f3";
  const bodyBg   = "#ffffff";
  const text     = "#3d3d3c";
  const fontHd   = "'Husqvarna Gothic:Bold', sans-serif";
  const fontBody = "'Roboto:Regular', sans-serif";
  const bdrData  = "0.5px solid #d2d2d1";
  const bdrSec   = "1px solid #eeeeed";

  // Mobile dimensions: label 120px + 2.32 data cols × 110px = 375px visible
  const colWidth   = 110;
  const labelWidth = 120;
  const tableMinWidth = labelWidth + colWidth * 4 + 20;

  const wrapperRef  = useRef<HTMLDivElement>(null);
  const stickyRef   = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const syncing            = useRef(false);
  const programmaticScroll = useRef(false);
  const [sticky, setSticky] = useState(false);
  const [stickyLeft, setStickyLeft] = useState(0);
  const [containerWidth, setContainerWidth] = useState(295);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        setStickyLeft(rect.left);
        setContainerWidth(rect.width);
      }
    };
    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, { passive: true });
    return () => { window.removeEventListener('resize', update); window.removeEventListener('scroll', update); };
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0); },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const stickyEl = stickyRef.current;
    if (!wrapper || !stickyEl) return;
    stickyEl.scrollLeft = wrapper.scrollLeft;
    const onWrapperScroll = () => {
      if (syncing.current) return;
      syncing.current = true; stickyEl.scrollLeft = wrapper.scrollLeft; syncing.current = false;
    };
    const onStickyScroll = () => {
      if (syncing.current || programmaticScroll.current) return;
      syncing.current = true; wrapper.scrollLeft = stickyEl.scrollLeft; syncing.current = false;
    };
    const onScrollEnd = () => { programmaticScroll.current = false; };
    wrapper.addEventListener('scroll', onWrapperScroll);
    stickyEl.addEventListener('scroll', onStickyScroll);
    wrapper.addEventListener('scrollend', onScrollEnd);
    return () => {
      wrapper.removeEventListener('scroll', onWrapperScroll);
      stickyEl.removeEventListener('scroll', onStickyScroll);
      wrapper.removeEventListener('scrollend', onScrollEnd);
    };
  }, [sticky]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const update = () => {
      setCanScrollLeft(wrapper.scrollLeft > 0);
      setCanScrollRight(wrapper.scrollLeft < wrapper.scrollWidth - wrapper.clientWidth - 1);
      if (wrapper.scrollLeft > 0) setHasScrolled(true);
    };
    update();
    wrapper.addEventListener('scroll', update, { passive: true });
    return () => wrapper.removeEventListener('scroll', update);
  }, []);

  const scrollToCol = (direction: 'left' | 'right') => {
    const el = wrapperRef.current ?? stickyRef.current;
    if (!el) return;
    const current = el.scrollLeft;
    const target = direction === 'right'
      ? Math.ceil((current + 1) / colWidth) * colWidth
      : Math.floor((current - 1) / colWidth) * colWidth;
    programmaticScroll.current = true;
    wrapperRef.current?.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  };

  const headerRow = (
    <tr>
      <th style={{
        position: "sticky", left: 0, zIndex: 3,
        background: hdrBg, minWidth: labelWidth, width: labelWidth,
        padding: "14px 8px 10px 12px", textAlign: "left", borderBottom: bdrSec,
      }} />
      {products.map((p, i) => (
        <th key={i} style={{
          position: "relative", zIndex: 1,
          background: hdrBg, minWidth: colWidth,
          padding: "14px 8px 10px", textAlign: "left", verticalAlign: "top",
          borderBottom: bdrSec, overflow: "hidden",
        }}>
          <p style={{ fontFamily: fontHd, fontSize: 14, lineHeight: "18px", color: text, margin: "0 0 2px 0" }}>
            {p.name}
          </p>
          <p style={{ fontFamily: fontBody, fontSize: 12, lineHeight: "16px", letterSpacing: "0.3px", color: text, margin: 0, fontWeight: 350 }}>
            Art.nr: {p.article}
          </p>
        </th>
      ))}
    </tr>
  );

  const gradientOverlay = !hasScrolled && canScrollRight && (
    <div style={{
      position: "absolute", top: 0, right: 0, bottom: 0, width: 80,
      background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%)",
      pointerEvents: "none", zIndex: 4,
    }} />
  );

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div ref={sentinelRef} style={{ height: 0 }} />

      {/* Fixed clone header */}
      {sticky && (
        <div style={{ position: "fixed", top: 0, left: stickyLeft, width: containerWidth, zIndex: 50 }}>
          <div ref={stickyRef} style={{ overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none", background: hdrBg, borderBottom: bdrSec }}>
            <table style={{ borderCollapse: "collapse", minWidth: tableMinWidth, width: "100%" }}>
              <thead>{headerRow}</thead>
            </table>
          </div>
          {gradientOverlay}
          {canScrollRight && (
            <button onClick={() => scrollToCol('right')} style={{ position: "absolute", right: -42, top: 10, width: 96, height: 96, background: "none", border: "none", cursor: "pointer", padding: 0, zIndex: 10 }}>
              <ArrowIcon filterId="arr-m-sticky-r" />
            </button>
          )}
          {canScrollLeft && (
            <button onClick={() => scrollToCol('left')} style={{ position: "absolute", left: 12, top: 10, width: 96, height: 96, background: "none", border: "none", cursor: "pointer", padding: 0, zIndex: 10 }}>
              <ArrowIcon filterId="arr-m-sticky-l" mirrored />
            </button>
          )}
        </div>
      )}

      {gradientOverlay}

      {canScrollRight && (
        <button onClick={() => scrollToCol('right')} style={{ position: "absolute", right: -42, top: 10, width: 96, height: 96, background: "none", border: "none", cursor: "pointer", padding: 0, zIndex: 10 }}>
          <ArrowIcon filterId="arr-m-r" />
        </button>
      )}
      {canScrollLeft && (
        <button onClick={() => scrollToCol('left')} style={{ position: "absolute", left: 12, top: 10, width: 96, height: 96, background: "none", border: "none", cursor: "pointer", padding: 0, zIndex: 10 }}>
          <ArrowIcon filterId="arr-m-l" mirrored />
        </button>
      )}

      {/* Main scroll wrapper */}
      <div ref={wrapperRef} style={{
        width: "100%", overflowX: "auto", overflowY: "clip",
        borderRadius: "20px 0 0 20px",
        border: "1px solid #eeeeed", borderRight: "none",
        scrollbarWidth: "thin", scrollbarColor: "#d2d2d1 transparent",
      }}>
        <table style={{ borderCollapse: "collapse", minWidth: tableMinWidth, width: "100%" }}>
          <thead>{headerRow}</thead>
          <tbody>
            {specs.map((row, i) =>
              row.section ? (
                <tr key={i}>
                  <td style={{ position: "sticky", left: 0, zIndex: 1, background: bodyBg, fontFamily: fontHd, fontSize: 15, lineHeight: "20px", color: text, padding: "10px 12px", borderBottom: bdrSec }}>
                    {row.section}
                  </td>
                  {products.map((_, j) => <td key={j} style={{ background: bodyBg, borderBottom: bdrSec }} />)}
                </tr>
              ) : (
                <tr key={i}>
                  <td style={{ position: "sticky", left: 0, zIndex: 1, background: bodyBg, fontFamily: fontBody, fontSize: 16, lineHeight: "20px", letterSpacing: "0.3px", color: text, padding: "8px 12px", fontWeight: 350, minWidth: labelWidth, borderBottom: bdrData }}>
                    {row.label}
                  </td>
                  {(row.values ?? []).map((v, j) => (
                    <td key={j} style={{ fontFamily: fontBody, fontSize: 14, lineHeight: "18px", letterSpacing: "0.3px", color: text, padding: "8px", fontWeight: 350, minWidth: colWidth, borderBottom: bdrData }}>
                      {v}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function SpecificationsAccordion() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Specifications accordion">
      <div className="h-[162px] relative shrink-0 w-[1680px]" data-name="Navbar E-com">
        <div className="absolute bg-white inset-[24.69%_0_0_0]" data-name="Navbar Standard">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[80px] left-[calc(50%-0.08px)] top-[calc(50%-1px)] w-[99.844px]" data-name="Logotype/Standing">
            <ColorsHqWhite />
          </div>
          <Icons />
          <MenuLinks />
          <div className="absolute bg-[#f4f4f3] h-[2px] left-0 right-0 top-[120px]" />
        </div>
        <Frame15 />
      </div>
      <Frame52 />
    </div>
  );
}