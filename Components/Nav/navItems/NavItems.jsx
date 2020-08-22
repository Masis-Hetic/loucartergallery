import React from 'react';
import PropTypes from 'prop-types';
import ItemsWithCollapse from "./ItemsWithCollapse";

const NavItems = props => {

  return (
  <>
    <ItemsWithCollapse
      openMenu={props.openMenu}
      selectedIndex={props.selectedIndex}
      open={props.open} onClick={props.onClick}
      index={props.index} links={props.links.links}
      title={props.links.title}
      toggleModal={props.toggleModal}
    >
      {props.links.subLinks &&
        <ItemsWithCollapse
          openMenu={props.openMenu}
          isChildren={true} index={props.index + 1}
          links={props.links.subLinks.data.group_link}
          title={props.links.subLinks.data.title_group[0].text}
        />
      }
    </ItemsWithCollapse>
  </>
  );
};

NavItems.propTypes = {

};

export default NavItems;
