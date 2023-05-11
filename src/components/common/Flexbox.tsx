import { type FC, type CSSProperties, type PropsWithChildren } from 'react';

const Flexbox: FC<
  PropsWithChildren<{
    style?: CSSProperties;
    centering?: boolean;
    vertical?: boolean;
  }>
> = ({ children, centering, vertical, style }) => (
  <div
    style={{
      display: 'flex',
      alignItems: centering === true ? 'center' : undefined,
      justifyContent: centering === true ? 'center' : undefined,
      flexDirection: vertical === true ? 'column' : undefined,
      ...style,
    }}
  >
    {children}
  </div>
);
export default Flexbox;
