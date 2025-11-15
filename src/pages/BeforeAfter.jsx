import SectionCarousel from "../components/SectionCarousel";

const imagesArray = [
  "./images/before-after/1.png",
  "/images/before-after/2.png",
  "/images/before-after/3.png",
  "/images/before-after/4.png",
  "/images/before-after/5.png",
  "/images/before-after/6.png",
  "/images/before-after/7.png",
  "/images/before-after/8.png",
  "/images/before-after/9.png"
]

function BeforeAfter() {

  return (
    <>
      <SectionCarousel
        title="See the Difference"
        text={
          <>
          Explore the dramatic before-and-after results of our bathroom renovations where premium materials, refined design, and skilled craftsmanship come together.
          <br />
          <br />
          Every transformation reflects careful planning, quality craftsmanship, and a design tailored to each client’s style.
          </>
        }
        images={imagesArray}
      />
    </>
  )
}

export default BeforeAfter
