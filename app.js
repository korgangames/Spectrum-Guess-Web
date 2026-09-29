// Elektromanyetik Spektrum Keşif & Tahmin Laboratuvarı - Çift Dilli (TR / EN) Veritabanı ve Uygulama Mantığı

const UI_TEXT = {
    tr: {
        pageTitle: "Elektromanyetik Spektrum Keşif & Tahmin Laboratuvarı",
        brandBadge: "FİZİK & OPTİK SİMÜLASYONU",
        appTitle: "Elektromanyetik Spektrum Laboratuvarı",
        tabGame: "Tahmin Oyunu",
        tabEncyclopedia: "Spektrum Ansiklopedisi",
        statScore: "PUAN",
        statStreak: "SERİ",
        statDiscovered: "KEŞFEDİLEN",
        deviceDesktop: "Masaüstü",
        deviceMobile: "Mobil",
        deviceSelectedSuffix: " (Seçili)",
        missionKickerSearching: "AKTİF GÖREV • GİZLİ DALGA BOYU TUTULDU",
        missionKickerFound: "GÖREV TAMAMLANDI • HEDEF DALGA BOYU BULUNDU",
        missionTitleSearching: "Uygulama elektromanyetik spektrumdan gizli bir dalga boyu tuttu! Bunu bulmaya çalışın.",
        missionTitleFound: (name) => `Tebrikler! Tutulan gizli dalga boyu bulundu: ${name}`,
        missionDesc: "Spektrumdaki <strong>12 dalga boyundan</strong> hangisinin tutulduğunu tahmin edin. Her yanlış tahminde sistem size hedefin <em>daha kısa dalga boyunda (yüksek enerji)</em> mı yoksa <em>daha uzun dalga boyunda (düşük enerji)</em> mı olduğunu söyler; doğru ışını bulduğunuzda detaylı bilimsel bilgileri ve kullanım alanları açılır!",
        missionTargetLabel: "TUTULAN HEDEF DALGA",
        missionTargetHidden: (rem) => `🔒 Gizli Işın (? • ${rem} Olasılık)`,
        missionTargetFound: (name, tries) => `🎉 ${name} (${tries}. Deneme)`,
        visualizerTitle: "Görsel Elektromanyetik Spektrum Cetveli",
        visualizerSubtitle: "Uzun dalga boyundan (düşük enerji) kısa dalga boyuna (yüksek enerji) doğru sıralanmış spektrum haritası.",
        axisLeft: "← Uzun Dalga Boyu (λ ↑) • Düşük Frekans & Enerji (E ↓)",
        axisRight: "Kısa Dalga Boyu (λ ↓) • Yüksek Frekans & Enerji (E ↑) →",
        liveHiddenName: "Hedef: Gizli Spektrum Bölgesi (?)",
        liveRangePrefix: "Aralık",
        liveScanning: "Enerji Yönü: Taramada",
        mobSubGuess: "Tahmin Alanı",
        mobSubReport: "Bilimsel Dosya",
        stepTag1: "ADIM 1 • HEDEFİ BUL",
        guessHeading: "Hangi Dalga Boyunu Tuttum?",
        btnShuffled: "🔀 Karışık Sıra",
        btnOrdered: "📏 Spektrum Sırası",
        btnNewWave: "🔄 Yeni Dalga Tut",
        attemptLabel: "Deneme",
        statusTarget: "✓ HEDEF",
        statusEliminated: "Elendi",
        remainingFound: "Hedef Bulundu!",
        remainingCount: (n) => `${n} Olasılık Kaldı`,
        feedbackStartTitle: "Yeni Hedef Dalga Boyu Tutuldu!",
        feedbackStartDesc: "12 spektrum bölgesinden birini seçerek tahminde bulunun. Her yanlış tahminde daha kısa veya daha uzun dalga boyu yönüne göre aralık daralacaktır.",
        feedbackSuccessTitle: (name) => `TEBRİKLER! Aradığımız Işın: ${name}`,
        feedbackSuccessDesc: (attempts, name) => `${attempts}. denemede buldunuz! ${name} için detaylı bilimsel inceleme ve kullanım alanları dosyası açıldı.`,
        feedbackJumpBtn: "🔬 Bilimsel Dosyayı ve Kullanım Alanlarını Gör →",
        feedbackHigherTitle: (name) => `${name} Yanlış! Daha Yüksek Enerjiye Git →`,
        feedbackHigherDesc: (name) => `Aradığımız ışın ${name} bölgesinden daha KISA dalga boylu ve daha YÜKSEK enerjili bir ışındır. (Spektrumda sağa doğru ilerleyin)`,
        feedbackLowerTitle: (name) => `${name} Yanlış! Daha Uzun Dalga Boyuna Git ←`,
        feedbackLowerDesc: (name) => `Aradığımız ışın ${name} bölgesinden daha UZUN dalga boylu ve daha DÜŞÜK enerjili bir ışındır. (Spektrumda sola doğru ilerleyin)`,
        histExact: (pts) => `Doğru Tahmin! (+${pts} Puan)`,
        histUp: "Daha kısa dalga boyu (λ ↓) / Daha yüksek enerji (E ↑) →",
        histDown: "← Daha uzun dalga boyu (λ ↑) / Daha düşük enerji (E ↓)",
        cluesTag: "YARDIMCI İPUÇLARI",
        cluesHeading: "İpucu Başlıkları",
        cluesBadge: "Tıklayarak Aç / Kapat",
        cluesHelper: "Hedef ışını bulmak için aşağıdaki ipucu başlıklarından istediğinizi tıklayarak açıp kapatabilirsiniz:",
        clue1Title: "Fiziksel Ölçek ve Dalga Boyu",
        clue2Title: "Günlük Yaşam ve Kullanım Alanı",
        clue3Title: "Ayırt Edici Bilimsel Özellik",
        clueBadgePrefix: "İPUCU",
        historyHeading: "Tahmin Geçmişi & Yön Analizi",
        historyEmpty: "Henüz tahmin yapılmadı. Yukarıdan bir ışın seçin!",
        lockedTitle: "Bilimsel Bilgi ve Kullanım Alanları",
        lockedDesc: "Doğru dalga boyunu bulduğunuzda bu panelde ilgili spektrum bölgesinin <strong>açılır-kapanır (collapsible) bilimsel bilgi kartları</strong> aktifleşecektir.",
        prevBadge1: "📐 Fiziksel",
        prevText1: "Dalga Boyu, Frekans, Enerji & Boyut Ölçeği",
        prevBadge2: "🌌 Bilimsel",
        prevText2: "Oluşum Mekanizması & Doğadaki Kaynakları",
        prevBadge3: "🛠️ Kullanım",
        prevText3: "Teknolojik ve Günlük Kullanım Alanları",
        prevBadge4: "🛡️ Etkiler",
        prevText4: "Faydaları, Riskleri & İlginç Bilgiler",
        reportOrderPrefix: "SPEKTRUM SIRASI",
        reportSectionsTag: "DETAYLI BİLİMSEL BİLGİ BAŞLIKLARI",
        btnExpandAll: "Tümünü Aç",
        btnCollapseAll: "Tümünü Daralt",
        sec1Badge: "📐 FİZİKSEL",
        sec1Title: "Fiziksel Kimlik, Dalga Boyu ve Enerji Ölçeği",
        metricLambdaLabel: "Dalga Boyu Aralığı (λ)",
        metricLambdaSub: (idx) => `Spektrum Sırası: #${idx} / 12`,
        metricFreqLabel: "Frekans Aralığı (f)",
        metricFreqSub: "Işık hızında (c) titreşim sıklığı",
        metricEnergyLabel: "Foton Enerjisi (E = h·f)",
        metricScaleLabel: "Fiziksel Boyut Karşılaştırması",
        metricScaleSub: "Dalga boyunun günlük hayattaki karşılığı",
        sec2Badge: "🌌 BİLİMSEL",
        sec2Title: "Oluşum Mekanizması ve Doğadaki Kaynakları",
        sciNoteLabel: "Temel Bilimsel Not:",
        sciMechLabel: "Nasıl Oluşur ve Etkileşir?",
        sciSourcesLabel: "Doğal ve Kozmik Kaynaklar",
        sec3Badge: "🛠️ KULLANIM",
        sec3Title: "Kullanım Alanları ve Teknolojik Uygulamalar",
        sec3Intro: (name) => `<strong>${name}</strong> günlük yaşamda, tıpta, iletişimde ve uzay araştırmalarında şu kritik alanlarda kullanılır:`,
        sec4Badge: "🛡️ ETKİLER",
        sec4Title: "Faydaları, Biyolojik Etkileri ve İlginç Bilgiler",
        benefitHeading: "✅ Faydaları ve Önemi",
        hazardHeading: "⚠️ Riskler ve Korunma",
        addedToCollection: (name) => `✓ ${name} Koleksiyona Eklendi`,
        encTitle: "Spektrum Bilgi Bankası & Kullanım Alanları Rehberi",
        encSubtitle: "Tüm elektromanyetik dalga boylarını seçip açılır-kapanır bilgi başlıklarıyla detaylıca inceleyin.",
        filterAll: "Tümü (12)",
        filterLow: "Uzun Dalga (Radyo - IR)",
        filterVisible: "Görünür Işık (6 Renk)",
        filterHigh: "Yüksek Enerji (UV - Gama)",
        badgeDiscovered: "✓ Keşfedildi",
        badgeExplore: "İncele",
        footerText: "Elektromanyetik Spektrum Tahmini & Bilimsel Keşif Uygulaması"
    },
    en: {
        pageTitle: "Electromagnetic Spectrum Discovery & Guessing Lab",
        brandBadge: "PHYSICS & OPTICS SIMULATION",
        appTitle: "Electromagnetic Spectrum Lab",
        tabGame: "Guessing Game",
        tabEncyclopedia: "Spectrum Encyclopedia",
        statScore: "SCORE",
        statStreak: "STREAK",
        statDiscovered: "DISCOVERED",
        deviceDesktop: "Desktop",
        deviceMobile: "Mobile",
        deviceSelectedSuffix: " (Pinned)",
        missionKickerSearching: "ACTIVE MISSION • SECRET WAVELENGTH LOCKED",
        missionKickerFound: "MISSION COMPLETE • TARGET WAVELENGTH FOUND",
        missionTitleSearching: "The app has secretly picked a wavelength from the electromagnetic spectrum! Try to find it.",
        missionTitleFound: (name) => `Congratulations! You found the secret wavelength: ${name}`,
        missionDesc: "Guess which of the <strong>12 spectrum bands</strong> the app is thinking of. After each wrong guess, the system tells you whether the target has a <em>shorter wavelength (higher energy)</em> or a <em>longer wavelength (lower energy)</em>. Find the right wave to unlock its scientific dossier &amp; real-world applications!",
        missionTargetLabel: "SECRET TARGET WAVE",
        missionTargetHidden: (rem) => `🔒 Hidden Wave (? • ${rem} Left)`,
        missionTargetFound: (name, tries) => `🎉 ${name} (${tries} Tries)`,
        visualizerTitle: "Visual Electromagnetic Spectrum Ruler",
        visualizerSubtitle: "Interactive spectrum map ordered from longest wavelength (lowest energy) to shortest wavelength (highest energy).",
        axisLeft: "← Long Wavelength (λ ↑) • Low Frequency & Energy (E ↓)",
        axisRight: "Short Wavelength (λ ↓) • High Frequency & Energy (E ↑) →",
        liveHiddenName: "Target: Hidden Spectrum Band (?)",
        liveRangePrefix: "Range",
        liveScanning: "Energy Direction: Scanning",
        mobSubGuess: "Guessing Pad",
        mobSubReport: "Scientific File",
        stepTag1: "STEP 1 • FIND THE TARGET",
        guessHeading: "Which Wavelength Am I Thinking Of?",
        btnShuffled: "🔀 Shuffled Order",
        btnOrdered: "📏 Spectrum Order",
        btnNewWave: "🔄 New Target Wave",
        attemptLabel: "Tries",
        statusTarget: "✓ TARGET",
        statusEliminated: "Eliminated",
        remainingFound: "Target Found!",
        remainingCount: (n) => `${n} Possibilities Left`,
        feedbackStartTitle: "New Target Wavelength Selected!",
        feedbackStartDesc: "Pick one of the 12 electromagnetic spectrum bands below. Each wrong guess narrows the range toward shorter or longer wavelengths.",
        feedbackSuccessTitle: (name) => `CONGRATULATIONS! Target Wave: ${name}`,
        feedbackSuccessDesc: (attempts, name) => `Found in ${attempts} tries! The detailed scientific dossier and real-world applications for ${name} are now unlocked.`,
        feedbackJumpBtn: "🔬 View Scientific Dossier & Applications →",
        feedbackHigherTitle: (name) => `${name} is Incorrect! Go to Higher Energy →`,
        feedbackHigherDesc: (name) => `The target wave has a SHORTER wavelength and HIGHER photon energy than ${name}. (Move right along the spectrum)`,
        feedbackLowerTitle: (name) => `${name} is Incorrect! Go to Longer Wavelength ←`,
        feedbackLowerDesc: (name) => `The target wave has a LONGER wavelength and LOWER photon energy than ${name}. (Move left along the spectrum)`,
        histExact: (pts) => `Correct Guess! (+${pts} Pts)`,
        histUp: "Shorter wavelength (λ ↓) / Higher energy (E ↑) →",
        histDown: "← Longer wavelength (λ ↑) / Lower energy (E ↓)",
        cluesTag: "HELPER STATION",
        cluesHeading: "Collapsible Clues",
        cluesBadge: "Click to Expand / Collapse",
        cluesHelper: "Tap any clue card below to expand or collapse helpful hints about the target radiation:",
        clue1Title: "Physical Scale & Wavelength",
        clue2Title: "Everyday Life & Applications",
        clue3Title: "Distinctive Scientific Property",
        clueBadgePrefix: "CLUE",
        historyHeading: "Guess History & Direction Analysis",
        historyEmpty: "No guesses yet. Pick a spectrum band above!",
        lockedTitle: "Scientific Dossier & Applications",
        lockedDesc: "Once you find the target wavelength, <strong>collapsible scientific cards</strong> covering physical metrics, sources, applications, and safety will unlock here.",
        prevBadge1: "📐 Physical",
        prevText1: "Wavelength, Frequency, Energy & Physical Scale",
        prevBadge2: "🌌 Science",
        prevText2: "Generation Mechanism & Natural Sources",
        prevBadge3: "🛠️ Uses",
        prevText3: "Technological & Everyday Applications",
        prevBadge4: "🛡️ Impact",
        prevText4: "Benefits, Biological Risks & Fun Facts",
        reportOrderPrefix: "SPECTRUM ORDER",
        reportSectionsTag: "COLLAPSIBLE SCIENTIFIC DOSSIER",
        btnExpandAll: "Expand All",
        btnCollapseAll: "Collapse All",
        sec1Badge: "📐 PHYSICAL",
        sec1Title: "Physical Identity, Wavelength & Energy Scale",
        metricLambdaLabel: "Wavelength Range (λ)",
        metricLambdaSub: (idx) => `Spectrum Order: #${idx} / 12`,
        metricFreqLabel: "Frequency Range (f)",
        metricFreqSub: "Oscillation rate at speed of light (c)",
        metricEnergyLabel: "Photon Energy (E = h·f)",
        metricScaleLabel: "Physical Size Comparison",
        metricScaleSub: "Real-world scale of one wavelength",
        sec2Badge: "🌌 SCIENCE",
        sec2Title: "Physical Mechanism & Natural Sources",
        sciNoteLabel: "Core Scientific Note:",
        sciMechLabel: "How Is It Produced & How Does It Interact?",
        sciSourcesLabel: "Natural & Cosmic Sources",
        sec3Badge: "🛠️ USES",
        sec3Title: "Real-World Applications & Technologies",
        sec3Intro: (name) => `<strong>${name}</strong> is used across medicine, communications, industry, and space science in these key areas:`,
        sec4Badge: "🛡️ IMPACT",
        sec4Title: "Benefits, Biological Effects & Fun Facts",
        benefitHeading: "✅ Benefits & Importance",
        hazardHeading: "⚠️ Risks & Protection",
        addedToCollection: (name) => `✓ ${name} Added to Collection`,
        encTitle: "Spectrum Knowledge Base & Applications Guide",
        encSubtitle: "Select any electromagnetic band to explore its physical metrics, natural origins, and applications.",
        filterAll: "All (12)",
        filterLow: "Long Wave (Radio - IR)",
        filterVisible: "Visible Light (6 Colors)",
        filterHigh: "High Energy (UV - Gamma)",
        badgeDiscovered: "✓ Discovered",
        badgeExplore: "Explore",
        footerText: "Electromagnetic Spectrum Guessing & Scientific Discovery App"
    }
};

