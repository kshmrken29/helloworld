import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface Product {
  id: number;
  name: string;
  brand_name: string;
  category: string;
  price: number;
  stock_quantity: number;
  status: string;
}

interface ProductTableProps {
  products: Product[];
}

export default function ProductTable({ products}: ProductTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.brand_name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">₱{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.stock_quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ₱{product.status === 'Available' ? 'bg-green-100 text-green-800' : 
                    product.status === 'Out of Stock' ? 'bg-red-100 text-red-800' : 
                    'bg-gray-100 text-gray-800'}`}>
                  {product.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
         
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 