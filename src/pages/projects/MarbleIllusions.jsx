import SectionCarousel from "../../components/SectionCarousel";

const imagesArray = [
    "/images/projects/mi1.jpg",
]

function MarbleIllusions() {

    return (
        <>
            <SectionCarousel
                title="Marble Illusions"
                text="A dance of light and shadow. This space blends the strength of marble with the subtlety of architectural lighting, turning the everyday into a sensory experience. The stone’s natural veining becomes the focal point, enhanced by a play of reflections that expand the perception of space. Each line and every shimmer create a dynamic effect—like a dialogue between clarity and shadow—adding depth, modernity, and visual intrigue.A bathroom designed for contemplation, where minimalist design meets timeless sophistication."                
                images={imagesArray}
            />
        </>
    )
}

export default MarbleIllusions