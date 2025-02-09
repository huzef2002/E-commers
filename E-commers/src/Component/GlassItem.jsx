import React from 'react';
import GlassICard from './GlassICard';

const CardData = [
  {
    id: 1,
    img: 'https://himalayaoptical.com/cdn/shop/products/888392509062_2_370x320.jpg?v=1645514126',
    Name: 'Aviator Sunglasses',
    Price: '₹899',
    Disclamer: 'Classic aviator design with polarized lenses for superior clarity for superior clarity.',
    Rating: '4.7',
    class: 'Aviator'
  },
  {
    id: 2,
    img: 'https://example.com/images/wayfarer.jpg',
    Name: 'Wayfarer Sunglasses',
    Price: '₹799',
    Disclamer: 'Iconic wayfarer style with a modern twist for everyday use.',
    Rating: '4.5',
    class: 'Wayfarer'
  },
  {
    id: 3,
    img: 'https://example.com/images/round-retro.jpg',
    Name: 'Round Retro Sunglasses',
    Price: '₹850',
    Disclamer: 'Vintage round sunglasses that combine retro charm with modern style.',
    Rating: '4.6',
    class: 'Retro'
  },
  {
    id: 4,
    img: 'https://example.com/images/sport-wrap.jpg',
    Name: 'Sporty Wrap Sunglasses',
    Price: '₹950',
    Disclamer: 'Designed for an active lifestyle, these wrap sunglasses offer excellent UV protection.',
    Rating: '4.3',
    class: 'Sport'
  },
  {
    id: 5,
    img: 'https://example.com/images/modern-square.jpg',
    Name: 'Modern Square Sunglasses',
    Price: '₹1000',
    Disclamer: 'Sleek and stylish square frames with a modern design and premium lenses.',
    Rating: '4.8',
    class: 'Modern'
  },
  {
    id: 6,
    img: 'https://example.com/images/clubmaster.jpg',
    Name: 'Clubmaster Sunglasses',
    Price: '₹1200',
    Disclamer: 'A blend of classic and modern design, perfect for both casual and formal occasions.',
    Rating: '4.4',
    class: 'Clubmaster'
  },
  {
    id: 7,
    img: 'https://example.com/images/cat-eye.jpg',
    Name: 'Vintage Cat-Eye Sunglasses',
    Price: '₹1100',
    Disclamer: 'Elegant cat-eye frames that add a touch of glamour to any outfit.',
    Rating: '4.2',
    class: 'Cat-Eye'
  },
  {
    id: 8,
    img: 'https://example.com/images/pilot.jpg',
    Name: 'Polarized Pilot Sunglasses',
    Price: '₹1300',
    Disclamer: 'High-performance polarized lenses with the classic pilot design.',
    Rating: '4.9',
    class: 'Pilot'
  },
  {
    id: 9,
    img: 'https://example.com/images/slim-rim.jpg',
    Name: 'Slim Rim Sunglasses',
    Price: '₹750',
    Disclamer: 'Minimalist slim rim design that provides a clean, modern look.',
    Rating: '4.1',
    class: 'Minimalist'
  },
  {
    id: 10,
    img: 'https://example.com/images/oversized.jpg',
    Name: 'Oversized Fashion ',
    Price: '₹1400',
    Disclamer: 'Bold oversized frames that make a stylish statement for any occasion.',
    Rating: '4.5',
    class: 'Oversized'
  },
  {
    id: 11,
    img: 'https://example.com/images/foldable.jpg',
    Name: 'Foldable Travel Sunglasses',
    Price: '₹850',
    Disclamer: 'Convenient foldable design, ideal for travel and everyday use.',
    Rating: '4.3',
    class: 'Travel'
  },
  {
    id: 12,
    img: 'https://example.com/images/luxury-designer.jpg',
    Name: 'Luxury Designer Sunglass',
    Price: '₹2000',
    Disclamer: 'Premium designer sunglasses crafted with high-quality materials.',
    Rating: '4.8',
    class: 'Luxury'
  }
];
function GlassItem() {
  return (
    <div className='flex gap-10 flex-wrap justify-center items-center lg:justify-start ms-6 my-6'>
      {CardData.map((items) => {
        return (<GlassICard CardData={items} />);

      })}
    </div>
  );
}

export default GlassItem;
