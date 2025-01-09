document.addEventListener('DOMContentLoaded', function () {
    let countdownValue = 10;
    let keyCount = 0;

    // العداد التنازلي
    const countdown = document.getElementById('countdown');
    const countdownInterval = setInterval(function () {
        countdown.innerHTML = countdownValue;
        countdownValue--;
        if (countdownValue < 0) {
            clearInterval(countdownInterval);
            showCard1();
        }
    }, 1000);

    function showCard1() {
        document.getElementById('card1').classList.remove('hidden');
        typeText();
    }

    function typeText() {
        let textContent = [
            "7/1/2007",
            "اليوم الي اتولد فيه اعز واقرب صاحب ليا",
            "احمد رمضان عطيه اخويا وصديقي البيست فريند كل عام وانت بألف خير وكل عام وانت دايما صديقي المقرب"
        ];
        let i = 0;
        let j = 0;

        let currentText = textContent[i];
        let typeInterval = setInterval(function () {
            if (j < currentText.length) {
                document.getElementById('birthdayText').innerText += currentText.charAt(j);
                j++;
            } else {
                i++;
                j = 0;
                if (i < textContent.length) {
                    currentText = textContent[i];
                    document.getElementById('birthdayText').innerText = '';
                } else {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        document.getElementById('card1').classList.add('hidden');
                        showCard2();
                    }, 2000);
                }
            }
        }, 100);
    }

    function showCard2() {
        document.getElementById('card2').classList.remove('hidden');
        document.getElementById('nextButton').addEventListener('click', function () {
            showCakePage();
        });
    }

    function showCakePage() {
        document.getElementById('cakePage').classList.remove('hidden');
        document.getElementById('sendWish').addEventListener('click', sendWish);
    }

    function sendWish() {
        const wish = document.getElementById('wishInput').value;
        if (wish) {
            // إرسال الأمنية عبر الجيميل باستخدام API
            alert("إن شاء الله تحقق أمنيتك!");
            document.getElementById('cakePage').classList.add('hidden');
            showGamePage();
        }
    }

    function showGamePage() {
        document.getElementById('gamePage').classList.remove('hidden');
        document.getElementById('questionGame').addEventListener('click', questionGame);
        document.getElementById('incompleteGame1').addEventListener('click', gameNotAvailable);
        document.getElementById('incompleteGame2').addEventListener('click', gameNotAvailable);
    }

    function questionGame() {
        let correctAnswer = 'جواب صحيح';
        let answer = prompt('السؤال: ...');
        if (answer === correctAnswer) {
            keyCount++;
            document.getElementById('keyCount').textContent = keyCount;
            alert("مبروك كسبت المفتاح!");
            if (keyCount === 3) {
                document.getElementById('treasureBox').classList.remove('hidden');
            }
        } else {
            alert("للأسف جاوبت غلط، حاول مرة تانية!");
        }
    }

    function gameNotAvailable() {
        keyCount++;
        document.getElementById('keyCount').textContent = keyCount;
        if (keyCount === 3) {
            document.getElementById('treasureBox').classList.remove('hidden');
        }
    }
});
