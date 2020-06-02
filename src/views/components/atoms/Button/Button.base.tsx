import { IComponentNameProps } from './ComponentName.props';
  
  const getClassNames = classNameFunction<IComponentNameStyleProps, IComponentNameStyles>();
  
  /**
   * ComponentName with no default styles.
   * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Styling)
   */
  export class ComponentName extends React.Component<...> {
    public render() {
      const {
        className,
        styles,
        theme,
      } = this.props;
      const classNames = getClassNames(styles, {
        theme: theme!,
        className,
        // Other props from IComponentNameStyleProps
      });
  
      return (
        <div className={ classNames.root }>Hello</div>;
      );
    }
  }