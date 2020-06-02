import { styled } from '../../Utilities';
import {
  IComponentNameProps,
  IComponentNameStyleProps,
  IComponentNameStyles
} from './ComponentName.types';
import { ComponentNameBase } from './ComponentName.base';
import { styles } from './ComponentName.styles';

/**
* ComponentName description. Could be a variant of any other component's base.
*/
export const ComponentName = styled<IComponentNameProps, IComponentNameStyleProps,
                                    IComponentNameStyles>(
  ComponentNameBase,
  styles
);