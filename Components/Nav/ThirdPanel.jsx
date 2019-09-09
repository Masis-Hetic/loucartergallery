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
      <div>

        { props.nav[props.index].data.body.map((items, i) =>
          <Fragment key={i}>
            { items.items.map((link, i) =>
              <Fragment key={i}>
                {link.type === props.type &&
                  <p>
                    {link.link_three_href[0].text === 'campagnes'
                    ? (<Link
                        href={`/${link.link_three_href[0].text}?slug=${link.link_to_level_three.uid}`}
                        as={`${link.link_three_href[0].text}/${link.link_to_level_three.uid}`}
                      >
                        <a>{ link.link_three[0].text }</a>
                      </Link>)
                    : (<Link
                          href={`/${link.link_to_level_three.uid}`}
                          as={`/${link.link_to_level_three.uid}`}
                        >
                          <a>{link.link_three[0].text}</a>
                      </Link>
                      )
                    }
                  </p>
                }
              </Fragment>
            ) }
          </Fragment>
        ) }

      </div>
    </Header.ThirdPanel>
  )
};

export default ThirdPanel;
