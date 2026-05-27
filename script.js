const FLIGHTS = {
  'SYD-BNE':[
    {code:'FDA 201',dep:'06:00',arr:'07:25',dur:'1h 25m',stops:'Non-stop',price:129,cls:'E',aircraft:'A320'},
    {code:'FDA 215',dep:'09:45',arr:'11:10',dur:'1h 25m',stops:'Non-stop',price:159,cls:'E',aircraft:'B737'},
    {code:'FDA 231',dep:'13:00',arr:'14:30',dur:'1h 30m',stops:'Non-stop',price:249,cls:'B',aircraft:'A330'},
    {code:'FDA 247',dep:'17:00',arr:'18:30',dur:'1h 30m',stops:'Non-stop',price:139,cls:'E',aircraft:'A320'},
    {code:'FDA 259',dep:'20:30',arr:'22:00',dur:'1h 30m',stops:'Non-stop',price:299,cls:'F',aircraft:'B787'},
  ],
  'BNE-SYD':[
    {code:'FDA 202',dep:'07:50',arr:'09:20',dur:'1h 30m',stops:'Non-stop',price:119,cls:'E',aircraft:'A320'},
    {code:'FDA 220',dep:'12:15',arr:'13:45',dur:'1h 30m',stops:'Non-stop',price:149,cls:'E',aircraft:'B737'},
    {code:'FDA 238',dep:'16:40',arr:'18:10',dur:'1h 30m',stops:'Non-stop',price:229,cls:'B',aircraft:'A330'},
  ],
  'SYD-MEL':[
    {code:'FDA 101',dep:'07:00',arr:'08:25',dur:'1h 25m',stops:'Non-stop',price:109,cls:'E',aircraft:'A320'},
    {code:'FDA 115',dep:'11:30',arr:'12:55',dur:'1h 25m',stops:'Non-stop',price:135,cls:'E',aircraft:'B737'},
    {code:'FDA 129',dep:'15:45',arr:'17:10',dur:'1h 25m',stops:'Non-stop',price:219,cls:'B',aircraft:'A330'},
    {code:'FDA 143',dep:'19:00',arr:'20:25',dur:'1h 25m',stops:'Non-stop',price:119,cls:'E',aircraft:'A320'},
  ],
  'MEL-SYD':[
    {code:'FDA 102',dep:'08:45',arr:'10:10',dur:'1h 25m',stops:'Non-stop',price:105,cls:'E',aircraft:'A320'},
    {code:'FDA 118',dep:'13:00',arr:'14:25',dur:'1h 25m',stops:'Non-stop',price:129,cls:'E',aircraft:'B737'},
    {code:'FDA 136',dep:'18:00',arr:'19:25',dur:'1h 25m',stops:'Non-stop',price:209,cls:'B',aircraft:'A330'},
  ],
  'SYD-PER':[
    {code:'FDA 301',dep:'08:00',arr:'12:30',dur:'4h 30m',stops:'Non-stop',price:299,cls:'E',aircraft:'B787'},
    {code:'FDA 315',dep:'14:00',arr:'18:30',dur:'4h 30m',stops:'Non-stop',price:349,cls:'E',aircraft:'B787'},
    {code:'FDA 329',dep:'21:00',arr:'01:30+1',dur:'4h 30m',stops:'Non-stop',price:549,cls:'B',aircraft:'A350'},
  ],
  'SYD-SIN':[
    {code:'FDA 501',dep:'07:30',arr:'13:40',dur:'8h 10m',stops:'Non-stop',price:699,cls:'E',aircraft:'A350'},
    {code:'FDA 511',dep:'22:00',arr:'05:10+1',dur:'8h 10m',stops:'Non-stop',price:1299,cls:'B',aircraft:'B787'},
  ],
  'SYD-NRT':[
    {code:'FDA 601',dep:'09:00',arr:'18:30',dur:'9h 30m',stops:'Non-stop',price:999,cls:'E',aircraft:'B787'},
    {code:'FDA 611',dep:'23:00',arr:'08:30+1',dur:'9h 30m',stops:'Non-stop',price:1899,cls:'B',aircraft:'B787'},
  ],
  'SYD-LHR':[
    {code:'FDA 701',dep:'10:00',arr:'17:30+1',dur:'22h 30m',stops:'1 stop (SIN)',price:1599,cls:'E',aircraft:'B787'},
    {code:'FDA 711',dep:'21:00',arr:'05:30+2',dur:'21h 30m',stops:'Non-stop',price:3299,cls:'B',aircraft:'A320 XLR'},
  ],
  'MEL-BNE':[
    {code:'FDA 401',dep:'07:00',arr:'08:50',dur:'1h 50m',stops:'Non-stop',price:145,cls:'E',aircraft:'A320'},
    {code:'FDA 415',dep:'14:00',arr:'15:50',dur:'1h 50m',stops:'Non-stop',price:175,cls:'E',aircraft:'B737'},
  ],
  'SYD-ADL':[
    {code:'FDA 351',dep:'08:30',arr:'10:30',dur:'2h 00m',stops:'Non-stop',price:179,cls:'E',aircraft:'A320'},
    {code:'FDA 367',dep:'16:00',arr:'18:00',dur:'2h 00m',stops:'Non-stop',price:215,cls:'E',aircraft:'B737'},
  ],
  'SYD-LAX':[
    {code:'FDA 801',dep:'11:00',arr:'06:30',dur:'13h 30m',stops:'Non-stop',price:1299,cls:'E',aircraft:'A321XLR'},
    {code:'FDA 811',dep:'22:30',arr:'18:00',dur:'13h 30m',stops:'Non-stop',price:2499,cls:'B',aircraft:'A350'},
  ],
  'SYD-DXB':[
    {code:'FDA 901',dep:'09:00',arr:'21:00',dur:'14h 00m',stops:'Non-stop',price:1099,cls:'E',aircraft:'A321'},
    {code:'FDA 911',dep:'23:00',arr:'11:00+1',dur:'14h 00m',stops:'Non-stop',price:2199,cls:'B',aircraft:'A350'},
  ],
};
const cls_name={E:'Economy',B:'Business',F:'First'};

