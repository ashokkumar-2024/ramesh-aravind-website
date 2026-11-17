import type { Metadata } from "next"
import { InfoPage } from "@/components/info-page"
import { BASE_URL, PERSON_ID, directedFilms } from "@/lib/site-facts"

const PATH = "/ramesh-aravind-biography"
const DESCRIPTION =
  "Biography of Dr Ramesh Aravind: Indian actor of 140+ films since 1986, director of Rama Shama Bhama and Uttama Villain, host of Weekend With Ramesh, author and motivational speaker."

export const metadata: Metadata = {
  title: "Biography",
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}${PATH}` },
  openGraph: { title: "Biography | Dr Ramesh Aravind", description: DESCRIPTION, url: `${BASE_URL}${PATH}`, images: ["/Ra7.jpg"], type: "profile" },
}

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BASE_URL}${PATH}#webpage`,
  url: `${BASE_URL}${PATH}`,
  name: "Biography of Dr Ramesh Aravind",
  description: DESCRIPTION,
  inLanguage: "en",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  mainEntity: { "@id": PERSON_ID },
  dateModified: "2026-11-17",
}

export default function BiographyPage() {
  return (
    <InfoPage
      path={PATH}
      title="Dr Ramesh Aravind – Biography"
      schema={[profileSchema]}
      intro={
        <p>
          <strong>Dr Ramesh Aravind</strong> is an Indian actor, film director, screenwriter, television host, author and
          motivational speaker. He has acted in more than 140 films in Kannada, Tamil, Telugu and Hindi since his debut in
          1986. He is widely known for hosting the Kannada talk show <em>Weekend With Ramesh</em> on Zee Kannada and for
          directing films such as <em>Rama Shama Bhama</em>, <em>Uttama Villain</em> and <em>100</em>.
        </p>
      }
    >
      <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">
        <section>
          <h2 className="text-2xl font-bold mb-3">Quick facts</h2>
          <dl className="grid grid-cols-[140px_1fr] gap-y-2 gap-x-4 text-[15px]">
            <dt className="font-semibold">Full name</dt><dd>Dr Ramesh Aravind</dd>
            <dt className="font-semibold">Born</dt><dd>10 September 1964, Kumbakonam, Tamil Nadu, India</dd>
            <dt className="font-semibold">Based in</dt><dd>Bengaluru, Karnataka</dd>
            <dt className="font-semibold">Occupations</dt><dd>Actor, director, screenwriter, TV host, author, motivational speaker, producer</dd>
            <dt className="font-semibold">Active since</dt><dd>1986</dd>
            <dt className="font-semibold">Languages</dt><dd>Kannada, Tamil, Telugu, Hindi, English</dd>
            <dt className="font-semibold">Honorary doctorate</dt><dd>Rani Channamma University, Belagavi (2022)</dd>
          </dl>
        </section>
        <img src="/Ra7.jpg" alt="Portrait of Dr Ramesh Aravind" loading="lazy" className="w-full rounded-2xl shadow-lg" />
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-3">Early career</h2>
        <p>
          Ramesh Aravind made his film debut in the Kannada film <em>Sundara Swapnagalu</em> (1986). He followed it with his
          Tamil debut, <em>Manathil Uruthi Vendum</em> (1987), and his Telugu debut, <em>Rudraveena</em> (1988). Through the
          late 1980s and 1990s he became known across South Indian cinema for sensitive, family-centred roles.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Leading actor in Kannada cinema</h2>
        <p>
          In the 1990s he starred in some of the most loved Kannada films of the decade, including <em>America America</em>,
          <em> Amrutha Varshini</em>, <em>O Mallige</em> and <em>Hoomale</em>. These roles won him the Karnataka State Film
          Award for Best Actor and two Filmfare Awards South for Best Actor – Kannada. Later work includes
          <em> Pushpaka Vimana</em> (2017), the detective films <em>Shivaji Surathkal</em> (2020) and
          <em> Shivaji Surathkal 2</em> (2023), and <em>Bhairadevi</em> (2024). See the full list on the{" "}
          <a href="/movies" className="underline underline-offset-2">movies page</a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Film director</h2>
        <p>
          He moved into direction with <em>Rama Shama Bhama</em> (2005), which won him the Udaya Film Award for Best Debut
          Director. In all he has directed {directedFilms.length} feature films in Kannada and Tamil, including
          <em> Accident</em> (2008), the Tamil film <em>Uttama Villain</em> (2015) starring Kamal Haasan, and the thriller
          <em> 100</em> (2021). More on the <a href="/director-portfolio" className="underline underline-offset-2">director page</a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Television</h2>
        <p>
          On television he hosted five seasons of <em>Weekend With Ramesh</em> on Zee Kannada, a celebrity talk show that
          revisits the life journeys of achievers. He also hosted the third season of <em>Kannadada Kotyadhipati</em>, the
          Kannada version of <em>Who Wants to Be a Millionaire</em>, and was a judge on <em>Mahanati</em> (2024). See all{" "}
          <a href="/television-shows" className="underline underline-offset-2">TV shows</a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Author and motivational speaker</h2>
        <p>
          He is the author of <em>Art of Success</em> and the bestseller <em>Preetiyinda Ramesh</em>, which went through five
          editions in five months, among other <a href="/books" className="underline underline-offset-2">books</a>. He speaks
          in English, Kannada and Tamil at corporate events, colleges and conferences on personal growth, leadership and
          success. To book him, see the{" "}
          <a href="/speaker-portfolio" className="underline underline-offset-2">motivational speaker page</a>.
        </p>
      </section>
    </InfoPage>
  )
}
