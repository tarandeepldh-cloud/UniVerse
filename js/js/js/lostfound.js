// lostfound.js
// list items from data/lostfound.json, allow add item, store in localStorage

(async function(){
  async function loadDefault(){
    try{
      const r = await fetch('data/lostfound.json');
      return await r.json();
    }catch(e){
      return [
        { item:'Black wallet', found:'C-block washroom' },
        { item:'Blue water bottle', found:'Library desk' }
      ];
    }
  }

  function render(items){
    const list = document.getElementById('lfList');
    list.innerHTML = '';
    items.forEach(it => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${it.item}</strong> <span class="muted">found at ${it.found}</span>`;
      list.appendChild(li);
    });
  }

  const storageKey = 'campus360_lostfound';
  let items = JSON.parse(localStorage.getItem(storageKey) || 'null');
  if(!items){
    items = await loadDefault();
    localStorage.setItem(storageKey, JSON.stringify(items));
  }
  render(items);

  document.getElementById('addLfBtn').addEventListener('click', () => {
    const it = document.getElementById('lfItem').value.trim();
    const where = document.getElementById('lfWhere').value.trim();
    if(!it || !where){ alert('Add item and location'); return; }
    const o = { item:it, found:where };
    items.unshift(o);
    localStorage.setItem(storageKey, JSON.stringify(items));
    render(items);
    document.getElementById('lfItem').value = '';
    document.getElementById('lfWhere').value = '';
    alert('Item added locally');
  });

  document.getElementById('loadSampleLf').addEventListener('click', async () => {
    const defaults = await loadDefault();
    items = defaults;
    localStorage.setItem(storageKey, JSON.stringify(items));
    render(items);
  });

})();
