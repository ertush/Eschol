import Head from "next/head";
import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import Card from "../components/Card";
import { useRouter } from "next/router";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/solid";

function ThankYou() {
  const router = useRouter();

  const { sent, subscription } = router.query;
  return (
    <>
      <Head>
        <title>Eshcol Ventures Ltd | ThankYou </title>
        <meta name="viewport" content="initial-scale=0.8, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader />

      <div className="h-screen bg-secondary flex flex-col justify-evenly md:justify-start items-center">
        {/* Card */}

        <Card
          bgCardStyle={
            "md:bg-secondary-accent md:to-blue-700  -skew-y-3 -rotate-3"
          }
          cardStyle={"md:bg-gray-100 md:shadow-lg"}
          content={
            <div className="flex flex-col justify-evenly items-center h-[300px] md:h-auto">
              <h3 className=" text-primary pb-5 mt-16  md:mt-4 font-bold text-5xl h-auto w-full flex justify-center">
                {sent !== undefined || subscription !== undefined ? "Thank You" : "Oops !"}
              </h3>

              {sent !== undefined || subscription !== undefined ? (
                <CheckCircleIcon className="w-full h-28 md:h-32 text-center text-primary py-4" />
              ) : (
                <ExclamationCircleIcon className="w-full h-28 md:h-32 text-center text-primary py-4" />
              )}
              <div className="px-5 pb-1 md:pb-0 flex-grow">
                {subscription === undefined ? (
                  sent !== undefined ? (
                    <p className="md:text-xl w-ful h-full text-primary text-justify text-md font-medium md:leading-10 leading-8 md:w-[600px]">
                      {" "}
                      Thank you for reaching out your message has been sent
                      successfully{" "}
                    </p>
                  ) : (
                    <p className="md:text-xl w-ful h-full text-primary text-justify text-md font-medium md:leading-10 leading-8 md:w-[600px]">
                      {" "}
                      Encountered an error while sending your message. Please Try
                      Again{" "}
                    </p>
                  )
                ) : (
                  <h2 className="md:text-3xl text-xl font-semibold text-justify text-primary !!">
                    Your subscription is successfull
                  </h2>
                )}
              </div>
            </div>
          }
        />
      </div>
      <Footer />
    </>
  );
}

export default ThankYou;
