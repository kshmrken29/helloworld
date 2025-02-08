"use client";

import { useState } from "react";
import PageHeader from "@/components/admin/PageHeader";
import { FiBox, FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  generic_name: string;
  brand_name: string;
  category: string;
  price: number;
  stock_quantity: number;
  description: string;
  usage_instructions: string;
  side_effects: string;
  prescription_required: boolean;
  expiry_date: string;
  manufacturer: string;
  dosage: string;
  form: string;
  image_url: string;
  status: "Available" | "Out of Stock" | "Discontinued";
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Paracetamol",
    generic_name: "Acetaminophen",
    brand_name: "Tylenol",
    category: "Pain Relief",
    price: 9.99,
    stock_quantity: 100,
    description: "Pain reliever and fever reducer",
    usage_instructions: "Take as directed",
    side_effects: "Rare side effects include...",
    prescription_required: false,
    expiry_date: "2024-12-31",
    manufacturer: "Johnson & Johnson",
    dosage: "500mg",
    form: "Tablet",
    image_url: "/paracetamol.jpg",
    status: "Available",
  },
];

export default function ManageProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState(sampleProducts);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <PageHeader icon={FiBox} title="Manage Products" />
        <Button onClick={() => router.push("/admin/products/add")}>
          Add New Medicine
        </Button>
      </div>

      <Container>
        <Card>
          <div className="space-y-4">
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Search medicines..."
                className="w-full p-2 border rounded-md text-black"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {product.image_url && (
                            <img
                              className="h-10 w-10 rounded-full mr-3"
                              src={product.image_url}
                              alt={product.name}
                            />
                          )}
                          <div>
                            <div className="font-medium text-gray-900">
                              {product.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {product.brand_name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₱{product.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.stock_quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${
                            product.status === "Available"
                              ? "bg-green-100 text-green-800"
                              : product.status === "Out of Stock"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <FiEye className="h-5 w-5" />
                          </button>
                          <button className="text-indigo-600 hover:text-indigo-900">
                            <FiEdit2 className="h-5 w-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <FiTrash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