let selectedFlight=null, selectedSeat=null, cart=[], lastBooking=null;
let bookings=[
  {ref:'FDA-28104',from:'SYD',to:'BNE',fromCity:'Sydney',toCity:'Brisbane',date:'Fri, 2 May 2026',time:'06:00',code:'FDA 201',cls:'Economy',status:'checkin',price:129},
  {ref:'FDA-19553',from:'MEL',to:'SYD',fromCity:'Melbourne',toCity:'Sydney',date:'Mon, 12 May 2026',time:'13:00',code:'FDA 136',cls:'Business',status:'confirmed',price:209},
  {ref:'FDA-09821',from:'SYD',to:'PER',fromCity:'Sydney',toCity:'Perth',date:'Sat, 3 Jan 2026',time:'08:00',code:'FDA 301',cls:'Economy',status:'completed',price:299},
];

const IFS_ITEMS=[
  {id:1,cat:'meal',icon:'🥪',name:'Ham and Cheese Tostie',desc:'White Bread, Ham, Cheese, Butter',price:10},
  {id:2,cat:'meal',icon:'🍪',name:'Cholcate Chip Cookie',desc:'Cholcate Chips baked',price:8},
  {id:3,cat:'meal',icon:'🍝',name:'Beef Lasanga',desc:'beef with layered pastry',price:21},
  {id:4,cat:'meal',icon:'🥞',name:'Breakfast Set',desc:'Scrambled eggs, bacon, toast, orange or apple juice',price:20},
  {id:5,cat:'drink',icon:'🥤',name:'Softdrink',desc:'Coke Cola, Coke No suger, Fanta, Sprite, Solo',price:12},
  {id:6,cat:'drink',icon:'🍸',name:'Gin & Tonic',desc:'Premium gin, tonic water, lime, ice',price:14},
  {id:7,cat:'drink',icon:'☕️',name:'Premium Coffee',desc:'Single-origin espresso with your choice of milk',price:6},
  {id:8,cat:'drink',icon:'🧃',name:'Hot Cholcate',desc:'Choloacte, Milk',price:7},
  {id:9,cat:'extra',icon:'🎧',name:'Headphones',desc:'Borrow ANC headphones for your flight',price:15},
  {id:10,cat:'extra',icon:'🧳',name:'Add Second Bag 30kg',desc:'Add an extra bag up to 30kg',price:89},
  {id:11,cat:'comfort',icon:'🛏️',name:'Comfort Kit',desc:'Pillow, blanket, eye mask & ear plugs',price:12},
  {id:12,cat:'comfort',icon:'💆',name:'Spa Amenity Kit',desc:'Moisturiser, lip balm & refresher wipes',price:8},
];

