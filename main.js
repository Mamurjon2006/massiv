let bosh = [];


while (true) {
    let input = prompt("Komanda kiriting (add, Ali yoki del, Ali). To'xtatish uchun stop yozing:");

    if (input.toLowerCase() === "stop") {
        console.log("Oxirgi massiv:", bosh);
        break;
    }

    let parts = input.split(",").map(p => p.trim());
    let command = parts[0].toLowerCase();
    let element = parts[1];

    if (command === "add") {
        bosh.push(element);
        console.log(`${element} qo'shildi.`);
    } else if (command === "del") {
        let index = bosh.indexOf(element);
        if (index !== -1) {
            arr.splice(index, 1);
            console.log(`${element} o'chirildi.`);
        } else {
            console.log(`${element} topilmadi.`);
        }
    } else {
        console.log("Noto'g'ri komanda.");
    }

    console.log("Joriy massiv:", bosh);
}