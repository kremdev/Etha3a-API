<div align="center">

# Etha3a-API

[![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Fastify](https://img.shields.io/badge/-Fastify-000000?logo=fastify&logoColor=white)](https://www.fastify.io/)
[![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENCE)

<br />

_Please select your preferred language below / الرجاء اختيار لغتك المفضلة بالأسفل_

</div>

---

<details>
  <summary><h2>🇬🇧 English Version</h2></summary>

### Description

**Etha3a-API** is an enterprise-grade, high-performance API built with Node.js, Fastify, and TypeScript. It is specifically designed to provide seamless and reliable broadcasting of the Holy Quran and Islamic supplications.

Engineered for maximum uptime and resilience, the service features an intelligent automatic fallback mechanism. This system dynamically cycles through multiple pre-configured data sources to ensure an uninterrupted listening experience, mitigating the impact of third-party server downtimes. By providing a clean, unified, and type-safe data interface, Etha3a-API empowers developers to effortlessly integrate diverse spiritual content into web, mobile, and desktop applications, serving as a robust backbone for modern Islamic digital platforms.

### Key Features

- **High Performance:** Built on top of `Fastify`, ensuring minimal overhead and maximum throughput for API requests.
- **Intelligent Fallback Mechanism:** Automatically detects source failures and switches to alternative data streams without interrupting the client.
- **Type-Safe Architecture:** Developed entirely in `TypeScript`, ensuring high code quality, predictability, and excellent developer experience.
- **Modular Design:** Organized using a feature-based modular structure, making it highly scalable and easy to maintain.
- **Container Ready:** Includes a highly optimized `DOCKERFILE` for consistent deployment across different environments.
- **Monorepo Support:** Configured with `pnpm-workspace` for scalable workspace management.

### Tech Stack

- **Runtime:** Node.js (v18+ Recommended)
- **Language:** TypeScript
- **Framework:** Fastify (^5.7.4)
- **Environment Management:** dotenv (^17.3.1)
- **Package Manager:** pnpm

### Getting Started

#### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (Version 18.x or higher)
- [pnpm](https://pnpm.io/) (Version 8.x or higher)
- [Docker](https://www.docker.com/) (Optional, for containerized environments)

#### Local Installation & Execution

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/RlxChap2/Etha3a-API.git
    cd Etha3a-API
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Environment Configuration:**
    Create a `.env` file in the root directory and configure your environment variables based on standard requirements.

4.  **Code Formatting & Linting (Crucial Step):**
    Before running or building the project, ensure your code adheres to our formatting standards.

    ```bash
    pnpm run lint
    ```

5.  **Development Mode:**
    Starts the server with hot-reloading enabled.

    ```bash
    pnpm run dev
    ```

6.  **Production Build & Start:**
    ```bash
    pnpm run build
    pnpm run start
    ```

#### Docker Execution (Containerized)

For a consistent and isolated environment, Etha3a-API is fully equipped to run via Docker. This is the recommended approach for production deployments.

1.  **Build the Docker Image:**

    ```bash
    docker build -t etha3a-api .
    ```

2.  **Run the Container:**
    Replace `3000` with your configured port if different.
    ```bash
    docker run -p 3000:3000 --env-file .env etha3a-api
    ```

### Collaboration & Contributing

We welcome collaborations and contributions! To ensure the highest security and code quality standards, direct pushes to the main branch are strictly prohibited.

**All contributions must go through a Pull Request (PR).** We have automated **CI/CD Security Workflows** (Continuous Integration) in place. When you submit a PR, our automated systems will scan your code for security vulnerabilities, run automated tests, and enforce formatting rules (`pnpm run lint`).

**Contribution Steps:**

1.  **Fork** the repository and clone it locally.
2.  **Create** a feature branch: `git checkout -b feature/your-feature-name`.
3.  **Lint** your code: `pnpm run lint` (Your PR will fail the CI pipeline if formatting is incorrect).
4.  **Commit** your changes: `git commit -m 'feat: add specific feature'`.
5.  **Push** to your branch: `git push origin feature/your-feature-name`.
6.  **Open** a Pull Request against the `main` branch and await review from the maintainers.

### License

This software is released under the [MIT License](./LICENCE).

</details>

<details dir="rtl">
  <summary><h2>🇸🇦 النسخة العربية</h2></summary>

### وصف المشروع

**Etha3a-API** هي واجهة برمجة تطبيقات (API) بمستوى الشركات، تتميز بالأداء العالي والموثوقية، مبنية باستخدام Node.js و Fastify و TypeScript. تم تصميمها خصيصاً لتوفير بث سلس ومستمر للقرآن الكريم والأدعية الإسلامية.

تمت هندسة هذا النظام لضمان أعلى مستويات الاستقرار، حيث يتميز بـ **آلية استرجاع ذكية (Fallback Mechanism)**. تقوم هذه الآلية بالتنقل التلقائي بين عدة مصادر بيانات معدة مسبقاً في حال تعطل أحدها، مما يضمن تجربة استماع غير منقطعة للمستخدم النهائي. من خلال توفير واجهة بيانات موحدة وآمنة، يُمكّن النظام المطورين من دمج المحتوى الإسلامي بسهولة في تطبيقات الويب والهواتف الذكية، ليكون بمثابة العمود الفقري الرقمي للمنصات الإسلامية الحديثة.

### المميزات الرئيسية

- **أداء فائق:** مبني على إطار عمل `Fastify` لضمان سرعة الاستجابة والتعامل مع عدد هائل من الطلبات بأقل استهلاك للموارد.
- **آلية استرجاع ذكية:** اكتشاف تلقائي لأعطال الخوادم المصدرية والانتقال الفوري إلى خوادم بديلة دون انقطاع البث عن العميل.
- **بنية آمنة النوع (Type-Safe):** مطور بالكامل باستخدام `TypeScript`، مما يقلل من الأخطاء البرمجية ويسهل عملية التطوير والصيانة.
- **تصميم تركيبي (Modular):** مقسم إلى وحدات مستقلة بناءً على الميزات، مما يجعله قابلاً للتوسع بسهولة.
- **جاهز للحاويات (Container Ready):** يتضمن ملف `DOCKERFILE` محسن لتسهيل النشر في مختلف بيئات الاستضافة السحابية.
- **دعم بيئات العمل المتعددة:** مُهيأ باستخدام `pnpm-workspace` لإدارة المشاريع الضخمة.

### التقنيات المستخدمة

- **بيئة التشغيل:** Node.js (يُنصح بالإصدار 18 فما فوق)
- **لغة البرمجة:** TypeScript
- **إطار العمل:** Fastify (^5.7.4)
- **إدارة البيئة:** dotenv (^17.3.1)
- **مدير الحزم:** pnpm

### دليل التشغيل والتطوير

#### المتطلبات الأساسية

تأكد من تثبيت البرامج التالية على جهازك:

- [Node.js](https://nodejs.org/) (إصدار 18.x أو أحدث)
- [pnpm](https://pnpm.io/) (إصدار 8.x أو أحدث)
- [Docker](https://www.docker.com/) (اختياري، للتشغيل عبر الحاويات)

#### التثبيت والتشغيل المحلي

1.  **نسخ المستودع (Clone):**

    ```bash
    git clone https://github.com/RlxChap2/Etha3a-API.git
    cd Etha3a-API
    ```

2.  **تثبيت الحزم (Dependencies):**

    ```bash
    pnpm install
    ```

3.  **إعداد المتغيرات البيئية:**
    قم بإنشاء ملف `.env` في المجلد الجذري، وقم بضبط المتغيرات المطلوبة.

4.  **فحص وتنسيق الكود (خطوة الزامية):**
    قبل تشغيل أو بناء المشروع، يجب التأكد من توافق الكود مع معايير الجودة والتنسيق الخاصة بنا.

    ```bash
    pnpm run lint
    ```

5.  **التشغيل في بيئة التطوير:**
    يبدأ تشغيل الخادم مع تفعيل ميزة التحديث التلقائي عند الحفظ.

    ```bash
    pnpm run dev
    ```

6.  **البناء والتشغيل لبيئة الإنتاج:**
    ```bash
    pnpm run build
    pnpm run start
    ```

#### التشغيل باستخدام Docker (لبيئات الإنتاج)

لضمان بيئة تشغيل معزولة ومستقرة، يدعم المشروع التشغيل بالكامل عبر Docker. وهي الطريقة الموصى بها لعمليات النشر (Deployment).

1.  **بناء صورة الحاوية (Build Image):**

    ```bash
    docker build -t etha3a-api .
    ```

2.  **تشغيل الحاوية (Run Container):**
    مع التأكد من تمرير ملف المتغيرات البيئية وتحديد المنفذ الصحيح.
    ```bash
    docker run -p 3000:3000 --env-file .env etha3a-api
    ```

### الشراكة والمساهمة في المشروع

نحن نرحب بكافة الشراكات والمساهمات البرمجية! ومع ذلك، ولضمان أعلى معايير الأمان وجودة الكود، **يُمنع الدفع المباشر (Direct Push) للفرع الرئيسي.**

**يجب أن تتم أي مساهمة حصرياً عبر فتح طلب سحب (Pull Request).**

لقد قمنا بتأسيس **مسارات عمل أمنية مؤتمتة (CI/CD Security Workflows)**. عند تقديمك لطلب سحب (PR)، ستقوم خوادمنا تلقائياً بفحص الكود بحثاً عن أي ثغرات أمنية، والتأكد من توافقه مع معايير التنسيق الصارمة (لن يتم قبول الـ PR إذا لم تقم بتشغيل `pnpm run lint`).

**خطوات المساهمة:**

1.  قم بعمل **Fork** للمستودع ونسخه محلياً.
2.  قم بإنشاء فرع (Branch) للميزة الجديدة: `git checkout -b feature/your-feature`.
3.  نسّق الكود الخاص بك: `pnpm run lint` (لتجنب رفض التعديل من قبل النظام المؤتمت).
4.  قم بتأكيد التغييرات (Commit): `git commit -m 'feat: add specific feature'`.
5.  قم برفع التغييرات (Push) إلى فرعك الخاص: `git push origin feature/your-feature`.
6.  افتح طلب سحب (Pull Request) وانتظر مراجعة الفريق الهندسي.

### الترخيص

هذا المشروع مرخص بموجب [رخصة MIT](./LICENCE).

</details>
