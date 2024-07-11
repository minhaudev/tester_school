import Input from "@/components/atoms/Input/Input";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=SF+UI+Display:wght@400;700&display=swap"
        />
      </Head>
      <div className="font-sf-ui-display text-2xl font-bold">
        SF UI Display Font
      </div>
      <Input></Input>
    </>
  );
}
