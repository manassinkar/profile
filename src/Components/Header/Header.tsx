import { FC } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  Home,
  AccountCircle,
  Code,
  FormatListBulleted,
} from "@mui/icons-material";

type HeaderProps = {
  tab: number;
  setTab: Function;
};

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <Box>
      <BottomNavigation
        showLabels
        value={props.tab}
        onChange={(event, newValue) => {
          props.setTab(newValue);
        }}
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          marginBottom: "1rem",
        }}
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="About" icon={<AccountCircle />} />
        <BottomNavigationAction label="Projects" icon={<Code />} />
        <BottomNavigationAction label="Skills" icon={<FormatListBulleted />} />
      </BottomNavigation>
    </Box>
  );
};

export default Header;
