import { Metadata } from "next"


export const metadata: Metadata = {
  title: "MyStiCa Privacy Policy",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://mystica.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/moughamir/mystica/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 flex items-center h-screen">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Privacy Policy
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non animi veniam est, sed ab pariatur fugiat vel. Odio dolore animi voluptatem delectus beatae ullam harum deserunt libero porro praesentium!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
