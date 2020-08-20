import React, {Fragment} from 'react';
import Link from "next/link";
import StyledMainLink from "./MainLink.style";

const MainLink = props => {
  return (
    <Fragment>
      <p onClick={props.onClick}>{props.data.title_group[0]?.text}</p>
      <StyledMainLink idGroup={props.idGroup} index={props.index}>
        {props.data.group_link.map((link, i) =>
          <li key={i}>
            {link.data ?
              <MainLink data={link.data} lvl='campagnes' index={i}/> :
              <Link href={props.lvl ? `/${props.lvl}/${link.lien.uid}` : `/${link.lien.uid}`}>
                <a>{link.nom_du_lien[0].text}</a>
              </Link>
            }
          </li>
        )}
      </StyledMainLink>
    </Fragment>
  );
};

MainLink.propTypes = {};

export default MainLink;
