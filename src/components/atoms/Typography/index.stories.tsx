import TypographyComponent from '.';

const TypographyComponentStory = {
  title: 'Atoms/TypographyComponentStroy',
  component: TypographyComponent,
};

export const Header = () => (
  <TypographyComponent variant="heading" component="div">
    Header
  </TypographyComponent>
);
export const Title = () => (
  <TypographyComponent variant="subtitle1" component="div">
    Title
  </TypographyComponent>
);
export const Subtitle = () => (
  <TypographyComponent variant="subtitle2" component="div">
    Subtitle
  </TypographyComponent>
);
export const Body = () => (
  <TypographyComponent variant="body1" component="div">
    Body
  </TypographyComponent>
);
export const Caption = () => (
  <TypographyComponent variant="caption" component="div">
    Caption
  </TypographyComponent>
);

export default TypographyComponentStory;
