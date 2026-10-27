 CipherLab

تطبيق تعليمي للتشفير وفك التشفير | Educational Encryption & Decryption App


---

 نبذة عن المشروع

CipherLab هو تطبيق موبايل تعليمي مبني باستخدام React Native وTypeScript وExpo، وبيوفّر واجهة تفاعلية لتجربة وفهم خوارزميات التشفير الكلاسيكية (Classical Encryption Algorithms).

يساعد التطبيق الطلاب على فهم طريقة تحويل النص الأصلي (Plaintext) إلى نص مشفّر (Ciphertext)، واسترجاع النص الأصلي باستخدام Decryption، بالإضافة إلى تجربة أساليب تحليل وكسر التشفير (Cipher Breaking).

 المميزات الرئيسية (Features)

- Caesar Cipher: تشفير وفك تشفير النصوص باستخدام قيمة إزاحة (Shift Value).
- Vigenère Cipher: تشفير وفك تشفير النصوص باستخدام مفتاح نصي (Keyword).
- Rail Fence Cipher: تشفير وفك تشفير النصوص باستخدام أسلوب تبديل ترتيب الحروف (Transposition Cipher).
- Cipher Breaking: تجربة طرق التحليل المتاحة في التطبيق لمحاولة استنتاج النص الأصلي أو المفتاح.
- Interactive User Interface: واجهة تفاعلية لاختيار الخوارزمية وإدخال النصوص والمعاملات المطلوبة.
- Copy Results: نسخ النتائج إذا كانت الخاصية متاحة للعملية المستخدمة.

«ملاحظة: نتائج Cipher Breaking تقديرية، وقد لا تكون دقيقة في كل الحالات، خصوصًا مع النصوص القصيرة أو النصوص التي لا تتبع أنماط اللغة المتوقعة.»

* المفاهيم العلمية (Key Concepts) *

- Plaintext: النص الأصلي قبل التشفير.
- Ciphertext: النص الناتج بعد التشفير.
- Encryption: تحويل النص الأصلي إلى نص مشفّر.
- Decryption: استرجاع النص الأصلي باستخدام المفتاح المناسب.
- Key: قيمة أو كلمة تُستخدم في عملية التشفير أو فك التشفير.
- Cryptanalysis: تحليل النصوص المشفّرة لمحاولة استنتاج النص الأصلي أو المفتاح.
- Classical Ciphers: خوارزميات تاريخية تُستخدم لتعليم المبادئ الأساسية للتشفير.

🛠️ التقنيات المستخدمة (Tech Stack)

- React Native
- TypeScript
- Expo
- Expo Router
- JavaScript / TypeScript

📥 روابط التحميل الرسمية (Download Links)

البرامج المطلوبة أو الموصى بها

