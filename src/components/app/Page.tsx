import { type PropsWithChildren, type FC } from 'react';
import { useTitle } from 'util/context';

const Page: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  useTitle(title);
  return <>{children}</>;
};
export default Page;
