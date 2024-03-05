import ApiUseClient from "../components/Api";

export const metadata = {
  title: "About",
};
export default function About() {
  return (
    <>
      <section className="flex justify-center items-center text-center py-10 flex-col">
        <div className="text-5xl font-bold py-8">About</div>
        <p className="text-[20px] w-[70%]">
          The Lorem ipum filling text is used by graphic designers, programmers
          and printers with the aim of occupying the spaces of a website, an
          advertising product or ....
        </p>
      </section>
    </>
  );
}
