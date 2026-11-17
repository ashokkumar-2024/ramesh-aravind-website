// Verified facts used by the dedicated info pages and their structured data.
// Career facts cross-checked against https://en.wikipedia.org/wiki/Ramesh_Aravind (Nov 2026).

export const BASE_URL = "https://www.ramesharavind.com"
export const PERSON_ID = `${BASE_URL}/#person`

export const references = [
  { label: "Wikipedia – Ramesh Aravind", href: "https://en.wikipedia.org/wiki/Ramesh_Aravind" },
  { label: "IMDb – Ramesh Aravind", href: "https://www.imdb.com/name/nm0712076/" },
  { label: "Official YouTube channel", href: "https://www.youtube.com/c/RameshAravindOfficial" },
  { label: "Official Instagram", href: "https://www.instagram.com/ramesh.aravind.official/" },
]

export const infoPages = [
  { href: "/ramesh-aravind-biography", label: "Biography" },
  { href: "/movies", label: "Movies & Filmography" },
  { href: "/director-portfolio", label: "Film Director" },
  { href: "/television-shows", label: "TV Shows" },
  { href: "/books", label: "Books" },
  { href: "/awards", label: "Awards & Honours" },
  { href: "/speaker-portfolio", label: "Motivational Speaker" },
  { href: "/producer-portfolio", label: "Producer" },
]

export const films = [
  { title: "Sundara Swapnagalu", year: "1986", language: "Kannada", role: "Actor (debut)", image: "/filmography/sundara-swapnagalu.png" },
  { title: "Rudraveena", year: "1988", language: "Telugu", role: "Actor (Telugu debut)", image: "/filmography/rudraveena.png" },
  { title: "Duet", year: "1994", language: "Tamil", role: "Actor", image: "/filmography/duet.png" },
  { title: "Sathi Leelavathi", year: "1995", language: "Tamil", role: "Actor", image: "/filmography/sathi-leelavathi.png" },
  { title: "America America", year: "1997", language: "Kannada", role: "Actor", image: "/America_America_.jpg" },
  { title: "Amrutha Varshini", year: "1997", language: "Kannada", role: "Actor", image: "/filmography/amrutha-varshini.png" },
  { title: "O Mallige", year: "1997", language: "Kannada", role: "Actor", image: "/filmography/o-mallige.png" },
  { title: "Nammoora Mandara Hoove", year: "1997", language: "Kannada", role: "Actor", image: "/filmography/nammoora-mandara-hoove.png" },
  { title: "Hoomale", year: "1998", language: "Kannada", role: "Actor, writer", image: "/filmography/hoomale.png" },
  { title: "Bhoomi Thayiya Chochhala Maga", year: "1998", language: "Kannada", role: "Actor", image: "/filmography/bhoomi-thayiya-chochhala-maga.png" },
  { title: "Kotigalu Saar Kotigalu", year: "2001", language: "Kannada", role: "Actor", image: "/filmography/kotigalu-saar-kotigalu.png" },
  { title: "Panchatanthiram", year: "2002", language: "Tamil", role: "Actor", image: "/filmography/pancha-tantra.jpg" },
  { title: "Apthamitra", year: "2004", language: "Kannada", role: "Actor", image: "/filmography/apta-mitra.jpg" },
  { title: "Rama Shama Bhama", year: "2005", language: "Kannada", role: "Director, actor", image: "/filmography/rama-shama-bhama.png" },
  { title: "Uttama Villain", year: "2015", language: "Tamil", role: "Director", image: "/filmography/uttama-villain.jpg" },
  { title: "Sundaranga Jaana", year: "2016", language: "Kannada", role: "Director", image: "/filmography/sundaranga-jaana.png" },
  { title: "Pushpaka Vimana", year: "2017", language: "Kannada", role: "Actor", image: "/filmography/pushpaka-vimana.jpg" },
  { title: "Shivaji Surathkal", year: "2020", language: "Kannada", role: "Actor", image: "/filmography/shivaji-surathkal.jpg" },
  { title: "100", year: "2021", language: "Kannada", role: "Director, actor", image: "/filmography/100.png" },
  { title: "Shivaji Surathkal 2", year: "2023", language: "Kannada", role: "Actor", image: "/filmography/shivaji-surathkal-2.jpg" },
  { title: "Bhairadevi", year: "2024", language: "Kannada", role: "Actor", image: "/Bhairadevi-Movie-2024-09-b3416bb2100155f6ddb413cc640ab220.webp" },
]

