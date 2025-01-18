chrome.storage.local.get(['memorize'], (memorize) => {
  if (memorize.memorize) {
    console.log('응애')
    function wait(delay) {
      return new Promise(resolve => setTimeout(resolve, delay));
    }
    async function click(delay, selector, index) {
      await wait(delay);
      selector = document.querySelectorAll('.'+selector)[index].click();
    }
    (async function () {
      await click(0, 'btn-opt-start', 0);
      const cardNum = Number(document.querySelector('.study-end-text').innerHTML.split(' ')[1])
      await wait(500);
      for (let i = 0; i < cardNum; i++) {
        await click(0, 'card-cover', i);
        await click(500, 'btn_kown_o', i);
        await click(0, 'btnNextCard2', 0);
      }
      await chrome.storage.local.set({ memorize: false }, () => {});
      await click(0, 'remote_left', 0);
      window.close();
    })();
  }
});