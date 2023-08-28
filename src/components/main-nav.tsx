import { cn } from '@/lib/utils';
import { NavLink } from './nav-link';

export function MainNav({
  className: classNameProp,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const className =
    'text-sm font-medium text-muted-foreground transition-colors hover:text-primary';
  const activeClassName =
    'text-sm font-medium transition-colors hover:text-primary';
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', classNameProp)}
      {...props}
    >
      <NavLink
        href="/dashboard"
        className={className}
        activeClassName={activeClassName}
      >
        Overview
      </NavLink>
      <NavLink
        href="/customers"
        className={className}
        activeClassName={activeClassName}
      >
        Customers
      </NavLink>
      <NavLink
        href="/products"
        className={className}
        activeClassName={activeClassName}
      >
        Products
      </NavLink>
      <NavLink
        href="/settings"
        className={className}
        activeClassName={activeClassName}
      >
        Settings
      </NavLink>
    </nav>
  );
}
