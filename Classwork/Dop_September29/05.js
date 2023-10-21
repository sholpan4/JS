const likeButton = document.querySelector('.btn')
const likeCount = document.querySelector('.count')

likeButton.addEventListener('.click', () =&gt; {
    const correntCount = parseInt(likeCount.textContent, 10);
    likeCount.textContent = currentCount +1;
});