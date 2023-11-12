const items = [
  { id: 1, name: "Item 1", price: 10 },
  { id: 2, name: "Item 2", price: 20 },
  { id: 3, name: "Item 3", price: 30 },
  { id: 4, name: "Item 4", price: 40 },
  { id: 5, name: "Item 5", price: 50 },
  { id: 6, name: "Item 6", price: 60 },
  { id: 7, name: "Item 7", price: 70 },
  { id: 8, name: "Item 8", price: 80 },
  { id: 9, name: "Item 9", price: 90 },
  { id: 10, name: "Item 10", price: 100 },
];

export default function CatalogPage() {
  return (
    <div className="catalog">
      <h1>Catalog Page</h1>
      <div className="grid">
        {items.map((item) => (
          <div key={item.id} className="item">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
