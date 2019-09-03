import React, { Component } from 'react';
import Link                 from 'next/link';

import Collections from '../Collections/Collections.style';

/**
 * @property { object } collection_name
 */
class CollectionsList extends Component {
  
  render() {
    const { collectionsList } = this.props;
    
    return (
      <Collections>
        <div style={ { display: 'table', margin: '0 auto', position: 'relative', top: '300px' } }>
          { collectionsList.map((collection, i) =>
                                  <li key={ i }>
                                    <Link href={ `/collections/[collection]` }
                                          as={ `/collections/${ collection.uid }` }>
                                      <a>{ collection.data.collection_name[ 0 ].text }</a>
                                    </Link>
                                  </li>
          ) }
        </div>
      </Collections>
    );
  }
}

export default CollectionsList;
