import { type FC, type CSSProperties } from 'react';

const Spacer: FC<{ style?: CSSProperties; basis: string | number }> = ({
  style,
  basis,
}) => <div style={{ flex: 1, flexBasis: basis, ...style }} />;
export default Spacer;
