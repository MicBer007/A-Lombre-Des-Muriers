const restaurantImages = [
  "capture-decran-2025-11-10-18-56-47.webp",
  "capture-decran-2025-11-10-18-57-34.webp",
  "capture-decran-2025-11-10-18-57-51.webp",
  "capture-decran-2025-11-10-18-58-09.webp",
];

export default function Restauration() {
  return (
    <main className="restaurant-page">
      <h2 className="textheading2 mobile-oversized">
        Restaurants dans les environs d&apos;Anduze
      </h2>
      {restaurantImages.map((image, index) => (
        <img
          key={image}
          src={`/assets/${image}`}
          alt={`Restaurants autour d’Anduze — liste ${index + 1}`}
          width="1050"
          height={index === 3 ? 331 : 343}
        />
      ))}
    </main>
  );
}
