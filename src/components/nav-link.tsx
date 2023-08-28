'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  children?: React.ReactNode;
}

export function NavLink({
  className = '',
  activeClassName,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return <Link className={isActive ? activeClassName : className} {...props} />;
}