function nav(id){
  const nextPage=document.getElementById('p-'+id);
  if(!nextPage) return;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  nextPage.classList.add('active');
  const idx={book:0,mybookings:1,seats:2,services:3,profile:4};
  if(idx[id]!==undefined) document.querySelectorAll('.nav-btn')[idx[id]].classList.add('active');
  if(id==='mybookings') renderBookings();
  if(id==='seats') renderSeats();
  if(id==='services') renderIFS('all');
  if(id==='profile'){setTimeout(()=>{document.getElementById('pts-bar').style.width='56%';},200);}
  window.scrollTo({top:0,behavior:'smooth'});
}

function tripType(t){
  ['rt','ow','mc'].forEach(x=>document.getElementById('t-'+x).classList.remove('active'));
  document.getElementById('t-'+t).classList.add('active');
  document.getElementById('ret-f').style.display=t==='ow'?'none':'';
}

function swp(){
  const f=document.getElementById('s-from'),t=document.getElementById('s-to');
  const v=f.value; f.value=t.value; t.value=v;
}

function doSearch(){
  const f=document.getElementById('s-from').value;
  const t=document.getElementById('s-to').value;
  if(f===t){alert('Please select different airports.');return;}
  const dep=document.getElementById('d-dep').value;
  const fTxt=document.getElementById('s-from').options[document.getElementById('s-from').selectedIndex].text;
  const tTxt=document.getElementById('s-to').options[document.getElementById('s-to').selectedIndex].text;
  const fC=fTxt.match(/\((\w+)\)/)[1],tC=tTxt.match(/\((\w+)\)/)[1];
  document.getElementById('rl').textContent=fC+' → '+tC;
  document.getElementById('dl').textContent=dep?new Date(dep+'T12:00:00').toLocaleDateString('en-AU',{weekday:'short',day:'numeric',month:'long'}):'';
  const flights=FLIGHTS[f+'-'+t]||null;
  const list=document.getElementById('fl-list');
  if(!flights){
    document.getElementById('filter-row').innerHTML='';
    list.innerHTML='<div style="text-align:center;padding:52px;color:var(--muted);"><div style="font-size:36px;margin-bottom:14px;">✈</div><div style="font-size:15px;">No direct flights available for this route.</div><div style="font-size:12px;margin-top:8px;">Try Sydney ↔ Brisbane, Melbourne, Perth, Singapore or Tokyo.</div></div>';
  } else {
    const frs=document.getElementById('filter-row');
    frs.innerHTML='<span style="font-size:12px;color:var(--muted);align-self:center;">'+flights.length+' flights found</span>'
      +'<button onclick="sortFlights(\'price\',\''+f+'-'+t+'\')" style="font-family:\'DM Sans\',sans-serif;background:var(--card-bg);border:0.5px solid var(--card-border);color:var(--muted);font-size:11px;padding:5px 12px;border-radius:10px;cursor:pointer;">Sort by price</button>'
      +'<button onclick="sortFlights(\'dep\',\''+f+'-'+t+'\')" style="font-family:\'DM Sans\',sans-serif;background:var(--card-bg);border:0.5px solid var(--card-border);color:var(--muted);font-size:11px;padding:5px 12px;border-radius:10px;cursor:pointer;">Sort by departure</button>';
    renderFlights(flights,f,t);
  }
  nav('results');
}

