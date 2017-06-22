import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import img1 from './media/img1.d9f7d072.jpg';
import img2 from './media/img2.06d8aad5.jpg';
import img3 from './media/img3.8d11ed9c.jpg';
import img4 from './media/img5.d53e04ea.jpg';
import img5 from './media/img7.6ec1e0de.jpg';
import img6 from './media/img8.95e3d860.jpg';
import img7 from './media/img9.bfdaed9f.jpg';
import img8 from './media/img10.04afb499.jpg';

export default class Images extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [img1, img2, img3, img4, img5, img6, img7, img8],
    };
  }


  render() {
    const { images } = this.state;
    const { height, width } = this.props;
    return (
      <Carousel style={{ display: 'flex', height, position: 'fixed' }}>
        {images.map(img =>
          (<Carousel.Item key={img}>
            <Image src={img} style={{ height, width }} />
          </Carousel.Item>),
        )}
      </Carousel>
    );
  }
}
