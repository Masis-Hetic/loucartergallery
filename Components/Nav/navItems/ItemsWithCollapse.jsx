import React from 'react';
import PropTypes from 'prop-types';
import { get } from "lodash/fp";
import ListWithCollapse from "./ItemsWithCollapse.styled";

const ItemsWithCollapse = props => {
  const isOpen = !props.isChildren
    ? (props.selectedIndex === props.index) && props.open
    : props.isSubListOpen;

  return (
  <>
    <ListWithCollapse
      id={props.index}
      onClick={e => !props.isChildren ? props.onClick(e.target.id, props.index) : props.setSubListStatus(!props.isSubListOpen)}
    >
      {props.title}
    </ListWithCollapse>

    {isOpen &&
    <ListWithCollapse.List id={props.index} open={isOpen} isChildren={props.isChildren}>
      {props.children}

      {props.links.map((link, i) =>
        get('nom_du_lien[0].text', link) &&
        <ListWithCollapse.Item key={i} open={isOpen} index={i}>
          {link.nom_du_lien[0].text}
        </ListWithCollapse.Item>
      )}
    </ListWithCollapse.List>
    }
  </>
  );
};

ItemsWithCollapse.propTypes = {
  isChildren: PropTypes.bool,
};

ItemsWithCollapse.defaultProps = {
  isChildren: false,
}

export default ItemsWithCollapse;
