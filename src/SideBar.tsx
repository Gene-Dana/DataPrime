import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { ProSidebar, Menu, MenuItem, } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import PersonIcon from "@material-ui/icons/PersonOutlined";
import Switch from 'react-switch';
import JobIcon from "@material-ui/icons/DashboardOutlined";
import SchoolIcon from "@material-ui/icons/SchoolOutlined";
import HelpIcon from "@material-ui/icons/HelpOutline";
import ContactIcon from "@material-ui/icons/ChatBubbleOutline";
import ReferralIcon from "@material-ui/icons/PaymentOutlined";
import LogIcon from "@material-ui/icons/ExitToAppOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 36,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function SideBar() {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);


  const handleCollapsedChange = (checked: any) => {
    setCollapsed(checked);
  };

  return (
    <div className={classes.root}>
      <ProSidebar collapsed={collapsed}>
        <span> collapsed</span>
        <div>
          <Switch
            height={16}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleCollapsedChange}
            checked={collapsed}
            onColor="#219de9"
            offColor="#bbbbbb"
          />

        </div>

        <Menu >
          <MenuItem icon={<PersonIcon />}>Dashboard</MenuItem>
          <MenuItem icon={<JobIcon />}>Jobs</MenuItem>
          <MenuItem icon={<PersonIcon />}>Community</MenuItem>
          <MenuItem icon={<SchoolIcon />}>Academy</MenuItem>
          <MenuItem icon={<HelpIcon />}>FAQ</MenuItem>
          <MenuItem icon={<ContactIcon />}>Contact</MenuItem>
          <MenuItem icon={<ReferralIcon />}>Referral</MenuItem>
          <MenuItem icon={<LogIcon />}>Logout</MenuItem>

        </Menu>
      </ProSidebar>;
    </div >
  );
}
