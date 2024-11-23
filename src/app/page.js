import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 text-center w-full max-w-screen-lg mx-auto">
        {/* <Image
          src="/next.svg"
          alt="Logo"
          width={100}
          height={100}
          className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto"
          priority
        /> */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">COMING SOON</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          We&apos;re working hard to bring you something amazing. Stay tuned for our upcoming code editor!
        </p>
        <div className="mt-2 sm:mt-4 flex gap-3 sm:gap-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-xs sm:text-sm md:text-base h-10 sm:h-12 px-4 sm:px-6"
            href="https://harsh-bharadiya.vercel.app/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
}
