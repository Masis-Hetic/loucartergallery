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
      { console.log( props.nav[ props.index ] ) }

      <div onClick={ props.handleThirdPanel }>
        { props.nav[ props.index ].data.body.map( ( item, i ) =>
          <div key={ i }>
            { item.primary.link_two_href[0].text.length > 0
              ? <Link href={ item.primary.link_two_href[ 0 ].text } as={item.primary.link_two_href[ 0 ].text}>
                <a style={{textAlign: 'center'}}>
                  { item.primary.link_two[ 0 ].text }
                </a>
              </Link>
              : <p id={item.primary.type} onClick={ e => props.handleType(e)} style={{textAlign: 'center'}}>
                { item.primary.link_two[ 0 ].text }
                <div style={{ width: '80%', height: 100, background: '#ccc'}}>
                  Une photo ici
                </div>
              </p>
            }
          </div>
        ) }
      </div>

    </Header.SecondPanel>
  )
};

export default SecondPanel;
