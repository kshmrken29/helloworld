import PageHeader from '@/components/admin/PageHeader';
import { FiBox } from 'react-icons/fi';

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <PageHeader icon={FiBox} title="Products" />

      <div className="text-black font-bold">
            Sample Product 1
      </div>
    </div>
  );
}
