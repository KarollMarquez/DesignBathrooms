import SectionCarousel from "../../components/SectionCarousel";

const imagesArray = [
    "/images/projects/nl1.webp",
    "/images/projects/nl2.webp",
    "/images/projects/nl3.webp",
    "/images/projects/nl4.webp",
    "/images/projects/nl5.webp",
]

function NordicLuminosity() {

    return (
        <>
            <SectionCarousel
                title="Nordic Luminosity"
                text="Serenity in motion. This bathroom embraces purity, balance, and natural warmth through soft tones and minimalist details. Every element works in quiet harmony, creating a space where daily routines feel lighter, calmer, and effortlessly refined."                
                images={imagesArray}
            />
        </>
    )
}

export default NordicLuminosity