let curFlights=[], curKey='';
function renderFlights(flights,f,t){
  curFlights=flights; curKey=f+'-'+t;
  const best=flights.reduce((a,b)=>a.price<b.price?a:b);
  document.getElementById('fl-list').innerHTML=flights.map((fl,i)=>`
    <div class="fc ${fl===best?'bv':''}" onclick="startBookingDetails(${i},'${f}','${t}')">
      <div>
        ${fl===best?'<div class="bb">Best value</div>':''}
        <div class="t">${fl.dep}</div><div class="ap">${getCity(f)} (${f})</div>
      </div>
      <div class="fm">
        <div class="dur">${fl.dur}</div>
        <div class="fline"></div>
        <div class="stl">${fl.stops}</div>
      </div>
      <div>
        <div class="t">${fl.arr}</div><div class="ap">${getCity(t)} (${t})</div>
      </div>
      <div class="ai">
        <div class="fn">${fl.code}</div>
        <span class="cls-badge cls-${fl.cls}">${cls_name[fl.cls]}</span>
        <div style="font-size:10px;color:var(--muted);margin-top:3px;">${fl.aircraft}</div>
      </div>
      <div>
        <div class="pr">$${fl.price}</div><div class="prs">per person</div>
      </div>
      <button class="sel-btn" onclick="event.stopPropagation();startBookingDetails(${i},'${f}','${t}')">Select →</button>
    </div>
  `).join('');
}

function sortFlights(by,key){
  const [f,t]=key.split('-');
  const sorted=[...curFlights].sort((a,b)=>by==='price'?a.price-b.price:a.dep.localeCompare(b.dep));
  renderFlights(sorted,f,t);
}

function getCity(code){
  const m={SYD:'Sydney',MEL:'Melbourne',BNE:'Brisbane',PER:'Perth',ADL:'Adelaide',CBR:'Canberra',SIN:'Singapore',NRT:'Tokyo',LHR:'London',LAX:'Los Angeles',DXB:'Dubai'};
  return m[code]||code;
}

function openCheckout(idx,f,t){
  startBookingDetails(idx,f,t);
}

function startBookingDetails(idx,f,t){
  const fl=curFlights[idx];
  if(!fl) return;
  const dateValue=document.getElementById('d-dep').value;
  selectedFlight={...fl,from:f,to:t,dateValue,date:formatTravelDate(dateValue)};
  const form=document.getElementById('passenger-form');
  if(form) form.reset();
  renderDetailsSummary();
  nav('details');
}

function formatTravelDate(dateValue){
  if(!dateValue) return 'Date not selected';
  return new Date(dateValue+'T12:00:00').toLocaleDateString('en-AU',{weekday:'short',day:'numeric',month:'short',year:'numeric'});
}

