import ContainedDrawer from "../common/ContainedDrawer";
import Profile from "../user/Profile";
import Settings from "../user/Settings";

const UserMenu = ({ open: { profile, settings }, toggleMenu: { toggleProfile, toggleSettings } }) => {
  return (
    <>
      {/* Edit profile */}
      <ContainedDrawer open={profile} anchor="left">
        <Profile onClose={toggleProfile} />
      </ContainedDrawer>
      <ContainedDrawer open={settings} anchor="left">
        <Settings onClose={toggleSettings} />
      </ContainedDrawer>
    </>
  );
};

export default UserMenu;
