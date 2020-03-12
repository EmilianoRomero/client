import React from "react";
import Card from "./Carousel/Card";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          src:
            "https://www.findingtheuniverse.com/wp-content/uploads/2013/05/IMG_20130311_17025261.jpg"
        },
        {
          id: 1,
          src:
            "https://www.findingtheuniverse.com/wp-content/uploads/2013/05/IMG_20130312_20072861.jpg"
        },
        {
          id: 2,
          src:
            "https://www.findingtheuniverse.com/wp-content/uploads/2013/05/IMG_20130316_08092591.jpg"
        },
        {
          id: 3,
          src:
            "https://www.findingtheuniverse.com/wp-content/uploads/2013/05/IMG_20130321_14353361.jpg"
        },
        {
          id: 4,
          src:
            "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1442255038000/photosp/33772d7c-8c8c-4090-bc1e-207462b5c4a9/33772d7c-8c8c-4090-bc1e-207462b5c4a9.jpg"
        },
        {
          id: 5,
          src:
            "https://d1ez3020z2uu9b.cloudfront.net/imagecache/blog-photos/17431_Fill_670_0.jpg"
        },
        {
          id: 6,
          src:
            "https://www.hedonistit.com/wp-content/uploads/2018/10/italy-ootd-52-e1539525528812.jpg"
        },
        {
          id: 7,
          src:
            "https://www.onceinalifetimetravel.com/wp-content/uploads/2017/05/18425090_10154228804796525_2591909838680873552_n-1-e1494204674714.jpg"
        },
        {
          id: 8,
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKBhBG47KeSWp5QzGzrFTOa-YYagCXwGL5uJXeEcYT5IBwZVBk"
        },
        {
          id: 9,
          src:
            "https://i.pinimg.com/originals/18/c7/5b/18c75bf427060334a5a65af62c8a130e.jpg"
        },
        {
          id: 10,
          src:
            "https://i.dailymail.co.uk/i/pix/2015/12/02/03/2EFA755100000578-3341933-image-a-25_1449028738266.jpg"
        },
        {
          id: 11,
          src:
            "https://www.notjessfashion.com/wp-content/uploads/2018/06/Venice-Venezia-Instagram-x-NotJessFashion-1805-002-900x1125.jpg"
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