const SPECTRUM_DATA_I18N = {
    tr: [
        {
            id: 0,
            name: "Radyo Dalgaları",
            category: "low",
            categoryLabel: "Uzun Dalga • Radyo Bölgesi",
            color: "#06b6d4",
            shortLambda: "> 1 m – km",
            wavelengthRange: "1 milimetre – 100+ kilometre",
            frequencyRange: "3 Hz – 300 GHz",
            photonEnergy: "12.4 feV – 1.24 meV",
            scaleObject: "Binalar, Futbol Sahası ve Dağlar",
            ionizing: "İyonlaştırıcı Değildir (Güvenli)",
            canvasFreq: 0.008,
            canvasSpeed: 0.035,
            originalNote: "Kilometrelerce uzunlukta olabilirler; radyo ve TV yayınlarını taşırlar.",
            clues: [
                "Fiziksel İpucu: Elektromanyetik spektrumun en uzun dalga boyuna ve en düşük foton enerjisine sahip bölgesidir. Dalga boyu bir binadan veya futbol sahasından daha büyük olabilir.",
                "Kullanım İpucu: FM/AM yayınları, televizyon vericileri, denizaltı haberleşmesi ve GPS uydularında bilgi taşımak için kullanılır.",
                "Bilimsel İpucu: Atmosferdeki iyonosfer tabakasından yansıyarak Dünya'nın eğriliğini aşabilir ve kıtalararası iletişim sağlayabilir."
            ],
            scientificMechanism: "İletken antenlerdeki alternatif akımla hızlandırılan elektronların salınımı sonucunda üretilir. Dalga boyları çok uzun olduğu için engellerin (binalar, tepeler) etrafından kırınımla kolayca dolanabilirler.",
            naturalSources: "Yıldırımlar, pulsarlar (nötron yıldızları), kuasarlar, Güneş patlamaları ve Kozmik Radyo Arka Plan Işıması.",
            usages: [
                { icon: "📻", title: "Radyo ve Televizyon Yayıncılığı", desc: "FM/AM radyo kanalları ve karasal televizyon sinyalleri ses ve görüntüyü uzun mesafelere taşır." },
                { icon: "🛰️", title: "Küresel Konumlama (GPS) ve Navigasyon", desc: "Uydulardan gelen zaman sinyalleriyle uçak, gemi ve telefonların konumunu metre hassasiyetinde belirler." },
                { icon: "🏥", title: "Manyetik Rezonans Görüntüleme (MR / MRI)", desc: "Güçlü manyetik alanla birlikte vücuttaki hidrojen atomlarını uyararak iç organların yüksek çözünürlüklü 3B görüntüsünü çıkarır." },
                { icon: "🔭", title: "Radyo Astronomisi", desc: "Optik teleskopların göremediği toz bulutlarının arkasındaki galaksileri ve kara delik jetlerini gözlemler." }
            ],
            benefits: "İyonlaştırıcı olmadığı için DNA'ya zarar vermez. İletişim teknolojilerinin, acil durum telsizlerinin ve modern tıbbi MR görüntülemenin temel taşını oluşturur.",
            hazards: "Günlük seviyelerde zararsızdır. Yalnızca çok yüksek güçlü verici antenlerin hemen yakınında yoğun maruziyet dokularda hafif ısınma yapabilir.",
            funFact: "Bunu Biliyor muydunuz? Evrendeki en soğuk ve en uzak gökadaların haritası görünür ışıkla değil, devasa çanak antenli Radyo Teleskoplarla çıkarılmıştır!"
        },
        {
            id: 1,
            name: "Mikro Dalgalar",
            category: "low",
            categoryLabel: "Kısa Radyo • Mikrodalga Bölgesi",
            color: "#10b981",
            shortLambda: "1 mm – 1 m",
            wavelengthRange: "1 milimetre – 1 metre",
            frequencyRange: "300 MHz – 300 GHz",
            photonEnergy: "1.24 µeV – 1.24 meV",
            scaleObject: "Kelebek, Su Şişesi veya Beyzbol Topu",
            ionizing: "İyonlaştırıcı Değildir (Termal Etkili)",
            canvasFreq: 0.015,
            canvasSpeed: 0.045,
            originalNote: "Molekülleri titreştirerek ısı üretir ve Wi-Fi sinyallerini taşırlar.",
            clues: [
                "Fiziksel İpucu: Dalga boyları 1 milimetre ile 1 metre arasındadır; yaklaşık bir kelebek veya su şişesi boyutundadır.",
                "Kullanım İpucu: Evlerimizde yemekleri hızla ısıtan fırınlarda, kablosuz internet (Wi-Fi) ve Bluetooth bağlantılarında kullanılır.",
                "Bilimsel İpucu: Polar yapıdaki su moleküllerini saniyede milyarlarca kez döndürerek sürtünme yoluyla ısı enerjisi açığa çıkarır."
            ],
            scientificMechanism: "Magnetron veya katı hal osilatörleriyle üretilir. Su, yağ ve şeker gibi polar moleküller tarafından güçlü şekilde soğurulur ve dielektrik ısınma yaratır. Atmosferdeki bulut, sis ve yağmurdan kolayca geçebilir.",
            naturalSources: "Büyük Patlama'dan (Big Bang) arta kalan Kozmik Mikrodalga Arka Plan Işıması (CMB) tüm evreni doldurur; ayrıca Güneş ve sıcak gezegen atmosferleri.",
            usages: [
                { icon: "📶", title: "Wi-Fi, Bluetooth ve 4G/5G Mobil İletişim", desc: "2.4 GHz ve 5 GHz bantlarında yüksek hızlı kablosuz veri aktarımı ve cep telefonu iletişimi sağlar." },
                { icon: "🍲", title: "Mikrodalga Fırınlar", desc: "Besinlerin içindeki su moleküllerini titreştirerek yemekleri dıştan içe değil, hacimsel olarak hızla ısıtır." },
                { icon: "✈️", title: "RADAR ve Hava Tahmin Sistemleri", desc: "Uçakların, gemilerin hız/konum tespitinde ve Doppler meteoroloji radarlarında yağış takibinde kullanılır." },
                { icon: "📡", title: "Uydu İletişimi", desc: "İyonosferi delip geçebildiği için yer istasyonları ile yörüngedeki haberleşme uyduları arasında köprü kurar." }
            ],
            benefits: "Hızlı ve enerji verimli pişirme sağlar, sisli havalarda bile uçuş güvenliğini (RADAR) korur ve modern kablosuz internet dünyasını mümkün kılar.",
            hazards: "Yüksek yoğunluklu kapalı mikrodalga kaynakları su içeren dokuları (özellikle göz merceğini) ısıtabilir; bu nedenle mikrodalga fırınların kapaklarında metalik koruyucu kafes bulunur.",
            funFact: "Bunu Biliyor muydunuz? Mikrodalga fırınların keşfi tamamen tesadüftür! Mühendis Percy Spencer, bir radar magnetronunun yanında dururken cebindeki çikolatanın eridiğini fark ederek ilk mikrodalga fırını geliştirmiştir."
        },
        {
            id: 2,
            name: "Kızıl Ötesi",
            category: "low",
            categoryLabel: "Termal Işıma • Kızılötesi (IR)",
            color: "#f43f5e",
            shortLambda: "750 nm – 1 mm",
            wavelengthRange: "750 nanometre – 1 milimetre",
            frequencyRange: "300 GHz – 400 THz",
            photonEnergy: "1.24 meV – 1.7 eV",
            scaleObject: "Toplu İğne Ucu ve Toz Zerreciği",
            ionizing: "İyonlaştırıcı Değildir (Isıl Işıma)",
            canvasFreq: 0.024,
            canvasSpeed: 0.055,
            originalNote: "Isı olarak hissedilirler; gece görüş dürbünleri bu ışını kullanır.",
            clues: [
                "Fiziksel İpucu: Görünür kırmızı ışığın hemen altında (daha uzun dalga boyunda) yer alır. Dalga boyu bir toplu iğne ucu kadardır.",
                "Kullanım İpucu: TV uzaktan kumandalarında, termal kameralarda, gece görüş dürbünlerinde ve temassız ateş ölçerlerde kullanılır.",
                "Bilimsel İpucu: İnsan gözü göremez ancak cildimiz bu ışınımı doğrudan 'sıcaklık / ısı' olarak hisseder."
            ],
            scientificMechanism: "Mutlak sıfırın (-273.15 °C) üzerindeki tüm cisimler, atom ve moleküllerinin termal titreşimleri nedeniyle kızılötesi (kara cisim) ışıması yayar.",
            naturalSources: "Güneş ışığının yaklaşık yarısı, ateş, kor halindeki kömür, insan ve hayvan vücut ısısı, gezegenler ve soğuk yıldızlar.",
            usages: [
                { icon: "🌡️", title: "Termal Kameralar ve Gece Görüşü", desc: "Zifiri karanlıkta veya duman altında canlıları, ısı kaçaklarını ve arama-kurtarma hedeflerini tespit eder." },
                { icon: "📺", title: "Uzaktan Kumandalar ve Fiber Optik", desc: "TV/klima kumandalarındaki IR LED'ler ve 1550 nm dalga boyunda çalışan fiber optik internet kabloları." },
                { icon: "🩺", title: "Tıbbi Fizyoterapi ve Temassız Ateş Ölçerler", desc: "Alından yayılan kızılötesi ışımayı ölçerek saniyeler içinde vücut sıcaklığını belirler; kas ağrılarında ısıtıcı terapi sağlar." },
                { icon: "🌌", title: "Kızılötesi Uzay Teleskopları (James Webb)", desc: "James Webb Uzay Teleskobu (JWST), evrenin ilk oluşan uzak galaksilerini kızılötesi spektrumda gözlemler." }
            ],
            benefits: "Temassız sıcaklık ölçümü, binalarda ısı yalıtım analizi, arama-kurtarma operasyonları ve yüksek hızlı fiber optik iletişimde vazgeçilmezdir.",
            hazards: "Çok güçlü endüstriyel kızılötesi kaynaklara (eritme fırınları, güçlü IR lazerler) uzun süre çıplak gözle bakmak retina ve göz merceğinde termal hasara yol açabilir.",
            funFact: "Bunu Biliyor muydunuz? Telefonunuzun kamerası gözünüzün göremediği yakın kızılötesi ışığı algılayabilir! TV kumandanızın ucunu telefon kamerasına tutup bir tuşa basarsanız morumsu bir ışık parladığını görebilirsiniz."
        },
        {
            id: 3,
            name: "Kırmızı Işık",
            category: "visible",
            categoryLabel: "Görünür Spektrum • En Uzun Dalga",
            color: "#dc2626",
            shortLambda: "620 – 750 nm",
            wavelengthRange: "620 – 750 nanometre",
            frequencyRange: "400 – 484 THz",
            photonEnergy: "1.65 – 2.00 eV",
            scaleObject: "Bakteri / Tek Hücreli Canlı Boyutu",
            ionizing: "İyonlaştırıcı Değildir (Görünür Işık)",
            canvasFreq: 0.033,
            canvasSpeed: 0.062,
            originalNote: "Görünür ışığın en uzun dalga boylu rengidir.",
            clues: [
                "Fiziksel İpucu: İnsan gözünün algılayabildiği görünür ışık spektrumunun en uzun dalga boylu ve en düşük enerjili rengidir (620–750 nm).",
                "Kullanım İpucu: Trafik lambalarında 'Dur' uyarısı, araç fren lambaları, barkod okuyucu lazerler ve sera bitki aydınlatmasında kullanılır.",
                "Bilimsel İpucu: Atmosferdeki hava molekülleri tarafından en az saçılan görünür renk olduğu için gün doğumu ve gün batımında gökyüzünü boyar."
            ],
            scientificMechanism: "Retinamızdaki L-tipi (uzun dalga) koni hücrelerini uyarır. Rayleigh saçılmasına en az uğrayan görünür dalga boyu olduğundan sis ve pus içinde en uzak mesafeden seçilebilen renktir.",
            naturalSources: "Güneş (özellikle ufka yakınken), kırmızı dev yıldızlar (Betelgeuse), ateş ve korlaşmış metaller.",
            usages: [
                { icon: "🚦", title: "Trafik, Havacılık ve Güvenlik Uyarıları", desc: "Sisli ve yağışlı havalarda en az dağılan renk olduğu için fren lambaları, trafik ışıkları ve kule ikaz lambalarında kullanılır." },
                { icon: "🌱", title: "Tarım ve Sera Fotosentez LED'leri", desc: "Klorofil-a pigmenti kırmızı ışığı güçlü şekilde soğurarak bitkilerde çiçeklenme ve meyve büyümesini hızlandırır." },
                { icon: "🩸", title: "Puls Oksimetre (Kan Oksijen Ölçümü)", desc: "Parmak ucuna tutulan kırmızı (660 nm) ve kızılötesi ışıkla kandaki oksijen doygunluğunu (SpO2) acısız ölçer." },
                { icon: "🔦", title: "Astronomi Gece Fenerleri ve Karanlık Oda", desc: "Gözün karanlığa uyumunu (rodopsin pigmentini) bozmadığı için gökyüzü gözlemcileri gece kırmızı fener kullanır." }
            ],
            benefits: "Gece görüş adaptasyonunu korur, bitkilerde fotosentezi destekler ve düşük güçlü kırmızı fotobiyomodülasyon tedavisinde doku iyileşmesini hızlandırır.",
            hazards: "Normal aydınlatmada tamamen güvenlidir; yalnızca doğrudan göze tutulan yüksek güçlü kırmızı lazer işaretleyiciler retinaya zarar verebilir.",
            funFact: "Bunu Biliyor muydunuz? Suyun altında kırmızı ışık ilk birkaç metrede hızla soğurulur. Bu yüzden derin deniz canlılarının çoğu kırmızı renklidir; derinlerde kırmızı ışık olmadığı için aslında simsiyah ve görünmez olurlar!"
        },
        {
            id: 4,
            name: "Turuncu Işık",
            category: "visible",
            categoryLabel: "Görünür Spektrum • Sıcak Ton",
            color: "#f97316",
            shortLambda: "590 – 620 nm",
            wavelengthRange: "590 – 620 nanometre",
            frequencyRange: "484 – 508 THz",
            photonEnergy: "2.00 – 2.10 eV",
            scaleObject: "Büyük Virüs / Küçük Bakteri Ölçeği",
            ionizing: "İyonlaştırıcı Değildir (Görünür Işık)",
            canvasFreq: 0.039,
            canvasSpeed: 0.068,
            originalNote: "Enerjisi kırmızıdan biraz daha fazladır.",
            clues: [
                "Fiziksel İpucu: Görünür spektrumda kırmızı ile sarı arasında (590–620 nm) yer alır; enerjisi kırmızı ışıktan biraz daha yüksektir.",
                "Kullanım İpucu: Denizde can yelekleri, kara kutular, yol çalışma konileri ve otoyol sodyum buharlı sokak lambalarında kullanılır.",
                "Bilimsel İpucu: Mavi deniz suyuna ve yeşil doğa örtüsüne karşı en yüksek görsel kontrastı oluşturan dalga boyudur."
            ],
            scientificMechanism: "Gözdeki hem kırmızı (L) hem de yeşil (M) koni reseptörlerini belirli bir oranda uyararak sıcak ve dikkat çekici bir algı oluşturur. Sodyum atomlarının uyarılması (589 nm) sarı-turuncu karakteristik ışık yayar.",
            naturalSources: "Alacakaranlık güneşi, sodyum buharı ışıması, karotenoid pigmenti içeren bitkiler (havuç, portakal, sonbahar yaprakları) ve K-tipi yıldızlar.",
            usages: [
                { icon: "🦺", title: "Deniz Arama-Kurtarma ve Havacılık", desc: "Mavi okyanus yüzeyinde en kolay seçilen renk olduğu için can kurtaran botları ve uçak 'Kara Kutuları' parlak turuncudur." },
                { icon: "🛣️", title: "Otoyol ve Tünel Aydınlatması", desc: "Alçak basınçlı sodyum buharlı lambalar sisli havalarda göz kamaştırmadan yüksek kontrastlı yol görüşü sağlar." },
                { icon: "🚧", title: "Trafik Dubaları ve İş Güvenliği Ekipmanları", desc: "İnsan beyninde 'dikkat ve hazırlık' algısı uyandırdığı için yol bakım alanlarında standart uyarı rengidir." },
                { icon: "🔬", title: "Spektroskopi ve Floresans Mikroskobisi", desc: "Hücre biyolojisinde özel floresan boyaların yaydığı turuncu emisyonla protein takibi yapılır." }
            ],
            benefits: "Akşam saatlerinde kullanılan sıcak/kehribar-turuncu aydınlatmalar melatonin hormonunu baskılamaz ve sağlıklı uyku düzenine yardımcı olur.",
            hazards: "Doğrudan lazer kaynağı olmadığı sürece insan sağlığına hiçbir olumsuz etkisi yoktur.",
            funFact: "Bunu Biliyor muydunuz? Uçakların meşhur 'Kara Kutu' (Uçuş Veri Kaydedicisi) cihazları aslında siyah değil, kaza sonrasında enkaz veya deniz altında hemen fark edilebilmesi için parlak 'Uluslararası Turuncu' rengindedir!"
        },
        {
            id: 5,
            name: "Sarı Işık",
            category: "visible",
            categoryLabel: "Görünür Spektrum • Yüksek Parlaklık",
            color: "#eab308",
            shortLambda: "570 – 590 nm",
            wavelengthRange: "570 – 590 nanometre",
            frequencyRange: "508 – 526 THz",
            photonEnergy: "2.10 – 2.17 eV",
            scaleObject: "580 nm • Optik Dalga Ölçeği",
            ionizing: "İyonlaştırıcı Değildir (Görünür Işık)",
            canvasFreq: 0.045,
            canvasSpeed: 0.074,
            originalNote: "Gözümüzün en parlak algıladığı renklerden biridir.",
            clues: [
                "Fiziksel İpucu: 570–590 nm gibi oldukça dar bir dalga boyu aralığına sahiptir; turuncu ile yeşil ışık arasında bulunur.",
                "Kullanım İpucu: Sis farlarında, yarı iletken (mikroçip) üretim temiz odalarında (Cleanroom) ve okul servisi/taksi görünürlüğünde kullanılır.",
                "Bilimsel İpucu: İnsan gözünün gündüz (fotopik) duyarlılık eğrisinin zirvesine (555 nm) çok yakın olduğu için en parlak algılanan renklerdendir."
            ],
            scientificMechanism: "Gözümüzdeki L (kırmızı) ve M (yeşil) koni hücrelerinin neredeyse eşit ve maksimum düzeyde uyarılmasıyla algılanır; bu nedenle eşit güçteki diğer renklere göre çok daha parlak görünür.",
            naturalSources: "Güneş (G2V tipi sarı cüce yıldız), helyum ve sodyum emisyon spektrumları, ateş böceklerinin biyolüminesans ışıması.",
            usages: [
                { icon: "🚗", title: "Araç Sis Farları ve Koruyucu Gözlükler", desc: "Mavi ve mor dalga boylarının sis/kar içinde yarattığı göz kamaştırıcı saçılmayı filtreleyerek netlik sağlar." },
                { icon: "💻", title: "Mikroçip Üretimi (Fotolitografi Odaları)", desc: "UV ve mavi ışığa duyarlı mikroçip kimyasallarının bozulmaması için fabrika temiz odaları sarı ışıkla aydınlatılır." },
                { icon: "🏥", title: "Oftalmoloji (Retina Lazer Tedavisi)", desc: "577 nm sarı mikro-darbeli lazerler, diyabetik retinopati gibi göz hastalıklarında hassas damar tedavisinde kullanılır." },
                { icon: "🚕", title: "Yüksek Görünürlüklü Taşıtlar", desc: "Çevresel (periferik) görüşte en hızlı fark edilen renklerden biri olduğu için okul servisleri ve iş makinelerinde tercih edilir." }
            ],
            benefits: "Kontrast algısını artırır, mavi ışığın yarattığı parlamayı (glare) azaltır ve hassas elektronik üretim süreçlerinde güvenli aydınlatma sağlar.",
            hazards: "Günlük kullanımda zararsızdır; ancak çok uzun süre aşırı parlak sarı-beyaz ışığa maruz kalmak görsel yorgunluk oluşturabilir.",
            funFact: "Bunu Biliyor muydunuz? Bilgisayar ve telefon ekranlarında (RGB) aslında saf sarı LED yoktur! Ekranınız kırmızı ve yeşil pikselleri aynı anda yakarak gözünüzün sarı ışık görmesini sağlar."
        },
        {
            id: 6,
            name: "Yeşil Işık",
            category: "visible",
            categoryLabel: "Görünür Spektrum • Merkez Dalga",
            color: "#22c55e",
            shortLambda: "495 – 570 nm",
            wavelengthRange: "495 – 570 nanometre",
            frequencyRange: "526 – 606 THz",
            photonEnergy: "2.17 – 2.50 eV",
            scaleObject: "532 nm • Görünür Spektrumun Kalbi",
            ionizing: "İyonlaştırıcı Değildir (Görünür Işık)",
            canvasFreq: 0.052,
            canvasSpeed: 0.080,
            originalNote: "Bitkiler bu ışığı yansıttığı için yapraklar yeşil görünür.",
            clues: [
                "Fiziksel İpucu: Görünür ışık spektrumunun tam merkezinde (495–570 nm) yer alır.",
                "Kullanım İpucu: Akıllı saatlerin altındaki kalp atış hızı (nabız) sensörlerinde, acil çıkış levhalarında ve astronomi lazerlerinde kullanılır.",
                "Bilimsel İpucu: Bitkilerdeki klorofil pigmenti mavi ve kırmızı ışığı soğururken bu dalga boyunu geri yansıttığı için doğa bu renkte görünür."
            ],
            scientificMechanism: "İnsan gözü gündüz aydınlığında en yüksek hassasiyete 555 nanometrede (sarı-yeşil) ulaşır. Ayrıca kandaki hemoglobin yeşil ışığı güçlü şekilde soğurduğu için damar içi hacim değişimlerini ölçmekte idealdir.",
            naturalSources: "Güneş spektrumunun en yoğun enerji tepesi, Kutup Işıkları (Aurora Borealis'teki uyarılmış oksijen atomları 557.7 nm yeşil ışık yayar).",
            usages: [
                { icon: "⌚", title: "Akıllı Saatler ve Optik Nabız Sensörleri (PPG)", desc: "Cilde gönderilen yeşil LED ışığının kan pompalandıkça ne kadar soğurulduğunu ölçerek kalp atış hızını hesaplar." },
                { icon: "🚪", title: "Acil Çıkış Yönlendirmeleri ve Gece Görüş Ekranları", desc: "İnsan gözü karanlıkta ve dumanlı ortamda yeşil tonlarını en net ayırt ettiği için gece görüş dürbünleri ve çıkış tabelaları yeşildir." },
                { icon: "✨", title: "Astronomi ve Gökyüzü Eğitim Lazerleri (532 nm)", desc: "Hava moleküllerinde hafif saçılma yaptığı için gece gökyüzünde yıldızları işaret ederken görünür bir ışın izi oluşturur." },
                { icon: "📷", title: "Dijital Kamera Sensörleri (Bayer Filtresi)", desc: "Kamera sensörlerinde insan gözünü taklit etmek için her 4 pikselden 2'si yeşil, 1'i kırmızı, 1'i mavidir (RGGB)." }
            ],
            benefits: "Doğadaki yeşil tonları otonom sinir sistemini sakinleştirir, göz yorgunluğunu azaltır ve giyilebilir sağlık teknolojilerinin çalışmasını sağlar.",
            hazards: "532 nm yeşil lazer işaretleyiciler göze çok parlak görünür ve uçak kokpitlerine veya göze tutulması ciddi tehlike yaratır.",
            funFact: "Bunu Biliyor muydunuz? Güneş aslında en çok yeşil-sarı dalga boyunda foton yayar! Ancak tüm görünür renkleri bir arada yaydığı için gözümüz Güneş'i yeşil değil, beyaz (atmosferde ise sarımsı) görür."
        },
        {
            id: 7,
            name: "Mavi Işık",
            category: "visible",
            categoryLabel: "Görünür Spektrum • Yüksek Enerjili Görünür",
            color: "#3b82f6",
            shortLambda: "450 – 495 nm",
            wavelengthRange: "450 – 495 nanometre",
            frequencyRange: "606 – 668 THz",
            photonEnergy: "2.50 – 2.75 eV",
            scaleObject: "470 nm • Virüs / Protein Ölçeği",
            ionizing: "İyonlaştırıcı Değildir (HEV Görünür)",
            canvasFreq: 0.060,
            canvasSpeed: 0.088,
            originalNote: "Yüksek enerjili bir renktir; gökyüzünün mavi görünme sebebidir.",
            clues: [
                "Fiziksel İpucu: Kısa dalga boylu (450–495 nm) ve yüksek enerjili görünür ışıktır; yeşil ile mor ışık arasında yer alır.",
                "Kullanım İpucu: Beyaz LED aydınlatmaların temelinde, akıllı telefon/bilgisayar ekranlarında, diş dolgusu sertleştirmede ve yenidoğan sarılığı fototerapisinde kullanılır.",
                "Bilimsel İpucu: Atmosferdeki azot ve oksijen moleküllerine çarparak her yöne güçlü şekilde saçılır (Rayleigh saçılması) ve gündüz gökyüzüne rengini verir."
            ],
            scientificMechanism: "Kısa dalga boyu nedeniyle atmosferde kırmızı ışığa göre yaklaşık 10 kat daha fazla saçılır. Gözdeki S-koni hücrelerini ve biyolojik saati yöneten melanopsin reseptörlerini doğrudan uyarır.",
            naturalSources: "Gündüz gökyüzü, sıcak ve genç O/B tipi mavi dev yıldızlar (Rigel), derin temiz okyanus suları ve Çerenkov ışıması.",
            usages: [
                { icon: "👶", title: "Yenidoğan Sarılığı Fototerapisi", desc: "450–470 nm mavi ışık, bebeklerin cildindeki fazla bilirubin moleküllerini parçalayarak ameliyatsız iyileşme sağlar." },
                { icon: "🦷", title: "Diş Hekimliği Kompozit Dolgu Cihazları", desc: "Yüksek yoğunluklu mavi LED ışık, diş dolgularındaki fotobaşlatıcı reçineyi saniyeler içinde sertleştirir." },
                { icon: "💡", title: "Modern Beyaz LED Teknolojisi ve Ekranlar", desc: "Nobel ödüllü mavi GaN LED'ler sarı fosforla kaplanarak günümüzdeki tüm enerji tasarruflu beyaz LED lambaları üretir." },
                { icon: "💿", title: "Blu-ray Optik Disk Teknolojisi", desc: "Kırmızı lazer yerine kısa dalga boylu mavi-mor lazer kullanarak disk yüzeyine 5 kat daha fazla veri yazar." }
            ],
            benefits: "Gündüz saatlerinde dikkat, uyanıklık ve bilişsel performansı artırır; tıpta yenidoğan sarılığını tedavi eder ve enerji tasarruflu LED devrimini sağlamıştır.",
            hazards: "Gece geç saatlerde ekranlardan yoğun mavi ışığa maruz kalmak melatonin salgısını baskılayarak uykusuzluğa ve göz yorgunluğuna neden olabilir.",
            funFact: "Bunu Biliyor muydunuz? 2014 Nobel Fizik Ödülü, verimli 'Mavi LED'i icat eden üç bilim insanına verilmiştir; çünkü mavi LED olmadan beyaz LED ampuller ve modern ekranlar üretilemiyordu!"
        },
        {
            id: 8,
            name: "Mor Işık",
            category: "visible",
            categoryLabel: "Görünür Spektrum • En Kısa Görünür Dalga",
            color: "#8b5cf6",
            shortLambda: "380 – 450 nm",
            wavelengthRange: "380 – 450 nanometre",
            frequencyRange: "668 – 789 THz",
            photonEnergy: "2.75 – 3.26 eV",
            scaleObject: "400 nm • Görünür Sınır",
            ionizing: "İyonlaştırıcı Değildir (UV Sınırında)",
            canvasFreq: 0.068,
            canvasSpeed: 0.095,
            originalNote: "İnsan gözünün görebildiği en yüksek enerjili renktir.",
            clues: [
                "Fiziksel İpucu: İnsan gözünün algılayabildiği en kısa dalga boylu (380–450 nm) ve en yüksek enerjili görünür ışıktır.",
                "Kullanım İpucu: Yüzey bakterilerini azaltan görünür ışık dezenfeksiyonunda (405 nm), hassas 3B reçine yazıcılarda ve mineral incelemelerinde kullanılır.",
                "Bilimsel İpucu: Gökkuşağının en iç kuşağında yer alır ve hemen ötesinde gözümüzün göremediği Morötesi (UV) bölge başlar."
            ],
            scientificMechanism: "Görünür spektrumun yüksek enerji sınırını oluşturur. Foton enerjisi 3 elektronvolt (eV) seviyesine yaklaştığı için bazı organik boyalarda ve minerallerde floresans (parlama) etkisini tetikleyebilir.",
            naturalSources: "Güneş ışığı, yıldırımlar, elektrik arkları ve yüksek sıcaklıktaki yıldızlar.",
            usages: [
                { icon: "🧼", title: "Güvenli Görünür Işık Dezenfeksiyonu (405 nm)", desc: "UV ışığının aksine insan cildine zarar vermeden ameliyathane ve gıda yüzeylerindeki bakterileri etkisiz hale getirir." },
                { icon: "🖨️", title: "3B Reçine Yazıcılar (SLA / MSLA)", desc: "405 nm mor ışık, sıvı fotopolimer reçineyi mikron hassasiyetinde katman katman dondurarak 3 boyutlu modeller üretir." },
                { icon: "💎", title: "Değerli Taş ve Mineral Analizi", desc: "Elmas, yakut ve çeşitli minerallerin iç yapılarını ve sahteciliği floresans tepkisiyle tespit eder." },
                { icon: "🌿", title: "Bitki İkincil Metabolit ve Aroma Gelişimi", desc: "Bitkilerin antioksidan ve renk pigmenti üretimini tetiklemek için özel sera aydınlatmalarında kullanılır." }
            ],
            benefits: "UV ışınları gibi DNA'yı kırmadan antibakteriyel yüzey hijyeni sağlayabilir ve 3 boyutlu üretim teknolojilerinde yüksek çözünürlük sunar.",
            hazards: "Görünür ışığın en yüksek enerjili ucu olduğundan, güçlü 405 nm lazer kaynaklarına doğrudan bakmak retinada fotokimyasal hasar oluşturabilir.",
            funFact: "Bunu Biliyor muydunuz? Gökyüzü aslında maviden çok daha fazla mor ışık saçar! Ancak gözümüzdeki koni hücreleri maviye çok daha duyarlı olduğu için beynimiz gökyüzünü mor değil, açık mavi olarak yorumlar."
        },
        {
            id: 9,
            name: "Mor Ötesi",
            category: "high",
            categoryLabel: "Yüksek Enerji • Ultraviyole (UV)",
            color: "#c084fc",
            shortLambda: "10 – 380 nm",
            wavelengthRange: "10 – 380 nanometre",
            frequencyRange: "789 THz – 30 PHz",
            photonEnergy: "3.26 – 124 eV",
            scaleObject: "Virüs ve DNA Sarmalı Ölçeği",
            ionizing: "Kısmen İyonlaştırıcı (Uzak UV)",
            canvasFreq: 0.080,
            canvasSpeed: 0.105,
            originalNote: "Güneşten gelir; fazlası cilt yanıklarına sebep olur.",
            clues: [
                "Fiziksel İpucu: Mor ışıktan daha kısa dalga boyuna (10–380 nm) sahiptir; UV-A, UV-B ve UV-C olarak üç alt bölgeye ayrılır.",
                "Kullanım İpucu: Kağıt para ve pasaport kontrolünde, hastane/su sterilizasyonunda ve cildimizde D vitamini sentezlenmesinde rol oynar.",
                "Bilimsel İpucu: Güneş'ten bolca gelir; büyük kısmı atmosferdeki Ozon (O₃) tabakası tarafından tutulur, fazlası güneş yanığına yol açar."
            ],
            scientificMechanism: "Foton enerjisi kimyasal bağları uyarmaya ve (kısa dalga boylu UV-C'de) DNA/RNA zincirlerinde timin dimerleri oluşturarak mikroorganizmaları etkisiz hale getirmeye yetecek kadar yüksektir.",
            naturalSources: "Güneş (UV-A ve UV-B yeryüzüne ulaşır, UV-C ozon tabakasında tutulur), sıcak genç yıldızlar ve yıldırım deşarjları.",
            usages: [
                { icon: "💧", title: "Su, Hava ve Tıbbi Alet Sterilizasyonu (UV-C)", desc: "254 nm UV-C lambalar, kimyasal madde kullanmadan içme sularındaki ve ameliyathanelerdeki virüs ve bakterilerin DNA'sını bozar." },
                { icon: "💶", title: "Sahte Para, Pasaport ve Adli Tıp İncelemesi", desc: "Banknotlardaki görünmez fosforlu güvenlik mürekkeplerini ve olay yerindeki biyolojik izleri parlatarak görünür kılar." },
                { icon: "☀️", title: "D Vitamini Sentezi ve Fototerapi", desc: "Kontrollü UV-B ışınları ciltte kalsiyum emilimi ve kemik sağlığı için hayati olan D vitamini üretimini başlatır." },
                { icon: "🔬", title: "EUV (Aşırı Morötesi) Mikroçip Üretimi", desc: "13.5 nm dalga boylu EUV litografi cihazları, günümüzün 2nm–3nm modern işlemcilerini (CPU/GPU) üretir." }
            ],
            benefits: "Vücutta D vitamini üretimini sağlar, içme sularını ilaçsız dezenfekte eder ve modern nanometre ölçekli bilgisayar işlemcilerinin üretilmesini mümkün kılar.",
            hazards: "Korunmasız ve aşırı maruziyet güneş yanığına, cilt yaşlanmasına, katarakta ve DNA hasarı kaynaklı cilt kanserine yol açabilir; güneş kremi ve UV filtreli gözlükle korunulmalıdır.",
            funFact: "Bunu Biliyor muydunuz? Arılar, kelebekler ve bazı kuşlar Morötesi (UV) ışığı görebilir! Bize tek renk görünen birçok çiçeğin yapraklarında aslında arıları nektara yönlendiren parlak UV 'iniş pisti' desenleri vardır."
        },
        {
            id: 10,
            name: "X-Işınları",
            category: "high",
            categoryLabel: "İyonlaştırıcı • Röntgen Bölgesi",
            color: "#e2e8f0",
            shortLambda: "0.01 – 10 nm",
            wavelengthRange: "0.01 – 10 nanometre (10 pm – 10 nm)",
            frequencyRange: "30 PHz – 30 EHz",
            photonEnergy: "124 eV – 124 keV",
            scaleObject: "Su Molekülü ve Tekil Atom Çapı",
            ionizing: "İyonlaştırıcı Radyasyon (Kurşun Koruma Gerekir)",
            canvasFreq: 0.098,
            canvasSpeed: 0.120,
            originalNote: "Vücudumuzun içini (kemikleri) görüntülemek için kullanılır.",
            clues: [
                "Fiziksel İpucu: Dalga boyu bir atomun çapı kadardır (0.01–10 nm). Çok yüksek enerjili ve delici (nüfuz edici) bir ışındır.",
                "Kullanım İpucu: Hastanelerde kırık kemikleri görüntüleyen Röntgen ve Tomografi (BT) cihazlarında, havalimanı bagaj tarayıcılarında kullanılır.",
                "Bilimsel İpucu: Yumuşak dokulardan (kas, deri) kolayca geçerken kalsiyumca zengin yoğun kemik dokusu tarafından tutulur."
            ],
            scientificMechanism: "Yüksek hızla ivmelendirilen elektronların ağır bir metal hedefe (örneğin tungsten) çarptırılıp ani yavaşlaması (Bremsstrahlung) veya atomun iç yörünge elektronlarının sıçramasıyla üretilir.",
            naturalSources: "Kara deliklerin etrafındaki aşırı sıcak yığılma diskleri, nötron yıldızları, süpernova kalıntıları ve Dünya atmosferine çarpan kozmik ışınlar.",
            usages: [
                { icon: "🦴", title: "Tıbbi Röntgen ve Bilgisayarlı Tomografi (BT)", desc: "Kemik kırıklarını, diş köklerini, akciğer hastalıklarını ve iç organları cerrahi müdahale olmadan görüntüler." },
                { icon: "🧳", title: "Havalimanı ve Gümrük Güvenlik Tarayıcıları", desc: "Bavulların ve kargo konteynerlerinin içindeki metal, organik ve tehlikeli maddeleri farklı renk kodlarıyla analiz eder." },
                { icon: "🧬", title: "X-Işını Kristalografisi (DNA'nın Keşfi)", desc: "Atomlar arası mesafeyle aynı dalga boyunda olduğu için proteinlerin ve DNA çift sarmalının 3B atomik yapısını çözer." },
                { icon: "🏗️", title: "Endüstriyel Tahribatsız Muayene", desc: "Uçak kanatları, köprü kaynakları ve boru hatlarındaki gözle görülmeyen mikro çatlakları tespit eder." }
            ],
            benefits: "Modern tıpta erken teşhis, ortopedi, diş hekimliği ve malzeme mühendisliğinde milyonlarca insanın hayatını kurtaran görüntüleme imkanı sunar.",
            hazards: "İyonlaştırıcı radyasyon olduğu için atomlardan elektron koparabilir ve yüksek dozlarda hücresel DNA hasarı yapabilir. Çekim sırasında kurşun önlük kullanılır.",
            funFact: "Bunu Biliyor muydunuz? Wilhelm Röntgen 1895'te bu gizemli ışınları keşfettiğinde ne olduklarını tam anlayamadığı için matematikteki bilinmeyen 'X' harfinden esinlenerek 'X-Işınları' adını vermiştir!"
        },
        {
            id: 11,
            name: "Gama Işınları",
            category: "high",
            categoryLabel: "En Yüksek Enerji • Nükleer & Kozmik",
            color: "#facc15",
            shortLambda: "< 0.01 nm",
            wavelengthRange: "10 pikometreden küçük (< 0.01 nm)",
            frequencyRange: "> 30 EHz",
            photonEnergy: "> 124 keV – TeV",
            scaleObject: "Atom Çekirdeği ve Proton Ölçeği",
            ionizing: "Yüksek İyonlaştırıcı (Nükleer Kökenli)",
            canvasFreq: 0.125,
            canvasSpeed: 0.145,
            originalNote: "Evrendeki en yüksek enerjili olaylarda oluşurlar.",
            clues: [
                "Fiziksel İpucu: Elektromanyetik spektrumun en kısa dalga boylu (atom çekirdeği boyutunda) ve en yüksek enerjili fotonlarıdır.",
                "Kullanım İpucu: Kanser tedavisinde tümörleri neştersiz yok eden Radyoterapi (Gamma Knife) ve PET-BT tıbbi görüntüleme cihazlarında kullanılır.",
                "Bilimsel İpucu: Elektron hareketleriyle değil, doğrudan atom çekirdeğinin bozunması, süpernovalar ve nötron yıldızı çarpışmalarıyla ortaya çıkar."
            ],
            scientificMechanism: "Radyoaktif atom çekirdeklerinin yüksek enerjili durumdan kararlı duruma geçmesi (gama bozunumu), madde-antimadde yok oluşu veya kozmik patlamalar sonucunda doğrudan çekirdek düzeyinde yayılır.",
            naturalSources: "Gama Işını Patlamaları (GRB - evrendeki en güçlü patlamalar), nötron yıldızı birleşmeleri, pulsarlar, yıldırım bulutlarındaki karasal gama parlamaları ve doğal radyoaktif elementler.",
            usages: [
                { icon: "🎯", title: "Kanser Radyoterapisi ve Gamma Knife (Gama Bıçağı)", desc: "Yüzlerce ince gama ışını demetini beyindeki tümör noktasında odaklayarak sağlıklı dokuyu koruyup kanserli hücreleri yok eder." },
                { icon: "🏥", title: "Nükleer Tıp ve PET Tarama (Pozitron Emisyon)", desc: "Vücuda verilen izleyici moleküllerin yaydığı gama fotonlarını yakalayarak tümörlerin metabolik aktivitesini haritalar." },
                { icon: "🥫", title: "Gıda Işınlama ve Tıbbi Malzeme Sterilizasyonu", desc: "Ambalajlı şırıngaları, cerrahi eldivenleri ve baharat/kuru gıdaları paketi açmadan ve ısıtmadan %100 sterilize eder." },
                { icon: "🚀", title: "Uzay Gama Teleskopları ve Gezegen Jeolojisi", desc: "Ay ve Mars yörüngesindeki uzay araçları, yüzeyden gelen gama ışınlarını ölçerek gezegen toprağındaki su ve element haritasını çıkarır." }
            ],
            benefits: "Cerrahi olarak ulaşılamayan beyin tümörlerinin tedavisinde, tek kullanımlık tıbbi malzemelerin sterilizasyonunda ve gıda güvenliğinde benzersizdir.",
            hazards: "En yüksek delici güce sahip iyonlaştırıcı radyasyondur; yalnızca kalın kurşun plakalar veya metrelerce kalınlıkta beton bloklarla durdurulabilir.",
            funFact: "Bunu Biliyor muydunuz? Uzayda gerçekleşen tek bir 'Gama Işını Patlaması' (Gamma-Ray Burst), birkaç saniye içinde Güneş'in tüm 10 milyar yıllık ömrü boyunca üreteceği toplam enerjiden daha fazla enerji yayabilir!"
        }
    ],
    en: [
        {
            id: 0,
            name: "Radio Waves",
            category: "low",
            categoryLabel: "Long Wave • Radio Band",
            color: "#06b6d4",
            shortLambda: "> 1 m – km",
            wavelengthRange: "1 millimeter – 100+ kilometers",
            frequencyRange: "3 Hz – 300 GHz",
            photonEnergy: "12.4 feV – 1.24 meV",
            scaleObject: "Buildings, Football Fields & Mountains",
            ionizing: "Non-Ionizing (Safe)",
            canvasFreq: 0.008,
            canvasSpeed: 0.035,
            originalNote: "Can be kilometers long; they carry radio and television broadcasts.",
            clues: [
                "Physical Clue: The longest wavelength and lowest photon energy region of the electromagnetic spectrum. Wavelengths can exceed a building or football stadium.",
                "Application Clue: Used to carry FM/AM radio broadcasts, TV signals, submarine communications, and GPS satellite navigation data.",
                "Scientific Clue: Can bounce off the Earth's ionosphere to travel beyond the horizon for intercontinental communication."
            ],
            scientificMechanism: "Produced by oscillating electrons accelerated by alternating current in conductive antennas. Because their wavelengths are so long, they easily diffract around obstacles like hills and buildings.",
            naturalSources: "Lightning strikes, pulsars (neutron stars), quasars, solar flares, and Cosmic Radio Background radiation.",
            usages: [
                { icon: "📻", title: "Radio & Television Broadcasting", desc: "FM/AM radio stations and terrestrial TV transmitters carry audio and video across vast distances." },
                { icon: "🛰️", title: "Global Positioning System (GPS) & Navigation", desc: "Timing signals from satellites determine the location of aircraft, ships, and smartphones within meters." },
                { icon: "🏥", title: "Magnetic Resonance Imaging (MRI)", desc: "Works with strong magnetic fields to excite hydrogen nuclei in the body, creating high-resolution 3D organ scans." },
                { icon: "🔭", title: "Radio Astronomy", desc: "Observes galaxies, nebulae, and black hole jets hidden behind cosmic dust clouds that block visible light." }
            ],
            benefits: "Non-ionizing and harmless to DNA. Forms the backbone of global telecommunications, emergency radio, and radiation-free medical MRI scans.",
            hazards: "Harmless at everyday levels. Only intense exposure directly adjacent to high-power broadcast transmitters can cause mild tissue warming.",
            funFact: "Did You Know? The coldest and most distant galaxies in the universe were mapped not with optical telescopes, but with giant dish Radio Telescopes!"
        },
        {
            id: 1,
            name: "Microwaves",
            category: "low",
            categoryLabel: "Short Radio • Microwave Band",
            color: "#10b981",
            shortLambda: "1 mm – 1 m",
            wavelengthRange: "1 millimeter – 1 meter",
            frequencyRange: "300 MHz – 300 GHz",
            photonEnergy: "1.24 µeV – 1.24 meV",
            scaleObject: "Butterfly, Water Bottle or Baseball",
            ionizing: "Non-Ionizing (Thermal Effect)",
            canvasFreq: 0.015,
            canvasSpeed: 0.045,
            originalNote: "Generate heat by vibrating molecules and carry Wi-Fi signals.",
            clues: [
                "Physical Clue: Wavelengths range from 1 millimeter to 1 meter—roughly the size of a butterfly or a water bottle.",
                "Application Clue: Used in kitchen ovens that rapidly heat food, as well as Wi-Fi and Bluetooth wireless connections.",
                "Scientific Clue: Rotates polar water molecules billions of times per second, generating heat through molecular friction."
            ],
            scientificMechanism: "Generated by magnetrons or solid-state oscillators. Strongly absorbed by polar molecules like water, fat, and sugar (dielectric heating), while easily penetrating clouds, fog, and rain.",
            naturalSources: "The Cosmic Microwave Background (CMB) left over from the Big Bang fills the entire universe; also emitted by the Sun and warm planetary atmospheres.",
            usages: [
                { icon: "📶", title: "Wi-Fi, Bluetooth & 4G/5G Mobile Networks", desc: "Enables high-speed wireless internet and cellular communication across 2.4 GHz, 5 GHz, and millimeter-wave bands." },
                { icon: "🍲", title: "Microwave Ovens", desc: "Agitates water molecules inside food to heat meals volumetrically and rapidly." },
                { icon: "✈️", title: "RADAR & Weather Forecasting", desc: "Tracks aircraft and ships in fog and powers Doppler weather radars to measure rain and storm velocity." },
                { icon: "📡", title: "Satellite Communications", desc: "Penetrates the Earth's ionosphere to link ground stations with geostationary and low-orbit satellites." }
            ],
            benefits: "Provides fast, energy-efficient cooking, ensures aviation safety in all weather via RADAR, and powers modern wireless connectivity.",
            hazards: "High-intensity enclosed microwave sources can heat water-rich tissues (especially the eye lens), which is why microwave oven doors have a protective metal mesh.",
            funFact: "Did You Know? The microwave oven was invented by accident! Engineer Percy Spencer noticed a chocolate bar melting in his pocket while standing near an active radar magnetron."
        },
        {
            id: 2,
            name: "Infrared (IR)",
            category: "low",
            categoryLabel: "Thermal Radiation • Infrared",
            color: "#f43f5e",
            shortLambda: "750 nm – 1 mm",
            wavelengthRange: "750 nanometers – 1 millimeter",
            frequencyRange: "300 GHz – 400 THz",
            photonEnergy: "1.24 meV – 1.7 eV",
            scaleObject: "Pinhead & Dust Particle",
            ionizing: "Non-Ionizing (Thermal Radiation)",
            canvasFreq: 0.024,
            canvasSpeed: 0.055,
            originalNote: "Felt as heat; night-vision goggles use this radiation.",
            clues: [
                "Physical Clue: Lies just below visible red light (longer wavelength). Its wavelength is about the size of a pinhead.",
                "Application Clue: Used in TV remote controls, thermal imaging cameras, night-vision goggles, and non-contact forehead thermometers.",
                "Scientific Clue: Invisible to the human eye, but our skin directly senses this radiation as warmth/heat."
            ],
            scientificMechanism: "Every object above absolute zero (-273.15 °C) emits infrared blackbody radiation due to the thermal vibration of its atoms and molecules.",
            naturalSources: "Nearly half of incoming sunlight, fire, glowing embers, human and animal body heat, planets, and cool stars.",
            usages: [
                { icon: "🌡️", title: "Thermal Cameras & Night Vision", desc: "Detects living beings, heat leaks in buildings, and search-and-rescue targets in total darkness or smoke." },
                { icon: "📺", title: "Remote Controls & Fiber Optic Internet", desc: "Powers IR LEDs in TV remotes and 1550 nm laser pulses inside global fiber-optic internet cables." },
                { icon: "🩺", title: "Non-Contact Thermometers & Physiotherapy", desc: "Measures forehead thermal emission in seconds and provides deep-warming muscle therapy." },
                { icon: "🌌", title: "Infrared Space Telescopes (James Webb)", desc: "The James Webb Space Telescope (JWST) peers through cosmic dust in infrared to observe the earliest galaxies." }
            ],
            benefits: "Indispensable for contactless temperature screening, building insulation audits, search-and-rescue, and ultra-fast fiber-optic internet.",
            hazards: "Prolonged unshielded exposure to intense industrial infrared sources (furnaces or high-power IR lasers) can cause thermal damage to the retina and lens.",
            funFact: "Did You Know? Your smartphone camera can see near-infrared light that your eyes cannot! Point a TV remote at your phone camera and press a button to see it flash purple-white."
        },
        {
            id: 3,
            name: "Red Light",
            category: "visible",
            categoryLabel: "Visible Spectrum • Longest Wave",
            color: "#dc2626",
            shortLambda: "620 – 750 nm",
            wavelengthRange: "620 – 750 nanometers",
            frequencyRange: "400 – 484 THz",
            photonEnergy: "1.65 – 2.00 eV",
            scaleObject: "Bacterium / Single-Celled Organism",
            ionizing: "Non-Ionizing (Visible Light)",
            canvasFreq: 0.033,
            canvasSpeed: 0.062,
            originalNote: "The longest wavelength color of visible light.",
            clues: [
                "Physical Clue: The longest wavelength and lowest energy color in the human-visible spectrum (620–750 nm).",
                "Application Clue: Used for 'Stop' traffic signals, vehicle brake lights, barcode scanners, and greenhouse plant grow lights.",
                "Scientific Clue: Scattered the least by air molecules, painting the sky crimson during sunrise and sunset."
            ],
            scientificMechanism: "Stimulates L-type (long-wavelength) cone cells in the human retina. Because it undergoes the least Rayleigh scattering in air, it travels farthest through fog and haze.",
            naturalSources: "Sunlight (especially at sunrise/sunset), red giant stars (Betelgeuse), fire, and glowing heated metals.",
            usages: [
                { icon: "🚦", title: "Traffic, Aviation & Safety Signals", desc: "Scatters least in fog and rain, making it the universal standard for brake lights, stop signals, and tower beacons." },
                { icon: "🌱", title: "Greenhouse & Horticulture Grow LEDs", desc: "Chlorophyll-a strongly absorbs red light to drive photosynthesis, flowering, and fruit growth." },
                { icon: "🩸", title: "Pulse Oximeters (Blood Oxygen Sensors)", desc: "Uses 660 nm red light and infrared light on a fingertip to painlessly measure blood oxygen saturation (SpO2)." },
                { icon: "🔦", title: "Astronomy Night Flashlights", desc: "Preserves night-vision adaptation (rhodopsin) so astronomers can read star charts without blinding their eyes." }
            ],
            benefits: "Preserves night vision, drives plant photosynthesis, and supports tissue healing in low-level red light photobiomodulation therapy.",
            hazards: "Completely safe in normal lighting; only direct eye exposure to concentrated red laser pointers can damage the retina.",
            funFact: "Did You Know? Red light is absorbed within the first few meters of ocean water. That is why many deep-sea creatures are bright red—with no red light in the deep ocean, they appear pitch black and invisible!"
        },
        {
            id: 4,
            name: "Orange Light",
            category: "visible",
            categoryLabel: "Visible Spectrum • Warm Tone",
            color: "#f97316",
            shortLambda: "590 – 620 nm",
            wavelengthRange: "590 – 620 nanometers",
            frequencyRange: "484 – 508 THz",
            photonEnergy: "2.00 – 2.10 eV",
            scaleObject: "Large Virus / Small Bacterium Scale",
            ionizing: "Non-Ionizing (Visible Light)",
            canvasFreq: 0.039,
            canvasSpeed: 0.068,
            originalNote: "Has slightly more energy than red light.",
            clues: [
                "Physical Clue: Lies between red and yellow in the visible spectrum (590–620 nm) with slightly higher photon energy than red light.",
                "Application Clue: Used in marine life jackets, aircraft black boxes, traffic cones, and sodium-vapor highway streetlamps.",
                "Scientific Clue: Provides the highest visual contrast against blue ocean water and green foliage."
            ],
            scientificMechanism: "Stimulates both red (L) and green (M) cone receptors in the eye to create a warm, high-alert visual perception. Excited sodium atoms emit a signature yellow-orange doublet at 589 nm.",
            naturalSources: "Twilight sun, sodium-vapor emission, carotenoid pigments in carrots, oranges, autumn leaves, and K-type stars.",
            usages: [
                { icon: "🦺", title: "Marine Search & Rescue & Aviation", desc: "Provides maximum contrast against blue water, making it the standard for life rafts and aircraft 'Black Boxes'." },
                { icon: "🛣️", title: "Highway & Tunnel Sodium Lighting", desc: "Low-pressure sodium lamps offer glare-free, high-contrast road visibility in foggy conditions." },
                { icon: "🚧", title: "Traffic Cones & Industrial Safety Gear", desc: "Triggers rapid visual attention, serving as the standard warning color in construction zones." },
                { icon: "🔬", title: "Spectroscopy & Fluorescence Microscopy", desc: "Used with fluorescent dyes (such as Rhodamine) to track cellular structures under microscopes." }
            ],
            benefits: "Warm amber-orange evening lighting avoids suppressing melatonin production, supporting healthy circadian sleep cycles.",
            hazards: "Poses no health risk unless emitted by a high-powered industrial laser.",
            funFact: "Did You Know? Aircraft 'Black Boxes' (Flight Data Recorders) are actually painted bright 'International Orange' so they can be spotted immediately in wreckage or underwater!"
        },
        {
            id: 5,
            name: "Yellow Light",
            category: "visible",
            categoryLabel: "Visible Spectrum • Peak Luminance",
            color: "#eab308",
            shortLambda: "570 – 590 nm",
            wavelengthRange: "570 – 590 nanometers",
            frequencyRange: "508 – 526 THz",
            photonEnergy: "2.10 – 2.17 eV",
            scaleObject: "580 nm • Optical Wave Scale",
            ionizing: "Non-Ionizing (Visible Light)",
            canvasFreq: 0.045,
            canvasSpeed: 0.074,
            originalNote: "One of the brightest colors perceived by the human eye.",
            clues: [
                "Physical Clue: Occupies a narrow band (570–590 nm) between orange and green light.",
                "Application Clue: Used in automotive fog lights, semiconductor microchip cleanrooms, and high-visibility school buses and taxis.",
                "Scientific Clue: Sits right next to the peak of human daytime (photopic) eye sensitivity (555 nm), making it appear exceptionally bright."
            ],
            scientificMechanism: "Stimulates both L (red) and M (green) cone cells nearly equally and near their maximum sensitivity, making yellow appear brighter than other colors of equal power.",
            naturalSources: "The Sun (a G2V yellow dwarf star), helium and sodium emission lines, and firefly bioluminescence.",
            usages: [
                { icon: "🚗", title: "Automotive Fog Lights & Ski Goggles", desc: "Filters out short-wavelength blue glare scattered by fog, snow, and mist to sharpen contrast." },
                { icon: "💻", title: "Microchip Cleanroom Lighting (Photolithography)", desc: "Semiconductor fabrication rooms use yellow lighting so UV/blue-sensitive photoresist chemicals aren't accidentally exposed." },
                { icon: "🏥", title: "Ophthalmology (Retinal Laser Therapy)", desc: "577 nm yellow micropulse lasers treat diabetic retinopathy and vascular eye conditions with minimal tissue scarring." },
                { icon: "🚕", title: "High-Visibility Vehicles & Warning Signs", desc: "Detected fastest in peripheral vision, making it ideal for school buses, taxis, and heavy machinery." }
            ],
            benefits: "Enhances visual contrast in hazy conditions, reduces blue-light glare, and enables safe illumination in microchip manufacturing.",
            hazards: "Harmless in everyday life; prolonged exposure to overly bright yellow-white glare can cause mild visual fatigue.",
            funFact: "Did You Know? Your phone and computer screens (RGB) don't actually have yellow LEDs! They light up red and green sub-pixels simultaneously, and your brain perceives the mix as yellow."
        },
        {
            id: 6,
            name: "Green Light",
            category: "visible",
            categoryLabel: "Visible Spectrum • Center Band",
            color: "#22c55e",
            shortLambda: "495 – 570 nm",
            wavelengthRange: "495 – 570 nanometers",
            frequencyRange: "526 – 606 THz",
            photonEnergy: "2.17 – 2.50 eV",
            scaleObject: "532 nm • Heart of Visible Light",
            ionizing: "Non-Ionizing (Visible Light)",
            canvasFreq: 0.052,
            canvasSpeed: 0.080,
            originalNote: "Leaves look green because plants reflect this wavelength of light.",
            clues: [
                "Physical Clue: Located right at the center of the visible light spectrum (495–570 nm).",
                "Application Clue: Used in smartwatch heart-rate sensors, emergency exit signs, night-vision displays, and astronomy laser pointers.",
                "Scientific Clue: Plant chlorophyll absorbs red and blue light but reflects this wavelength, giving nature its color."
            ],
            scientificMechanism: "The human eye reaches its absolute peak daytime sensitivity at 555 nm (yellow-green). Additionally, hemoglobin in blood strongly absorbs green light, making it ideal for optical pulse sensing.",
            naturalSources: "Peak solar energy output and the Northern Lights (excited oxygen atoms in Aurora Borealis emit 557.7 nm green light).",
            usages: [
                { icon: "⌚", title: "Smartwatch Heart-Rate Sensors (PPG)", desc: "Green LEDs shine into the wrist; changes in green light absorption as blood pulses reveal heart rate." },
                { icon: "🚪", title: "Emergency Exit Signs & Night-Vision Displays", desc: "Human eyes distinguish shades of green better than any other color, even in smoke or low light." },
                { icon: "✨", title: "Astronomy Star-Pointing Lasers (532 nm)", desc: "Slight Rayleigh scattering in air makes the beam visible at night for pointing out constellations." },
                { icon: "📷", title: "Digital Camera Sensors (Bayer Filter)", desc: "Camera sensors mimic the human eye by using twice as many green pixels as red or blue (RGGB grid)." }
            ],
            benefits: "Calms the nervous system, reduces eye strain, and powers wearable health monitors.",
            hazards: "High-powered 532 nm green laser pointers appear extremely bright to the eye and must never be aimed at eyes or aircraft.",
            funFact: "Did You Know? The Sun actually emits its peak photon flux in the green-yellow band! Because it emits all visible wavelengths together, our eyes perceive sunlight as white."
        },
        {
            id: 7,
            name: "Blue Light",
            category: "visible",
            categoryLabel: "Visible Spectrum • High-Energy Visible",
            color: "#3b82f6",
            shortLambda: "450 – 495 nm",
            wavelengthRange: "450 – 495 nanometers",
            frequencyRange: "606 – 668 THz",
            photonEnergy: "2.50 – 2.75 eV",
            scaleObject: "470 nm • Virus / Protein Scale",
            ionizing: "Non-Ionizing (HEV Visible)",
            canvasFreq: 0.060,
            canvasSpeed: 0.088,
            originalNote: "A high-energy visible color; the reason the daytime sky appears blue.",
            clues: [
                "Physical Clue: Short-wavelength (450–495 nm), high-energy visible light located between green and violet.",
                "Application Clue: Forms the core of white LED lighting, smartphone screens, dental curing lights, and neonatal jaundice phototherapy.",
                "Scientific Clue: Scatters strongly off nitrogen and oxygen molecules in the atmosphere (Rayleigh scattering), coloring the daytime sky."
            ],
            scientificMechanism: "Due to its short wavelength, it scatters roughly 10 times more strongly than red light in the atmosphere. Directly stimulates S-cone cells and melanopsin receptors that regulate the circadian clock.",
            naturalSources: "Daytime sky, hot young O/B-type blue giant stars (Rigel), deep clear ocean water, and Cherenkov radiation.",
            usages: [
                { icon: "👶", title: "Neonatal Jaundice Phototherapy", desc: "450–470 nm blue light safely breaks down excess bilirubin in newborn babies' skin without surgery." },
                { icon: "🦷", title: "Dental Composite Curing Lights", desc: "High-intensity blue LEDs polymerize and harden light-cured dental fillings in seconds." },
                { icon: "💡", title: "Modern White LEDs & Displays", desc: "Nobel-winning blue GaN LEDs coated with yellow phosphor produce energy-efficient white LED lighting worldwide." },
                { icon: "💿", title: "Blu-ray Optical Discs", desc: "Uses a short-wavelength blue-violet laser instead of red to pack 5x more data onto an optical disc." }
            ],
            benefits: "Boosts daytime alertness, memory, and cognitive reaction time; treats newborn jaundice and enabled the global LED energy revolution.",
            hazards: "Heavy exposure to blue-rich screens late at night suppresses melatonin and can disrupt sleep quality.",
            funFact: "Did You Know? The 2014 Nobel Prize in Physics was awarded to the inventors of the efficient Blue LED—without it, white LED bulbs and modern smartphones could not exist!"
        },
        {
            id: 8,
            name: "Violet Light",
            category: "visible",
            categoryLabel: "Visible Spectrum • Shortest Visible Wave",
            color: "#8b5cf6",
            shortLambda: "380 – 450 nm",
            wavelengthRange: "380 – 450 nanometers",
            frequencyRange: "668 – 789 THz",
            photonEnergy: "2.75 – 3.26 eV",
            scaleObject: "400 nm • Edge of Human Vision",
            ionizing: "Non-Ionizing (At UV Boundary)",
            canvasFreq: 0.068,
            canvasSpeed: 0.095,
            originalNote: "The highest-energy color visible to the human eye.",
            clues: [
                "Physical Clue: The shortest wavelength (380–450 nm) and highest photon energy color that human eyes can perceive.",
                "Application Clue: Used in 405 nm visible-light surface disinfection, high-precision 3D resin printers, and mineral fluorescence inspection.",
                "Scientific Clue: Forms the innermost arc of a rainbow, bordering the invisible Ultraviolet (UV) region."
            ],
            scientificMechanism: "Marks the high-energy boundary of human vision. With photon energies approaching 3 eV, it can excite fluorescence in organic compounds and minerals.",
            naturalSources: "Sunlight, lightning bolts, electric arcs, and very hot stars.",
            usages: [
                { icon: "🧼", title: "Safe Visible-Light Disinfection (405 nm)", desc: "Inactivates bacteria on hospital and food surfaces continuously without harming human skin like UV." },
                { icon: "🖨️", title: "3D Resin Printers (SLA / MSLA)", desc: "405 nm violet light cures liquid photopolymer resin layer by layer with micron-level precision." },
                { icon: "💎", title: "Gemology & Mineral Fluorescence", desc: "Reveals internal crystal structures and distinguishes natural gemstones from synthetics." },
                { icon: "🌿", title: "Horticulture Flavonoid & Aroma Enhancement", desc: "Stimulates antioxidant and pigment production in specialized indoor farming." }
            ],
            benefits: "Provides continuous antibacterial surface hygiene without DNA-damaging UV rays and enables ultra-fine 3D printing.",
            hazards: "As the highest-energy visible light, staring directly into concentrated 405 nm lasers can cause photochemical retinal injury.",
            funFact: "Did You Know? The atmosphere actually scatters more violet light than blue! However, our eyes' cone receptors are much more sensitive to blue, so our brains perceive the sky as pale blue."
        },
        {
            id: 9,
            name: "Ultraviolet (UV)",
            category: "high",
            categoryLabel: "High Energy • Ultraviolet Band",
            color: "#c084fc",
            shortLambda: "10 – 380 nm",
            wavelengthRange: "10 – 380 nanometers",
            frequencyRange: "789 THz – 30 PHz",
            photonEnergy: "3.26 – 124 eV",
            scaleObject: "Virus & DNA Helix Scale",
            ionizing: "Partially Ionizing (Extreme UV)",
            canvasFreq: 0.080,
            canvasSpeed: 0.105,
            originalNote: "Comes from the Sun; excessive exposure causes sunburn.",
            clues: [
                "Physical Clue: Has a shorter wavelength than violet light (10–380 nm) and is divided into UV-A, UV-B, and UV-C sub-bands.",
                "Application Clue: Used to verify banknotes and passports, sterilize water and hospital air, and synthesize Vitamin D in skin.",
                "Scientific Clue: Emitted strongly by the Sun; most harmful bands are absorbed by the atmospheric Ozone (O₃) layer."
            ],
            scientificMechanism: "Photon energy is high enough to excite chemical bonds and, in short-wavelength UV-C, fuse thymine bases in DNA/RNA to inactivate viruses and bacteria.",
            naturalSources: "The Sun (UV-A and partial UV-B reach the surface; UV-C is blocked by ozone), hot young stars, and lightning.",
            usages: [
                { icon: "💧", title: "Water, Air & Medical Sterilization (UV-C)", desc: "254 nm UV-C lamps destroy the DNA of viruses and bacteria in drinking water and operating rooms without chemicals." },
                { icon: "💶", title: "Counterfeit Detection & Forensics", desc: "Causes invisible security inks on banknotes/passports and forensic traces to glow via fluorescence." },
                { icon: "☀️", title: "Vitamin D Synthesis & Phototherapy", desc: "Controlled UV-B exposure triggers Vitamin D production in human skin, essential for bone health." },
                { icon: "🔬", title: "EUV Semiconductor Lithography", desc: "13.5 nm Extreme Ultraviolet (EUV) machines etch circuits on modern 2nm–3nm computer processors." }
            ],
            benefits: "Essential for human Vitamin D synthesis, chemical-free water purification, and manufacturing state-of-the-art nano-scale microchips.",
            hazards: "Unprotected overexposure causes sunburn, skin aging, cataracts, and DNA damage leading to skin cancer; use sunscreen and UV-blocking eyewear.",
            funFact: "Did You Know? Bees, butterflies, and many birds can see Ultraviolet light! Many flowers that look plain to us have glowing UV 'landing strip' patterns that guide bees to nectar."
        },
        {
            id: 10,
            name: "X-Rays",
            category: "high",
            categoryLabel: "Ionizing • Roentgen Band",
            color: "#e2e8f0",
            shortLambda: "0.01 – 10 nm",
            wavelengthRange: "0.01 – 10 nanometers (10 pm – 10 nm)",
            frequencyRange: "30 PHz – 30 EHz",
            photonEnergy: "124 eV – 124 keV",
            scaleObject: "Water Molecule & Single Atom Diameter",
            ionizing: "Ionizing Radiation (Lead Shielding Required)",
            canvasFreq: 0.098,
            canvasSpeed: 0.120,
            originalNote: "Used to image the inside of our bodies (bones).",
            clues: [
                "Physical Clue: Wavelength is about the diameter of a single atom (0.01–10 nm). Extremely energetic and penetrating.",
                "Application Clue: Used in hospital Radiography and CT scanners to image bone fractures, and in airport luggage scanners.",
                "Scientific Clue: Passes easily through soft tissue (skin, muscle) but is absorbed by dense, calcium-rich bone."
            ],
            scientificMechanism: "Produced when high-speed electrons slam into a heavy metal target like tungsten and rapidly decelerate (Bremsstrahlung) or knock out inner-shell atomic electrons.",
            naturalSources: "Superheated accretion disks around black holes, neutron stars, supernova remnants, and cosmic-ray interactions.",
            usages: [
                { icon: "🦴", title: "Medical Radiography & CT Scans", desc: "Images bone fractures, dental roots, lung conditions, and internal organs non-invasively." },
                { icon: "🧳", title: "Airport & Customs Security Scanners", desc: "Inspects luggage and cargo containers by distinguishing metals, organics, and dense materials." },
                { icon: "🧬", title: "X-Ray Crystallography (Discovery of DNA)", desc: "Because its wavelength matches atomic spacing, it reveals the 3D atomic structure of proteins and DNA." },
                { icon: "🏗️", title: "Industrial Non-Destructive Testing", desc: "Detects hidden micro-cracks inside aircraft wings, bridge welds, and pipelines." }
            ],
            benefits: "Saves millions of lives through non-invasive medical diagnostics, dentistry, and structural safety inspections.",
            hazards: "Ionizing radiation can strip electrons from atoms and damage cellular DNA at high doses; lead aprons and dose limits ensure safety.",
            funFact: "Did You Know? When Wilhelm Röntgen discovered these rays in 1895, he named them 'X-Rays' after the algebraic symbol 'X' for an unknown quantity—and took the first X-ray photo of his wife's hand!"
        },
        {
            id: 11,
            name: "Gamma Rays",
            category: "high",
            categoryLabel: "Highest Energy • Nuclear & Cosmic",
            color: "#facc15",
            shortLambda: "< 0.01 nm",
            wavelengthRange: "Less than 10 picometers (< 0.01 nm)",
            frequencyRange: "> 30 EHz",
            photonEnergy: "> 124 keV – TeV",
            scaleObject: "Atomic Nucleus & Proton Scale",
            ionizing: "Highly Ionizing (Nuclear Origin)",
            canvasFreq: 0.125,
            canvasSpeed: 0.145,
            originalNote: "Formed in the highest-energy events in the universe.",
            clues: [
                "Physical Clue: The shortest wavelength (atomic nucleus scale) and highest-energy photons in the electromagnetic spectrum.",
                "Application Clue: Used in scalpel-free cancer Radiotherapy (Gamma Knife), PET-CT scans, and medical equipment sterilization.",
                "Scientific Clue: Originate directly from atomic nuclei decay, supernovae, and neutron star mergers rather than electron transitions."
            ],
            scientificMechanism: "Emitted directly from excited atomic nuclei transitioning to a lower energy state (gamma decay), matter-antimatter annihilation, or extreme relativistic cosmic accelerators.",
            naturalSources: "Gamma-Ray Bursts (GRBs—the most energetic explosions in the cosmos), neutron star mergers, pulsars, terrestrial gamma flashes in thunderstorms, and radioactive isotopes.",
            usages: [
                { icon: "🎯", title: "Cancer Radiotherapy & Gamma Knife", desc: "Focuses hundreds of intersecting gamma beams precisely onto brain tumors to destroy cancer cells while sparing healthy tissue." },
                { icon: "🏥", title: "Nuclear Medicine & PET Scans", desc: "Detects gamma photons emitted by positron tracers to map tumor metabolism in 3D." },
                { icon: "🥫", title: "Medical Device & Food Sterilization", desc: "Sterilizes sealed syringes, surgical gloves, and dried foods 100% without heat or chemicals." },
                { icon: "🚀", title: "Space Gamma Telescopes & Planetary Mapping", desc: "Orbital gamma spectrometers map water ice and elemental composition on the Moon and Mars." }
            ],
            benefits: "Unmatched for non-surgical treatment of deep brain tumors, sealed medical sterilization, and high-energy astrophysics.",
            hazards: "The most penetrating ionizing radiation; requires thick lead plates or several meters of concrete for shielding.",
            funFact: "Did You Know? A single cosmic 'Gamma-Ray Burst' (GRB) can release more energy in a few seconds than our Sun will emit over its entire 10-billion-year lifetime!"
        }
    ]
};

