import { useState, useEffect } from "preact/hooks";

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Para controlar si está pausado
  const images = [
    "/AstroApp/bg1.jpg",
    "/AstroApp/bg2.jpg",
    "/AstroApp/bg3.jpg",
    "/AstroApp/bg4.jpg",
    "/AstroApp/bg5.jpg",
  ];

  function nextImage() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  useEffect(() => {
    if (isPaused) return; // Si el carrusel está pausado, no cambia la imagen

    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]); // El intervalo depende de si está pausado o no

  return (
    <div
      id="carousel"
      class="carousel relative w-full"
      style={{ height: "55vh", maxHeight: "700px" }}
      onMouseEnter={() => setIsPaused(true)} // Pausa el carrusel cuando el mouse está encima
      onMouseLeave={() => setIsPaused(false)} // Reanuda el carrusel cuando el mouse sale
    >
      {/* Botón de retroceder */}
      <button
        onClick={prevImage}
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-3xl font-bold text-white p-2 w-16 h-16 z-20  hover:bg-violet-800 active:bg-violet-900"
      >
        &lt;
      </button>

      {/* Botón de avanzar */}
      <button
        onClick={nextImage}
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-3xl font-bold text-white p-2 w-16 h-16 z-20 hover:bg-violet-800 active:bg-violet-900"
      >
        &gt;
      </button>

      {images.map((url, index) => (
        <img
          key={index}
          draggable="false"
          src={url}
          alt={`background ${index}`}
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 90%, calc(100% - 100px) 100%, 100px 100%, 0 90%)",
          }}
          class={`carousel-image absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out z-0 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
