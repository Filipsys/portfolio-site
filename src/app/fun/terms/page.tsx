export default function Terms() {
  return (
    <div>
      <main
        className="text-black h-dvh w-full flex justify-center pt-48"
        id="main"
        style={{
          backgroundImage: "url(/background4.webp)",
          backgroundSize: "15vw",
        }}
      >
        <div className="bg-white w-7xl [font-family:serif] flex flex-col h-full [box-shadow:_0px_0px_50px_30px_rgba(255,_255,_255,_1)]">
          <p className="text-center text-7xl">Terms and conditions</p>

          <p className="text-3xl">
            As a professional brand, we try to make everything benefit everyone.
            This is why we have created a set of rules for our new ToS to better
            connect our clients to our brand. Our clients' privacy and
            protection is our highest priority.
            <br />
            <br />
            1. By agreeing to use our site, you willingly allow us to collect
            all of your data, included but not only: First and last name, age,
            date of birth, device type, device OS, ISP name, house address, and
            many others.
            <br />
            2. By navigating around our site, you willingly allow us to scrape
            mouse movement data, as well as keyboard input, live webcam feedback
            and microphone access.
            <br />
            3. You are obligated to verify your identity according to UK's
            Online Safety Act. You may use any of the example documents, to
            verify yourself: personal passport, ID, driver's license, credit or
            debit card, visas, or any other sensitive information.
          </p>
        </div>
      </main>
    </div>
  );
}
