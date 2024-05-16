'use client'
import { Button } from "@/components/ui/button";
import { useGetSupplierInfoQuery } from "@/features/api/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Supplier({ s_id }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { data, error, isLoading } = useGetSupplierInfoQuery({ s_id: s_id }, { skip: !isOpen });

  const handleOpenModal = () => {
    const token = Cookies.get("authToken");
    if (token) {
      setIsOpen(true);
    } else {
      router.push(`/signin`);
    }
  };




  return (
    <>
      <div className="xl:col-span-4 2xl:col-span-3">
        <div className="border rounded-2xl p-6">
          <p className="text-xl font-bold text-primary-900 mb-2">
            Contact With Seller
          </p>
          <p className="text-base font-normal text-[#4D5156]">
            Choose how many product you want to purchase & get guaranteed
            discount.
          </p>
          <div className="flex items-center pt-8 mb-16">
            <div className="mr-3 w-10 h-10 flex-shrink-0 flex justify-center items-center">
              <svg
                width="32"
                height="31"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.7197 12.5289L5.16564 1.2508C4.13121 0.775617 2.96263 0.984655 2.11586 1.79606C1.26908 2.6076 0.914943 3.85793 1.19169 5.05924L3.60458 15.5335L1.19169 26.0079C0.914943 27.2092 1.26902 28.4595 2.1158 29.271C2.96418 30.0842 4.13306 30.2906 5.16564 29.8163L29.7197 18.5381C30.8377 18.0247 31.5322 16.8734 31.5322 15.5335C31.5322 14.1937 30.8377 13.0424 29.7197 12.5289ZM29.0362 16.7149L4.4822 27.9931C4.06928 28.1826 3.62104 28.1026 3.28301 27.7786C2.94504 27.4547 2.80922 26.9751 2.91966 26.4955L5.21753 16.5205H14.0779C14.5703 16.5205 14.9695 16.0786 14.9695 15.5335C14.9695 14.9884 14.5703 14.5465 14.0779 14.5465H5.21759L2.91966 4.57156C2.80922 4.09204 2.94504 3.61238 3.28301 3.28846C3.62099 2.96454 4.0691 2.8844 4.48214 3.07403L29.0362 14.3522C29.6975 14.6559 29.7489 15.3332 29.7489 15.5335C29.7489 15.7339 29.6975 16.4112 29.0362 16.7149Z"
                  fill="#01060D"
                  stroke="#01060D"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            {!isOpen && (
              <div>
                <p className=" font-normal text-base text-[#4D5156]">
                  Seller Name
                </p>
                <p className=" font-normal text-base text-[#4D5156]">
                  +88 0 XXXXXXXXXX
                </p>
              </div>
            )}
            {isOpen && (
              <div>
                <p className=" font-normal text-base text-[#4D5156]">
                  {data?.supplier_name}
                </p>
                <p className=" font-normal text-base text-[#4D5156]">
                  {data?.mobile}
                </p>
                <p className=" font-normal text-base text-[#4D5156]">
                  {data?.email}
                </p>
                <p className=" font-normal text-base text-[#4D5156]">
                  {data?.website}
                </p>
              </div>
            )}
          </div>

          <Button onClick={handleOpenModal} className={`w-full py-3 text-lg ${isOpen ? 'invisible' : 'visible'}`}>
            Request for Quotation
          </Button>
        </div>
      </div>
    </>
  );
}
