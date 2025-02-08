import { FiShoppingBag, FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import { ReactNode } from 'react';

interface PageHeaderProps {
    icon: ReactNode;
    title: string;
}

export default function Dashboard() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-black">Dashboard</h1>
          <p className="text-sm md:text-base text-[#666666]">Everything here</p>
        </div>
      </div>
    </div>
  );
}