import anatomicalHeart from '@assets/stock_images/anatomical_heart_med_03664b3a.jpg';
import personCheckingBlood from '@assets/stock_images/person_checking_bloo_0638902a.jpg';
import lungsDiagram from '@assets/stock_images/lungs_medical_diagra_0d8c62fc.jpg';
import healthyFood from '@assets/stock_images/healthy_food_fruits__8e48a52f.jpg';
import mentalHealth from '@assets/stock_images/mental_health_brain__8aace86a.jpg';
import pediatrician from '@assets/stock_images/pediatrician_checkin_b43689e7.jpg';

export interface Article {
  id: string;
  title: {
    uz: string;
    en: string;
  };
  summary: {
    uz: string;
    en: string;
  };
  content: {
    uz: string;
    en: string;
  };
  category: string;
  image?: string;
  date: string;
}

export interface Topic {
  id: string;
  title: {
    uz: string;
    en: string;
  };
  icon: string;
}

export const topics: Topic[] = [
  { id: 'heart', title: { uz: 'Yurak Kasalliklari', en: 'Heart Diseases' }, icon: 'Heart' },
  { id: 'diabetes', title: { uz: 'Qandli Diabet', en: 'Diabetes' }, icon: 'Activity' },
  { id: 'lungs', title: { uz: 'O\'pka Kasalliklari', en: 'Lung Diseases' }, icon: 'Wind' },
  { id: 'brain', title: { uz: 'Miya va Nerv Tizimi', en: 'Brain & Nerves' }, icon: 'Brain' },
  { id: 'mental', title: { uz: 'Ruhiy Salomatlik', en: 'Mental Health' }, icon: 'Smile' },
  { id: 'skin', title: { uz: 'Teri Muammolari', en: 'Skin Conditions' }, icon: 'Sun' },
  { id: 'nutrition', title: { uz: 'Oziqlanish', en: 'Nutrition' }, icon: 'Apple' },
  { id: 'children', title: { uz: 'Bolalar Salomatligi', en: 'Children\'s Health' }, icon: 'Baby' },
];

