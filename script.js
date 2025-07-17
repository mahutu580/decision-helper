// HTMLの要素を取得 (resultDisplayをcoinに変更)
const tossButton = document.getElementById('toss-button');
const coin = document.getElementById('coin'); // 変更

tossButton.addEventListener('click', () => {
    // 既存のアニメーションクラスを削除して、アニメーションをリセット
    coin.classList.remove('animate-flip');

    // ★ 強制的に再描画させるための、ちょっとしたおまじない
    void coin.offsetWidth; 

    // 再びアニメーションクラスを追加して、アニメーションを再生
    coin.classList.add('animate-flip');

    // アニメーションの途中で、最終的な表裏を決定する
    setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue < 0.5) {
            // 表
            coin.style.transform = 'rotateY(0deg)';
        } else {
            // 裏
            coin.style.transform = 'rotateY(180deg)';
        }
    }, 500); // アニメーションの中間地点（1秒の半分の0.5秒）
});