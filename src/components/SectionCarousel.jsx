import { useRef, useEffect } from "react";

export default function SectionCarousel({ title, text, images = [] }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const windowHeight = window.innerHeight;

      // Progreso: desde que entra hasta que sale la sección
      const scrollProgress = -rect.top;
      const maxScroll = wrapperHeight - windowHeight;
      const progress = Math.min(Math.max(scrollProgress / maxScroll, 0), 1);

      // Ancho total a desplazar
      const totalWidth = content.scrollWidth;
      const visibleWidth = window.innerWidth;
      const maxTranslate = totalWidth - visibleWidth;

      // Aplicar desplazamiento horizontal
      const translateX = -(progress * maxTranslate);
      content.style.transform = `translateX(${translateX}px)`;
      
      // Ajustar ancho del texto en mobile
      const textDiv = content.querySelector('.text-column');
      if (textDiv && window.innerWidth <= 425) {
        textDiv.style.width = 'calc(100vw - 80px)';
        textDiv.style.minWidth = 'calc(100vw - 80px)';
      } else if (textDiv) {
        textDiv.style.width = '50vw';
        textDiv.style.minWidth = '50vw';
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [images.length]);

  return (
    <>
      {/* Wrapper invisible que genera el espacio de scroll */}
      <div
        ref={wrapperRef}
        className="relative w-full"
        style={{ height: `${images.length * 100}vh` }}
      >
        {/* Contenido sticky que se queda fijo visualmente */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#3c3c3c]">
          <div
            ref={contentRef}
            className="flex items-center h-full will-change-transform"
            style={{ width: 'max-content' }}
          >
            {/* Columna de texto */}
            <div 
              className="text-column flex-shrink-0 px-16 text-white max-[425px]:px-6" 
              style={{ 
                width: '50vw',
                minWidth: '50vw'
              }}
            >
              <div className="max-w-xl">
                <h2 className="font-bold text-5xl font-george mb-6 max-[425px]:text-3xl max-[425px]:mb-4 leading-tight">
                  {title}
                </h2>
                <p className="text-xl leading-relaxed max-[425px]:text-base">
                  {text}
                </p>
              </div>
            </div>

            {/* Carrusel de imágenes */}
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-screen px-4 max-[425px]:px-2"
                style={{ 
                  width: '70vw',
                  minWidth: '70vw'
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Project ${index + 1}`}
                    className="w-full h-[85vh] max-[425px]:h-[70vh] object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Demo
function Demo() {
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=1000&fit=crop",
  ];

  return (
    <div className="bg-gray-900">
      <SectionCarousel
        title="Designo Bathrooms"
        text="We create unique bathrooms that blend functionality, elegance, and comfort. Every detail is carefully designed to reflect your style and enhance the enjoyment of your space. Explore our projects and find inspiration for your dream bathroom."
        images={images}
      />
      
      <div className="h-screen bg-gray-800 flex items-center justify-center">
        <h2 className="text-white text-4xl">Siguiente sección</h2>
      </div>
    </div>
  );
}