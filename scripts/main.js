document.body.querySelectorAll('p,a,span,h6,h5,h4,h3,h2,h1,p *,a *,span *,h6 *,h5 *,h4 *,h3>*,h2 *,h1 *').forEach(elm => {
    if(elm?.innerText?.includes('==')) {
        if(elm.children.length > 0 && [...elm.children].some(el => el.innerText?.includes('=='))) return;
        
        const words = elm.innerText.split(' ')
        words.forEach((word, i) => {
            const isBase = word.at(-1) === '=' && word.at(-2) === '=';
            if(isBase){
                words[i] = atob(word)
            }
        })
        elm.innerText = words.join(' ')
    }
})