import SectionCarousel from "../../components/SectionCarousel";

const imagesArray = [
    "/images/projects/sr1.jpg",
    "/images/projects/sr2.jpg",
    "/images/projects/sr3.jpg",
    "/images/projects/sr4.jpg",
    "/images/projects/sr5.jpg",
]

function SkylineRetreat() {

    return (
        <>
            <SectionCarousel
                title="Skyline Retreat"
                text="Where tranquility meets modern elegance. Designed as a serene oasis above the city, this bathroom blends clean contemporary lines with soft, refined details. The result is a calming sanctuary that balances urban sophistication with pure, restorative peace."                
                images={imagesArray}
            />
        </>
    )
}

export default SkylineRetreat