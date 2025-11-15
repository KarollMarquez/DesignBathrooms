import SectionCarousel from "../../components/SectionCarousel";

const imagesArray = [
    "/images/projects/mm1.webp",
    "/images/projects/mm2.webp",
    "/images/projects/mm3.jpg",
    "/images/projects/mm4.webp",
    "/images/projects/mm5.webp",
]

function MonochromeMasterpiece() {

    return (
        <>
            <SectionCarousel
                title="Monochrome Masterpiece"
                text="Where bold drama meets refined design. High-contrast marble wraps the walls, floors, and steps, creating a sculptural environment with unapologetic presence. Sharp geometry and a deep monochrome palette set an intense, luxurious tone—delivering an immersive retreat defined by grandeur and precision."                
                images={imagesArray}
            />
        </>
    )
}

export default MonochromeMasterpiece