import { MainNav } from '@/components/main-nav';
import { Search } from '@/components/search';
import { TeamSwitcher } from '@/components/team-switcher';
import { Toaster } from '@/components/ui/toaster';
import { UserNav } from '@/components/user-nav';
import Image from 'next/image';

interface ContainerLayoutProps {
  children: React.ReactNode;
}

export default function ContainerLayout({ children }: ContainerLayoutProps) {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
      </div>
      <Toaster />
    </>
  );
}
