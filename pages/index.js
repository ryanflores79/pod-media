import Head from "next/head";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const videoUrl =
  "https://cdn.shopify.com/videos/c/o/v/ae2b22ae692446cd9c640cfafbc36e74.mp4";
const vipUrl = "https://payableondeath.com/pages/vip";

export default function Home() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://pod-media-157445274352.us-central1.run.app"
  ).replace(/\/$/, "");
  const pageUrl = baseUrl || "https://pod-media-157445274352.us-central1.run.app";
  const ogImage = "https://cdn.shopify.com/s/files/1/0811/6610/6937/files/pod-media-1-poster.png?v=1760635288";
  const title = "P.O.D. Tour Update – VIP Packages Still Available";
  const description =
    "P.O.D. check in from the road with a tour update, sharing laughs about life on the bus and how many cups of coffee Sonny crushes every morning. Watch the exclusive video and grab the remaining VIP packages before they’re gone.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="video.other" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:video" content={videoUrl} />
        <meta property="og:video:secure_url" content={videoUrl} />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1920" />
        <meta property="og:video:height" content="1080" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="P.O.D. Tour Update video still" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:site" content="@POD" />
      </Head>
      <div
        className={`${geistSans.className} font-sans min-h-screen bg-neutral-950 text-white flex flex-col items-center px-6 py-12`}
      >
        <main className="w-full max-w-4xl flex flex-col gap-10">
          <header className="text-center space-y-4">
            <span className="inline-block uppercase tracking-[0.3em] text-xs text-amber-400">
              Tour Update
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold">
              Exclusive Road Report from P.O.D.
            </h1>
            <p className="text-base sm:text-lg text-neutral-300">
              The crew checked in between shows to share how the run is going,
              swap stories from the bus, and tally just how many cups of coffee
              Sonny powers through before soundcheck.
            </p>
          </header>

          <section className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-neutral-800/60">
            <video
              controls
              playsInline
              autoPlay
              preload="metadata"
              poster="/pod-tour-update-og.png"
              className="w-full aspect-video bg-black"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>

          <section className="flex flex-col gap-6 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">
                Meet &amp; greet with the band at the show
              </h2>
              <p className="text-neutral-300">
                VIP packages are still on the table. Lock in your meet &amp;
                greet and early merch access while they last.
              </p>
            </div>
            <a
              href={vipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-base font-semibold text-black transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            >
              Get VIP Packages
            </a>
          </section>

          <footer className="border-t border-neutral-800 pt-6 text-neutral-500 text-sm text-center">
            Thanks for riding with P.O.D.—see you in the pit.
          </footer>
        </main>
      </div>
    </>
  );
}