// Uygulama Durumu (State)
const state = {
    lang: "tr", // "tr" | "en"
    mode: "game", // "game" | "encyclopedia"
    shuffledMode: true,
    targetIndex: 0,
    attempts: 0,
    gameFound: false,
    eliminatedIds: new Set(),
    minPossibleId: 0,
    maxPossibleId: 11,
    guessHistory: [], // { waveId, direction, pts }
    score: 0,
    streak: 0,
    discoveredIds: new Set(),
    activeCanvasWaveId: null,
    encyclopediaSelectedId: 0,
    encyclopediaFilter: "all",
    deviceEnv: "desktop", // "desktop" | "mobile"
    manualDeviceOverride: null, // null | "desktop" | "mobile"
    mobileSubView: "guess", // "guess" | "report"
    lastFeedbackState: { type: "start", waveId: null }
};

function t() {
    return UI_TEXT[state.lang] || UI_TEXT.tr;
}

function getSpectrumList() {
    return SPECTRUM_DATA_I18N[state.lang] || SPECTRUM_DATA_I18N.tr;
}

function getWave(id) {
    return getSpectrumList()[id];
}

// Açılan Tarayıcı Ortamını Otomatik Algılama
function detectBrowserIsMobile() {
    if (navigator.userAgentData && typeof navigator.userAgentData.mobile === "boolean") {
        if (navigator.userAgentData.mobile) return true;
    }
    const ua = navigator.userAgent || "";
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(ua)) {
        return true;
    }
    if (window.matchMedia("(max-width: 860px)").matches) {
        return true;
    }
    if (window.matchMedia("(pointer: coarse) and (max-width: 1024px)").matches) {
        return true;
    }
    return false;
}

