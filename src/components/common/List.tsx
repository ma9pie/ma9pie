import tw, { styled } from 'twin.macro';

export const Ul = styled.ul`
  ${tw`list-disc`};
  ul {
    ${tw`list-[circle] mt-2`};
  }
`;
export const Li = styled.li`
  ${tw`ml-7 mb-1`};
  ${tw`mobile:text-base`};
  ${tw`desktop:text-lg`};
`;
