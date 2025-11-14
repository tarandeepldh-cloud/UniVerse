// events.js
// list events from data/events.json, allow add event which saves to localStorage

(async function(){
  // load sample events
  async function loadDefault(){
    try{
      const r = await fetch('data/events.json');
      return await r.json();
    }catch(e){
      return [
        { title:'Robotics workshop', date:'2025-11-15', club:'RoboClub' },
        { title:'HackNauts meetup', date:'2025-11-20', club:'TechSoc' }
      ];
    }
  }

  function renderList(items){
    const list = document.getElementById('eventsList');
    list.innerHTML = '';
    items.forEach(it => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${it.title}</strong> <span class="muted">on ${it.date}${it.club ? ', ' + it.club : ''}</span>`;
      list.appendChild(li);
    });
  }

  // obtain stored events or defaults
  const storageKey = 'campus360_events';
  let events = JSON.parse(localStorage.getItem(storageKey) || 'null');
  if(!events){
    events = await loadDefault();
    localStorage.setItem(storageKey, JSON.stringify(events));
  }
  renderList(events);

  // add new event
  document.getElementById('addEventBtn').addEventListener('click', () => {
    const t = document.getElementById('eventTitle').value.trim();
    const d = document.getElementById('eventDate').value;
    const c = document.getElementById('eventClub').value.trim();
    if(!t || !d){ alert('Add title and date'); return; }
    const item = { title:t, date:d, club: c };
    events.unshift(item);
    localStorage.setItem(storageKey, JSON.stringify(events));
    renderList(events);
    document.getElementById('eventTitle').value = '';
    document.getElementById('eventDate').value = '';
    document.getElementById('eventClub').value = '';
    alert('Event added locally');
  });

  // reload sample data
  document.getElementById('loadSampleEvents').addEventListener('click', async () => {
    const defaults = await loadDefault();
    events = defaults;
    localStorage.setItem(storageKey, JSON.stringify(events));
    renderList(events);
  });

})();
