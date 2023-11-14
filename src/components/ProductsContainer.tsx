type Props = {
  products: {
    title: string;
    price: string;
  }[];
};

export default function ProductsContainer({ products }: Props) {
  return (
    <div className="">
      {products.map((product) => (
        <div key={product.title}>
          <h1>{product.title}</h1>
          <h1>{product.price}</h1>
        </div>
      ))}
    </div>
  );
}