export const articles: Article[] = [
  {
    id: 'high-blood-pressure',
    category: 'heart',
    title: {
      uz: "Yuqori Qon Bosimi (Gipertoniya)",
      en: "High Blood Pressure (Hypertension)"
    },
    summary: {
      uz: "Yuqori qon bosimi - bu jiddiy holat bo'lib, agar davolanmasa, yurak xuruji va insultga olib kelishi mumkin.",
      en: "High blood pressure is a serious condition that can lead to heart attacks and strokes if left untreated."
    },
    content: {
      uz: `
        <h3>Gipertoniya nima?</h3>
        <p>Yuqori qon bosimi yoki gipertoniya - bu qon tomirlari devorlariga qonning bosimi doimiy ravishda yuqori bo'lgan holat.</p>
        
        <h3>Belgilari</h3>
        <p>Ko'pincha gipertoniya hech qanday belgi bermaydi, shuning uchun uni "jim qotil" deb atashadi. Ba'zida bosh og'rig'i, bosh aylanishi kuzatilishi mumkin.</p>
        
        <h3>Oldini olish va Turmush tarzi</h3>
        <ul>
          <li><strong>Sog'lom ovqatlanish (DASH dietasi):</strong> Meva, sabzavotlar, donli mahsulotlarni ko'paytiring. Yog'li va sho'r ovqatlarni kamaytiring.</li>
          <li><strong>Tuz iste'moli:</strong> Kuniga 5 grammdan (bir choy qoshiq) oshirmang.</li>
          <li><strong>Jismoniy faollik:</strong> Haftasiga kamida 150 daqiqa (kuniga 30 daqiqa) piyoda yuring yoki yengil mashqlar qiling.</li>
          <li><strong>Vazn nazorati:</strong> Ortiqcha vazn qon bosimini oshiradi. Vaznni me'yorda saqlashga harakat qiling.</li>
          <li><strong>Stressni boshqarish:</strong> Tinchlantiruvchi mashqlar, yoga yoki meditatsiya bilan shug'ullaning.</li>
        </ul>
      `,
      en: `
        <h3>What is Hypertension?</h3>
        <p>High blood pressure, or hypertension, is a condition where the force of the blood against the artery walls is consistently too high.</p>
        
        <h3>Symptoms</h3>
        <p>Often, hypertension has no symptoms, which is why it is called the "silent killer." Sometimes headaches or dizziness may occur.</p>
        
        <h3>Prevention and Lifestyle</h3>
        <ul>
          <li><strong>Healthy Diet (DASH):</strong> Increase fruits, vegetables, and whole grains. Reduce fatty and salty foods.</li>
          <li><strong>Salt Intake:</strong> Do not exceed 5 grams (one teaspoon) per day.</li>
          <li><strong>Physical Activity:</strong> Aim for at least 150 minutes per week (30 minutes a day) of walking or light exercise.</li>
          <li><strong>Weight Control:</strong> Excess weight increases blood pressure. Try to maintain a healthy weight.</li>
          <li><strong>Stress Management:</strong> Practice relaxation exercises, yoga, or meditation.</li>
        </ul>
      `
    },
    image: anatomicalHeart,
    date: "2024-03-15"
  },
  {
    id: 'diabetes-type-2',
    category: 'diabetes',
    title: {
      uz: "2-Tur Qandli Diabet",
      en: "Type 2 Diabetes"
    },
    summary: {
      uz: "2-tur diabet eng keng tarqalgan diabet turi bo'lib, tana insulinni to'g'ri ishlata olmaganda yuzaga keladi.",
      en: "Type 2 diabetes is the most common form of diabetes, occurring when the body cannot use insulin properly."
    },
    content: {
      uz: `
        <h3>Umumiy ma'lumot</h3>
        <p>2-tur diabetda oshqozon osti bezi yetarli insulin ishlab chiqarmaydi yoki hujayralar insulinga to'g'ri javob bermaydi.</p>
        
        <h3>Xavf omillari</h3>
        <p>Ortiqcha vazn, kam harakatlilik va irsiyat asosiy xavf omillaridir.</p>
        
        <h3>Davolash va Parhez</h3>
        <ul>
          <li><strong>Uglevodlarni nazorat qilish:</strong> Shirinliklar, oq non, guruch va kartoshkani cheklang. Ularning o'rniga grechka, suli yormasi va sabzavotlarni iste'mol qiling.</li>
          <li><strong>Jismoniy faollik:</strong> Mushaklar ishlaganda qondagi qand miqdori kamayadi. Kuniga 30 daqiqa faol bo'ling.</li>
          <li><strong>Vazn tashlash:</strong> Tana vaznining 5-10% ga kamayishi ham qand miqdorini sezilarli darajada yaxshilaydi.</li>
          <li><strong>Dorilar:</strong> Shifokor buyurgan dori vositalarini (Metformin va boshqalar) vaqtida qabul qiling.</li>
        </ul>
      `,
      en: `
        <h3>Overview</h3>
        <p>In Type 2 diabetes, the pancreas does not produce enough insulin, or the cells do not respond properly to insulin.</p>
        
        <h3>Risk Factors</h3>
        <p>Overweight, inactivity, and genetics are the main risk factors.</p>
        
        <h3>Treatment and Diet</h3>
        <ul>
          <li><strong>Carbohydrate Control:</strong> Limit sweets, white bread, rice, and potatoes. Eat buckwheat, oatmeal, and vegetables instead.</li>
          <li><strong>Physical Activity:</strong> Muscle activity lowers blood sugar. Be active for 30 minutes a day.</li>
          <li><strong>Weight Loss:</strong> Losing even 5-10% of body weight can significantly improve blood sugar levels.</li>
          <li><strong>Medication:</strong> Take prescribed medications (Metformin, etc.) on time.</li>
        </ul>
      `
    },
    image: personCheckingBlood,
    date: "2024-03-10"
  },
  {
    id: 'asthma',
    category: 'lungs',
    title: {
      uz: "Astma: Sabablari va Davolash",
      en: "Asthma: Causes and Treatment"
    },
    summary: {
      uz: "Astma nafas yo'llarining surunkali kasalligi bo'lib, nafas olishni qiyinlashtiradi.",
      en: "Asthma is a chronic disease of the airways that makes breathing difficult."
    },
    content: {
      uz: `
        <h3>Astma nima?</h3>
        <p>Astma – bu nafas yo‘llarining yallig‘lanishi bilan kechadigan surunkali kasallik. Bu yallig‘lanish nafas yo‘llarining torayishiga va shishishiga olib keladi, bu esa nafas olishni qiyinlashtiradi.</p>
        <h3>Belgilari</h3>
        <ul>
            <li>Nafas qisishi</li>
            <li>Ko‘krak qafasidagi og‘riq yoki bosim</li>
            <li>Xirillash</li>
            <li>Yo‘tal (ayniqsa kechasi yoki ertalab)</li>
        </ul>
      `,
      en: `
        <h3>What is Asthma?</h3>
        <p>Asthma is a chronic disease involving inflammation of the airways. This inflammation causes the airways to narrow and swell, making breathing difficult.</p>
        <h3>Symptoms</h3>
        <ul>
            <li>Shortness of breath</li>
            <li>Chest tightness or pain</li>
            <li>Wheezing</li>
            <li>Coughing (especially at night or early morning)</li>
        </ul>
      `
    },
    image: lungsDiagram,
    date: "2024-03-05"
  },
  {
    id: 'vitamin-d',
    category: 'nutrition',
    title: {
      uz: "D Vitamini Yetishmovchiligi",
      en: "Vitamin D Deficiency"
    },
    summary: {
      uz: "D vitamini suyaklar mustahkamligi va immunitet uchun juda muhimdir.",
      en: "Vitamin D is crucial for bone strength and immunity."
    },
    content: {
      uz: `
        <h3>D Vitamini Nima Uchun Muhim?</h3>
        <p>D vitamini tanada kalsiyning so‘rilishiga yordam beradi, bu esa suyaklar va tishlarning mustahkam bo‘lishini ta’minlaydi. Shuningdek, u immunitet tizimi, mushaklar va nervlarning normal ishlashi uchun ham zarurdir.</p>
        <h3>Yetishmovchilik Belgilari</h3>
        <ul>
            <li>Tez charchash</li>
            <li>Suyak va bel og‘riqlari</li>
            <li>Depressiya yoki kayfiyatning tushishi</li>
            <li>Yaralarning sekin bitishi</li>
            <li>Soch to‘kilishi</li>
        </ul>
      `,
      en: `
        <h3>Why is Vitamin D Important?</h3>
        <p>Vitamin D helps the body absorb calcium, which keeps bones and teeth strong. It is also essential for the proper functioning of the immune system, muscles, and nerves.</p>
        <h3>Deficiency Symptoms</h3>
        <ul>
            <li>Fatigue</li>
            <li>Bone and back pain</li>
            <li>Depression or low mood</li>
            <li>Slow wound healing</li>
            <li>Hair loss</li>
        </ul>
      `
    },
    image: healthyFood,
    date: "2024-02-28"
  },
  {
    id: 'anxiety',
    category: 'mental',
    title: {
      uz: "Xavotir va Stressni Boshqarish",
      en: "Managing Anxiety and Stress"
    },
    summary: {
      uz: "Kundalik hayotdagi stress va xavotirni boshqarish usullari va ruhiy salomatlikni saqlash.",
      en: "Methods for managing daily stress and anxiety and maintaining mental health."
    },
    content: {
      uz: `
        <h3>Xavotir Buzilishi Nima?</h3>
        <p>Vaqti-vaqti bilan xavotirlanish normal holat. Ammo xavotir doimiy bo‘lib, kundalik hayotga xalaqit bersa, bu xavotir buzilishi bo‘lishi mumkin.</p>
        <h3>Boshqarish Usullari</h3>
        <ul>
            <li>Nafas mashqlari</li>
            <li>Doimiy jismoniy faollik</li>
            <li>Yetarlicha uyqu</li>
            <li>Meditatsiya va yoga</li>
            <li>Mutaxassis yordami</li>
        </ul>
      `,
      en: `
        <h3>What is Anxiety Disorder?</h3>
        <p>Feeling anxious occasionally is normal. However, if anxiety is persistent and interferes with daily life, it may be an anxiety disorder.</p>
        <h3>Management Techniques</h3>
        <ul>
            <li>Breathing exercises</li>
            <li>Regular physical activity</li>
            <li>Adequate sleep</li>
            <li>Meditation and yoga</li>
            <li>Professional help</li>
        </ul>
      `
    },
    image: mentalHealth,
    date: "2024-04-01"
  },
  {
    id: 'child-fever',
    category: 'children',
    title: {
      uz: "Bolalarda Isitma: Nima Qilish Kerak?",
      en: "Fever in Children: What to Do?"
    },
    summary: {
      uz: "Bolalarda yuqori harorat kuzatilganda ota-onalar uchun birinchi yordam ko'rsatmalari.",
      en: "First aid guidelines for parents when a child has a high fever."
    },
    content: {
      uz: `
        <h3>Isitma Haqida</h3>
        <p>Isitma kasallik emas, balki tananing infeksiyaga qarshi kurashayotganining belgisidir. Ko‘pincha virusli infeksiyalar sabab bo‘ladi.</p>
        <h3>Qachon Shifokorga Murojaat Qilish Kerak?</h3>
        <ul>
            <li>Bola 3 oylikdan kichik bo‘lsa</li>
            <li>Harorat 39°C dan yuqori bo‘lsa</li>
            <li>Isitma 3 kundan ortiq davom etsa</li>
            <li>Bola holsiz, ichmayapti yoki toshma toshsa</li>
        </ul>
      `,
      en: `
        <h3>About Fever</h3>
        <p>Fever is not a disease but a sign that the body is fighting an infection. It is often caused by viral infections.</p>
        <h3>When to See a Doctor?</h3>
        <ul>
            <li>If the child is under 3 months old</li>
            <li>If the temperature is above 39°C (102.2°F)</li>
            <li>If the fever lasts more than 3 days</li>
            <li>If the child is lethargic, not drinking, or has a rash</li>
        </ul>
      `
    },
    image: pediatrician,
    date: "2024-04-10"
  }
];
