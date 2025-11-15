import SectionCarousel from "../../components/SectionCarousel";

const imagesArray = [
    "/images/projects/eb1.jpg"
]

function ElysianBath() {

    return (
        <>
            <SectionCarousel
                title="Elysian Bath"
                text="Subtle elegance, pure serenity. This bathroom invites you into a softly illuminated retreat where refined textures and gentle contrasts create a calming, sophisticated atmosphere. Every detail is thoughtfully arranged to evoke balance, tranquility, and understated luxury."                
                images={imagesArray}
            />
        </>
    )
}

export default ElysianBath