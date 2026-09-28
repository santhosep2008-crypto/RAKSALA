/* =====================================================
   RAKSALA MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   LANGUAGE DROPDOWN
===================================================== */

const languageButton =
    document.getElementById("languageButton");

const languageMenu =
    document.getElementById("languageMenu");


if (languageButton) {

    languageButton.addEventListener("click", function(event) {

        event.stopPropagation();

        languageMenu.classList.toggle("active");

    });

}


document.addEventListener("click", function() {

    if (languageMenu) {

        languageMenu.classList.remove("active");

    }

});


/* =====================================================
   LANGUAGE DATA
===================================================== */

const translations = {

    en: {

        navHome: "Home",
        navSystem: "System",
        navMonitoring: "Monitoring",
        navDocuments: "Documents",
        navResources: "Resources",
        navConnect: "Connect",

        heroTagline:
            "Protect • Power • Connect",

        heroDescription:
            "A smart, rugged and adaptive protection system designed for high-altitude, high-stress environments.",

        exploreButton:
            "Explore RAKSALA",

        monitorButton:
            "View Monitoring",

        systemStatus:
            "RAKSALA SYSTEM • OPERATIONAL",

        introTitle:
            "Built for Extreme Environments",

        introText:
            "RAKSALA is a smart, rugged and adaptive protection system designed to support critical equipment and communication infrastructure in high-altitude areas.",

        featureProtection:
            "Protection",

        featureProtectionText:
            "Adaptive multi-layer protection against harsh environmental conditions.",

        featurePower:
            "Power",

        featurePowerText:
            "Solar-powered energy architecture with battery and peak-load support.",

        featureConnect:
            "Connect",

        featureConnectText:
            "Controlled communication architecture with local processing and monitoring.",

        systemTitle:
            "RAKSALA Architecture",

        systemDescription:
            "An integrated platform combining environmental protection, intelligent monitoring, power management and secure communication.",

        monitoringTitle:
            "Environmental Monitoring",

        monitoringDescription:
            "Real-time environmental parameters monitored by the RAKSALA system.",

        temperature:
            "Temperature",

        humidity:
            "Humidity",

        pressure:
            "Pressure",

        uvIndex:
            "UV Index",

        dustLevel:
            "Dust Level",

        documentsTitle:
            "RAKSALA Documents",

        documentsDescription:
            "Technical documentation and project presentation."

    },


    hi: {

        navHome: "मुख्य पृष्ठ",
        navSystem: "प्रणाली",
        navMonitoring: "निगरानी",
        navDocuments: "दस्तावेज़",
        navResources: "संसाधन",
        navConnect: "संपर्क",

        heroTagline:
            "सुरक्षा • ऊर्जा • संपर्क",

        heroDescription:
            "उच्च ऊंचाई और कठिन परिस्थितियों के लिए एक स्मार्ट, मजबूत और अनुकूली सुरक्षा प्रणाली।",

        exploreButton:
            "RAKSALA देखें",

        monitorButton:
            "निगरानी देखें",

        systemStatus:
            "RAKSALA प्रणाली • सक्रिय",

        introTitle:
            "चरम परिस्थितियों के लिए निर्मित",

        introText:
            "RAKSALA एक स्मार्ट और मजबूत सुरक्षा प्रणाली है जिसे उच्च ऊंचाई वाले क्षेत्रों में महत्वपूर्ण उपकरणों और संचार अवसंरचना के लिए बनाया गया है।",

        featureProtection:
            "सुरक्षा",

        featureProtectionText:
            "कठिन पर्यावरणीय परिस्थितियों से बहु-स्तरीय सुरक्षा।",

        featurePower:
            "ऊर्जा",

        featurePowerText:
            "सौर ऊर्जा, बैटरी और पीक-लोड समर्थन।",

        featureConnect:
            "संपर्क",

        featureConnectText:
            "स्थानीय प्रसंस्करण और निगरानी के साथ नियंत्रित संचार।",

        systemTitle:
            "RAKSALA वास्तुकला",

        systemDescription:
            "पर्यावरण सुरक्षा, बुद्धिमान निगरानी, ऊर्जा प्रबंधन और सुरक्षित संचार का एकीकृत मंच।",

        monitoringTitle:
            "पर्यावरणीय निगरानी",

        monitoringDescription:
            "RAKSALA प्रणाली द्वारा वास्तविक समय में पर्यावरणीय मापदंडों की निगरानी।",

        temperature:
            "तापमान",

        humidity:
            "आर्द्रता",

        pressure:
            "दाब",

        uvIndex:
            "UV सूचकांक",

        dustLevel:
            "धूल स्तर",

        documentsTitle:
            "RAKSALA दस्तावेज़",

        documentsDescription:
            "तकनीकी दस्तावेज़ और परियोजना प्रस्तुति।"

    },


    ta: {

        navHome: "முகப்பு",
        navSystem: "அமைப்பு",
        navMonitoring: "கண்காணிப்பு",
        navDocuments: "ஆவணங்கள்",
        navResources: "வளங்கள்",
        navConnect: "தொடர்பு",

        heroTagline:
            "பாதுகாப்பு • ஆற்றல் • இணைப்பு",

        heroDescription:
            "உயரமான மற்றும் கடுமையான சூழல்களுக்காக உருவாக்கப்பட்ட ஸ்மார்ட், வலுவான மற்றும் தகவமைப்பு பாதுகாப்பு அமைப்பு.",

        exploreButton:
            "RAKSALA-வை பார்க்க",

        monitorButton:
            "கண்காணிப்பைப் பார்க்க",

        systemStatus:
            "RAKSALA அமைப்பு • செயல்பாட்டில்",

        introTitle:
            "கடுமையான சூழல்களுக்காக உருவாக்கப்பட்டது",

        introText:
            "RAKSALA என்பது உயரமான பகுதிகளில் முக்கியமான சாதனங்கள் மற்றும் தகவல் தொடர்பு உள்கட்டமைப்பை பாதுகாக்க வடிவமைக்கப்பட்ட ஸ்மார்ட் மற்றும் வலுவான அமைப்பாகும்.",

        featureProtection:
            "பாதுகாப்பு",

        featureProtectionText:
            "கடுமையான சுற்றுச்சூழல் நிலைகளிலிருந்து பல அடுக்கு பாதுகாப்பு.",

        featurePower:
            "ஆற்றல்",

        featurePowerText:
            "சூரிய ஆற்றல், பேட்டரி மற்றும் அதிக சுமை ஆதரவு.",

        featureConnect:
            "இணைப்பு",

        featureConnectText:
            "உள்ளூர் செயலாக்கம் மற்றும் கண்காணிப்புடன் கட்டுப்படுத்தப்பட்ட தகவல் தொடர்பு.",

        systemTitle:
            "RAKSALA கட்டமைப்பு",

        systemDescription:
            "சுற்றுச்சூழல் பாதுகாப்பு, அறிவார்ந்த கண்காணிப்பு, ஆற்றல் மேலாண்மை மற்றும் பாதுகாப்பான தகவல் தொடர்பை ஒருங்கிணைக்கும் அமைப்பு.",

        monitoringTitle:
            "சுற்றுச்சூழல் கண்காணிப்பு",

        monitoringDescription:
            "RAKSALA அமைப்பால் கண்காணிக்கப்படும் நிகழ்நேர சுற்றுச்சூழல் அளவுருக்கள்.",

        temperature:
            "வெப்பநிலை",

        humidity:
            "ஈரப்பதம்",

        pressure:
            "அழுத்தம்",

        uvIndex:
            "UV குறியீடு",

        dustLevel:
            "தூசி அளவு",

        documentsTitle:
            "RAKSALA ஆவணங்கள்",

        documentsDescription:
            "தொழில்நுட்ப ஆவணங்கள் மற்றும் திட்ட விளக்கக்காட்சி."

    }

};


