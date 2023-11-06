// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Avatar from '@mui/material/Avatar';

// const categoryData = [
//   {
//     src: 'https://images.pexels.com/photos/1585716/pexels-photo-1585716.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     alt: 'Idols',
//     title: 'Idols',
//   },
//   {
//     src: 'https://images.pexels.com/photos/6252097/pexels-photo-6252097.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     alt: 'Brass Products',
//     title: 'Brass Products',
//   },
//   {
//     src: 'https://images.pexels.com/photos/1132269/pexels-photo-1132269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     alt: 'Leather',
//     title: 'Leather',
//   },
//   {
//     src: 'https://www.indianartvilla.in/cdn/shop/products/IAV-CC-1-180F.jpg?v=1648532265',
//     alt: 'Copper Items',
//     title: 'Copper Items',
//   },
//   {
//     src: 'https://images.saymedia-content.com/.image/t_share/MTkyMzAxNjA5OTcwMTgxNjc4/bidriware.jpg',
//     alt: 'Bidriware',
//     title: 'Bidriware',
//   },
//   {
//     src: 'https://d35l77wxi0xou3.cloudfront.net/collab/craft1575356801Nettur%20Showcase%201.jpg',
//     alt: 'Nettur Petti',
//     title: 'Nettur Petti',
//   },
//   {
//     src: 'https://m.media-amazon.com/images/I/91LEVrj7x5L._AC_UF1000,1000_QL80_.jpg',
//     alt: 'Tanjore Paintings',
//     title: 'Tanjore Paintings',
//   },
//   {
//     src: 'https://i.etsystatic.com/28764485/r/il/65bf75/3143251393/il_1080xN.3143251393_roh3.jpg',
//     alt: 'Bamboo Blinds',
//     title: 'Bamboo Blinds',
//   },
//   {
//     src: 'https://cdn.shopify.com/s/files/1/1551/9675/files/appollo-bust.jpg?1264531624024849964g',
//     alt: 'Marble Statues',
//     title: 'Marble Statues',
//   },
//   {
//     src: 'https://decortips.com/wp-content/uploads/2020/09/yute1-e1599278580952.png',
//     alt: 'Jute Items',
//     title: 'Jute Items',
//   },
//   {
//     src: 'https://i.pinimg.com/736x/63/ee/cb/63eecbfd191955a070732f2512ece10d.jpg',
//     alt: 'Macrame Items',
//     title: 'Macrame Items',
//   },
//   {
//     src: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F51%2Fe7%2F51e7991e558392900aa22a91536f096e35a88f66.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BENVIRONMENT%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
//     alt: 'Seagrass Baskets',
//     title: 'Seagrass Baskets',
//   },
//   {
//     src: 'https://kalarambhbybharathaat.com/wp-content/uploads/2022/11/BHM07700-2.jpg',
//     alt: 'Acrylic Idols',
//     title: 'Acrylic Idols',
//   },
//   // Add more category objects here...
// ];

// function Categories() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 5,
//         },
//       },
      
//     ],
//   };
//   return (
//     <div className='card-bg'>
//       <h4 className='text-center pt-3'>Categories</h4>
//       <Slider {...settings}>
//         {categoryData.map((category, index) => (
//           <div key={index}>
//             <div style={{ position: 'relative' }} className='mt-3 ms-3 me-3 d-inline-block'>
//               <Avatar
//                 alt={category.alt}
//                 src={category.src}
//                 sx={{ width: '180px', height: '180px' }}
//               />
//               <p className='text-center text-uppercase gold-txt fw-semibold mt-2'>{category.title}</p>
//               <button type="button" data-role="none" class="slick-arrow slick-next" > Previo</button>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Categories;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Avatar from '@mui/material/Avatar';
import { ArrowBack, ArrowForward } from '@mui/icons-material'; // Import icons

const categoryData = [
  {
    src: 'https://images.pexels.com/photos/1585716/pexels-photo-1585716.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Idols',
    title: 'Idols',
  },
  {
    src: 'https://images.pexels.com/photos/6252097/pexels-photo-6252097.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Brass Products',
    title: 'Brass Products',
  },
  {
    src: 'https://images.pexels.com/photos/1132269/pexels-photo-1132269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Leather',
    title: 'Leather',
  },
  {
    src: 'https://www.indianartvilla.in/cdn/shop/products/IAV-CC-1-180F.jpg?v=1648532265',
    alt: 'Copper Items',
    title: 'Copper Items',
  },
  {
    src: 'https://images.saymedia-content.com/.image/t_share/MTkyMzAxNjA5OTcwMTgxNjc4/bidriware.jpg',
    alt: 'Bidriware',
    title: 'Bidriware',
  },
  {
    src: 'https://d35l77wxi0xou3.cloudfront.net/collab/craft1575356801Nettur%20Showcase%201.jpg',
    alt: 'Nettur Petti',
    title: 'Nettur Petti',
  },
  {
    src: 'https://m.media-amazon.com/images/I/91LEVrj7x5L._AC_UF1000,1000_QL80_.jpg',
    alt: 'Tanjore Paintings',
    title: 'Tanjore Paintings',
  },
  {
    src: 'https://i.etsystatic.com/28764485/r/il/65bf75/3143251393/il_1080xN.3143251393_roh3.jpg',
    alt: 'Bamboo Blinds',
    title: 'Bamboo Blinds',
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/1551/9675/files/appollo-bust.jpg?1264531624024849964g',
    alt: 'Marble Statues',
    title: 'Marble Statues',
  },
  {
    src: 'https://decortips.com/wp-content/uploads/2020/09/yute1-e1599278580952.png',
    alt: 'Jute Items',
    title: 'Jute Items',
  },
  {
    src: 'https://i.pinimg.com/736x/63/ee/cb/63eecbfd191955a070732f2512ece10d.jpg',
    alt: 'Macrame Items',
    title: 'Macrame Items',
  },
  {
    src: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F51%2Fe7%2F51e7991e558392900aa22a91536f096e35a88f66.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BENVIRONMENT%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
    alt: 'Seagrass Baskets',
    title: 'Seagrass Baskets',
  },
  {
    src: 'https://kalarambhbybharathaat.com/wp-content/uploads/2022/11/BHM07700-2.jpg',
    alt: 'Acrylic Idols',
    title: 'Acrylic Idols',
  },
  // Add more category objects here...
];

// Custom previous arrow component
const PrevArrow = (props) => (
  <button {...props} className="slick-prev">
    <ArrowBack />
  </button>
);

// Custom next arrow component
const NextArrow = (props) => (
  <button {...props} className="slick-next">
    <ArrowForward />
  </button>
);

function Categories() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div className='card-bg'>
      <h4 className='text-center fw-semibold pt-3 pb-3'>Categories</h4>
      <Slider {...settings}>
        {categoryData.map((category, index) => (
          <div className='mt-3' key={index}>
            <div style={{ position: 'relative' }} className='ps-3 d-inline-block'>
              <Avatar
                alt={category.alt}
                src={category.src}
                sx={{ width: '180px', height: '180px' }}
              />
              <p className='text-center text-uppercase gold-txt fw-semibold mt-2'>{category.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Categories;
