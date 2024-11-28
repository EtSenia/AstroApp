import { useState, useEffect } from "preact/hooks";

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/AstroApp/bg1.jpg",
    "/AstroApp/bg2.jpg",
    "/AstroApp/bg3.jpg",
    "/AstroApp/bg4.jpg",
    "/AstroApp/bg5.jpg",
  ];

  // Maneja el cambio de imagen
  function nextImage() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  // Inicia el carrusel cuando el componente se monta
  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Cambia la imagen cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <div id="carousel" class="carousel relative w-full" style={{ height: "55vh", maxHeight: "700px" }}>
      {images.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`background ${index}`}
          class={`carousel-image absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out z-0 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}
