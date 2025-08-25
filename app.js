const I18N = {
  en:{ title:"Aquaculture A–Z Hub", subtitle:"Andhra Pradesh",
       liveRates:"Live Rates", liveDesc:"Shrimp, feed, diesel & ice",
       vendors:"Vendors", vendorsDesc:"Feeds · Seeds · Medicines · Labs",
       techs:"Technicians & Labs", techsDesc:"Directory & contact",
       knowledge:"Knowledge Center", knowledgeDesc:"Prawn culture A–Z",
       news:"News & Schemes", newsDesc:"Updates & subsidies",
       post:"Post a Requirement", postDesc:"Get dealer callbacks",
       district:"Select District" },
  te:{ title:"ఆక్వాకల్చర్ A–Z హబ్", subtitle:"ఆంధ్రప్రదేశ్",
       liveRates:"లైవ్ రేట్స్", liveDesc:"శ్రింప్, ఫీడ్, డీజిల్ & ఐస్",
       vendors:"వెండర్లు", vendorsDesc:"ఫీడ్స్ · సీడ్స్ · మందులు · ల్యాబ్స్",
       techs:"టెక్నీషియన్స్ & ల్యాబ్స్", techsDesc:"డైరెక్టరీ & కాంటాక్ట్",
       knowledge:"నాలెడ్జ్ సెంటర్", knowledgeDesc:"ప్రాన్స్ కల్చర్ A–Z",
       news:"న్యూస్ & స్కీమ్స్", newsDesc:"అప్డేట్స్ & సబ్సిడీలు",
       post:"రిక్వైర్మెంట్ పోస్ట్ చేయి", postDesc:"డీలర్ కాల్‌బ్యాక్స్ పొందండి",
       district:"జిల్లా ఎంచుకోండి" }
};

function getLang(){ return localStorage.getItem('lang') || 'en'; }
function setLang(v){ localStorage.setItem('lang', v); applyI18N(); }
function t(k){ return (I18N[getLang()]||{})[k] || k; }

function applyI18N(){
  document.querySelectorAll('[data-i18n]').forEach(el=> el.textContent = t(el.dataset.i18n));
  const sel = document.getElementById('districtSelect');
  if (sel && sel.options.length) sel.options[0].textContent = t('district');
  document.querySelectorAll('[data-lang]').forEach(b=> b.classList.toggle('active', b.dataset.lang===getLang()));
}

document.querySelectorAll('[data-lang]').forEach(b=> 
  b.addEventListener('click',()=> setLang(b.dataset.lang))
);

// District persistence
const dSel = document.getElementById('districtSelect');
const savedD = localStorage.getItem('district'); 
if(savedD) dSel.value = savedD;
dSel.addEventListener('change', e=> localStorage.setItem('district', e.target.value));

// Init
document.getElementById('yr').textContent = new Date().getFullYear();
applyI18N();
