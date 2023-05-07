import { useEffect } from 'react';

/**
 * Debug tool: logs current value with optional title.
 * @param value the value to log.
 * @param title an optional label for this spy instance.
 */
const useSpy = (value: any, title?: string): void => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`spy${title !== undefined ? ` ${title}` : ''}`, value);
  }, [value, title]);
};

export default useSpy;