function applyDeviceEnvironment() {
    const autoIsMobile = detectBrowserIsMobile();
    const effectiveEnv = state.manualDeviceOverride || (autoIsMobile ? "mobile" : "desktop");
    state.deviceEnv = effectiveEnv;

    document.body.setAttribute("data-device", effectiveEnv);
    document.body.setAttribute("data-mobile-subview", state.mobileSubView);

    const iconEl = document.getElementById("deviceEnvIcon");
    const labelEl = document.getElementById("deviceEnvLabel");
    const i18n = t();
    if (iconEl && labelEl) {
        if (effectiveEnv === "mobile") {
            iconEl.textContent = "📱";
            labelEl.textContent = i18n.deviceMobile + (state.manualDeviceOverride ? i18n.deviceSelectedSuffix : "");
        } else {
            iconEl.textContent = "🖥️";
            labelEl.textContent = i18n.deviceDesktop + (state.manualDeviceOverride ? i18n.deviceSelectedSuffix : "");
        }
    }
    syncMobileSubtabsUI();
}

function setMobileSubView(subView) {
    state.mobileSubView = subView === "report" ? "report" : "guess";
    document.body.setAttribute("data-mobile-subview", state.mobileSubView);
    const badgeEl = document.getElementById("mobileReportBadge");
    if (state.mobileSubView === "report" && badgeEl) {
        badgeEl.classList.add("hidden");
    }
    syncMobileSubtabsUI();
}

