const autoCompleteJS = new autoComplete({
    placeHolder: "Search for Manhwa...",
    searchEngine: "strict",
    data: {
        src: ["How To Fight", 
        "A Returners Magic Should Be Special",
        "Solo Leveling",
        "Wind Breaker",
        "Bastard",
        "Who Made Me A Princess",
        "Tower Of God",
        "The Breaker",
        "The Breaker: New Waves",
        "The Legend of the Northern Blade",
        "Omniscient Reader",
        "Sweet Home",
        "The Descent of the Demonic Master",
        "King's Maker",
        "The Boxer",
        "Noblesse",
        "Weak Hero",
        "Viral Hit",
        "Get Schooled",
        "Odd Girl Out",
        "Lost in Translation",
        "Mom, I'm Sorry",
        "The Remarried Empress",
        "Castle Swimmer",
        "The Beginning After The End",
        "Your Throne",
        "Winter Moon",
        "Adventures of God",
        "unOrdinary",
        "SubZero",
        "I Love Yoo",
        "The Advenced Player of the Tutorial Tower",
        "Teenage Mercenary",
        "Villain to Kill",
        "Doom Breaker",
        "Eleceed",
        "The Gamer",
        "Hardcore Leveling Warrior",
        "Lookism",
        "My Dad Is Too Strong",
	"Second-Life Ranker",
        "The Horizon"],
        cache: true,
    },
    resultItem: {
        highlight: true
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            }
        }
    }
});

document.querySelector("#autoComplete").addEventListener("results", function (event) {
    // "event.detail" carries the matching results values
    console.log(event.detail);
});
