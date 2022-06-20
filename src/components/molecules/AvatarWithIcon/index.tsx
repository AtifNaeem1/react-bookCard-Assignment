import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import CustomAvatar from '../../atoms/avatars/index';

interface PropsAvatarWithIcon {
  logClick: boolean;
  handleLogin: any;
}

const Index = (props: PropsAvatarWithIcon) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '62px',
        height: '40px',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
      data-testid="avatarlogin"
    >
      <CustomAvatar children="A" />

      {props.logClick ? (
        <KeyboardArrowDownIcon
          sx={{ color: '#042330', width: '11px', height: '7px' }}
        />
      ) : (
        <>
          <KeyboardArrowUpIcon
            sx={{ color: '#042330', width: '11px', height: '7px' }}
          />
          <Button
            variant="contained"
            sx={{
              position: 'absolute',
              top: '50px',
              right: '24%',
              background: 'white',
            }}
            onClick={() => {
              props.handleLogin();
            }}
          >
            LogOut
          </Button>
        </>
      )}
    </div>
  );
};

export default Index;
