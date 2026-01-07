import localFont from "next/font/local";
import Link from "next/link";

const localFontRoot = localFont({
  src: "../../font-pacifico.ttf",
});

const localFontPublic = localFont({
  src: "../../public/font-pacifico.ttf",
});

const localFontSrc = localFont({
  src: "../font-pacifico.ttf",
});

const localFontApp = localFont({
  src: "./font-pacifico.ttf",
});

export default function Home() {
  return (
    <main className="container mx-auto space-y-4">
      <h1 className="text-3xl font-bold mt-20">
        Next.js Localfont demo using the{" "}
        <Link
          href="https://fonts.google.com/specimen/Pacifico"
          className="underline"
        >
          Pacifico
        </Link>{" "}
        font
      </h1>

      <p>
        Local font at /:{" "}
        <span className={localFontRoot.className}>Hello world</span>
      </p>
      <p>
        Local font at /public:{" "}
        <span className={localFontPublic.className}>Hello world</span>
      </p>
      <p>
        Local font at /src:{" "}
        <span className={localFontSrc.className}>Hello world</span>
      </p>
      <p>
        Local font at /src/app:{" "}
        <span className={localFontApp.className}>Hello world</span>
      </p>
    </main>
  );
}
