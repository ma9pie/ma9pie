import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  row?: number;
  col?: number;
  gap?: number;
  children?: ReactNode;
}

const Grid = ({ row, col, gap, children }: Props) => {
  return (
    <Wrapper
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
