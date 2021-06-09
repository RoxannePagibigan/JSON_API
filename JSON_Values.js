// users = [{
//         fname: "Kermit",
//             lname: "the Frog",
//                 languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
//                 interests: {
//             music: ["guitar", "flute"],
//             dance: ["tap", "salsa"],
//             television: ["Black Mirror", "Stranger Things"]
//         }
//     },
//     {
//         fname: "Winnie",
//         lname: "the Pooh",
//         languages: ["Python", "Swift", "Java"],
//         interests: {
//             food: ["honey", "honeycomb"],
//             flowers: ["honeysuckle"],
//             mysteries: ["Heffalumps"]
//         }
//     },
//     {
//         fname: "Arthur",
//         lname: "Dent",
//         languages: ["JavaScript", "HTML", "Go"],
//         interests: {
//             space: ["stars", "planets", "improbability"],
//                     home: ["tea", "yellow bulldozers"]
//         }
//     }
// ]

function userLanguages() {
    var str1 = "knows";
    var str2 = "and";
    // var k = null;
    // for (var i in users) {
    //     console.log(users[i].fname, users[i].lname, str1, users[i].languages[]);
    //     // for (var j in users[i].languages) {

    //     //     console.log(users[i].languages[j]);
    //     //     k = j
    //     // }
    // }
    var users = [{
            fname: "Kermit",
                lname: "the Frog",
                    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
                    interests: {
                music: ["guitar", "flute"],
                dance: ["tap", "salsa"],
                television: ["Black Mirror", "Stranger Things"]
            }
        },
        {
            fname: "Winnie",
            lname: "the Pooh",
            languages: ["Python", "Swift", "Java"],
            interests: {
                food: ["honey", "honeycomb"],
                flowers: ["honeysuckle"],
                mysteries: ["Heffalumps"]
            }
        },
        {
            fname: "Arthur",
            lname: "Dent",
            languages: ["JavaScript", "HTML", "Go"],
            interests: {
                space: ["stars", "planets", "improbability"],
                        home: ["tea", "yellow bulldozers"]
            }
        }
    ]

    for (i = 0; i < users.length; i++) {
        console.log(users[i].fname, users[i].lname, str1);
        for (j = 0; j < users[i].languages.length; j++) {
            var arr = users[i].languages[j];
            var arr1 = arr
        }
    }

}

return userLanguages();