function syncMobileSubtabsUI() {
    document.querySelectorAll(".mobile-subtab-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-subview") === state.mobileSubView);
    });
}

// Dil Değiştirme (TR <-> EN)
function setLanguage(lang) {
    if (lang !== "tr" && lang !== "en") return;
    state.lang = lang;
    document.documentElement.lang = lang;
    saveProgress();

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    applyStaticTranslations();
    applyDeviceEnvironment();
    refreshFeedbackBannerFromState();
    updateStatsUI();
    updateLiveHeaderMetrics(state.activeCanvasWaveId);
    renderSpectrumRuler();
    renderChoicesGrid();
    renderClueStages();
    renderGuessHistory();
    renderDiscoveryPanel();
    if (state.mode === "encyclopedia") {
        renderEncyclopedia();
    }
}

function applyStaticTranslations() {
    const i18n = t();
    document.title = i18n.pageTitle;
    document.getElementById("uiBrandBadge").textContent = i18n.brandBadge;
    document.getElementById("uiAppTitle").textContent = i18n.appTitle;
    document.getElementById("uiTabGame").textContent = i18n.tabGame;
    document.getElementById("uiTabEncyclopedia").textContent = i18n.tabEncyclopedia;
    document.getElementById("uiStatScoreLabel").textContent = i18n.statScore;
    document.getElementById("uiStatStreakLabel").textContent = i18n.statStreak;
    document.getElementById("uiStatDiscoveredLabel").textContent = i18n.statDiscovered;
    document.getElementById("uiVisualizerTitle").textContent = i18n.visualizerTitle;
    document.getElementById("visualizerStatusText").textContent = i18n.visualizerSubtitle;
    document.getElementById("uiAxisLeft").textContent = i18n.axisLeft;
    document.getElementById("uiAxisRight").textContent = i18n.axisRight;
    document.getElementById("uiMobSubGuess").textContent = i18n.mobSubGuess;
    document.getElementById("uiMobSubReport").textContent = i18n.mobSubReport;
    document.getElementById("uiStepTag1").textContent = i18n.stepTag1;
    document.getElementById("uiGuessHeading").textContent = i18n.guessHeading;
    document.getElementById("toggleSortBtn").textContent = state.shuffledMode ? i18n.btnShuffled : i18n.btnOrdered;
    document.getElementById("newGameBtn").textContent = i18n.btnNewWave;
    const missionNewBtn = document.getElementById("missionNewWaveBtn");
    if (missionNewBtn) missionNewBtn.textContent = i18n.btnNewWave;
    const missionDescEl = document.getElementById("uiMissionDesc");
    if (missionDescEl) missionDescEl.innerHTML = i18n.missionDesc;
    const missionTargetLabelEl = document.getElementById("uiMissionTargetLabel");
    if (missionTargetLabelEl) missionTargetLabelEl.textContent = i18n.missionTargetLabel;
    document.getElementById("uiAttemptLabel").textContent = i18n.attemptLabel;
    document.getElementById("uiCluesTag").textContent = i18n.cluesTag;
    document.getElementById("uiCluesHeading").textContent = i18n.cluesHeading;
    document.getElementById("uiCluesBadge").textContent = i18n.cluesBadge;
    document.getElementById("uiCluesHelper").textContent = i18n.cluesHelper;
    document.getElementById("uiHistoryHeading").textContent = i18n.historyHeading;
    document.getElementById("uiLockedTitle").textContent = i18n.lockedTitle;
    document.getElementById("uiLockedDesc").innerHTML = i18n.lockedDesc;
    document.getElementById("uiPrevBadge1").textContent = i18n.prevBadge1;
    document.getElementById("uiPrevText1").textContent = i18n.prevText1;
    document.getElementById("uiPrevBadge2").textContent = i18n.prevBadge2;
    document.getElementById("uiPrevText2").textContent = i18n.prevText2;
    document.getElementById("uiPrevBadge3").textContent = i18n.prevBadge3;
    document.getElementById("uiPrevText3").textContent = i18n.prevText3;
    document.getElementById("uiPrevBadge4").textContent = i18n.prevBadge4;
    document.getElementById("uiPrevText4").textContent = i18n.prevText4;
    document.getElementById("uiEncTitle").textContent = i18n.encTitle;
    document.getElementById("uiEncSubtitle").textContent = i18n.encSubtitle;
    document.getElementById("uiFilterAll").textContent = i18n.filterAll;
    document.getElementById("uiFilterLow").textContent = i18n.filterLow;
    document.getElementById("uiFilterVisible").textContent = i18n.filterVisible;
    document.getElementById("uiFilterHigh").textContent = i18n.filterHigh;
    document.getElementById("uiFooterText").textContent = i18n.footerText;
    updateMissionBannerUI();
}

