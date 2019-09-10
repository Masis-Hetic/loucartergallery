import React  from "react";
import Header from "./Nav.style";
import Link   from "next/link";

/**
 * @property { function } handleThirdPanel
 * @property { function } handleType
 * @property { object } primary
 * @property { string } link_two
 * @param props
 * @returns {*}
 * @constructor
 */
const SecondPanel = props => {

  return (
    <Header.SecondPanel secondPanel={ props.secondPanel }>

      <Header.SecondPanelWrapper onClick={ props.handleThirdPanel }>
        { props.nav[ props.index ].data.body.map( ( item, i ) =>
          <div key={ i }>
            { item.primary.link_two_href[ 0 ].text.length > 0
              ? <Link href={ item.primary.link_two_href[ 0 ].text } as={ item.primary.link_two_href[ 0 ].text }>
                <Header.SecondPanelLink>
                  { item.primary.link_two[ 0 ].text }
                </Header.SecondPanelLink>
              </Link>
              : <Header.SecondPanelP id={ item.primary.type } onClick={ e => props.handleType( e ) }>
                { item.primary.link_two[ 0 ].text }
              </Header.SecondPanelP>
            }
          </div>
        ) }
      </Header.SecondPanelWrapper>

    </Header.SecondPanel>
  )
};

export default SecondPanel;
