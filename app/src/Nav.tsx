import { useClassList } from '@willikers/dom/class-list';
import { NavLink, useLocation } from 'react-router-dom';

const paths = [
  {
    title: 'State',
    paths: [{ href: '/hook/state/root-state', title: 'Root State' }],
  },
  {
    title: 'RxJS',
    paths: [
      { href: '/hook/rxjs/debounce-time', title: 'Debounce Time' },
      { href: '/hook/rxjs/throttle-time', title: 'Throttle Time' },
      { href: '/hook/rxjs/audit-time', title: 'Audit Time' },
    ],
  },
  {
    title: 'DOM',
    paths: [
      { href: '/hook/dom/class-list', title: 'Class List' },
      { href: '/hook/dom/select-node', title: 'Select Node' },
      { href: '/hook/dom/select-nodes', title: 'Select Nodes' },
    ],
  },
  {
    title: 'Storage',
    paths: [
      { href: '/hook/storage/cookies', title: 'Cookies' },
      { href: '/hook/storage/local-storage', title: 'Local Storage' },
      { href: '/hook/storage/session-storage', title: 'Session Storage' },
    ],
  },
  {
    title: 'URL',
    paths: [
      { href: '/hook/url/path', title: 'Pathname' },
      { href: '/hook/url/hash', title: 'Hash' },
      { href: '/hook/url/history', title: 'History' },
      { href: '/hook/url/search-params', title: 'Search Params' },
    ],
  },
  {
    title: 'Form Validation',
    paths: [
      { href: '/hook/forms/form-group', title: 'Form Group' },
      { href: '/hook/forms/form-control', title: 'Form Control' },
      { href: '/hook/forms/form-validators', title: 'Form Validators' },
    ],
  },
]
  // Sort paths by title
  .sort((a, b) => a.title.localeCompare(b.title))
  // Sort sub-paths by title
  .map(({ title, paths }) => ({ title, paths: paths.sort((a, b) => a.title.localeCompare(b.title)) }));

export interface NavItemProps {
  href: string;
  children: React.ReactNode;
  selected?: boolean;
}

export const NavItem = ({ href, children, selected }: NavItemProps) => {
  const classes = useClassList(
    {
      'block py-1 hover:text-slate-300': true,
      'bg-blue-600 text-white rounded-md px-2 hover:text-blue-300': selected,
    },
    [selected],
  );

  return (
    <li>
      <NavLink to={href} className={classes}>
        {children}
      </NavLink>
    </li>
  );
};

export const NavBlock = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className="flex flex-col">
      <div className="py-1 text-xl font-bold text-blue-500">{title}</div>
      <div className="">
        <ul className="m-0 list-none pl-5">{children}</ul>
      </div>
    </div>
  );
};

export const Nav = () => {
  const location = useLocation();

  // useEffect(() => {
  //   window.scrollTo({ behavior: 'smooth', top: 0 });
  // }, [location.pathname]);

  const isSelected = (href: string) => location.pathname === href && { selected: true };

  return (
    <nav className="flex-shrink-0 basis-[300px] px-4 shadow-md">
      <ul className="sticky top-0 ml-0 max-h-[100vh] list-none overflow-y-auto">
        <NavItem href="/" {...isSelected('/')}>
          Home
        </NavItem>

        {paths.map(({ title, paths }) => (
          <NavBlock key={title} title={title}>
            {paths.map(({ href, title }) => (
              <NavItem key={href} href={href} {...isSelected(href)}>
                {title}
              </NavItem>
            ))}
          </NavBlock>
        ))}
      </ul>
    </nav>
  );
};
