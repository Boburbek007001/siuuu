import { Article } from './data';

/* 
  Huge list of medical topics in Uzbek to simulate a comprehensive Medline-like database.
  In a real app, this would come from a database.
*/

export interface Disease {
  id: string;
  name: string;
  category: string;
}

const categories = [
  "Yurak va Qon-tomir",
  "Nafas Yo'llari",
  "Oshqozon-Ichak",
  "Nerv Tizimi",
  "Teri Kasalliklari",
  "Endokrin Tizim",
  "Suyak va Bo'g'imlar",
  "Ko'z Kasalliklari",
  "Yuqumli Kasalliklar",
  "Bolalar Kasalliklari",
  "Ayollar Salomatligi",
  "Erkaklar Salomatligi",
  "Ruhiy Salomatlik"
];

// Advice templates based on category
const getAdviceByCategory = (category: string, name: string) => {
  switch(category) {
    case "Yurak va Qon-tomir":
      return {
        advice: `
          <h3>❤️ Yurak salomatligini saqlash bo'yicha to'liq qo'llanma:</h3>
          
          <h4>1. Oziqlanish tartibi (DASH dietasi):</h4>
          <ul>
            <li><strong>Tuzni cheklash:</strong> Kuniga 5 grammdan (bir choy qoshiq) oshirmang. Tuz qon bosimini oshiruvchi asosiy omildir.</li>
            <li><strong>Yog'lar:</strong> Hayvon yog'laridan (charvi, sariyog') o'simlik yog'lariga (zaytun, zig'ir) o'ting. Trans-yog'lardan (margarin, fast-food) butunlay voz keching.</li>
            <li><strong>Kaliy va Magniy:</strong> Ushbu elementlarga boy mahsulotlarni (banan, o'rik qoqisi, yong'oqlar, ismaloq) ko'paytiring. Ular yurak mushaklarini mustahkamlaydi.</li>
            <li><strong>Baliq:</strong> Haftasiga kamida 2 marta yog'li baliq iste'mol qiling (Omega-3 manbai).</li>
          </ul>

          <h4>2. Jismoniy faollik:</h4>
          <ul>
            <li>Haftasiga kamida 150 daqiqa o'rtacha tezlikda piyoda yurish yoki 75 daqiqa yugurish tavsiya etiladi.</li>
            <li>Harakat davomida pulsni nazorat qiling. Me'yordan oshib ketmasligi kerak.</li>
            <li>Lift o'rniga zinadan foydalanishni odat qiling.</li>
          </ul>

          <h4>3. Zararli odatlar va Stress:</h4>
            <li>Chekish tomirlarni toraytiradi va infarkt xavfini 2 barobar oshiradi. Tashlash uchun bugunoq harakat qiling.</li>
            <li>Stress paytida chuqur nafas olish mashqlarini bajaring (4 soniya nafas olish, 4 soniya ushlab turish, 4 soniya chiqarish).</li>
            <li>Uyqu rejimi: Kuniga 7-8 soat uxlash qon bosimini normallashtirishga yordam beradi.</li>
        `,
        medicines: ["Kardiomagnil (Qon suyultiruvchi)", "Konkor (Pulsni nazorat qilish)", "Lozap (Bosim tushiruvchi)", "Prestarium (Tomir kengaytiruvchi)", "Panangin (Kaliy va Magniy)", "Atorvastatin (Xolesterin uchun)"]
      };
    case "Nafas Yo'llari":
      return {
        advice: `
          <h3>🫁 Nafas yo'llarini himoya qilish va tiklash:</h3>
          
          <h4>1. Atrof-muhit va havo:</h4>
          <ul>
            <li><strong>Namlik:</strong> Xonadagi havo namligini 40-60% oralig'ida saqlang. Quruq havo nafas yo'llarini ta'sirlantiradi. Maxsus namlagich (uvlajnitel) ishlating.</li>
            <li><strong>Shamollatish:</strong> Xonani kuniga kamida 2-3 marta 15 daqiqadan shamollating, ayniqsa uyqudan oldin.</li>
            <li><strong>Changdan saqlanish:</strong> Gilam va yumshoq o'yinchoqlarni kamaytiring, ular chang yig'uvchi manbalardir.</li>
          </ul>

          <h4>2. Nafas mashqlari:</h4>
          <ul>
            <li><strong>Diafragmal nafas:</strong> Qorin bilan chuqur nafas olish o'pkaning pastki qismlarini ham havo bilan to'ldiradi.</li>
            <li><strong>Pufak shishirish:</strong> O'pka hajmini oshirish uchun oddiy sharlar shishirish foydali.</li>
            <li><strong>Strelnikova mashqlari:</strong> Maxsus nafas gimnastikasi bronxlarni tozalashga yordam beradi.</li>
          </ul>

          <h4>3. Qo'shimcha tavsiyalar:</h4>
            <li>Ko'proq iliq suyuqlik (na'matak damlamasi, asal va limonli choy) iching. Bu balg'amni suyultiradi.</li>
            <li>Tuzli xonalarga (galoterapiya) borish nafas yo'llari immunitetini oshiradi.</li>
        `,
        medicines: ["Ambroksol (Balg'am ko'chiruvchi)", "Mukaltin (Yumshatuvchi)", "Azitromitsin (Antibiotik)", "Sinekod (Yo'talga qarshi)", "Ingalipt (Sprey)", "Seretid (Ingalyator)"]
      };
    case "Oshqozon-Ichak":
      return {
        advice: `
          <h3>🥗 Oshqozon-ichak faoliyatini yaxshilash dasturi:</h3>
          
          <h4>1. Ovqatlanish qoidalari:</h4>
          <ul>
            <li><strong>Tez-tez va kam-kam:</strong> Kuniga 3 marta ko'p ovqatlanish o'rniga, 5-6 marta oz-ozdan ovqatlaning.</li>
            <li><strong>Chayish:</strong> Ovqatni shoshilmasdan, yaxshilab chaynab yuting. Bu hazm qilishni og'izdanoq boshlaydi.</li>
            <li><strong>Harorat:</strong> Juda issiq yoki juda sovuq ovqat iste'mol qilmang. Xona haroratidagi ovqat eng maqbulidir.</li>
          </ul>

          <h4>2. Taqiqlangan mahsulotlar:</h4>
          <ul>
            <li>Gazli shirin ichimliklar, energetiklar.</li>
            <li>Qovurilgan, dudlangan va juda achchiq taomlar.</li>
            <li>Yangi yopilgan issiq non (bir kun turgan non foydaliroq).</li>
            <li>Fast-food va yarim tayyor mahsulotlar.</li>
          </ul>

          <h4>3. Foydali odatlar:</h4>
            <li>Ertalab och qoringa bir stakan iliq suv iching (oshqozonni yuvish uchun).</li>
            <li>Kechki ovqatni yotishdan kamida 3 soat oldin tanovul qiling.</li>
            <li>Ovqatdan keyin darhol yotmang, 15-20 daqiqa sekin yurish hazm qilishni yaxshilaydi.</li>
        `,
        medicines: ["Mezim/Festal (Fermentlar)", "Almagel (Kislotalikni kamaytirish)", "Omeprazol (Oshqozon himoyasi)", "Kreon (Hazm qilish)", "Lineks/Enterojermina (Probiotiklar)", "Dufalak (Qabziyatda)"]
      };
    case "Nerv Tizimi":
      return {
        advice: `
          <h3>🧠 Asab tizimini tinchlantirish va mustahkamlash:</h3>
          
          <h4>1. Uyqu gigienasi:</h4>
          <ul>
            <li>Har kuni bir vaqtda yotib, bir vaqtda turishga harakat qiling.</li>
            <li>Yotishdan 1 soat oldin telefon va televizordan voz keching. Moviy nur melatonin (uyqu gormoni) ishlab chiqarishni to'xtatadi.</li>
            <li>Xona qorong'u va salqin (18-20°C) bo'lishi kerak.</li>
          </ul>

          <h4>2. Stressni boshqarish:</h4>
          <ul>
            <li><strong>Meditatsiya:</strong> Kuniga 10-15 daqiqa tinch o'tirib, faqat nafas olishga e'tibor qarating.</li>
            <li><strong>Jismoniy faollik:</strong> Yugurish yoki suzish paytida "baxt gormonlari" (endorfinlar) ishlab chiqariladi.</li>
            <li><strong>Magniy vannalari:</strong> Kechqurun ingliz tuzi (Epsom salt) qo'shilgan iliq vanna qabul qilish asablarni bo'shashtiradi.</li>
          </ul>

          <h4>3. Oziqlanish:</h4>
            <li>B guruhi vitaminlariga boy mahsulotlarni (tuxum, yong'oq, dukkaklilar) ko'paytiring.</li>
            <li>Kofeinni (kofe, achchiq choy) tushdan keyin cheklang.</li>
        `,
        medicines: ["Magniy B6 (Tinchlantiruvchi)", "Novopassit (O'tli tinchlantiruvchi)", "Glitsin (Miya faoliyati)", "Valeriana (Uyqu uchun)", "Afobazol (Xavotirga qarshi)", "Tenoten (Stressga qarshi)"]
      };
    case "Teri Kasalliklari":
      return {
        advice: `
          <h3>✨ Teri parvarishi va sog'lomlashtirish:</h3>
          
          <h4>1. Kundalik parvarish:</h4>
          <ul>
            <li><strong>Tozalash:</strong> Terini kuniga 2 marta yumshoq vositalar bilan yuving. Oddiy sovun terini quritib yuborishi mumkin.</li>
            <li><strong>Namlantirish:</strong> Har yuvinishdan keyin namlantiruvchi krem ishlating.</li>
            <li><strong>Quyoshdan himoya:</strong> Yozda ham, qishda ham SPF kremlaridan foydalaning. Quyosh nuri terining erta qarishi va kasalliklariga sabab bo'ladi.</li>
          </ul>

          <h4>2. Oziqlanish va Suv:</h4>
          <ul>
            <li>Kuniga kamida 2 litr toza suv iching. Suvsiz teri quruq va nursiz bo'lib qoladi.</li>
            <li>Shirinlik va un mahsulotlarini kamaytiring – ular husnbuzar (akne) paydo bo'lishiga olib keladi.</li>
            <li>A va E vitaminlariga boy mahsulotlarni (sabzi, o'simlik yog'i, yong'oqlar) iste'mol qiling.</li>
          </ul>

          <h4>3. Kiyim va Matolar:</h4>
            <li>Sintetik kiyimlardan voz keching, ular terini "nafas olishiga" to'sqinlik qiladi.</li>
            <li>Tabiiy paxta va zig'ir matolaridan tikilgan kiyimlarni tanlang.</li>
        `,
        medicines: ["Sinaflan (Yallig'lanishga qarshi)", "Levomekol (Yara bitkazuvchi)", "Pantenol (Tiklovchi)", "Zirtek/Suprastin (Allergiya)", "Salitsil kislotasi (Akne)", "Klotrimazol (Zamburug'ga qarshi)"]
      };
    default:
      return {
        advice: `
          <h3>🛡️ Umumiy salomatlik va immunitetni mustahkamlash:</h3>
          
          <h4>1. Sog'lom turmush tarzi asoslari:</h4>
          <ul>
            <li><strong>Harakat:</strong> Kuniga kamida 10,000 qadam yurishni maqsad qiling. Harakatsizlik – ko'plab kasalliklarning boshidir.</li>
            <li><strong>Suv rejimi:</strong> Tana vaznining har 1 kg uchun 30 ml suv ichish kerak (masalan, 70 kg odam uchun 2.1 litr).</li>
            <li><strong>Zararli odatlar:</strong> Chekish va spirtli ichimliklardan butunlay voz keching.</li>
          </ul>

          <h4>2. Tibbiy nazorat:</h4>
          <ul>
            <li>Yilda bir marta to'liq tibbiy ko'rikdan (Check-up) o'ting.</li>
            <li>Qon tahlili, qand miqdori va xolesterinni tekshirtirib turing.</li>
            <li>O'z-o'zini davolash bilan shug'ullanmang, har doim mutaxassis bilan maslahatlashing.</li>
          </ul>

          <h4>3. Ruhiy holat:</h4>
            <li>Ijobiy fikrlashga harakat qiling. Surunkali stress immunitetni tushiradi.</li>
            <li>Yaqinlar bilan vaqt o'tkazish va sevimli mashg'ulot (xobbi) bilan shug'ullanish ruhiy quvvat beradi.</li>
        `,
        medicines: ["Paratsetamol (Isitma/Og'riq)", "Ibuprofen (Yallig'lanish)", "Vitamin C (Immunitet)", "Vitamin D3 (Suyaklar)", "Kompleks Vitaminlar"]
      };
  }
};

