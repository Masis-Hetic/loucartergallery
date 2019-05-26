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
                <img src="http://via.placeholder.com/2000" alt=""/>
              </li>
              <li>
                <img src="http://via.placeholder.com/2000" alt=""/>
              </li>
              <li>
                <img src="http://via.placeholder.com/2000" alt=""/>
              </li>
              <li>
                <img src="http://via.placeholder.com/2000" alt=""/>
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
          reprehenderit, sit tempore totam. Assumenda consectetur cum debitis distinctio in, quasi sapiente totam ut!
          Accusamus autem est natus nihil numquam perspiciatis quia quos veritatis vero. Molestias perspiciatis
          recusandae tenetur. At aut dolorem enim ex, iure magnam nam nostrum quisquam reiciendis saepe voluptate,
          voluptates. At, consectetur cumque debitis ipsam iusto mollitia nihil quisquam recusandae rem veritatis.
          Accusamus cupiditate earum expedita inventore minus necessitatibus neque non, quae quas quod. Adipisci
          architecto at commodi consequatur delectus deleniti distinctio, error expedita facere incidunt itaque labore
          laborum modi natus odio perferendis porro quasi quo reiciendis rerum sint tempore totam ullam unde veritatis
          voluptates voluptatum. Aperiam assumenda deleniti doloremque inventore itaque quia rerum, voluptatem.
          Aspernatur dolorem dolores et hic possimus, qui tempore vero. Ab aliquid, beatae consequuntur debitis eaque
          et, exercitationem in ipsa libero molestiae pariatur quo quod sed. At, consequuntur corporis error id incidunt
          nobis recusandae reiciendis repellat tempora.
        </div>
      </div>
    );
  }
}

export default Campaign;
