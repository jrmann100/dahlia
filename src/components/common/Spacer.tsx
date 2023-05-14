import { type FC, type CSSProperties } from 'react';

const Spacer: FC<{
  style?: CSSProperties;
  basis?: string | number;
}> = ({ style, basis }) => (
  <div
    style={{
      flexGrow: basis !== undefined ? 0 : 1,
      flexShrink: 0,
      flexBasis: basis,
      ...style,
    }}
  />
);
export default Spacer;
