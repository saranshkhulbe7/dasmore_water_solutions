import endpoints from "@/api/endpoints";
import ProductCard from "@/components/smart-agri/ProductCard";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";

export type Product = {
  _id: string;
  heroImage: string;
  name: string;
  price: 23;
  short_description: string;
  detail_description: string;
  faqs: {
    question: string;
    answer: string;
    _id: string;
  }[];
  assets: string[];
};
export default function ProductPage() {
  const { data, isLoading } = useApiQuery(endpoints.products.all);

  const products = useMemo(() => data?.data?.data, [data]);
  console.log("data", products);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  if (!products) {
    return <div>no data</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video */}
      <div className="relative h-[50vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/grid3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-stone-900/25 to-stone-900" />

        <h1 className="relative h-full flex items-center justify-center text-4xl md:text-6xl font-bold text-white mb-4">
          Products
        </h1>
      </div>

      {/* Products Grid */}
      <div className="px-8 md:px-16 py-16 mb-28 xs:mb-20 md:mb-36 lg:mb-52">
        <div className="w-full flex justify-center">
          <div className="max-w-5xl w-full grid justify-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products?.map((product: Product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
