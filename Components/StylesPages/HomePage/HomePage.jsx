import React, { useEffect, useState } from 'react';
import Link                           from 'next/link';
import { get }                        from "lodash/fp";
import StyledHome                     from "./StyledHomePage";
import ItemIndicator                  from "../../ItemIndicator/ItemIndicator";

function HomePage({ result, imgs }) {

  const [ visible, setVisible ] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (visible >= imgs.length -1) return setVisible(0);
      setVisible(visible + 1);
    }, 4000);
  });

  const currentImage = get(`data.body[${visible}]`, result);
  const externalURL = get(`primary.link_to.url`, currentImage);

  return (
    <StyledHome>

      <h1>
        <span>{ get(`primary.title_img[0].text`, currentImage) }</span>
      </h1>

      <div className="current-image">
        {!externalURL
          ? (
            <Link
              href={`${ get('primary.page_category.type', currentImage) === 'category' 
                ? `/${ get('primary.page_category.slug', currentImage) }?slug=${ get('primary.link_to.uid', currentImage) }` 
                : get('primary.link_to.uid', currentImage) }
              `}
                as={`${ get('primary.page_category.type', currentImage) === 'category'
                    ? `/${ get('primary.page_category.slug', currentImage) }/${ get('primary.link_to.uid', currentImage) }`
                    : get('primary.link_to.uid', currentImage) }
              `}
            >
              <a>
                { imgs[ visible ].length > 0 && <img srcSet={ imgs[ visible ] } alt=""/> }
                {/*<h2>{get('primary.text[0].text', currentImage)}</h2>*/}
              </a>
            </Link>
          )
          : (
            <a href={ get(`primary.link_to.url`, currentImage) } target="_blank">
              { imgs[ visible ].length > 0 && <img srcSet={ imgs[ visible ] } alt=""/> }
              {/*<h2>{get('primary.text[0].text', currentImage)}</h2>*/}
            </a>
          )
        }
      </div>

      <ItemIndicator length={result.data.body.length} current={visible} imgs={imgs} />
    </StyledHome>
  )
}

export default HomePage;