function cleanText(value){
  return String(value || '').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function renderDetailsSummary(){
  if(!selectedFlight) return;
  document.getElementById('details-summary').innerHTML=`
    <div class="detail-summary-title">Booking summary</div>
    <div class="detail-summary-row"><div class="label">Route</div><div class="value">${getCity(selectedFlight.from)} (${selectedFlight.from}) → ${getCity(selectedFlight.to)} (${selectedFlight.to})</div></div>
    <div class="detail-summary-row"><div class="label">Flight</div><div class="value">${selectedFlight.code}</div></div>
    <div class="detail-summary-row"><div class="label">Date</div><div class="value">${selectedFlight.date}</div></div>
    <div class="detail-summary-row"><div class="label">Time</div><div class="value">${selectedFlight.dep} - ${selectedFlight.arr}</div></div>
    <div class="detail-summary-row"><div class="label">Class</div><div class="value">${cls_name[selectedFlight.cls]}</div></div>
    <div class="detail-summary-row"><div class="label">Aircraft</div><div class="value">${selectedFlight.aircraft}</div></div>
    <div class="detail-summary-total"><div>Total</div><div class="value">$${selectedFlight.price}</div></div>
  `;
}

function submitBookingDetails(e){
  e.preventDefault();
  if(!selectedFlight){
    nav('book');
    return;
  }
  const passenger={
    firstName:cleanText(document.getElementById('passenger-first').value),
    lastName:cleanText(document.getElementById('passenger-last').value),
    email:cleanText(document.getElementById('passenger-email').value),
    phone:cleanText(document.getElementById('passenger-phone').value),
    dob:cleanText(document.getElementById('passenger-dob').value),
    passport:cleanText(document.getElementById('passenger-passport').value),
    notes:cleanText(document.getElementById('passenger-notes').value)
  };
  const ref='FDA-'+Math.floor(10000+Math.random()*89999);
  lastBooking={
    ref,
    from:selectedFlight.from,
    to:selectedFlight.to,
    fromCity:getCity(selectedFlight.from),
    toCity:getCity(selectedFlight.to),
    date:selectedFlight.date,
    time:selectedFlight.dep,
    code:selectedFlight.code,
    cls:cls_name[selectedFlight.cls],
    status:'confirmed',
    price:selectedFlight.price,
    passenger:passenger.firstName+' '+passenger.lastName,
    email:passenger.email,
    phone:passenger.phone,
    passport:passenger.passport,
    notes:passenger.notes
  };
  bookings.unshift(lastBooking);
  renderConfirmation();
  nav('confirmation');
}

function renderConfirmation(){
  if(!lastBooking) return;
  document.getElementById('confirmed-ref').textContent=lastBooking.ref;
  document.getElementById('confirmed-details').innerHTML=`
    <div class="confirm-row"><span class="label">Passenger</span><span class="value">${lastBooking.passenger}</span></div>
    <div class="confirm-row"><span class="label">Route</span><span class="value">${lastBooking.fromCity} to ${lastBooking.toCity}</span></div>
    <div class="confirm-row"><span class="label">Flight</span><span class="value">${lastBooking.code}</span></div>
    <div class="confirm-row"><span class="label">Date</span><span class="value">${lastBooking.date}</span></div>
    <div class="confirm-row"><span class="label">Departure</span><span class="value">${lastBooking.time}</span></div>
    <div class="confirm-row"><span class="label">Paid</span><span class="value">$${lastBooking.price}</span></div>
  `;
}
function closeModal(){document.getElementById('checkout-modal').classList.remove('open');}
function bookingConfirmed(){
  closeModal();
  if(!selectedFlight) return;
  const ref='FDA-'+Math.floor(10000+Math.random()*89999);
  lastBooking={ref,from:selectedFlight.from,to:selectedFlight.to,fromCity:getCity(selectedFlight.from),toCity:getCity(selectedFlight.to),date:selectedFlight.date || formatTravelDate(selectedFlight.dateValue),time:selectedFlight.dep,code:selectedFlight.code,cls:cls_name[selectedFlight.cls],status:'confirmed',price:selectedFlight.price,passenger:'Guest passenger'};
  bookings.unshift(lastBooking);
  renderConfirmation();
  nav('confirmation');
}

function renderBookings(){
  const sl={confirmed:'st-confirmed',checkin:'st-checkin',completed:'st-completed'};
  const sl2={confirmed:'Confirmed',checkin:'Check-in open',completed:'Completed'};
  document.getElementById('bookings-list').innerHTML=bookings.map(b=>`
    <div class="bk-card">
      <div class="bk-top">
        <div class="bk-num">REF: ${b.ref}</div>
        <div class="bk-status ${sl[b.status]}">${sl2[b.status]}</div>
      </div>
      <div class="bk-route">
        <div><div class="bk-city">${b.fromCity}</div><div class="bk-iata">${b.from}</div></div>
        <div class="bk-arrow">→</div>
        <div><div class="bk-city">${b.toCity}</div><div class="bk-iata">${b.to}</div></div>
      </div>
      <div class="bk-det">
        ${b.passenger?`<span><div class="pf-label">Passenger</div><b>${b.passenger}</b></span>`:''}
        <span><div class="pf-label">Date</div><b>${b.date}</b></span>
        <span><div class="pf-label">Departure</div><b>${b.time}</b></span>
        <span><div class="pf-label">Flight</div><b>${b.code}</b></span>
        <span><div class="pf-label">Class</div><b>${b.cls}</b></span>
        <span><div class="pf-label">Paid</div><b style="color:var(--accent);">$${b.price}</b></span>
      </div>
      ${b.status!=='completed'?`<div class="bk-actions">
        <button class="bk-act-btn bk-primary" onclick="alert('Opening online check-in for ${b.ref}...')">Online check-in</button>
        <button class="bk-act-btn bk-ghost" onclick="nav('seats')">Change seat</button>
        <button class="bk-act-btn bk-ghost" onclick="nav('services')">Add services</button>
        <button class="bk-act-btn bk-ghost" onclick="cancelBooking('${b.ref}')" style="color:#f09595;border-color:rgba(240,149,149,0.3);">Cancel</button>
      </div>`:'<div class="bk-actions"><button class="bk-act-btn bk-ghost">Download receipt</button></div>'}
    </div>
  `).join('');
}

function cancelBooking(ref){
  if(confirm('Cancel booking '+ref+'? This may incur cancellation fees.')){
    bookings=bookings.filter(b=>b.ref!==ref);
    renderBookings();
  }
}

function renderSeats(){
  const taken=['1A','2C','3B','4A','4C','5B','6D','7A','8B','8F','9C','10A','10E','11B','12F','13A','13D','14C','15B','16A','16F','17D','18B','19A','20C','21F','22B','23A','24D','25C'];
  const legroom=['6A','6B','6C','6D','6E','6F','14A','14B','14C','14D','14E','14F'];
  const cols=['A','B','C','','D','E','F'];
  let html='';
  html+='<div class="seat-section"><h4>Business class — Rows 1–5</h4>';
  for(let r=1;r<=5;r++){
    html+='<div class="seat-row"><div class="row-num">'+r+'</div>';
    ['A','B','C','','D'].forEach(c=>{
      if(!c){html+='<div class="aisle"></div>';return;}
      const id=r+c,t=taken.includes(id);
      html+=`<button class="seat ${t?'taken':'avail'}" id="s${id}" onclick="selSeat('${id}','${r}','${c}','Business')" ${t?'disabled':''}>${c}</button>`;
    });
    html+='</div>';
  }
  html+='</div><div class="seat-section"><h4>Economy class — Rows 6–30</h4>';
  for(let r=6;r<=30;r++){
    html+='<div class="seat-row"><div class="row-num">'+r+'</div>';
    cols.forEach(c=>{
      if(!c){html+='<div class="aisle"></div>';return;}
      const id=r+c,t=taken.includes(id),lg=legroom.includes(id);
      html+=`<button class="seat ${t?'taken':'avail'}" id="s${id}" onclick="selSeat('${id}','${r}','${c}','Economy')" ${t?'disabled':''} style="${lg&&!t?'background:rgba(93,202,165,0.2);':''}">${c}</button>`;
    });
    html+='</div>';
  }
  html+='</div>';
  document.getElementById('seat-map').innerHTML=html;
}

function selSeat(id,row,col,cls){
  if(selectedSeat){const prev=document.getElementById('s'+selectedSeat);if(prev){prev.classList.remove('selected');prev.style.background='';}}
  selectedSeat=id;
  const el=document.getElementById('s'+id);el.classList.add('selected');
  const legr=['6','14'].includes(row);
  document.getElementById('seat-info').innerHTML=`Selected: <span>Seat ${id}</span> · ${cls} · Row ${row} · ${col==='A'||col==='F'?'Window':col==='C'||col==='D'?'Aisle':'Middle'}${legr?' · Extra legroom':''}`;
}

function confirmSeat(){
  if(!selectedSeat){alert('Please select a seat first.');return;}
  alert('Seat '+selectedSeat+' confirmed for flight FDA 201!');
}

let ifsFilter='all';
function filterIFS(cat,btn){
  ifsFilter=cat;
  document.querySelectorAll('.ifs-cat').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderIFS(cat);
}
function renderIFS(cat){
  const items=cat==='all'?IFS_ITEMS:IFS_ITEMS.filter(i=>i.cat===cat);
  document.getElementById('ifs-grid').innerHTML=items.map(item=>`
    <div class="ifs-card">
      <div class="ifs-icon">${item.icon}</div>
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
      <div class="ifs-price">$${item.price}</div>
      <button class="add-btn" id="ifs-${item.id}" onclick="addToCart(${item.id})">${cart.find(c=>c.id===item.id)?'✓ Added':'Add to order'}</button>
    </div>
  `).join('');
  renderCart();
}
function addToCart(id){
  const item=IFS_ITEMS.find(i=>i.id===id);
  if(cart.find(c=>c.id===id)){cart=cart.filter(c=>c.id!==id);}
  else{cart.push(item);}
  renderIFS(ifsFilter);
}
function renderCart(){
  const el=document.getElementById('ifs-cart');
  if(cart.length===0){el.innerHTML='';return;}
  const total=cart.reduce((s,i)=>s+i.price,0);
  el.innerHTML=`<div style="background:var(--card-bg);border:0.5px solid var(--card-border);border-radius:var(--radius);padding:18px 20px;margin-top:8px;">
    <div style="font-size:12px;color:var(--accent);letter-spacing:1.5px;text-transform:uppercase;font-weight:500;margin-bottom:12px;">Your order (${cart.length} item${cart.length>1?'s':''})</div>
    ${cart.map(i=>`<div style="display:flex;justify-content:space-between;font-size:13px;padding:6px 0;border-bottom:0.5px solid var(--card-border);">${i.icon} ${i.name}<span style="color:var(--accent);">$${i.price}</span></div>`).join('')}
    <div style="display:flex;justify-content:space-between;font-size:15px;font-weight:500;padding-top:12px;margin-top:4px;"><span>Total</span><span style="color:var(--accent);">$${total}</span></div>
    <button onclick="alert('In-flight order confirmed! Enjoy your flight.')" style="width:100%;margin-top:14px;background:var(--accent);color:var(--sky);border:none;border-radius:10px;padding:11px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;cursor:pointer;">Confirm order →</button>
  </div>`;
}

// Set default dates
const today=new Date();
const d1=new Date(today); d1.setDate(d1.getDate()+7);
const d2=new Date(today); d2.setDate(d2.getDate()+14);
document.getElementById('d-dep').value=d1.toISOString().split('T')[0];
document.getElementById('d-ret').value=d2.toISOString().split('T')[0];

// Star canvas
const cv=document.getElementById('starCanvas');
const cx=cv.getContext('2d');
function drawStars(){
  cv.width=cv.offsetWidth||800; cv.height=cv.offsetHeight||200;
  for(let i=0;i<80;i++){
    cx.beginPath();
    const r=Math.random()*1.5+0.3;
    cx.arc(Math.random()*cv.width,Math.random()*cv.height,r,0,Math.PI*2);
    cx.fillStyle=`rgba(255,255,255,${Math.random()*0.5+0.1})`;
    cx.fill();
  }
}
drawStars();
