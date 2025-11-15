import SectionCarousel from "../../components/SectionCarousel";

const imagesArray = [
    "/images/projects/ss4.jpg",
    "/images/projects/ss5.jpg",
    "/images/projects/ss3.jpg",
    "/images/projects/ss2.jpg",
    "/images/projects/ss1.jpg",
]

function SculptedSerenity() {

    return (
        <>
            <SectionCarousel
                title="Sculpted Serenity"
                text="Minimalism meets subtle glamour in this serene bathroom retreat. Clean lines and muted tones create a sense of calm, while the freestanding tub takes center stage as the room’s sculptural focal point. A crystal-inspired chandelier adds a soft, radiant glow, bringing just the right touch of luxury. The result is a refined balance of simplicity, warmth, and quiet sophistication."                
                images={imagesArray}
            />
        </>
    )
}

export default SculptedSerenity
