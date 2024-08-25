import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "navbar": {
        "language": "Language",
        "title": "3PL Digital",
        "about": "About",
        "services": "Services",
        "portfolio": "Products",
        "contactUs": "Contact Us",
        "actionButton": "Get Started",
      },
      "hero_title": "Empowering small businesses with big tech",
      "hero_type": {
        "first": "websites",
        "second": "SEO",
        "third": "VOIP services",
        "fourth": "answering services",
        "fifth": "professional call routing and automation"
      },
      "little_hero": "We are a team of highly motivated and skilled tech enthusiasts dedicated to delivering only the best service.",
      "heroLearnMore": "Learn more",
      "introSection": {
        "heading": "Help your business stand out and connect with more customers using our simple tools.",
        "mainBody": "We don’t just create professional websites; we ensure they show up in search results, as well as on Apple & Google Maps so your customers can easily find you.",
        "mainBody2": "In addition to boosting your online presence, our enterprise phone and answering services keep you connected with clients and handle calls efficiently.",
        "summary": "Focus on your business while we make sure you’re visible and reachable.",
        "contactUsButton": "Contact Us",
      },
    "servicesSection": {
        "heading": "Our Services",
        "detailHeading": "We are dedicated to enhancing your business with tailored solutions.",
        "box1": {
          "heading": "Custom Web Development",
          "body": "We create high-quality, responsive websites and applications, tailored to meet your business needs. Our focus is on design excellence and user experience."
        },
        "box2": {
          "heading": "Cross-Platform Mobile Apps",
          "body": "Our custom mobile applications are designed for performance and scalability, ensuring a seamless experience across all devices."
        },
        "box3": {
          "heading": "Domain & Hosting Solutions",
          "body": "We offer reliable domain registration and web hosting services to enhance your online presence and ensure maximum uptime."
        },
        "box4": {
          "heading": "Expert IT Consulting",
          "body": "Our consultations provide strategic guidance to optimize your technology infrastructure and improve overall efficiency."
        },
        "box5": {
          "heading1": "Strategic IT Solutions",
          "heading2": "",
          "body": "Leverage our 20+ years of IT expertise for customized strategies that improve operations, cut costs, and boost efficiency."
        },
        "box6": {
          "heading1": "Collaborative Software Development",
          "heading2": "",
          "body": "We work with your tech team to enhance or develop software solutions, simplifying processes and meeting your specific needs."
        }
      },
      "productSection": {
        "heading": "Products",
        "box1": {
          "heading": "Web Design, SEO, & Map Optimization Solutions",
          "body": "Transform your online presence with our all-in-one service. We design stunning websites and mobile apps, ensure they rank high in search results, and make sure you appear on Google Maps and Apple Maps. Our comprehensive approach helps your business stand out, attract more customers, and make a strong impact online.",
          "button": "Schedule Demo",
        },
        "box2": {
          "heading": "Cloud Infrastructure",
          "body": "Elevate your business operations with our advanced cloud infrastructure services. We provide secure, scalable, and efficient cloud solutions tailored to your needs. Whether you need to store data, run applications, host your website, or scale your operations, our cloud services ensure reliability and flexibility, helping your business stay agile and competitive.",
          "button": "Schedule Demo",
        },
        "box3": {
          "heading": "Comprehensive Communication Solutions",
          "body": "Streamline your business communications with our all-in-one solution. We offer advanced phone systems with features like call routing and voicemail-to-email, along with professional answering services to handle calls and provide excellent customer support. Our integrated approach ensures you stay connected and manage communications efficiently, all while enhancing your professional image.",
          "button": "Schedule Demo",
        },
        "box4": {
          "heading": "Effective Digital Marketing Services",
          "body": "Boost your online presence with our comprehensive digital marketing services. We create and manage targeted advertising campaigns, social media strategies, and engaging content to drive traffic and attract new customers. Our tailored approach ensures your business reaches the right audience and achieves measurable results.",
          "button": "Schedule Demo",
        },
      },
      "cta": {
        "mainHeading": "Ready to take your business to the next level?",
        "heading": "Let’s create something extraordinary for you ",
        "headingBold": "together!",
        "button": "Get Started Today"
      },
    }
  },
  he: {
    translation: {
      "navbar": {
        "language": "שפה",
        "title": "3PL דיגיטל",
        "about": "אודות",
        "services": "שירותים",
        "portfolio": "מוצרים",
        "contactUs": "צור קשר",
        "actionButton": "התחל"
      },
      "hero_title": "תמיכה בעסקים קטנים עם טכנולוגיה גדולה",
        "hero_type": {
          "first": "אתרים",
          "second": "אופטימיזציה למנועי חיפוש (SEO)",
          "third": "שירותי VOIP",
          "fourth": "שירות מענה טלפוני",
          "fifth": "ניתוב שיחות מקצועי ואוטומציה"
        },
      "little_hero": "אנחנו צוות של אנשים מנומסים ומיומנים בטכנולוגיה, המתמקדים במתן שירות הטוב ביותר.",
      "heroLearnMore": "למד יותר",
      "introSection": {
        "heading": "עזרו לעסק שלכם לבלוט ולהתחבר ליותר לקוחות בעזרת הכלים הפשוטים שלנו.",
        "mainBody": "אנחנו לא רק יוצרים אתרים מקצועיים; אנחנו דואגים שהם יופיעו בתוצאות החיפוש, כמו גם במפות של Apple ו-Google, כך שהלקוחות שלכם יוכלו למצוא אתכם בקלות.",
        "mainBody2": "בנוסף לשיפור הנוכחות המקוונת שלכם, שירותי הטלפונים והמענה הארגוניים שלנו שומרים אתכם מחוברים ללקוחות ומטפלים בשיחות ביעילות.",
        "summary": "התמקדו בעסק שלכם בזמן שאנחנו דואגים שתהיו גלויים ונגישים.",
        "contactUsButton": "צרו קשר"
      },
    "servicesSection": {
        "heading": "השירותים שלנו",
        "detailHeading": "אנו מחויבים לשפר את העסק שלך עם פתרונות מותאמים אישית.",
        "box1": {
          "heading": "פיתוח אתרים מותאם אישית",
          "body": "אנו יוצרים אתרים ואפליקציות באיכות גבוהה, מותאמים לצרכים של העסק שלך. המיקוד שלנו הוא על מצוינות בעיצוב וחוויית משתמש."
        },
        "box2": {
          "heading": "אפליקציות ניידות חוצות פלטפורמות",
          "body": "האפליקציות הניידות שלנו מותאמות לביצועים ולסקלאביליות, ומבטיחות חוויה חלקה בכל המכשירים."
        },
        "box3": {
          "heading": "פתרונות דומיין ואחסון",
          "body": "אנו מציעים שירותי רישום דומיינים ואחסון אתרים אמינים לשיפור הנוכחות שלך באינטרנט ולהבטחת זמן פעילות מקסימלי."
        },
        "box4": {
          "heading": "ייעוץ טכנולוגי מקצועי",
          "body": "הייעוץ שלנו מספק הכוונה אסטרטגית לייעול התשתית הטכנולוגית שלך ושיפור היעילות הכללית."
        },
        "box5": {
          "heading1": "פתרונות IT אסטרטגיים",
          "heading2": "",
          "body": "נצל את מעל 20 השנים שלנו בניסיון IT לצורך אסטרטגיות מותאמות אישית שמשפרות תהליכים, חותכות עלויות ומגבירות את היעילות."
        },
        "box6": {
          "heading1": "פיתוח תוכנה בשיתוף פעולה",
          "heading2": "",
          "body": "אנו עובדים עם הצוות הטכנולוגי שלך לשיפור או פיתוח פתרונות תוכנה, הפשטת תהליכים ומענה לצרכים הספציפיים שלך."
        }
      },
      "productSection": {
        "heading": "מוצרים",
        "box1": {
          "heading": "פתרונות עיצוב אתרים, קידום אתרים ואופטימיזציה למפות",
          "body": "שדרגו את הנוכחות הדיגיטלית שלכם עם השירות הכולל שלנו. אנו מעצבים אתרים ואפליקציות ניידות מרהיבות, דואגים לכך שיתפסו מקום גבוה בתוצאות החיפוש, ומוודאים שהעסק שלכם יופיע במפות גוגל ואפל. הגישה המקיפה שלנו עוזרת לעסק שלכם לבלוט, למשוך לקוחות נוספים ולהשאיר רושם חזק באינטרנט.",
          "button": "קבע הדגמה"
        },
        "box2": {
          "heading": "תשתיות ענן",
          "body": "שדרגו את פעולות העסק שלכם עם שירותי תשתיות הענן המתקדמים שלנו. אנו מספקים פתרונות ענן מאובטחים, גמישים ויעילים המותאמים לצרכים שלכם. בין אם אתם צריכים לאחסן נתונים, להפעיל יישומים, לארח את האתר שלכם או להגדיל את הפעולות שלכם, שירותי הענן שלנו מבטיחים אמינות וגמישות, ומסייעים לעסק שלכם להישאר גמיש ותחרותי.",
          "button": "קבע הדגמה"
        },
        "box3": {
          "heading": "פתרונות תקשורת מקיפים",
          "body": "פשטו את התקשורת העסקית שלכם עם הפתרון הכולל שלנו. אנו מציעים מערכות טלפון מתקדמות עם תכונות כמו ניתוב שיחות ודואר קולי לדואר אלקטרוני, יחד עם שירותי מענה מקצועיים לטיפול בשיחות ומתן תמיכה לקוחות מצוינת. הגישה המהותית שלנו מבטיחה שתשארו מחוברים ותנהלו את התקשורת שלכם ביעילות, תוך שיפור התדמית המקצועית שלכם.",
          "button": "קבע הדגמה"
        },
        "box4": {
          "heading": "שירותי שיווק דיגיטלי אפקטיביים",
          "body": "שדרגו את הנוכחות שלכם באינטרנט עם שירותי השיווק הדיגיטלי המקיפים שלנו. אנו יוצרים ומנהלים קמפיינים פרסומיים ממומנים, אסטרטגיות במדיה החברתית ותוכן מעניין כדי להניע תנועה ולמשוך לקוחות חדשים. הגישה המותאמת שלנו מבטיחה שהעסק שלכם יגיע לקהל הנכון וישיג תוצאות מדידות.",
          "button": "קבע הדגמה"
        },
      },
      "cta": {
        "mainHeading": "מוכן לקחת את העסק שלך לשלב הבא?",
        "heading": "בוא ניצור משהו יוצא דופן עבורך ",
        "headingBold": "ביחד!",
        "button": "התחל היום"
      },
    },
  },
};
 
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
