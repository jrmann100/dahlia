import { type PropsWithChildren, type FC, useEffect } from 'react';
import { AppContext } from 'util/context';
import { usePouch } from 'util/pouch';

const Page: FC<PropsWithChildren<{ title?: string }>> = ({
  title,
  children,
}) => {
  const [, setTitle] = usePouch(AppContext, 'pageTitle');
  useEffect(() => {
    if (title !== undefined) {
      setTitle(title);
    }
  }, [setTitle, title]);
  return <>{children}</>;
};
export default Page;
