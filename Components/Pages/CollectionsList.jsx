import React, { Component } from 'react';
import Collections          from "../Collections/Collections.style";
import Link                 from 'next/link';

/**
 * @property { string } collection_name
 * @property { string } image
 */
class CollectionsList extends Component {

  render() {
    const { collectionsList } = this.props;

    return (
      <Collections>
        <Collections.Wrapper>
        <Collections.Ul length={collectionsList.length}>
          {collectionsList.map(( collection, i ) =>
            <Collections.Li key={i}>
              <Link href={ `/collections/[collection]` } as={ `/collections/${collection.uid}` }>
                <Collections.A>
                  <Collections.Img src={collection.data.image.url} alt=""/>
                  <Collections.P>{collection.data.collection_name[0].text}</Collections.P>
                </Collections.A>
              </Link>
            </Collections.Li>
          )}
        </Collections.Ul>
        </Collections.Wrapper>
      </Collections>
    );
  }
}

export default CollectionsList;
