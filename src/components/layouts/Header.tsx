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
        <Link key={label} href={url}>
          <Menu active={url === router.pathname}>{label}</Menu>
        </Link>
      ))}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  ${tw`fixed top-0 flex justify-center items-center w-full backdrop-blur-md shadow-xl`};
  ${tw`mobile:(h-12 px-4)`};
  ${tw`desktop:(h-16 px-6)`};
`;
const Menu = styled.div<{ active: boolean }>`
  ${tw`font-bold p-4 transition-colors duration-200`};
  ${(props) =>
    props.active
      ? tw`text-black`
      : tw`text-neutral-400 hover:text-neutral-600`};
`;
