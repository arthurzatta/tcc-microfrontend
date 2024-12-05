import { BrowserHistory, Update } from "history";
import { mount } from "mfe-auth/Auth";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Auth = ({
  history,
  basename,
}: {
  history: BrowserHistory;
  basename: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ location: { pathname: nextPathname } }: Update) => {
        const { pathname } = location;
        if (pathname !== nextPathname) history.push(nextPathname);
      },
      initialPath: location.pathname,
      basename,
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} id="mfe-auth" />;
};

export default Auth;
