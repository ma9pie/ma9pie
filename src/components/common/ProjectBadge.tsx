import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  children?: ReactNode;
}

const ProjectBadge = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ProjectBadge;

const Wrapper = styled.div`
  ${tw`flex items-center px-2 w-fit h-8 rounded-lg text-neutral-500 bg-neutral-200 font-medium`};
`;
