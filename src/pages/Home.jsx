import SectionCarousel from "../components/SectionCarousel";

const imagesArray = [
  "/images/home/1.jpg",
  "/images/home/2.jpg",
  "/images/home/3.jpg",
  "/images/home/4.jpg",
  "/images/home/5.jpg",
  "/images/home/6.jpg",
  "/images/home/7.jpg",
  "/images/home/8.jpg",
  "/images/home/9.jpg",
  "/images/home/10.jpg",
  "/images/home/11.jpg",
  "/images/home/12.jpg",
  "/images/home/13.jpg",
  "/images/home/14.jpg",
  "/images/home/15.jpg",
  "/images/home/16.jpg",
  "/images/home/17.jpg",
  "/images/home/18.jpg",
]

function Home() {

  return (
    <>
      <SectionCarousel
        title="We transform everyday spaces into experiences of wellbeing"
        text="We create unique bathrooms that blend functionality, elegance, and comfort. Every detail is carefully designed to reflect your style and enhance the enjoyment of your space.
Explore our projects and find inspiration for your dream bathroom."
        images={imagesArray}
      />
    </>
  )
}

export default Home
