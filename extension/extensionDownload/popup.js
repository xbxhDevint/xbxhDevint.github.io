chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentURL = tabs[0].url.split('/');
    if (currentURL[2]=='www.classcard.net' && currentURL[3]=='set') {
        document.getElementById('button').style.display = 'block';
        chrome.storage.local.set({ memorize: true }, () => {});
        document.getElementById('button').addEventListener('click', ()=>{
            window.open(`https://www.classcard.net/Memorize/${currentURL[4]}/6000/${currentURL[5]}`)
        });
    }
});