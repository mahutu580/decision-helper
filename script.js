// HTMLの要素を取得
const tossButton = document.getElementById('toss-button');
const resultDisplay = document.getElementById('result-display');

// ボタンがクリックされた時の処理
tossButton.addEventListener('click', () => {
    // 0から1未満のランダムな小数を生成
    const randomValue = Math.random(); 

    // ランダムな値が0.5未満なら「表」、そうでなければ「裏」
    if (randomValue < 0.5) {
        resultDisplay.textContent = '表';
    } else {
        resultDisplay.textContent = '裏';
    }
});