// Generate rich content for dynamic articles
export const generateArticleContent = (disease: Disease): Article => {
  const { advice, medicines } = getAdviceByCategory(disease.category, disease.name);
  
  const medicinesList = medicines.map(m => `<li><strong>${m}</strong></li>`).join('');

  return {
    id: disease.id,
    category: disease.category, // Using category name as ID for simplicity in fallback
    title: {
      uz: disease.name,
      en: disease.name // Fallback
    },
    summary: {
      uz: `${disease.name} - bu ${disease.category.toLowerCase()}ga oid keng tarqalgan holat. Ushbu maqolada davolash usullari va maslahatlar berilgan.`,
      en: `${disease.name} is a common condition related to ${disease.category}. This article provides treatment methods and advice.`
    },
    content: {
      uz: `
        <h3>${disease.name} Haqida</h3>
        <p>${disease.name} bugungi kunda ko'p uchraydigan kasalliklardan biri bo'lib, o'z vaqtida aniqlash va davolash muhim ahamiyatga ega.</p>
        
        <h3>Belgilari</h3>
        <p>Kasallikning asosiy belgilari har xil bo'lishi mumkin, ammo umumiy holsizlik va bezovtalik kuzatilishi mumkin. Aniq tashxis uchun shifokor ko'rigi zarur.</p>

        <h3>Davolash va Maslahatlar</h3>
        ${advice}

        <h3>Tavsiya Etiladigan Dorilar</h3>
        <p>Quyidagi dorilar shifokor maslahati bilan qo'llanilishi mumkin:</p>
        <ul>
          ${medicinesList}
        </ul>
        <p><em>Eslatma: Har qanday dori vositasini qabul qilishdan oldin shifokor bilan maslahatlashing.</em></p>
      `,
      en: `
        <h3>About ${disease.name}</h3>
        <p>Information about ${disease.name} is currently being translated. Please consult a doctor for specific advice.</p>
      `
    },
    date: new Date().toISOString().split('T')[0],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // Generic medical placeholder
  };
};

