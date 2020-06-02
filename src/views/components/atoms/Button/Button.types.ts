export interface IComponentNameStyleProps {
    theme: ITheme;
    className?: string;
    disabled: boolean;
    checked: boolean;
  }

  export IComponentNameProps extends React.Props<ComponentNameBase> {
    componentRef?: (componentRef: IComponentName) => void;
    theme?: ITheme;
    styles?: IStyleFunctionOrObject<IComponentNameStyleProps, IComponentNameStyles>;
  }