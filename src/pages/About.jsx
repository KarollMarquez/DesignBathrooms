import SectionCarousel from "../components/SectionCarousel";

const imagesArray = [
    "/images/about/1.jpg",
    "/images/about/2.jpg",
    "/images/about/3.jpg",
    "/images/about/4.jpg",
    "/images/about/5.jpg",
    "/images/about/6.jpg",
    "/images/about/7.jpg",
    "/images/about/8.jpg",
    "/images/about/9.jpg",
    "/images/about/10.jpg",
    "/images/about/11.jpg",
    "/images/about/12.jpg",
    "/images/about/13.jpg",
    "/images/about/14.jpg",
    "/images/about/15.jpg",
    "/images/about/16.jpg",
    "/images/about/17.jpg",
    "/images/about/18.jpg",
]

function About() {

    return (
        <>
            <SectionCarousel
                title="Learn more about our company"
                text={<>
                    At Designo Bathrooms, we focus exclusively on crafting high-quality, custom bathrooms that reflect your personal style. With more than 15 years of experience, we bring expert design, detailed renderings, and skilled craftsmanship to every project—whether you prefer a clean modern look or a timeless classic feel.
                    <br />
                    <br />
                    Serving Virginia, Northern Virginia, and Washington, D.C., we manage the entire process from concept to completion. Our commitment is simple: deliver a beautiful, functional, and long-lasting bathroom you’ll love coming home to.
                </>}
                images={imagesArray}
            />
        </>
    )
}

export default About
