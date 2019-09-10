import React, { Fragment } from "react";
import Header              from "./Nav.style";
import Link                from "next/link";

/**
 * @property { string } link_two
 * @property { string } link_two_href
 * @property { string } link_three
 * @property { string } link_three_href
 * @property { string } link_to_level_three
 * @param props
 * @returns {*}
 * @constructor
 */
const ThirdPanel = props => {
  return (
    <Header.ThirdPanel thirdPanel={ props.thirdPanel }>
      <Header.ThirdPanelWrapper>

        { props.nav[ props.index ].data.body.map( ( items, i ) =>
          <Fragment key={ i }>
            { items.items.map( ( link, i ) =>
              <Fragment key={ i }>
                { link.type === props.type &&
                <Header.ThirdPanel.P>
                  { link.link_three_href[ 0 ].text !== 'artistes'
                    ? ( <Link
                      href={ `/${ link.link_three_href[ 0 ].text }?slug=${ link.link_to_level_three.uid }` }
                      as={ `${ link.link_three_href[ 0 ].text }/${ link.link_to_level_three.uid }` }
                    >
                      <a>
                        <Header.ThirdPanelSpan>{ link.link_three[ 0 ].text }</Header.ThirdPanelSpan>
                        <Header.ThirdPanelImg src="../../static/images/bg-ss19.jpg" alt="" />
                      </a>
                    </Link> )
                    : ( <Link
                        href={ `/${ link.link_to_level_three.uid }` }
                        as={ `/${ link.link_to_level_three.uid }` }
                      >
                        <a>{ link.link_three[ 0 ].text }</a>
                      </Link>
                    )
                  }
                </Header.ThirdPanel.P>
                }
              </Fragment>
            ) }
          </Fragment>
        ) }

      </Header.ThirdPanelWrapper>
    </Header.ThirdPanel>
  )
};

export default ThirdPanel;
