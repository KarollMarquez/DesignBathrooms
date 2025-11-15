import SectionCarousel from "../../components/SectionCarousel";

const imagesArray = [
    "/images/projects/mv1.jpg",
]

function MidnightVeins() {

    return (
        <>
            <SectionCarousel
                title="Midnight Veins"
                text="Embodies the strength and sophistication of contemporary marble design. Its dark veining contrasts with polished surfaces, creating a bold yet refined character. Every detail—from metallic finishes to the precision of modern lines—builds a setting of understated luxury, where elegance meets serenity to deliver a timeless bathroom experience."                
                images={imagesArray}
            />
        </>
    )
}

export default MidnightVeins