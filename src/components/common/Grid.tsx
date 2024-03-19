import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;
  row?: number;
  col?: number;
  gap?: number;
  children?: ReactNode;
}

const Grid = ({ className, row, col, gap, children }: Props) => {
  return (
    <Wrapper
      className={className}
      style={{
        gridTemplateRows: `repeat(${row}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`,
        gap: gap,
      }}
    >
      {children}
    </Wrapper>
  );
};

export default Grid;

const Wrapper = styled.div`
  ${tw`grid`};
`;