function updateMissionBannerUI() {
    const i18n = t();
    const bannerEl = document.getElementById("missionHeroBanner");
    const kickerEl = document.getElementById("uiMissionKicker");
    const titleEl = document.getElementById("uiMissionTitle");
    const targetValEl = document.getElementById("uiMissionTargetValue");
    if (!bannerEl || !kickerEl || !titleEl || !targetValEl) return;

    const total = getSpectrumList().length;
    const remaining = total - state.eliminatedIds.size;

    if (state.gameFound) {
        const targetWave = getWave(state.targetIndex);
        bannerEl.classList.add("found-state");
        kickerEl.textContent = i18n.missionKickerFound;
        titleEl.textContent = i18n.missionTitleFound(targetWave.name);
        targetValEl.textContent = i18n.missionTargetFound(targetWave.name, state.attempts);
    } else {
        bannerEl.classList.remove("found-state");
        kickerEl.textContent = i18n.missionKickerSearching;
        titleEl.textContent = i18n.missionTitleSearching;
        targetValEl.textContent = i18n.missionTargetHidden(remaining);
    }
}

// LocalStorage Yükleme / Kaydetme
function loadSavedProgress() {
    try {
        const saved = localStorage.getItem("spektrumLabState_v1");
        if (saved) {
            const parsed = JSON.parse(saved);
            state.score = parsed.score || 0;
            state.streak = parsed.streak || 0;
            if (parsed.lang === "tr" || parsed.lang === "en") {
                state.lang = parsed.lang;
            }
            if (Array.isArray(parsed.discoveredIds)) {
                state.discoveredIds = new Set(parsed.discoveredIds);
            }
        }
    } catch (e) {
        console.warn("LocalStorage okunamadı:", e);
    }
}

