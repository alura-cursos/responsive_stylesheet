import BaseComponent from "@src/theme/BaseComponent/BaseComponent";
import StyleSheet from "@src/theme/StyleSheet";

interface BoxProps {
  tag?: 'div' | 'section' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
export default function Box({ tag, children, ...props }: BoxProps) {
  return (
    <BaseComponent as={tag} {...props}>
      {children}
    </BaseComponent>
  )
}

Box.defaultProps = {
  tag: 'div',
}
