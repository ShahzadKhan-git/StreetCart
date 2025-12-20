import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}

export default function CategoryCard({ icon, title, subtitle }: CategoryCardProps) {
    return (
        <div className="group relative flex flex-col items-start p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer overflow-hidden transform hover:-translate-y-1">
            <div className="mb-4 text-green-500 transform group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                {title}
            </h3>
            <p className="mt-1 text-gray-500 text-sm">
                {subtitle}
            </p>

            {/* Decorative arrow logic or background could go here */}
        </div>
    );
}
