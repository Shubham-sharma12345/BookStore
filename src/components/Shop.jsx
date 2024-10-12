import list from '../list';
import Card from './Card';

const Shop = ({ onAddToCart }) => {
  return (
    <div className="p-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((item) => (
          <Card key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </section>
    </div>
  );
};

export default Shop;
