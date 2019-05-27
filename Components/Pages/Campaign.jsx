import React, { Component } from 'react';
import { sliceUrl } from "../../helpers/functions";

class Campaign extends Component {

  render() {
    const { campaign } = this.props;

    return (
      <div className="wrapper">

        <div className="slides-wrapper">
          <div className="slides">

            <ul>
              {campaign.data.images.map((img, i) =>
                <li key={i}>
                  <img src={img && sliceUrl(img.image.url)} alt="" />
                </li>
              )}
            </ul>

          </div>
        </div>

        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet consectetur debitis doloremque
            doloribus dolorum earum et fuga itaque labore magnam mollitia natus officia, optio perferendis praesentium
            quae quasi qui quo quod repellendus saepe similique sint sit voluptatibus voluptatum. Aliquid animi cupiditate
            doloremque dolorum explicabo harum libero nostrum nulla odio perferendis perspiciatis quia quibusdam rem
            reprehenderit, sit tempore totam.
          </p>
        </div>
      </div>
    );
  }
}

export default Campaign;
