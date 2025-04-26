import { useParams } from "react-router";
import { useEffect, useMemo, useState } from "react";
import { ShoppingCart, Phone, CheckCheck } from "lucide-react";
import endpoints from "@/api/endpoints";
import { useApiQuery } from "@/hooks/useApiQuery";
import { RichTextPreview } from "@/components/common/Preview";
import { Button } from "@/components/ui/button";
import { Product } from ".";
import ProductCard from "@/components/smart-agri/ProductCard";
import { useCartStore } from "@/stores/cart.store";

const SpecificProduct = () => {
  const { id } = useParams();
  const { itemExistInCart, addToCart } = useCartStore();
  const { data: dataAll, isLoading } = useApiQuery(endpoints.products.all);
  const { data: dataOne } = useApiQuery(endpoints.products.one(id as string));

  const productAll = useMemo(() => dataAll?.data?.data, [dataAll]);
  const product = useMemo(() => dataOne?.data?.data, [dataOne]);

  const allImages = useMemo(
    () => (product ? [product.heroImage, ...(product.assets || [])] : []),
    [product]
  );

  const [selectedImage, setSelectedImage] = useState(product?.heroImage);

  // Update selected img
  useEffect(() => {
    if (product?.heroImage) {
      setSelectedImage(product.heroImage);
    }
  }, [product]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1d4dfe]"></div>
      </div>
    );
  }

  if (!product || !id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Product not found</div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Thumbnail Gallery */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible">
            {allImages?.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`relative w-[6rem] h-[6rem] m-1 flex-shrink-0 rounded-xl overflow-hidden ${
                  selectedImage === image
                    ? "ring-2 ring-[#1d4dff]"
                    : "ring-1 ring-gray-200"
                }`}
              >
                <img
                  src={image}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Main Image */}
        <div className="lg:col-span-5 order-1 lg:order-2 overflow-y-scroll">
          <figure className="rounded-xl overflow-hidden">
            <img
              src={selectedImage}
              alt={product?.name}
              className="w-full h-full object-cover"
            />
          </figure>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-4 order-3">
          <h1 className="text-3xl font-bold">{product?.name ?? ""}</h1>
          <p className="mt-4 ">{product?.short_description ?? ""}</p>
          <p className="mt-2 text-2xl">₹ {product?.price ?? 0}</p>
          <div className="mt-8 flex items-center gap-4">
            {itemExistInCart(id as string) ? (
              <p className="rounded-full bg-blue-300 text-blue-800 px-4 py-2 text-center min-w-32 justify-center text-sm font-semibold">
                <span className="translate-x-[5px] flex items-center gap-2">
                  <CheckCheck size={20} />
                  Added
                </span>
              </p>
            ) : (
              <Button
                className="w-full rounded-full px-4 py-2"
                onClick={() => {
                  addToCart(product as Product);
                }}
              >
                <ShoppingCart size={20} />
                Add to Cart
              </Button>
            )}

            <Button
              variant="secondary"
              className="w-full rounded-full px-4 py-2"
            >
              <Phone size={20} />
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="my-16 lg:my-32  text-center">
        <h2 className="text-3xl text-gray-900 mb-6 ">Product Features</h2>
        <RichTextPreview content={product?.detail_description ?? ""} />
      </div>

      <div className="space-y-10">
        <h2 className="text-3xl text-center mb-7">You may also like</h2>

        <div className="w-full flex justify-center">
          <div className="max-w-full w-full grid justify-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {productAll
              ?.filter((product: Product) => product?._id !== id)
              ?.map((product: Product) => {
                return <ProductCard key={product._id} product={product} />;
              })}
          </div>
        </div>
      </div>
      {/* FAQs Section */}
      {/* {product.faqs?.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {product?.faqs.map((faq) => (
                <div key={faq._id}>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )} */}
    </section>
  );
};

export default SpecificProduct;