function saveProgress() {
    try {
        localStorage.setItem("spektrumLabState_v1", JSON.stringify({
            lang: state.lang,
            score: state.score,
            streak: state.streak,
            discoveredIds: Array.from(state.discoveredIds)
        }));
    } catch (e) {
        console.warn("LocalStorage yazılamadı:", e);
    }
}

function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

let currentChoicesOrder = [];

function startNewGame() {
    const list = getSpectrumList();
    state.targetIndex = Math.floor(Math.random() * list.length);
    state.attempts = 0;
    state.gameFound = false;
    state.eliminatedIds.clear();
    state.minPossibleId = 0;
    state.maxPossibleId = list.length - 1;
    state.guessHistory = [];
    state.activeCanvasWaveId = null;
    state.mobileSubView = "guess";
    state.lastFeedbackState = { type: "start", waveId: null };
    document.body.setAttribute("data-mobile-subview", "guess");

    const badgeEl = document.getElementById("mobileReportBadge");
    if (badgeEl) badgeEl.classList.add("hidden");
    syncMobileSubtabsUI();

    const allIndices = list.map(d => d.id);
    currentChoicesOrder = state.shuffledMode ? shuffleArray(allIndices) : allIndices;

    refreshFeedbackBannerFromState();
    updateLiveHeaderMetrics(null);
    renderSpectrumRuler();
    renderChoicesGrid();
    renderClueStages();
    renderGuessHistory();
    renderDiscoveryPanel();
    updateStatsUI();
}

function updateStatsUI() {
    const i18n = t();
    const total = getSpectrumList().length;
    document.getElementById("scoreValue").textContent = state.score;
    document.getElementById("streakValue").textContent = `${state.streak}🔥`;
    const discText = `${state.discoveredIds.size}/${total}`;
    document.getElementById("discoveredValue").textContent = discText;
    document.getElementById("navCollectionCounter").textContent = discText;
    document.getElementById("attemptCount").textContent = state.attempts;

    const remaining = total - state.eliminatedIds.size;
    document.getElementById("remainingCountBadge").textContent = state.gameFound
        ? i18n.remainingFound
        : i18n.remainingCount(remaining);
    updateMissionBannerUI();
}

function updateLiveHeaderMetrics(waveId) {
    const i18n = t();
    const nameEl = document.getElementById("liveWaveName");
    const lambdaEl = document.getElementById("liveWaveLambda");
    const freqEl = document.getElementById("liveWaveFreq");

    if (waveId === null || waveId === undefined) {
        if (state.mode === "game" && !state.gameFound) {
            nameEl.textContent = i18n.liveHiddenName;
            nameEl.style.borderColor = "rgba(255,255,255,0.12)";
            lambdaEl.textContent = `${i18n.liveRangePrefix}: #${state.minPossibleId + 1} – #${state.maxPossibleId + 1}`;
            freqEl.textContent = i18n.liveScanning;
            return;
        }
        waveId = state.mode === "encyclopedia" ? state.encyclopediaSelectedId : state.targetIndex;
    }

    const wave = getWave(waveId);
    nameEl.textContent = `${wave.id + 1}. ${wave.name}`;
    nameEl.style.borderColor = wave.color;
    lambdaEl.textContent = `λ: ${wave.shortLambda}`;
    freqEl.textContent = `f: ${wave.frequencyRange}`;
}

let hoverResetTimer = null;

function setHoverWave(waveId) {
    if (hoverResetTimer) {
        clearTimeout(hoverResetTimer);
        hoverResetTimer = null;
    }
    if (state.activeCanvasWaveId === waveId) return;
    state.activeCanvasWaveId = waveId;
    updateLiveHeaderMetrics(waveId);
}

function clearHoverWave() {
    if (hoverResetTimer) {
        clearTimeout(hoverResetTimer);
    }
    hoverResetTimer = setTimeout(() => {
        const fallbackId = state.mode === "encyclopedia"
            ? state.encyclopediaSelectedId
            : (state.gameFound ? state.targetIndex : null);
        state.activeCanvasWaveId = fallbackId;
        updateLiveHeaderMetrics(fallbackId);
        hoverResetTimer = null;
    }, 140);
}

function renderSpectrumRuler() {
    const ruler = document.getElementById("spectrumRuler");
    ruler.innerHTML = "";

    getSpectrumList().forEach(item => {
        const seg = document.createElement("div");
        seg.className = "ruler-segment";
        seg.style.setProperty("--wave-color", item.color);
        seg.setAttribute("role", "listitem");

        if (state.mode === "game") {
            if (state.gameFound && item.id === state.targetIndex) {
                seg.classList.add("found-target");
            } else if (state.eliminatedIds.has(item.id)) {
                seg.classList.add("eliminated");
            } else if (item.id >= state.minPossibleId && item.id <= state.maxPossibleId) {
                seg.classList.add("in-range");
            }
        } else {
            if (item.id === state.encyclopediaSelectedId) {
                seg.classList.add("found-target");
            }
        }

        seg.innerHTML = `
            <span class="ruler-index">#${item.id + 1}</span>
            <span class="ruler-name">${item.name}</span>
            <span class="ruler-lambda">${item.shortLambda}</span>
        `;

        seg.addEventListener("mouseenter", () => {
            if (!seg.classList.contains("eliminated")) {
                setHoverWave(item.id);
            }
        });

        seg.addEventListener("mouseleave", () => {
            clearHoverWave();
        });

        seg.addEventListener("click", () => {
            if (state.mode === "game") {
                handleGuess(item.id);
            } else {
                selectEncyclopediaItem(item.id);
            }
        });

        ruler.appendChild(seg);
    });
}

function renderChoicesGrid() {
    const i18n = t();
    const grid = document.getElementById("choicesGrid");
    grid.innerHTML = "";

    currentChoicesOrder.forEach((waveId, idx) => {
        const wave = getWave(waveId);
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.type = "button";
        btn.style.setProperty("--wave-color", wave.color);

        const isEliminated = state.eliminatedIds.has(wave.id);
        const isCorrectFound = state.gameFound && wave.id === state.targetIndex;

        if (isCorrectFound) {
            btn.classList.add("correct-choice");
        }
        if (isEliminated || (state.gameFound && !isCorrectFound)) {
            btn.disabled = true;
        }

        let statusTag = `λ ${wave.shortLambda}`;
        if (isCorrectFound) {
            statusTag = i18n.statusTarget;
        } else if (isEliminated) {
            statusTag = i18n.statusEliminated;
        }

        btn.innerHTML = `
            <div class="choice-left">
                <span class="choice-num">${idx + 1}</span>
                <div>
                    <span class="choice-name">${wave.name}</span>
                    <span class="choice-category">${wave.categoryLabel}</span>
                </div>
            </div>
            <span class="choice-status-tag">${statusTag}</span>
        `;

        btn.addEventListener("mouseenter", () => {
            if (!btn.disabled) {
                setHoverWave(wave.id);
            }
        });

        btn.addEventListener("mouseleave", () => {
            clearHoverWave();
        });

        btn.addEventListener("click", () => handleGuess(wave.id));
        grid.appendChild(btn);
    });
}

function handleGuess(guessedId) {
    if (state.gameFound || state.eliminatedIds.has(guessedId)) return;

    state.attempts++;
    const list = getSpectrumList();
    const targetWave = getWave(state.targetIndex);

    if (guessedId === state.targetIndex) {
        state.gameFound = true;
        state.discoveredIds.add(targetWave.id);
        state.activeCanvasWaveId = targetWave.id;

        const basePoints = Math.max(25, 120 - (state.attempts - 1) * 15);
        state.score += basePoints;
        state.streak += 1;
        saveProgress();

        state.guessHistory.unshift({
            waveId: guessedId,
            direction: "exact",
            pts: basePoints
        });

        const badgeEl = document.getElementById("mobileReportBadge");
        if (badgeEl) badgeEl.classList.remove("hidden");

        state.lastFeedbackState = { type: "success", waveId: targetWave.id };
    } else if (guessedId < state.targetIndex) {
        for (let i = 0; i <= guessedId; i++) {
            state.eliminatedIds.add(i);
        }
        state.minPossibleId = Math.max(state.minPossibleId, guessedId + 1);

        state.guessHistory.unshift({
            waveId: guessedId,
            direction: "up",
            pts: 0
        });

        state.lastFeedbackState = { type: "higher", waveId: guessedId };
    } else {
        for (let i = guessedId; i < list.length; i++) {
            state.eliminatedIds.add(i);
        }
        state.maxPossibleId = Math.min(state.maxPossibleId, guessedId - 1);

        state.guessHistory.unshift({
            waveId: guessedId,
            direction: "down",
            pts: 0
        });

        state.lastFeedbackState = { type: "lower", waveId: guessedId };
    }

    refreshFeedbackBannerFromState();
    updateStatsUI();
    updateLiveHeaderMetrics(state.gameFound ? state.targetIndex : null);
    renderSpectrumRuler();
    scrollMobileRulerToActive();
    renderChoicesGrid();
    renderGuessHistory();
    renderDiscoveryPanel();
}

function refreshFeedbackBannerFromState() {
    const i18n = t();
    const fb = state.lastFeedbackState;
    if (!fb || fb.type === "start") {
        updateFeedbackBanner("neutral", "🛰️", i18n.feedbackStartTitle, i18n.feedbackStartDesc);
    } else if (fb.type === "success") {
        const w = getWave(fb.waveId);
        updateFeedbackBanner("success", "🎉", i18n.feedbackSuccessTitle(w.name), i18n.feedbackSuccessDesc(state.attempts, w.name));
    } else if (fb.type === "higher") {
        const w = getWave(fb.waveId);
        updateFeedbackBanner("go-higher", "⚡", i18n.feedbackHigherTitle(w.name), i18n.feedbackHigherDesc(w.name));
    } else if (fb.type === "lower") {
        const w = getWave(fb.waveId);
        updateFeedbackBanner("go-lower", "🌊", i18n.feedbackLowerTitle(w.name), i18n.feedbackLowerDesc(w.name));
    }
}

