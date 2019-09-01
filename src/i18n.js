const languages = {
    "en": {
        "coffee-card-title": "Your coffee of the day",
        "coffee-type": "Type",
        "coffee-regions": "Regions",
        "coffee-choose-button": "What coffee should I drink today?",
        "request-error": "Something went wrong!",
        "loading": "Loading..."
    },
    "ua": {
        "coffee-card-title": "Твоя кава дня",
        "coffee-type": "Тип",
        "coffee-regions": "Регіон",
        "coffee-choose-button": "Яку каву мені сьогодні випити?",
        "request-error": "Щось пішло не так!",
        "loading": "Завантажується..."
    }
};

export const getLocalizedText = (lang, textKey) => {
    return languages[lang][textKey];
};
