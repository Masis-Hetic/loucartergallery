import React, { Component } from 'react';

class Campaign extends Component {
  render() {
    const { campaign } = this.props;

    return (
      <div className="wrapper">

        <div className="slides-wrapper">
          <div className="slides">

            <ul>
              <li>
                <img src="http://via.placeholder.com/2000x2000" alt=""/>
              </li>
              <li>
                <img src="http://via.placeholder.com/800x750" alt=""/>
              </li>
              <li>
                <img src="http://via.placeholder.com/600x800" alt=""/>
              </li>
              <li>
                <img src="http://via.placeholder.com/1500x2000" alt=""/>
              </li>
              <li>
                <img src="http://via.placeholder.com/2000" alt=""/>
              </li>
              <li>
                <img src="http://via.placeholder.com/2000" alt=""/>
              </li>
            </ul>

          </div>
        </div>

        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet consectetur debitis doloremque
          doloribus dolorum earum et fuga itaque labore magnam mollitia natus officia, optio perferendis praesentium
          quae quasi qui quo quod repellendus saepe similique sint sit voluptatibus voluptatum. Aliquid animi cupiditate
          doloremque dolorum explicabo harum libero nostrum nulla odio perferendis perspiciatis quia quibusdam rem
          reprehenderit, sit tempore totam.
        </div>
      </div>
    );
  }
}

export default Campaign;
