import PageHeader from '@/components/admin/PageHeader';
import { FiEdit } from 'react-icons/fi';


export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <PageHeader icon={FiEdit} title="Edit Products (₱)" />
    </div>
  );
}