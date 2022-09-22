import { kebabCase } from 'lodash';

export const getIconMap = (): Map<string, string> => {
  const icons = require.context('@/assets/icons', true, /\.svg$/);

  const IconMap = new Map<string, string>();

  icons.keys().forEach((path: string): void => {
    const pathBase = kebabCase(path.slice(2, -4));
    const { url } = icons(path).default;

    IconMap.set(pathBase, url);
  });

  return IconMap;
};

export default getIconMap;
