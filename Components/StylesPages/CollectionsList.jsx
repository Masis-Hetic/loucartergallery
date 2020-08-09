import React, { Component } from 'react';
import { get }              from "lodash/fp"

import Collections          from "../Collections/Collections.style";

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
              <Collections.A href={get('data.pdf.url', collection)} target="_blank">
                <Collections.Img src={get('data.image.url', collection)} alt=""/>
                <Collections.P>{get('data.collection_name[0].text', collection)}</Collections.P>
              </Collections.A>
            </Collections.Li>
          )}
          {collectionsList.map(( collection, i ) =>
          <Collections.Li key={i}>
            <Collections.A href={get('data.pdf.url', collection)} target="_blank">
              <Collections.Img src={get('data.image.url', collection)} alt=""/>
              <Collections.P>{get('data.collection_name[0].text', collection)}</Collections.P>
            </Collections.A>
          </Collections.Li>
          )}
          {collectionsList.map(( collection, i ) =>
          <Collections.Li key={i}>
            <Collections.A href={get('data.pdf.url', collection)} target="_blank">
              <Collections.Img src={get('data.image.url', collection)} alt=""/>
              <Collections.P>{get('data.collection_name[0].text', collection)}</Collections.P>
            </Collections.A>
          </Collections.Li>
          )}
          {collectionsList.map(( collection, i ) =>
          <Collections.Li key={i}>
            <Collections.A href={get('data.pdf.url', collection)} target="_blank">
              <Collections.Img src={get('data.image.url', collection)} alt=""/>
              <Collections.P>{get('data.collection_name[0].text', collection)}</Collections.P>
            </Collections.A>
          </Collections.Li>
          )}
        </Collections.Ul>
        </Collections.Wrapper>
      </Collections>
    );
  }
}

export default CollectionsList;