- Node.js: "تحميل Node.js" (https://nodejs.org/en/download)
- Visual Studio Code: "تحميل VS Code" (https://code.visualstudio.com/download)
- Git: "تحميل Git" (https://git-scm.com/install/)
- Expo Go: "تنزيل Expo Go للموبايل" (https://expo.dev/go)
- Expo Documentation: "وثائق Expo الرسمية" (https://docs.expo.dev/)

خيارات إضافية

- Android Studio: "تحميل Android Studio" (https://developer.android.com/studio) لتشغيل Android Emulator.
- iOS Simulator: متاح من خلال Xcode على macOS، "موقع Xcode الرسمي" (https://developer.apple.com/xcode/).

«مهم: يجب استخدام إصدار Node.js متوافق مع إصدار Expo SDK والـ dependencies الموجودة في المشروع. كذلك يجب أن يكون Expo Go متوافقًا مع إصدار SDK المستخدم. راجع ملف "package.json" ووثائق Expo عند مواجهة أي مشكلة توافق.»

* طريقة تنزيل المشروع وتشغيله (Installation & Setup)

الطريقة الأولى: التنزيل من GitHub

بعد نشر المشروع على GitHub:

1. افتح صفحة المستودع (Repository).
2. اضغط على Code.
3. اختر Download ZIP.
4. فك ضغط الملف.
5. افتح فولدر المشروع في Visual Studio Code.

«رابط المستودع سيُضاف هنا بعد إنشاء Repository على GitHub.»

الطريقة الثانية: استخدام Git

بعد نشر المشروع، افتح Terminal ونفّذ الأمر التالي، مع استبدال الرابط بالرابط الحقيقي للمستودع:

git clone YOUR_REPOSITORY_URL
cd CipherLab

تثبيت Dependencies

من داخل فولدر المشروع، شغّل:

npm install

تشغيل التطبيق

شغّل الأمر التالي:

npx expo start

بعد بدء التشغيل، اتبع التعليمات الظاهرة في Terminal لفتح التطبيق.

فتح التطبيق على الموبايل

1. ثبّت Expo Go من الرابط الرسمي.
2. تأكد أن إصدار Expo Go متوافق مع Expo SDK الخاص بالمشروع.
3. شغّل المشروع باستخدام "npx expo start".
4. امسح QR Code بالطريقة المناسبة لجهازك واتبع التعليمات الظاهرة.

إذا لم يكن إصدار Expo Go مناسبًا للمشروع، راجع وثائق Expo لمعرفة خيارات التشغيل المتوافقة.

📖 طريقة استخدام التطبيق (How to Use)

1. افتح التطبيق.
2. اختَر خوارزمية التشفير المطلوبة.
3. اختَر العملية المتاحة، مثل Encryption أو Decryption أو Breaking.
4. أدخل النص المطلوب (Input Text).
5. أدخل المفتاح (Key) أو الإعدادات المطلوبة.
6. نفّذ العملية.
7. راجع الناتج (Output)، وانسخه إذا كانت خاصية النسخ متاحة.

🧪 الاختبارات (Testing)

يمكن تجربة الحالات التالية للتحقق من سلوك التطبيق:

- تشفير نص ثم فك تشفير الناتج باستخدام نفس المفتاح.
- اختبار النصوص القصيرة والطويلة.
- تجربة قيم مفاتيح صحيحة وغير صالحة.
- تجربة المسافات والأرقام والرموز والحروف غير الإنجليزية.
- اختبار القيم الحدّية (Edge Cases)، مثل النص الفارغ وعدد Rails غير الصالح.
- التأكد من أن نتائج كل خوارزمية متوافقة مع طريقة تنفيذها داخل التطبيق.

🎓 الهدف التعليمي (Educational Purpose)

يهدف المشروع إلى مساعدة الطلاب على فهم مبادئ التشفير الكلاسيكي، وتجربة الخوارزميات عمليًا، ومقارنة نتائج Encryption وDecryption، والتعرّف على أساسيات Cryptanalysis.

⚠️ إخلاء المسؤولية (Disclaimer)

هذا المشروع مخصص للأغراض التعليمية فقط. خوارزميات التشفير الكلاسيكية ليست آمنة لحماية البيانات الحساسة، ولا ينبغي استخدامها بدلًا من خوارزميات التشفير الحديثة.

📄 الترخيص (License)

لم يتم تحديد ترخيص للمشروع حتى الآن. يجب إضافة ملف "LICENSE" عند اختيار الترخيص المناسب، ومراجعة شروطه قبل السماح بإعادة استخدام المشروع أو توزيعه.

---

🇬🇧 English Documentation

📌 About the Project

CipherLab is an educational mobile application built with React Native, TypeScript, and Expo. It provides an interactive environment for learning and experimenting with classical encryption algorithms.

The application helps students understand how Plaintext is transformed into Ciphertext through Encryption, how the original message can be recovered through Decryption, and how basic Cipher Breaking techniques can be explored.

✨ Features

- Caesar Cipher: Encrypts and decrypts text using a shift value.
- Vigenère Cipher: Encrypts and decrypts text using a keyword.
- Rail Fence Cipher: Encrypts and decrypts text using a transposition technique.
- Cipher Breaking: Explores the supported methods for attempting to recover plaintext or infer a key.
- Interactive User Interface: Allows users to select algorithms, enter text, configure parameters, and view results.
- Copy Results: Copies generated results where supported by the application.

«Note: Cipher Breaking results are estimates and may be inaccurate, particularly for short texts or text that does not follow the expected language patterns.»

🧠 Key Concepts

- Plaintext: The original message before encryption.
- Ciphertext: The transformed message produced by encryption.
- Encryption: Transforming plaintext into ciphertext.
- Decryption: Recovering the original plaintext using the appropriate key.
- Key: A value or keyword used by an encryption or decryption algorithm.
- Cryptanalysis: Analyzing ciphertext to attempt to recover plaintext or infer a key.
- Classical Ciphers: Historical techniques useful for learning the fundamentals of cryptography.

🛠️ Tech Stack

- React Native
- TypeScript
- Expo
- Expo Router
- JavaScript / TypeScript

📥 Official Download Links

Required or Recommended Tools

- Node.js: "Download Node.js" (https://nodejs.org/en/download)
- Visual Studio Code: "Download VS Code" (https://code.visualstudio.com/download)
- Git: "Download Git" (https://git-scm.com/install/)
- Expo Go: "Get Expo Go for mobile" (https://expo.dev/go)
- Expo Documentation: "Official Expo documentation" (https://docs.expo.dev/)

Optional Tools

- Android Studio: "Download Android Studio" (https://developer.android.com/studio) to use the Android Emulator.
- iOS Simulator: Available through Xcode on macOS. Visit the "official Xcode website" (https://developer.apple.com/xcode/).

«Important: Use a Node.js version compatible with the project's Expo SDK and dependencies. Expo Go must also be compatible with the SDK used by the project. Check "package.json" and the relevant Expo documentation if you encounter compatibility issues.»

🚀 Installation & Setup

Option 1: Download from GitHub

After the repository has been published:

1. Open the repository page.
2. Click Code.
3. Select Download ZIP.
4. Extract the downloaded archive.
5. Open the project folder in Visual Studio Code.

«The repository URL will be added here after the GitHub repository is created.»

Option 2: Clone with Git

After publication, open a terminal and run the following commands, replacing the placeholder with the actual repository URL:

git clone YOUR_REPOSITORY_URL
cd CipherLab

Install Dependencies

Run this command from the project directory:

npm install

Start the Application

Run:

npx expo start

Follow the instructions displayed in the terminal to open the application.

Open the App on a Mobile Device

1. Install Expo Go using the official link above.
2. Make sure Expo Go is compatible with the project's Expo SDK.
3. Start the project with "npx expo start".
4. Scan the QR code using the appropriate method for your device and follow the displayed instructions.

If your Expo Go version is incompatible, consult the Expo documentation for supported development options.

📖 How to Use

1. Open the application.
2. Select the desired cipher algorithm.
3. Choose an available operation, such as Encryption, Decryption, or Breaking.
4. Enter the input text.
5. Provide the required key or parameters.
6. Run the operation.
7. Review the output and copy it if the feature is available.

🧪 Testing

Consider testing the following cases:

- Encrypt text and then decrypt the result using the same key.
- Test short and long inputs.
- Test valid and invalid key values.
- Test spaces, numbers, symbols, and non-English characters.
- Test edge cases, including empty input and invalid rail counts.
- Verify that each result matches the algorithm's actual implementation.

🎓 Educational Purpose

CipherLab is intended for students who want to learn the fundamentals of classical cryptography, experiment with algorithms, compare Encryption and Decryption results, and understand basic Cryptanalysis.

⚠️ Disclaimer

This project is intended for educational purposes only. Classical ciphers are not secure enough to protect sensitive information and should not be used as substitutes for modern cryptographic algorithms.

📄 License

A license has not yet been selected. Add a "LICENSE" file after choosing an appropriate license, and review its terms before allowing reuse or redistribution of the project.