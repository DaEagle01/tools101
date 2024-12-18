import AuthImage from "@/components/auth/AuthImage";
import SiteLogo from "@/components/common/SiteLogo";
import "@smastrom/react-rating/style.css";
import "../globals.css";
import ReCaptchaProvider from "@/components/reCaptchaProvider/ReCaptchaProvider";

export default function Layout({ children }) {
  return (
    <ReCaptchaProvider>
      <main className="min-h-screen relative">
        <SiteLogo />
        <div className="grid grid-cols-1 md:grid-cols-10">
          <div className="md:col-span-6 flex justify-center items-center border-1 border-red-500">
            <div className="w-full">
              <div className="w-full 2xl:px-[340px] xl:px-56 lg:px-36 md:px-20 sm:px-20 px-10">
                {children}
              </div>
            </div>
          </div>
          <AuthImage />
        </div>
      </main>
    </ReCaptchaProvider>
  );
}
