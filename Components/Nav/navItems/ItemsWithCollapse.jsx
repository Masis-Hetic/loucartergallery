import React from 'react';
import PropTypes from 'prop-types';
import { get } from "lodash/fp";
import ListWithCollapse from "./ItemsWithCollapse.styled";
import Link from "next/link";

function linkResolver(link, action = null) {
  if (link.lien.type === 'campaign') {
    return <Link href={`/campagnes?slug=${link.lien.uid}`} as={`/campagnes/${link.lien.uid}`}>
      <a onClick={() => action(false)}>{link.nom_du_lien[0].text}</a>
    </Link>;
  }

  if (link.lien.link_type === 'Web') return <a onClick={() => action(false)} href={link.lien.url} target="_blank">{link.nom_du_lien[0].text}</a>;

  if (link.nom_du_lien[0].text === 'NEWSLETTER') return <p>{link.nom_du_lien[0].text}</p>;

  return <Link href={`/${link.lien.uid}`} as={`/${link.lien.uid}`}>
    <a onClick={() => action(false)}>{link.nom_du_lien[0].text}</a>
  </Link>;
}

const ItemsWithCollapse = props => {
  const isOpen = !props.isChildren
    ? (props.selectedIndex === props.index) && props.open : true;

  return (
  <>
    <ListWithCollapse
      id={props.index}
      onClick={e => !props.isChildren && props.onClick(e.target.id, props.index)}
      isChildren={props.isChildren}
    >
      {props.title}
    </ListWithCollapse>

    {isOpen &&
    <ListWithCollapse.List id={props.index} open={isOpen} isChildren={props.isChildren}>
      {props.children}

      {props.links.map((link, i) =>
        get('nom_du_lien[0].text', link) &&
        <ListWithCollapse.Item
          key={i}
          open={isOpen}
          index={i}
          onClick={() => get('nom_du_lien[0].text', link) === 'NEWSLETTER' && props.toggleModal(true)}
        >
          <span />
          {linkResolver(link, props.openMenu)}
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
