import { type PropsWithChildren, type FC, type CSSProperties } from 'react';

const Spacer: FC<
  PropsWithChildren<{ style?: CSSProperties; basis: string | number }>
> = ({ children, style, basis, ...props }) => (
  <div style={{ flex: 1, flexBasis: basis, ...style }} {...props} />
);
export default Spacer;
