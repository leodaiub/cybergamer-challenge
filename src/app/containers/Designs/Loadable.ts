/**
 *
 * Asynchronously loads the component for Designs
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Designs = lazyLoad(
  () => import('./index'),
  module => module.Designs,
);
