import React from 'react';
import tw, { styled } from 'twin.macro';

import useTailwindColor from '@/hooks/useTailwindColor';

interface Props {
  [key: string]: any;
  className?: string;

  size?: number;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  _2xl?: boolean;
  _3xl?: boolean;
  _4xl?: boolean;
  _5xl?: boolean;
  _6xl?: boolean;
  _7xl?: boolean;
  _8xl?: boolean;
  _9xl?: boolean;

  medium?: boolean;
  semibold?: boolean;
  bold?: boolean;
  extrabold?: boolean;

  black?: boolean;
  white?: boolean;

  flex?: number;
  inline?: boolean;
  nowrap?: boolean;
  underline?: boolean;
  breakAll?: boolean;
  pointer?: boolean;
  hidden?: boolean;

  left?: boolean;
  right?: boolean;
  center?: boolean;

  children?: string;
}

const Text = ({
  className,

  size,
  xs,
  sm,
  md,
  lg,
  xl,
  _2xl,
  _3xl,
  _4xl,
  _5xl,
  _6xl,
  _7xl,
  _8xl,
  _9xl,

  medium,
  semibold,
  bold,
  extrabold,

  black,
  white,

  flex,
  inline,
  nowrap,
  underline,
  breakAll,
  pointer,
  hidden,

  left,
  right,
  center,

  children,
  ...props
}: Props) => {
  const color = useTailwindColor(props);

  return (
    <P
      className={className}
      size={size}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      _2xl={_2xl}
      _3xl={_3xl}
      _4xl={_4xl}
      _5xl={_5xl}
      _6xl={_6xl}
      _7xl={_7xl}
      _8xl={_8xl}
      _9xl={_9xl}
      medium={medium}
      semibold={semibold}
      bold={bold}
      extrabold={extrabold}
      black={black}
      white={white}
      inline={inline}
      nowrap={nowrap}
      underline={underline}
      breakAll={breakAll}
      pointer={pointer}
      hidden={hidden}
      left={left}
      right={right}
      center={center}
      style={{ color: color }}
    >
      {children}
    </P>
  );
};

Text.T1 = styled(Text)`
  ${tw`font-semibold`};
  ${tw`mobile:text-3xl`};
  ${tw`desktop:text-5xl`};
`;
Text.T2 = styled(Text)`
  ${tw`font-semibold`};
  ${tw`mobile:text-xl`};
  ${tw`desktop:text-3xl`};
`;
Text.T3 = styled(Text)`
  ${tw`font-semibold`};
  ${tw`mobile:text-lg`};
  ${tw`desktop:text-2xl`};
`;
Text.T4 = styled(Text)`
  ${tw`font-medium`};
  ${tw`mobile:text-base`};
  ${tw`desktop:text-xl`};
`;
Text.P = styled(Text)`
  ${tw`mb-2`};
  ${tw`mobile:text-base`};
  ${tw`desktop:text-lg`};
`;
Text.Link = styled.a<{ lineThrough?: boolean }>`
  ${tw`text-neutral-400 underline underline-offset-[6px] decoration-neutral-200`};
  ${({ lineThrough }) =>
    lineThrough
      ? tw`text-neutral-900 decoration-neutral-900 line-through pointer-events-none`
      : tw`text-neutral-400 decoration-neutral-300`};
`;

export default Text;

const P = styled.p<Props>`
  font-size: ${(props) => `${props.size}px`};
  ${(props) => props.xs && tw`text-xs`};
  ${(props) => props.sm && tw`text-sm`};
  ${(props) => props.md && tw`text-base`};
  ${(props) => props.lg && tw`text-lg`};
  ${(props) => props.xl && tw`text-xl`};
  ${(props) => props._2xl && tw`text-2xl`};
  ${(props) => props._3xl && tw`text-3xl`};
  ${(props) => props._4xl && tw`text-4xl`};
  ${(props) => props._5xl && tw`text-5xl`};
  ${(props) => props._6xl && tw`text-6xl`};
  ${(props) => props._7xl && tw`text-7xl`};
  ${(props) => props._8xl && tw`text-8xl`};
  ${(props) => props._9xl && tw`text-9xl`};

  ${(props) => props.medium && tw`font-medium`};
  ${(props) => props.semibold && tw`font-semibold`};
  ${(props) => props.bold && tw`font-bold`};
  ${(props) => props.extrabold && tw`font-extrabold`};

  ${(props) => props.black && tw`text-black`};
  ${(props) => props.white && tw`text-white`};

  ${(props) => props.inline && tw`inline`};
  ${(props) => props.nowrap && tw`whitespace-nowrap`};
  ${(props) => props.underline && tw`underline`};
  ${(props) => props.breakAll && tw`break-all`};
  ${(props) => props.pointer && tw`cursor-pointer`};
  ${(props) => props.hidden && tw`hidden`};

  ${(props) => props.left && tw`text-left`};
  ${(props) => props.right && tw`text-right`};
  ${(props) => props.center && tw`text-center`};
`;
