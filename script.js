const messages = [
    "你确定吗？",
    "你真的真的确定吗？",
    "ok lor go with cl",
    "宝宝求你了",
    "再想想！！",
    "rearrange my world the way u do",
    "i miss u",
    "wow jas i see what it is",
    "Ok fine, ill go ",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
