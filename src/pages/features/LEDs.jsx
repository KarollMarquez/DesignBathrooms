import Gallery from '../../components/Gallery';

const images = [
  "/images/features/leds/1.webp",
  "/images/features/leds/2.webp",
  "/images/features/leds/3.webp",
  "/images/features/leds/5.webp",
  "/images/features/leds/6.webp",
  "/images/features/leds/4.webp",
  "/images/features/leds/7.webp",
  
];

export default function LEDs() {
    return(
        <Gallery images={images}/>
    )
};