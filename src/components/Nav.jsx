import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Nav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="ログイン" icon={<RestoreIcon />} />
        <BottomNavigationAction label="秘宝館とは" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="作品を出品しよう" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}