// Helper to generate a massive list
const generateDiseases = (): Disease[] => {
  const baseDiseases = [
    { name: "Abssess", cat: "Yuqumli Kasalliklar" },
    { name: "Adinamiya", cat: "Nerv Tizimi" },
    { name: "Adneksit", cat: "Ayollar Salomatligi" },
    { name: "Aerofagiya", cat: "Oshqozon-Ichak" },
    { name: "Afaziya", cat: "Nerv Tizimi" },
    { name: "Agorafobiya", cat: "Ruhiy Salomatlik" },
    { name: "Akne (Husnbuzar)", cat: "Teri Kasalliklari" },
    { name: "Alergiya", cat: "Yuqumli Kasalliklar" },
    { name: "Alkogolizm", cat: "Ruhiy Salomatlik" },
    { name: "Altsgeymer kasalligi", cat: "Nerv Tizimi" },
    { name: "Angina", cat: "Nafas Yo'llari" },
    { name: "Anemiya", cat: "Yurak va Qon-tomir" },
    { name: "Anevrizma", cat: "Yurak va Qon-tomir" },
    { name: "Anoreksiya", cat: "Ruhiy Salomatlik" },
    { name: "Appenditsit", cat: "Oshqozon-Ichak" },
    { name: "Aritmiya", cat: "Yurak va Qon-tomir" },
    { name: "Artrit", cat: "Suyak va Bo'g'imlar" },
    { name: "Artroz", cat: "Suyak va Bo'g'imlar" },
    { name: "Astma", cat: "Nafas Yo'llari" },
    { name: "Ateroskleroz", cat: "Yurak va Qon-tomir" },
    { name: "Autizm", cat: "Bolalar Kasalliklari" },
    { name: "Avitaminoz", cat: "Endokrin Tizim" },
    { name: "Bazedov kasalligi", cat: "Endokrin Tizim" },
    { name: "Bedana ko'z", cat: "Teri Kasalliklari" },
    { name: "Bezlar shamollashi", cat: "Yuqumli Kasalliklar" },
    { name: "Botulizm", cat: "Yuqumli Kasalliklar" },
    { name: "Bronxit", cat: "Nafas Yo'llari" },
    { name: "Brutselloz", cat: "Yuqumli Kasalliklar" },
    { name: "Bosh og'rig'i (Migren)", cat: "Nerv Tizimi" },
    { name: "Buyrak toshlari", cat: "Oshqozon-Ichak" },
    { name: "Bursit", cat: "Suyak va Bo'g'imlar" },
    { name: "Depressiya", cat: "Ruhiy Salomatlik" },
    { name: "Dermatit", cat: "Teri Kasalliklari" },
    { name: "Diabet (Qandli diabet)", cat: "Endokrin Tizim" },
    { name: "Diareya", cat: "Oshqozon-Ichak" },
    { name: "Difteriya", cat: "Yuqumli Kasalliklar" },
    { name: "Dizenteriya", cat: "Yuqumli Kasalliklar" },
    { name: "Disbakterioz", cat: "Oshqozon-Ichak" },
    { name: "Disk churrasi", cat: "Suyak va Bo'g'imlar" },
    { name: "Distoniya", cat: "Nerv Tizimi" },
    { name: "Egzema", cat: "Teri Kasalliklari" },
    { name: "Ensefalit", cat: "Nerv Tizimi" },
    { name: "Enterit", cat: "Oshqozon-Ichak" },
    { name: "Enurez", cat: "Bolalar Kasalliklari" },
    { name: "Epilepsiya", cat: "Nerv Tizimi" },
    { name: "Farangit", cat: "Nafas Yo'llari" },
    { name: "Fibroma", cat: "Ayollar Salomatligi" },
    { name: "Fobiyalar", cat: "Ruhiy Salomatlik" },
    { name: "Furunkulez", cat: "Teri Kasalliklari" },
    { name: "Gastrit", cat: "Oshqozon-Ichak" },
    { name: "Gepatit A, B, C", cat: "Oshqozon-Ichak" },
    { name: "Gerpes", cat: "Teri Kasalliklari" },
    { name: "Gipertoniya", cat: "Yurak va Qon-tomir" },
    { name: "Gipotoniya", cat: "Yurak va Qon-tomir" },
    { name: "Glaukoma", cat: "Ko'z Kasalliklari" },
    { name: "Gripp", cat: "Nafas Yo'llari" },
    { name: "Gijja", cat: "Oshqozon-Ichak" },
    { name: "Holsizlik", cat: "Nerv Tizimi" },
    { name: "Ich qotishi", cat: "Oshqozon-Ichak" },
    { name: "Impotentsiya", cat: "Erkaklar Salomatligi" },
    { name: "Infarkt", cat: "Yurak va Qon-tomir" },
    { name: "Insult", cat: "Nerv Tizimi" },
    { name: "Isitma", cat: "Yuqumli Kasalliklar" },
    { name: "Karies", cat: "Oshqozon-Ichak" },
    { name: "Katarakta", cat: "Ko'z Kasalliklari" },
    { name: "Kolik", cat: "Oshqozon-Ichak" },
    { name: "Kon'yunktivit", cat: "Ko'z Kasalliklari" },
    { name: "Koronavirus (COVID-19)", cat: "Nafas Yo'llari" },
    { name: "Laringit", cat: "Nafas Yo'llari" },
    { name: "Leykemiya", cat: "Yurak va Qon-tomir" },
    { name: "Lishay", cat: "Teri Kasalliklari" },
    { name: "Mastopatiya", cat: "Ayollar Salomatligi" },
    { name: "Meningit", cat: "Nerv Tizimi" },
    { name: "Menopauza", cat: "Ayollar Salomatligi" },
    { name: "Mioziyt", cat: "Suyak va Bo'g'imlar" },
    { name: "Nevroz", cat: "Ruhiy Salomatlik" },
    { name: "Nevralgiya", cat: "Nerv Tizimi" },
    { name: "O'pka shamollashi (Pnevmoniya)", cat: "Nafas Yo'llari" },
    { name: "Ot quloq", cat: "Nafas Yo'llari" },
    { name: "Otiti", cat: "Nafas Yo'llari" },
    { name: "Osteoxondroz", cat: "Suyak va Bo'g'imlar" },
    { name: "Osteoporoz", cat: "Suyak va Bo'g'imlar" },
    { name: "Pankreatit", cat: "Oshqozon-Ichak" },
    { name: "Parkinson kasalligi", cat: "Nerv Tizimi" },
    { name: "Pielonefrit", cat: "Oshqozon-Ichak" },
    { name: "Podagra", cat: "Suyak va Bo'g'imlar" },
    { name: "Prostatit", cat: "Erkaklar Salomatligi" },
    { name: "Psoriaz", cat: "Teri Kasalliklari" },
    { name: "Qizamiq", cat: "Bolalar Kasalliklari" },
    { name: "Qizilcha", cat: "Bolalar Kasalliklari" },
    { name: "Qo'tir", cat: "Teri Kasalliklari" },
    { name: "Radikulit", cat: "Nerv Tizimi" },
    { name: "Raxit", cat: "Bolalar Kasalliklari" },
    { name: "Revmatizm", cat: "Suyak va Bo'g'imlar" },
    { name: "Saraton (Onkologiya)", cat: "Yuqumli Kasalliklar" },
    { name: "Sariq kasalligi", cat: "Oshqozon-Ichak" },
    { name: "Seboreya", cat: "Teri Kasalliklari" },
    { name: "Sistit", cat: "Oshqozon-Ichak" },
    { name: "Skolioz", cat: "Suyak va Bo'g'imlar" },
    { name: "Skleroz", cat: "Nerv Tizimi" },
    { name: "Stomatit", cat: "Oshqozon-Ichak" },
    { name: "Stress", cat: "Ruhiy Salomatlik" },
    { name: "Suvchechak", cat: "Bolalar Kasalliklari" },
    { name: "Taxikardiya", cat: "Yurak va Qon-tomir" },
    { name: "Tonzillit", cat: "Nafas Yo'llari" },
    { name: "Tromboflebit", cat: "Yurak va Qon-tomir" },
    { name: "Tuberkulyoz", cat: "Nafas Yo'llari" },
    { name: "Uchuq", cat: "Teri Kasalliklari" },
    { name: "Uretrit", cat: "Erkaklar Salomatligi" },
    { name: "Varikoz", cat: "Yurak va Qon-tomir" },
    { name: "Vitiligo", cat: "Teri Kasalliklari" },
    { name: "Xolesistit", cat: "Oshqozon-Ichak" },
    { name: "Yassi oyoqlik", cat: "Suyak va Bo'g'imlar" },
    { name: "Yara kasalligi", cat: "Oshqozon-Ichak" },
    { name: "Zob (Bo'qoq)", cat: "Endokrin Tizim" }
  ];

  // Expand the list to reach ~750 by adding variations and types
  // In a real app, this would be unique data. Here we simulate the volume.
  let allDiseases: Disease[] = [];
  
  // Add base diseases
  baseDiseases.forEach((d, i) => {
    allDiseases.push({
      id: `d-${i}`,
      name: d.name,
      category: d.cat
    });
  });

  // Generate variations to reach high numbers
  const prefixes = ["O'tkir", "Surunkali", "Tug'ma", "Yuqumli", "Allergik", "Bolalar", "Kattalar"];
  const types = ["Sindromi", "Kasalligi", "Yallig'lanishi", "Yetishmovchiligi", "Infeksiyasi"];
  
  let counter = baseDiseases.length;
  
  for (let i = 0; i < 700; i++) {
    const base = baseDiseases[i % baseDiseases.length];
    const prefix = prefixes[i % prefixes.length];
    const type = types[i % types.length];
    
    allDiseases.push({
      id: `gen-${i}`,
      name: `${prefix} ${base.name} ${i % 3 === 0 ? type : ''}`.trim(),
      category: base.cat
    });
  }

  return allDiseases.sort((a, b) => a.name.localeCompare(b.name));
};

export const medicalDictionary = generateDiseases();
