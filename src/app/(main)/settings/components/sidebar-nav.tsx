import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { NavLink } from '@/components/nav-link';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  return (
    <nav
      className={cn(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'hover:bg-transparent hover:underline justify-start'
          )}
          activeClassName={cn(
            buttonVariants({ variant: 'ghost' }),
            'bg-muted hover:bg-muted justify-start'
          )}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}
