import ButtonComponent from '.';

const ButtonStory = {
  title: 'Atoms/ButtonComponent',
  component: ButtonComponent,
};

export const PrimaryButtonActive = () => (
  <ButtonComponent title="Priamry Button" />
);
export const PrimaryButtonDisabled = () => (
  <ButtonComponent title="Disabled Button" disabled={true} />
);

export const ContainedButton = () => (
  <ButtonComponent variant="contained" title="Contained Button" />
);

export default ButtonStory;
