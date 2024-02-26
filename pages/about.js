import Skills from "../components/Skills";
import Head from "next/head";

const About = () => {
  return (
    <div className="h-screen  font-mono">
      <Head>
        <title>About | Hasan Yurdakul </title>
      </Head>
      <div className="flex justify-start ml-8 mr-8 md:ml-0 pt-20">
        <div className="flex flex-col  md:ml-8  mt-10 max-w-lg">
          <div className="flex flex-col ">
            <p
              className="prose-sm 
               flex-wrap "
            >
              Merhaba! Ben Hasan Yurdakul.Şu anda kendini yetiştirmeye devam
              eden bir yazılımcı adayıyım. 26 yaşındayım ve İstanbul'da
              yaşıyorum. Lisans eğitimimi inşaat mühendisliği üzerine Sakarya
              Üniversitesinde aldım. olan Lisans eğitimimi tamamladıktan sonra
              disiplin değiştirerek Eskişehir Anadolu Üniversitesi Bilgisayar
              Programcılığı bölümünde eğitimime tekrar başladım. Eş zamanlı
              olarak Bahçeşehir Üniversitesi Wissen Akademie tarafından verilen
              Full Stack Web Development eğitimini de alıyorum ve bu alanda
              kendimi geliştirmek için yoğun bir şekilde çalışıyorum.
            </p>
          </div>
          <div className="mt-10">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
