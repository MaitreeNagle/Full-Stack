const H = document.createElement("h2");
const p = document.createElement("p");
const B = document.createElement("B");
H.classList.add("text-info");
H.textContent = "Sub Heading wellcome ";
p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium fugit culpa ea eius tempora aut repudiandae nostrum, perferendis, inventore esse quasi veniam expedita cumque earum similique dicta iusto eaque autem quidem exercitationem perspicia";

// B.classList.add("btn"
//     "btn-primary");

const div = document.getElementsById("task1");
div.appendChild(H);
div.appendChild(p);
div.appendChild(H);

const ar = ["hello",
    "harleen",
    "pihu",
    "Milki",
    "Priya",

    "Sujal",
    "Mayank"
];

const List = document.createElement("ol");
ae.forEach((item) => {
    const l = document.createElement("li");
    l.textContent = item;
    List.appendChild(l);
});
document.getElementById("myList").appendChild(list);