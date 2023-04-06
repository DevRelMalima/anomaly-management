

export default drawer(menuItems) = (
    <div>
      <Hidden >
        <div className={classes.toolbar} />
      </Hidden>
      <Divider />
      <List>
        {['Apps'].map((text, index) => (
            <ListItemLink  button key={text} to={"/"} primary={text} icon={<AppsOutlined />} />
        ))}
      </List>
      <Divider />
      <List>
      {menuItems.map((menuItem) => (
            <ListItemLink  button key={menuItem.id} to={menuItem.link} primary={menuItem.caption}  secondary={menuItem.secondaryCaption} icon={<MailIcon />} />
        ))}
      </List>
    </div>
  );