import SectionCarousel from "../../components/SectionCarousel";

const imagesArray = [
    "/images/projects/cm1.jpg",
    "/images/projects/cm2.jpg"
]

function CelestialMarble() {

    return (
        <>
            <SectionCarousel
                title="Celestial Marble"
                text="Light, balance, perfection. This refined sanctuary uses soft ambient lighting to highlight the purity and natural beauty of its marble surfaces. Modern fixtures and polished textures work together in subtle harmony, creating a bathroom defined by contemporary elegance and serene sophistication."                
                images={imagesArray}
            />
        </>
    )
}

export default CelestialMarble