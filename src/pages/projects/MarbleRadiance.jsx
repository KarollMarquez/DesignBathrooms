import SectionCarousel from "../../components/SectionCarousel";

const imagesArray = [
    "/images/projects/mr1.webp",
    "/images/projects/mr2.webp",
    "/images/projects/mr3.webp",
    "/images/projects/mr4.webp",
    "/images/projects/mr5.webp",
]

function MarbleRadiance() {

    return (
        <>
            <SectionCarousel
                title="Marble Radiance"
                text="Luxury and balance come together in this refined marble sanctuary. Polished stone, brushed gold fixtures, and soft wood accents create a warm yet elevated atmosphere. At the center, a luminous shower with dual rainheads and seamless glass offers a spa-like experience, completing a bathroom designed for timeless elegance and everyday indulgence."                
                images={imagesArray}
            />
        </>
    )
}

export default MarbleRadiance