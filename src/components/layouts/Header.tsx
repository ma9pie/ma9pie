import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import tw, { styled } from 'twin.macro';

const MENU_LIST = [
  {
    label: 'Resume',
    url: '/',
  },
  {
    label: 'Portfolio',
    url: '/portfolio',
  },
];

const Header = () => {
  const router = useRouter();

  return (
    <Wrapper>
      {MENU_LIST.map(({ label, url }) => (
        <Menu key={label} href={url} active={url === router.pathname}>
          {label}
        </Menu>
      ))}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  ${tw`fixed top-0 flex justify-center items-center gap-8 w-full h-16 backdrop-blur-sm`};
  ${tw`mobile:px-4`};
  ${tw`desktop:px-6`};
`;
const Menu = styled(Link)<{ active: boolean }>`
  ${tw`font-semibold`};
  ${(props) => (props.active ? tw`text-neutral-900` : tw`text-neutral-300`)};
`;