/* =====================================================
   CHANGE LANGUAGE
===================================================== */

function changeLanguage(language) {

    const selectedLanguage =
        translations[language];

    if (!selectedLanguage) {
        return;
    }


    /* UPDATE TEXT */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(function(element) {

            const key =
                element.getAttribute("data-i18n");

            if (selectedLanguage[key]) {

                element.textContent =
                    selectedLanguage[key];

            }

        });


    /* UPDATE LANGUAGE LABEL */

    const languageNames = {

        en: "English",

        hi: "हिन्दी",

        ta: "தமிழ்"

    };


    const currentLanguage =
        document.getElementById("currentLanguage");


    if (currentLanguage) {

        currentLanguage.textContent =
            languageNames[language];

    }


    /* CLOSE MENU */

    if (languageMenu) {

        languageMenu.classList.remove("active");

    }


    /* SAVE LANGUAGE */

    localStorage.setItem(
        "raksalaLanguage",
        language
    );

}


/* =====================================================
   LOAD SAVED LANGUAGE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const savedLanguage =
            localStorage.getItem(
                "raksalaLanguage"
            );

        if (savedLanguage) {

            changeLanguage(savedLanguage);

        }

    }
);


/* =====================================================
   SIMULATED MONITORING
===================================================== */

function updateMonitoring() {

    const temperature =
        document.getElementById(
            "temperatureValue"
        );

    const humidity =
        document.getElementById(
            "humidityValue"
        );

    const pressure =
        document.getElementById(
            "pressureValue"
        );

    const uv =
        document.getElementById(
            "uvValue"
        );

    const dust =
        document.getElementById(
            "dustValue"
        );


    if (!temperature) {
        return;
    }


    /* Small realistic fluctuations */

    const temp =
        (-32 + (Math.random() * 2 - 1))
        .toFixed(1);

    const hum =
        Math.round(
            40 + Math.random() * 3
        );

    const press =
        (58 + (Math.random() * 0.8 - 0.4))
        .toFixed(1);

    const uvValue =
        (7 + Math.random() * 0.6)
        .toFixed(1);

    const dustValue =
        Math.round(
            30 + Math.random() * 10
        );


    temperature.textContent =
        temp + "°C";

    humidity.textContent =
        hum + "%";

    pressure.textContent =
        press + " kPa";

    uv.textContent =
        uvValue;

    dust.textContent =
        dustValue + " µg/m³";


    const lastUpdate =
        document.getElementById(
            "lastUpdate"
        );

    if (lastUpdate) {

        lastUpdate.textContent =
            "Just now";

    }

}


/* Update every 5 seconds */

setInterval(
    updateMonitoring,
    5000
);


/* =====================================================
   SEARCH
===================================================== */

function performSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) {
        return;
    }

    const query =
        input.value.trim().toLowerCase();


    if (!query) {

        alert("Please enter a search term.");

        return;

    }


    const sections = {

        system: "system",

        monitoring: "monitoring",

        temperature: "monitoring",

        humidity: "monitoring",

        pressure: "monitoring",

        "uv index": "monitoring",

        dust: "monitoring",

        documents: "documents",

        resources: "resources",

        connect: "connect",

        github: "connect",

        youtube: "connect",

        instagram: "connect"

    };


    for (const key in sections) {

        if (query.includes(key)) {

            document
                .getElementById(
                    sections[key]
                )
                .scrollIntoView({
                    behavior: "smooth"
                });

            return;

        }

    }


    alert(
        "No matching RAKSALA section found."
    );

}


/* ENTER KEY SEARCH */

const searchInput =
    document.getElementById(
        "searchInput"
    );


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                performSearch();

            }

        }
    );

}


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener(
    "scroll",
    function() {

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        function() {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}
