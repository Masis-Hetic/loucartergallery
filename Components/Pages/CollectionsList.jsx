import React, { Component } from 'react';
import Collections          from "../Collections/Collections.style";
import Link                 from 'next/link';

/**
 * @property { object } collection_name
 */
class CollectionsList extends Component {

  render() {
    const { collectionsList } = this.props;

    return (
      <Collections>
        <div style={{ display: 'table', margin: '0 auto', position: 'relative', top: '300px' }}>
          {collectionsList.map(( collection, i ) =>
            <li key={i}>
              <Link href={ `/collections/[collection]` } as={ `/collections/${collection.uid}` }>
                <a>{collection.data.collection_name[0].text}</a>
              </Link>
            </li>
          )}
        </div>
      </Collections>
    );
  }
}

export default CollectionsList;
