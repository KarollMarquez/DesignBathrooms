import SectionCarousel from "../../components/SectionCarousel";

const imagesArray = [
    "/images/projects/lh3.jpg",
    "/images/projects/lh1.jpg",
    "/images/projects/lh2.jpg",
]

function LuminousHarmony() {

    return (
        <>
            <SectionCarousel
                title="Luminous Harmony"
                text="Where tranquility meets modern elegance. Designed as a serene oasis above the city, this bathroom blends clean contemporary lines with soft, refined details. The result is a calming sanctuary that balances urban sophistication with pure, restorative peace."                
                images={imagesArray}
            />
        </>
    )
}

export default LuminousHarmony