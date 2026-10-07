import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RouterContextType {
  path: string;
  navigate: (to: string) => void;
  searchParams: URLSearchParams;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
  searchParams: new URLSearchParams(),
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [path, setPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [searchParams, setSearchParams] = useState<URLSearchParams>(() => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search);
    }
    return new URLSearchParams();
  });

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || '/');
      setSearchParams(new URLSearchParams(window.location.search));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (to.startsWith('http') || to.startsWith('mailto:')) {
      window.location.href = to;
      return;
    }

    const [pathname, search] = to.split('?');
    const normalizedPath = pathname || '/';
    
    if (window.location.pathname !== normalizedPath || window.location.search !== (search ? `?${search}` : '')) {
      window.history.pushState({}, '', to);
      setPath(normalizedPath);
      setSearchParams(new URLSearchParams(search || ''));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  };

  return (
    <RouterContext.Provider value={{ path, navigate, searchParams }}>
      {children}
    </RouterContext.Provider>
  );
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, onClick, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    // Allow default browser action for middle-click, cmd/ctrl-click
    if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
};
