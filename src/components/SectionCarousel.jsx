import { useRef, useEffect } from "react";

export default function SectionCarousel({ title, text, images = [] }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const adjustTextWidth = () => {
      const textDiv = content.querySelector(".text-column");
      if (!textDiv) return;
      if (window.innerWidth <= 425) {
        textDiv.style.width = "calc(100vw - 80px)";
        textDiv.style.minWidth = "calc(100vw - 80px)";
      } else {
        textDiv.style.width = "50vw";
        textDiv.style.minWidth = "50vw";
      }
    };

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollProgress = -rect.top;
      const maxScroll = wrapperHeight - windowHeight;
      const progress = Math.min(Math.max(scrollProgress / maxScroll, 0), 1);

      const totalWidth = content.scrollWidth;
      const visibleWidth = window.innerWidth;
      const maxScrollLeft = totalWidth - visibleWidth;

      // movimiento suave sin lag
      content.scrollLeft = progress * maxScrollLeft;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", adjustTextWidth);

    adjustTextWidth();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", adjustTextWidth);
    };
  }, [images.length]);

  return (
    <>

      {/* Barra de scroll oculta en todos los navegadores */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* wrapper que controla el scroll vertical */}
      <div
        ref={wrapperRef}
        className="relative w-full"
        style={{ height: `${images.length * 100}vh` }}
      >

        {/* sticky que contiene el carrusel */}
        <div className="sticky top-0 w-full bg-[#02283b] overflow-hidden">

          {/* CARRUSEL SCROLLEABLE NATIVO SIN BARRAS */}
          <div
            ref={contentRef}
            className="flex h-full overflow-x-auto overflow-y-hidden no-scrollbar items-center"
            style={{ width: "100%" }}
          >

            {/* Texto (restaurado exactamente como lo tenías) */}
            <div
              className="text-column flex-shrink-0 px-16 text-white max-[425px]:px-6 pt-4 max-[768px]:mt-[50px]"
              style={{
                width: "50vw",
                minWidth: "50vw"
              }}
            >
              <h2 className="font-bold text-4xl font-george mb-6 max-[769px]:text-3xl max-[425px]:mb-4 leading-tight">
                {title}
              </h2>
              <p className="text-xm leading-relaxed max-[426px]:text-base">
                {text}
              </p>
            </div>

            {/* Imágenes */}
            {images.map((src, index) => (
              <div
                key={index}
                className="flex justify-center flex-shrink-0 h-screen px-4 max-[425px]:px-2"
              >
                <div className="w-full flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Project ${index + 1}`}
                    className="w-full h-[85vh] max-[425px]:h-[70vh] object-cover rounded-lg pointer-events-none select-none"
                    draggable="false"
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
