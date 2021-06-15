function userLanguages() {
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
        // Kermit the Frog
    console.log(users[0].fname, users[0].lname + (" knows"), users[0].languages[0] + (","), users[0].languages[1] + (","), users[0].languages[2] + (","), users[0].languages[3] + (","), users[0].languages[4] + (", and"), users[0].languages[5] + ("."));
    console.log(users[0].fname, users[0].lname + (" is also interested in"), users[0].interests.music[0] + (","), users[0].interests.music[1], users[0].interests.dance[0] + (","), users[0].interests.dance[1], users[0].interests.television[0] + (", and"), users[0].interests.television[1] + ("."));

    // Winnie the Pooh
    console.log(users[1].fname, users[1].lname + (" knows"), users[1].languages[0] + (","), users[1].languages[1] + (", and"), users[1].languages[2] + ("."));
    console.log(users[1].fname, users[1].lname + (" is also interested in"), users[1].interests.food[0] + (","), users[1].interests.food[1], users[1].interests.flowers[0] + (", and"), users[1].interests.mysteries[0] + ("."));

    // Arthut Dent
    console.log(users[2].fname, users[2].lname + (" knows"), users[2].languages[0] + (","), users[2].languages[1] + (", and"), users[1].languages[2] + ("."));
    console.log(users[2].fname, users[2].lname + (" is also interested in"), users[2].interests.space[0] + (","), users[2].interests.space[1], users[2].interests.space[2] + (","), users[2].interests.home[0] + (", and"), users[2].interests.home[1] + ("."));

}

return userLanguages();
