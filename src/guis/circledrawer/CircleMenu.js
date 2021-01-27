import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const CircleMenu = ({
  selectedCircle,
  handleClickOpenDialog,
  anchorEl,
  handleCloseMenu,
}) => {
  const handleClickMenu = () => {
    handleClickOpenDialog();
  };
  return (
    <div>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: selectedCircle.y,
          horizontal: selectedCircle.x,
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleClickMenu}>Adjust Radius...</MenuItem>
      </Menu>
    </div>
  );
};

export default CircleMenu;