function scrollMobileRulerToActive() {
    if (state.deviceEnv !== "mobile") return;
    const ruler = document.getElementById("spectrumRuler");
    if (!ruler) return;
    const targetIdx = state.gameFound
        ? state.targetIndex
        : Math.floor((state.minPossibleId + state.maxPossibleId) / 2);
    const segments = ruler.querySelectorAll(".ruler-segment");
    if (segments[targetIdx]) {
        segments[targetIdx].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
}

function updateFeedbackBanner(type, icon, title, desc) {
    const i18n = t();
    const box = document.getElementById("directionFeedbackBox");
    box.className = `direction-feedback ${type}`;
    document.getElementById("feedbackIcon").textContent = icon;
    document.getElementById("feedbackTitle").textContent = title;
    const descEl = document.getElementById("feedbackDesc");
    descEl.textContent = desc;

    if (type === "success") {
        const jumpBtn = document.createElement("button");
        jumpBtn.type = "button";
        jumpBtn.className = "btn btn-primary btn-sm mobile-jump-report-btn";
        jumpBtn.textContent = i18n.feedbackJumpBtn;
        jumpBtn.addEventListener("click", () => {
            if (state.deviceEnv === "mobile") {
                setMobileSubView("report");
            } else {
                document.getElementById("discoveryPanel")?.scrollIntoView({ behavior: "smooth" });
            }
        });
        descEl.appendChild(jumpBtn);
    }
}

function renderClueStages() {
    const i18n = t();
    const container = document.getElementById("clueStagesList");
    const openIndices = new Set();
    container.querySelectorAll("details.collapsible-card").forEach((d, idx) => {
        if (d.open) openIndices.add(idx);
    });

    const targetWave = getWave(state.targetIndex);
    const clueItems = [
        { badge: `${i18n.clueBadgePrefix} 1`, title: i18n.clue1Title, text: targetWave.clues[0] },
        { badge: `${i18n.clueBadgePrefix} 2`, title: i18n.clue2Title, text: targetWave.clues[1] },
        { badge: `${i18n.clueBadgePrefix} 3`, title: i18n.clue3Title, text: targetWave.clues[2] }
    ];

    container.innerHTML = clueItems.map((item, idx) => `
        <details class="collapsible-card" ${openIndices.has(idx) ? "open" : ""}>
            <summary class="collapsible-header">
                <div class="collapsible-header-left">
                    <span class="collapsible-badge">${item.badge}</span>
                    <span class="collapsible-title">${item.title}</span>
                </div>
                <span class="collapsible-chevron">▼</span>
            </summary>
            <div class="collapsible-body">
                ${item.text}
            </div>
        </details>
    `).join("");
}

function renderGuessHistory() {
    const i18n = t();
    const list = document.getElementById("guessHistoryList");
    if (state.guessHistory.length === 0) {
        list.innerHTML = `<p class="empty-state-text">${i18n.historyEmpty}</p>`;
        return;
    }

    list.innerHTML = state.guessHistory.map((entry, idx) => {
        const stepNumber = state.guessHistory.length - idx;
        const wave = getWave(entry.waveId);
        let msg = "";
        if (entry.direction === "exact") msg = i18n.histExact(entry.pts);
        else if (entry.direction === "up") msg = i18n.histUp;
        else msg = i18n.histDown;

        return `
            <div class="history-item">
                <div class="history-item-left">
                    <span class="history-dot" style="background:${wave.color}"></span>
                    <strong>#${stepNumber} ${wave.name}</strong>
                </div>
                <span class="history-direction ${entry.direction}">${msg}</span>
            </div>
        `;
    }).join("");
}

function buildCollapsibleScientificReportHTML(wave, contextPrefix) {
    const i18n = t();
    const sections = [
        {
            badge: i18n.sec1Badge,
            title: i18n.sec1Title,
            openByDefault: true,
            content: `
                <div class="metrics-grid">
                    <div class="metric-box">
                        <span class="metric-box-label">${i18n.metricLambdaLabel}</span>
                        <div class="metric-box-value">${wave.wavelengthRange}</div>
                        <div class="metric-box-sub">${i18n.metricLambdaSub(wave.id + 1)}</div>
                    </div>
                    <div class="metric-box">
                        <span class="metric-box-label">${i18n.metricFreqLabel}</span>
                        <div class="metric-box-value">${wave.frequencyRange}</div>
                        <div class="metric-box-sub">${i18n.metricFreqSub}</div>
                    </div>
                    <div class="metric-box">
                        <span class="metric-box-label">${i18n.metricEnergyLabel}</span>
                        <div class="metric-box-value">${wave.photonEnergy}</div>
                        <div class="metric-box-sub">${wave.ionizing}</div>
                    </div>
                    <div class="metric-box">
                        <span class="metric-box-label">${i18n.metricScaleLabel}</span>
                        <div class="metric-box-value">${wave.scaleObject}</div>
                        <div class="metric-box-sub">${i18n.metricScaleSub}</div>
                    </div>
                </div>
            `
        },
        {
            badge: i18n.sec2Badge,
            title: i18n.sec2Title,
            openByDefault: false,
            content: `
                <p class="info-paragraph">
                    <strong>${i18n.sciNoteLabel}</strong> ${wave.originalNote}
                </p>
                <p class="info-paragraph">
                    <strong>${i18n.sciMechLabel}</strong> ${wave.scientificMechanism}
                </p>
                <div class="metric-box">
                    <span class="metric-box-label">${i18n.sciSourcesLabel}</span>
                    <div class="metric-box-sub" style="font-size:0.86rem; color: var(--text-primary); margin-top:4px;">
                        🌌 ${wave.naturalSources}
                    </div>
                </div>
            `
        },
        {
            badge: i18n.sec3Badge,
            title: i18n.sec3Title,
            openByDefault: true,
            content: `
                <p class="info-paragraph">
                    ${i18n.sec3Intro(wave.name)}
                </p>
                <div class="usage-list">
                    ${wave.usages.map(u => `
                        <div class="usage-item">
                            <span class="usage-icon">${u.icon}</span>
                            <div class="usage-text">
                                <strong>${u.title}</strong>
                                <span>${u.desc}</span>
                            </div>
                        </div>
                    `).join("")}
                </div>
            `
        },
        {
            badge: i18n.sec4Badge,
            title: i18n.sec4Title,
            openByDefault: false,
            content: `
                <div class="safety-split">
                    <div class="safety-box benefit">
                        <h5 style="color:#34d399;">${i18n.benefitHeading}</h5>
                        <p>${wave.benefits}</p>
                    </div>
                    <div class="safety-box hazard">
                        <h5 style="color:#fb7185;">${i18n.hazardHeading}</h5>
                        <p>${wave.hazards}</p>
                    </div>
                </div>
                <div class="fun-fact-callout">
                    💡 <strong>${wave.funFact}</strong>
                </div>
            `
        }
    ];

    const collapsibleCardsHTML = sections.map(sec => `
        <details class="collapsible-card" ${sec.openByDefault ? "open" : ""}>
            <summary class="collapsible-header">
                <div class="collapsible-header-left">
                    <span class="collapsible-badge">${sec.badge}</span>
                    <span class="collapsible-title">${sec.title}</span>
                </div>
                <span class="collapsible-chevron">▼</span>
            </summary>
            <div class="collapsible-body">
                ${sec.content}
            </div>
        </details>
    `).join("");

    return `
        <div class="wave-hero-banner" style="border-left: 5px solid ${wave.color}">
            <div class="wave-hero-top">
                <div>
                    <span class="wave-order-badge">${i18n.reportOrderPrefix} #${wave.id + 1} • ${wave.categoryLabel.toUpperCase()}</span>
                    <h3 class="wave-hero-title">${wave.name}</h3>
                </div>
                <span class="metric-chip mono" style="border-color:${wave.color}; color:#fff;">λ: ${wave.shortLambda}</span>
            </div>
            <p class="wave-hero-summary">${wave.originalNote}</p>
        </div>

        <div class="collapsible-toolbar">
            <span class="step-tag">${i18n.reportSectionsTag}</span>
            <div class="collapsible-actions">
                <button class="btn btn-ghost btn-sm" type="button" data-action="expand-all">${i18n.btnExpandAll}</button>
                <button class="btn btn-ghost btn-sm" type="button" data-action="collapse-all">${i18n.btnCollapseAll}</button>
            </div>
        </div>

        <div class="collapsible-group">
            ${collapsibleCardsHTML}
        </div>

        ${contextPrefix === "game"
            ? `<div class="next-stage-cta-bar">
                   <span class="badge-subtle" style="color:#34d399; border-color:rgba(16,185,129,0.4);">
                       ${i18n.addedToCollection(wave.name)}
                   </span>
                   <button class="btn btn-primary btn-md" type="button" id="playAgainFromReportBtn">${i18n.btnNewWave}</button>
               </div>`
            : ""}
    `;
}

function renderDiscoveryPanel() {
    const lockedEl = document.getElementById("discoveryLockedState");
    const unlockedEl = document.getElementById("discoveryUnlockedState");

    if (!state.gameFound) {
        lockedEl.classList.remove("hidden");
        unlockedEl.classList.add("hidden");
        return;
    }

    lockedEl.classList.add("hidden");
    unlockedEl.classList.remove("hidden");

    const targetWave = getWave(state.targetIndex);
    unlockedEl.innerHTML = buildCollapsibleScientificReportHTML(targetWave, "game");
    attachCollapsibleToolbarListeners(unlockedEl);

    const playAgainBtn = document.getElementById("playAgainFromReportBtn");
    if (playAgainBtn) {
        playAgainBtn.addEventListener("click", startNewGame);
    }
}

function renderEncyclopedia() {
    const i18n = t();
    const listEl = document.getElementById("encyclopediaList");
    const detailEl = document.getElementById("encyclopediaDetail");

    const filtered = getSpectrumList().filter(item => {
        if (state.encyclopediaFilter === "all") return true;
        return item.category === state.encyclopediaFilter;
    });

    if (!filtered.some(x => x.id === state.encyclopediaSelectedId) && filtered.length > 0) {
        state.encyclopediaSelectedId = filtered[0].id;
    }

    listEl.innerHTML = "";
    filtered.forEach(item => {
        const isDiscovered = state.discoveredIds.has(item.id);
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `enc-list-item ${item.id === state.encyclopediaSelectedId ? "active" : ""}`;
        btn.style.setProperty("--wave-color", item.color);

        btn.innerHTML = `
            <div>
                <div class="enc-item-title">#${item.id + 1} ${item.name}</div>
                <div class="enc-item-sub">λ: ${item.shortLambda} • ${item.photonEnergy}</div>
            </div>
            <span class="enc-discovered-badge ${isDiscovered ? "yes" : "no"}">
                ${isDiscovered ? i18n.badgeDiscovered : i18n.badgeExplore}
            </span>
        `;

        btn.addEventListener("click", () => selectEncyclopediaItem(item.id));
        listEl.appendChild(btn);
    });

    const selectedWave = getWave(state.encyclopediaSelectedId);
    detailEl.innerHTML = buildCollapsibleScientificReportHTML(selectedWave, "encyclopedia");
    attachCollapsibleToolbarListeners(detailEl);
    renderSpectrumRuler();
    updateLiveHeaderMetrics(state.encyclopediaSelectedId);
}

function selectEncyclopediaItem(id) {
    state.encyclopediaSelectedId = id;
    state.activeCanvasWaveId = id;
    renderEncyclopedia();
}

function attachCollapsibleToolbarListeners(container) {
    const expandAllBtn = container.querySelector("[data-action='expand-all']");
    const collapseAllBtn = container.querySelector("[data-action='collapse-all']");

    if (expandAllBtn) {
        expandAllBtn.addEventListener("click", () => {
            container.querySelectorAll("details.collapsible-card").forEach(d => {
                d.open = true;
            });
        });
    }

    if (collapseAllBtn) {
        collapseAllBtn.addEventListener("click", () => {
            container.querySelectorAll("details.collapsible-card").forEach(d => {
                d.open = false;
            });
        });
    }
}

// Canlı HTML5 Canvas Elektromanyetik Dalga Simülatörü
let wavePhase = 0;
let renderedFreq = 0.045;
let renderedSpeed = 0.06;

function initWaveCanvas() {
    const canvas = document.getElementById("waveCanvas");
    const ctx = canvas.getContext("2d");

    function renderFrame() {
        const width = canvas.width;
        const height = canvas.height;
        ctx.clearRect(0, 0, width, height);

        ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();

        const focusedId = state.activeCanvasWaveId !== null
            ? state.activeCanvasWaveId
            : (state.mode === "encyclopedia" ? state.encyclopediaSelectedId : (state.gameFound ? state.targetIndex : null));

        const list = getSpectrumList();
        if (focusedId !== null && list[focusedId]) {
            const wave = list[focusedId];
            renderedFreq += (wave.canvasFreq - renderedFreq) * 0.14;
            renderedSpeed += (wave.canvasSpeed - renderedSpeed) * 0.14;
            wavePhase += renderedSpeed;

            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = wave.color;
            ctx.lineWidth = 3.2;
            ctx.shadowColor = wave.color;
            ctx.shadowBlur = 14;

            const amp = height * 0.34;
            const centerX = width / 2;
            for (let x = 0; x < width; x++) {
                const y = height / 2 + Math.sin((x - centerX) * renderedFreq - wavePhase) * amp;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.restore();
        } else {
            renderedSpeed += (0.06 - renderedSpeed) * 0.14;
            wavePhase += renderedSpeed;
            const grad = ctx.createLinearGradient(0, 0, width, 0);
            grad.addColorStop(0.0, "#06b6d4");
            grad.addColorStop(0.2, "#10b981");
            grad.addColorStop(0.35, "#ef4444");
            grad.addColorStop(0.5, "#eab308");
            grad.addColorStop(0.65, "#22c55e");
            grad.addColorStop(0.8, "#3b82f6");
            grad.addColorStop(0.9, "#a855f7");
            grad.addColorStop(1.0, "#facc15");

            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.lineWidth = 3;
            ctx.shadowColor = "rgba(56, 189, 248, 0.4)";
            ctx.shadowBlur = 10;

            const amp = height * 0.32;
            for (let x = 0; x < width; x++) {
                const progress = x / width;
                const localFreq = 0.012 + Math.pow(progress, 2.1) * 0.095;
                const y = height / 2 + Math.sin(x * localFreq - wavePhase) * amp;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.restore();
        }

        requestAnimationFrame(renderFrame);
    }

    requestAnimationFrame(renderFrame);
}

// Olay Dinleyicileri ve Başlatma
document.addEventListener("DOMContentLoaded", () => {
    loadSavedProgress();
    document.documentElement.lang = state.lang;
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === state.lang);
        btn.addEventListener("click", () => {
            setLanguage(btn.getAttribute("data-lang"));
        });
    });

    applyStaticTranslations();
    applyDeviceEnvironment();

    window.addEventListener("resize", () => {
        if (!state.manualDeviceOverride) {
            applyDeviceEnvironment();
        }
    });

    // Masaüstü / Mobil Görünüm Manuel Geçiş Butonu
    const deviceToggleBtn = document.getElementById("deviceToggleBtn");
    if (deviceToggleBtn) {
        deviceToggleBtn.addEventListener("click", () => {
            state.manualDeviceOverride = state.deviceEnv === "desktop" ? "mobile" : "desktop";
            applyDeviceEnvironment();
            scrollMobileRulerToActive();
        });
    }

    // Mobil Oyun İçi Alt Sekmeleri (Tahmin Alanı / Bilimsel Dosya)
    document.querySelectorAll(".mobile-subtab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            setMobileSubView(btn.getAttribute("data-subview"));
        });
    });

    // Ana Mod Sekmeleri Geçişi (Tahmin Oyunu / Spektrum Ansiklopedisi - Hem Masaüstü Hem Mobil)
    document.querySelectorAll(".mode-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            const targetMode = tab.getAttribute("data-mode");
            state.mode = targetMode;

            document.querySelectorAll(".mode-tab").forEach(t => {
                t.classList.toggle("active", t === tab);
                t.setAttribute("aria-selected", t === tab ? "true" : "false");
            });

            document.getElementById("gameView").classList.toggle("active", targetMode === "game");
            document.getElementById("encyclopediaView").classList.toggle("active", targetMode === "encyclopedia");

            if (targetMode === "encyclopedia") {
                state.activeCanvasWaveId = state.encyclopediaSelectedId;
                renderEncyclopedia();
            } else {
                state.activeCanvasWaveId = state.gameFound ? state.targetIndex : null;
                renderSpectrumRuler();
                updateLiveHeaderMetrics(state.activeCanvasWaveId);
            }
        });
    });

    // Sıralama (Karışık / Sıralı) Değiştirme Butonu
    const toggleSortBtn = document.getElementById("toggleSortBtn");
    toggleSortBtn.addEventListener("click", () => {
        const i18n = t();
        state.shuffledMode = !state.shuffledMode;
        toggleSortBtn.textContent = state.shuffledMode ? i18n.btnShuffled : i18n.btnOrdered;
        const allIndices = getSpectrumList().map(d => d.id);
        currentChoicesOrder = state.shuffledMode ? shuffleArray(allIndices) : allIndices;
        renderChoicesGrid();
    });

    // Yeni Oyun Butonları
    document.getElementById("newGameBtn").addEventListener("click", startNewGame);
    const missionNewWaveBtn = document.getElementById("missionNewWaveBtn");
    if (missionNewWaveBtn) {
        missionNewWaveBtn.addEventListener("click", () => {
            if (state.mode !== "game") {
                const gameTab = document.getElementById("tab-game");
                if (gameTab) gameTab.click();
            }
            startNewGame();
        });
    }

    // Ansiklopedi Filtre Butonları
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.encyclopediaFilter = btn.getAttribute("data-filter");
            renderEncyclopedia();
        });
    });

    initWaveCanvas();
    startNewGame();
});