export const directedFilms = [
  { title: "Rama Shama Bhama", year: "2005", language: "Kannada" },
  { title: "Sathyavan Savithri", year: "2007", language: "Kannada" },
  { title: "Accident", year: "2008", language: "Kannada" },
  { title: "Venkata in Sankata", year: "2009", language: "Kannada" },
  { title: "Nammanna Don", year: "2012", language: "Kannada" },
  { title: "Uttama Villain", year: "2015", language: "Tamil" },
  { title: "Sundaranga Jaana", year: "2016", language: "Kannada" },
  { title: "100", year: "2021", language: "Kannada" },
]

export const awards = [
  { year: "1996–97", body: "Karnataka State Film Awards", category: "Best Actor", work: "America America" },
  { year: "1997", body: "Filmfare Awards South", category: "Best Actor – Kannada", work: "Amrutha Varshini" },
  { year: "1997", body: "Udaya Film Awards", category: "Best Actor", work: "O Mallige" },
  { year: "1997", body: "Screen Awards", category: "Best Actor – Kannada", work: "America America / Amrutha Varshini" },
  { year: "1998", body: "Filmfare Awards South", category: "Best Actor – Kannada", work: "Hoomale" },
  { year: "1998", body: "Filmfans Association Awards", category: "Best Actor", work: "Hoomale" },
  { year: "1999", body: "Filmfans Association Awards", category: "Best Actor", work: "Sambhrama" },
  { year: "1999", body: "Cinema Express Awards", category: "Best Actor", work: "Chandramukhi Pranasakhi" },
  { year: "2005", body: "Raghavendra Prathishtana Awards", category: "Best Story", work: "Amrithadhare" },
  { year: "2006", body: "Udaya Film Awards", category: "Best Debut Director", work: "Rama Shama Bhama" },
  { year: "2006", body: "Suvarna Film Awards", category: "Best Actor (comedy role)", work: "Rama Shama Bhama" },
  { year: "2024", body: "Chandanavana Film Critics Academy Awards", category: "Best Actor", work: "Shivaji Surathkal 2" },
]

export const honours = [
  { year: "2015", name: "Pride of Zee Kannada", detail: "Zee Kutumba Awards" },
  { year: "2018", name: "Nadaprabhu Kempegowda Award", detail: "" },
  { year: "2022", name: "Honorary Doctorate", detail: "Rani Channamma University, Belagavi, for his contribution to cinema" },
  { year: "", name: "Dr. Shivarama Karanth Award", detail: "" },
]

export const books = [
  { title: "It's No Fun Without U", language: "English", image: "/Its-no-Fun.jpg", description: "Inspirational stories and life lessons." },
  { title: "Art of Success", language: "Kannada", image: "/Art-of-Success.jpg", description: "A bestselling collection of his quotes on success and life." },
  { title: "Preetiyinda Ramesh", language: "Kannada", image: "/preethiyinda.webp", description: "His best-known book, which went through five editions in five months." },
  { title: "Anbudan Ramesh", language: "Tamil", image: "/Tamil Anbudhan ramesh.webp", description: "Tamil translation of Preetiyinda Ramesh, published in 2024." },
]

export const tvShows = [
  { title: "Weekend With Ramesh", channel: "Zee Kannada", role: "Host", period: "Seasons 1–5", image: "/tv showsss/1.png", description: "Celebrity talk show in which achievers from cinema, sport, business and public life revisit their life stories." },
  { title: "Kannadada Kotyadhipati", channel: "Star Suvarna", role: "Host", period: "Season 3", image: "/Ramesh Aravind (1).png", description: "The Kannada version of Who Wants to Be a Millionaire." },
  { title: "Mahanati", channel: "Zee Kannada", role: "Judge (Maha Guru)", period: "2024", image: "/tv showsss/Mahanati.png", description: "Acting talent show searching for the next great actress." },
  { title: "Raja Rani", channel: "", role: "Host", period: "", image: "/tv showsss/rajarani.png", description: "Entertainment game show for celebrity couples." },
  { title: "Preetiyinda Ramesh", channel: "", role: "Host", period: "", image: "/tv showsss/preetuyinda ramesh.png", description: "Show in which he shares stories and life lessons with audiences." },
  { title: "Parichaya", channel: "DD Kannada (Doordarshan)", role: "Host", period: "", image: "", description: "Interview programme on Doordarshan." },
]

export const producedShows = [
  { title: "Supernatural Fiction", channel: "Udaya TV", period: "2019–2020" },
  { title: "Sundari", channel: "Udaya TV", period: "2021–2023" },
  { title: "Neenadena", channel: "Star Suvarna", period: "2023–present" },
  { title: "Aase", channel: "Star Suvarna", period: "2023–present" },
]
