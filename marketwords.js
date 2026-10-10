/* Market vocabulary: informal listing language and formal rights are kept distinct. */
const MARKET_TERMS=[
 ['피(P)·프리미엄','분양권 등을 거래할 때 원래 가격에 더하거나 빼는 금액을 말하는 시장 표현.','분양가 6억원에 P +2,000만원이면 단순 합계는 6억2,000만원. 옵션·이자·세금 등은 별도예요.'],
 ['플피','플러스 프리미엄의 줄임말. 분양가보다 웃돈이 붙은 상태.','6억원 + 2,000만원 = 6억2,000만원. 플피 2천은 보통 웃돈 2,000만원이라는 말이에요.'],
 ['마피','마이너스 프리미엄의 줄임말. 분양가보다 낮춘 금액으로 거래하려는 상태.','6억원 − 2,000만원 = 5억8,000만원. 싸졌다는 말만으로 전체 비용이나 매물 상태를 알 수는 없어요.'],
 ['무피','프리미엄이 0이라는 시장 표현.','분양가 6억원에 P 0이면 단순 합계는 6억원. 세금·수수료·옵션·이자까지 없다는 뜻은 아니에요.'],
 ['초피','분양 초기에 형성되는 프리미엄을 가리키는 시장 표현.','당첨 직후나 초기 계약 무렵의 웃돈을 말하기도 해요. 표현만 보고 전매 가능한 시점이라고 판단하면 안 돼요.'],
 ['손피','매도자가 세금·비용 등을 정산한 뒤 손에 남기려는 프리미엄을 가리키는 표현.','손피 2천은 매수인의 총 추가 부담이 2천이라는 뜻이 아니에요. 누가 어떤 세금·비용을 부담하는지 확인해야 해요.'],
 ['분양가','사업자가 새 집을 공급할 때 계약에서 정한 가격.','분양가와 발코니 확장비·유상 옵션비는 따로 적혀 있을 수 있어요.'],
 ['분양권','주택 공급계약을 통해 그 주택을 공급받을 사람으로 정해진 지위.','일반분양에서는 청약 당첨 뒤 공급계약을 맺는 경우가 대표적이에요. 이미 완공된 집의 소유권과는 달라요.'],
 ['입주권·조합원입주권','재개발·재건축 등에서 조합원이 새 주택을 공급받을 지위를 말해요. 세법상 정의는 인가 단계 등 요건과 연결됩니다.','기존 집·땅 → 정비사업과 법정 요건 → 새 집을 받을 지위. 낡은 집을 샀다고 언제나 입주권을 받는 것은 아니에요.'],
 ['전매','산 권리 등을 다시 다른 사람에게 파는 것.','분양권을 다른 사람에게 넘기는 거래가 한 예예요. 물건별로 전매 제한과 조건이 달라요.'],
 ['전매제한','분양권 등을 일정 기간 또는 조건 아래에서 되팔지 못하게 하는 제한.','광고에 매물이 있다고 바로 거래할 수 있다는 뜻은 아니에요. 모집공고와 현행 규정을 확인해요.'],
 ['조합원','정비사업을 진행하는 조합의 구성원.','조합원 지위, 새 집을 받을 자격, 그 지위를 다른 사람에게 넘길 수 있는지는 각각 확인해야 해요.'],
 ['조합원분양가','조합원이 새 주택을 배정받을 때 적용하는 분양가격.','일반분양가와 다를 수 있어요. 같은 단지라고 모두 같은 가격에 받는 것은 아니에요.'],
 ['권리가액','정비사업에서 조합원의 기존 재산에 대해 인정하는 가치.','가상 권리가액 4억원과 조합원분양가 6억원을 비교하면 차이는 2억원이에요. 실제 평가는 사업별 자료를 봐요.'],
 ['분담금·추가분담금','조합원이 새 집을 받기 위해 추가로 부담하는 돈. 추정치는 사업 진행에 따라 바뀔 수 있어요.','단순 예: 조합원분양가 6억원 − 권리가액 4억원 = 분담금 2억원. 공사비가 오르면 부담이 늘 수 있어요.'],
 ['관리처분계획','정비사업에서 새 집 등의 배분과 기존 재산의 평가, 비용 부담 등을 정하는 계획.','누가 무엇을 받으며 비용을 어떻게 나눌지 정하는 설계도라고 생각해요. 인가 여부도 확인해요.'],
 ['일반분양','조합원에게 배정하는 물량 등을 제외하고 일반에게 공급하는 분양.','같은 정비사업 단지에도 조합원분양과 일반분양이 함께 있을 수 있어요.'],
 ['미분양','공급했지만 계약되지 않고 남아 있는 주택 물량을 가리키는 말.','집이 다 지어진 뒤에도 남은 경우는 준공 후 미분양이라고 구분해요.'],
 ['계약금','계약을 맺을 때 먼저 내는 돈.','가상 분양가 6억원의 10%면 6,000만원. 실제 비율과 반환 조건은 계약서마다 달라요.'],
 ['중도금','계약금과 잔금 사이에 나누어 내는 돈.','중도금 대출을 이용했다면 그 빚을 누가 어떻게 갚거나 이어받는지도 확인해요.'],
 ['잔금','약속한 전체 대금에서 마지막에 내는 나머지 돈.','계약금만 준비했다고 끝이 아니에요. 입주 때 낼 잔금과 대출 상환도 계획해야 해요.'],
 ['발코니 확장비·유상 옵션','기본 공급가격 외에 선택한 확장·설비 등에 드는 별도 비용.','P가 0이어도 에어컨·확장 등 선택 비용이 붙을 수 있어요. 포함 여부를 확인해요.']
];
MARKET_TERMS.forEach(([term,definition,example])=>{if(!TERMS.some(t=>t[0]===term))TERMS.push([term,definition,example,'glossary/marketwords']);});
SOURCES.push(
 ['국가법령정보센터 · 소득세법 제88조','https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032245573','분양권과 조합원입주권의 세법상 정의. 이 페이지는 정의를 설명하며 주택 수·세율·비과세 판정은 제공하지 않습니다.'],
 ['국가법령정보센터 · 관리처분계획 해석례','https://law.go.kr/expcInfoP.do?expcSeq=328877','종전 재산과 분양예정 재산의 평가 및 관리처분계획 개념 참고.'],
 ['인천광역시 · 추정분담금 정보시스템','https://renewal.incheon.go.kr/ires/index.do','추정분담금은 사업 초기의 참고값이고 사업환경 변화로 달라질 수 있다는 설명의 근거.'],
 ['뉴시스 · 분양권 시장 약어 설명','https://v.daum.net/v/b5vryLKGBw','피·플피·마피·초피·손피는 시장 표현이며 법정 용어가 아닙니다. 약어 사용례 참고.']
);
const marketOldGlossary=glossary,marketOldAttach=attachSims,marketOldSources=sources;
function marketWidgets(){return `<section id="marketwords" class="marketwords"><div class="eyebrow">매물 말 번역기</div><h2>마피·플피, 집을 받는 권리까지</h2><p>줄임말을 풀고, 돈과 권리를 따로 읽어 봐요. 모든 금액은 가상 예시예요.</p><nav class="marketchips" aria-label="자주 쓰는 매물 용어">${['마피','플피','무피','분양권','입주권·조합원입주권','분담금·추가분담금','손피'].map(name=>`<a href="#glossary/${encodeURIComponent(name)}">${name} ↗</a>`).join('')}</nav>
<article class="marketlesson"><h3>① ‘마피 2천’이면 얼마일까?</h3><p>원래 분양가 <b>6억원</b>. 계약금 <b>6,000만원</b>만 낸 권리를 다른 사람에게 넘긴다고 가정해요.</p><div class="easy-question"><span>생각해 보기</span><p>웃돈을 0보다 낮추면 가격은 어느 쪽으로 움직일까요?</p></div><div class="easy-presets"><button data-market-p="-2000">마피 2천</button><button data-market-p="0">무피</button><button data-market-p="2000">플피 2천</button></div><label class="marketlabel" for="marketpremium">웃돈·할인액 P <output id="marketpvalue" for="marketpremium"></output><input id="marketpremium" type="range" min="-3000" max="3000" step="500" value="0"></label><div id="marketpremiumviz"></div><div class="easy-conclusion" id="marketpremiumanswer" role="status" aria-live="polite"></div><details class="easy-model"><summary>이 예시에서 뺀 조건</summary><p>분양권 전매가 허용되는 경우만 가정해요. 중도금 납부·대출, 옵션, 확장비, 세금, 수수료, 이자는 제외했어요. 실제 매물은 이미 낸 돈·남은 돈·대출 승계 조건을 계약서와 대조해요.</p></details></article>
<article class="marketlesson"><h3>② 분양권과 입주권, 어디서 시작할까?</h3><p>둘 다 앞으로 새 집을 받는 지위라는 공통점이 있어요. 생기는 과정은 달라요.</p><div class="easy-presets"><button data-market-right="sale" aria-pressed="true">분양권 이야기</button><button data-market-right="member" aria-pressed="false">입주권 이야기</button></div><div id="marketrightviz"></div><div class="markettable"><table><thead><tr><th>비교</th><th>분양권</th><th>조합원입주권</th></tr></thead><tbody><tr><th>대표적 출발</th><td>새 집 공급계약</td><td>기존 부동산과 조합원 지위</td></tr><tr><th>앞으로 내는 돈</th><td>남은 분양대금 등</td><td>분담금 등</td></tr><tr><th>먼저 볼 자료</th><td>공급계약·납부 내역</td><td>자격·인가·배분·분담금 자료</td></tr></tbody></table></div><p class="easy-caption">일반적인 이해를 위한 비교예요. 소규모정비사업 등 법정 유형에 따라 성립 요건이 달라요. 거래 가능 여부·세금·주택 수는 별도의 조건을 봐야 해요.</p></article>
<article class="marketlesson"><h3>③ 새 집 가격이 오르면 분담금은?</h3><p>기존 재산의 인정 가치인 <b>권리가액은 4억원</b>으로 고정해요. 새 집에 적용하는 조합원분양가만 바꿔 봐요.</p><label class="marketlabel" for="marketnewprice">조합원분양가 <output id="marketnewvalue" for="marketnewprice"></output><input id="marketnewprice" type="range" min="50000" max="80000" step="1000" value="60000"></label><div id="marketshareviz"></div><div class="easy-conclusion" id="marketshareanswer" role="status" aria-live="polite"></div><p class="easy-caption">단순 교육식: 분담금 = 조합원분양가 − 권리가액. 입주권을 사는 값과 앞으로 낼 분담금은 따로 봐요. 실제 정산·비용·납부 일정은 사업별로 다르고 추정분담금은 바뀔 수 있어요.</p></article><p class="muted">아래 사전에서 초피·손피·전매·권리가액·중도금·잔금도 찾아보세요.</p></section>`;}
glossary=function(){return marketOldGlossary().replace('<input class="filter"',marketWidgets()+'<input class="filter"');};
sources=function(){return marketOldSources().replaceAll('공식 자료 열기','참고 자료 열기');};
attachSims=function(){marketOldAttach();const premium=document.getElementById('marketpremium');if(!premium)return;function premiumUpdate(){const p=Number(premium.value),total=60000+p,now=6000+p,label=p<0?'마피':p>0?'플피':'무피';document.getElementById('marketpvalue').textContent=(p>0?'+':p<0?'−':'')+MONEY(Math.abs(p));document.querySelectorAll('[data-market-p]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.marketP)===p)));document.getElementById('marketpremiumviz').innerHTML=`<div class="marketbadge">${label}${p===0?' · P 0':' '+MONEY(Math.abs(p))}</div>${easyPair('분양가 + P · 단순 가격 합계',60000,total,MONEY)}${easyStack(['지금 매도자에게 주는 돈','앞으로 낼 분양대금'],[now,54000],MONEY)}<p class="easy-caption">구성 막대예요. ‘지금 줄 돈’과 ‘나중에 낼 돈’을 합한 금액입니다.</p>`;document.getElementById('marketpremiumanswer').innerHTML=`<span>한 문장으로</span><p>${p===0?'웃돈은 없지만 남은 분양대금은 있어요.':`${label}는 원래 가격에서 ${MONEY(Math.abs(p))} ${p>0?'더한다':'뺀다'}는 뜻이에요.`} 지금 ${MONEY(now)}, 나중에 ${MONEY(54000)}를 내는 가정이에요.</p>`;}
function rightUpdate(mode){const member=mode==='member',steps=member?['기존 집·땅과 조합원 지위','정비사업·인가와 법정 요건','새 집을 받을 조합원 지위']:['새 집 공급 공고·신청','공급받을 사람 선정·계약','새 집을 공급받을 지위'];document.querySelectorAll('[data-market-right]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.marketRight===mode)));document.getElementById('marketrightviz').innerHTML=`<div class="marketroute">${steps.map((s,i)=>`<div><small>${i+1}</small><strong>${s}</strong></div>`).join('')}</div><div class="easy-conclusion"><span>${member?'입주권':'분양권'}의 출발점</span><p>${member?'기존 부동산의 권리와 조합원 자격, 인가 단계 등이 연결돼요. 낡은 집이면 자동으로 새 아파트를 받는다는 뜻은 아니에요.':'대표적으로 일반분양 공급계약을 통해 새 집을 받을 사람으로 정해져요. 완공된 집의 소유권과 구분해요.'}</p></div>`;}
function shareUpdate(){const price=Number(document.getElementById('marketnewprice').value),share=price-40000;document.getElementById('marketnewvalue').textContent=MONEY(price);document.getElementById('marketshareviz').innerHTML=easyBars(['새 집의 조합원분양가','기존 재산의 권리가액','차이 · 분담금'],[price,40000,share],MONEY,80000)+easyPair('내가 더 부담하는 가상 금액',20000,share,MONEY);document.getElementById('marketshareanswer').innerHTML=`<span>한 문장으로</span><p>${MONEY(price)}에서 인정받는 ${MONEY(40000)}를 빼면, ${MONEY(share)}를 더 부담하는 가정이에요.</p>`;}
premium.addEventListener('input',premiumUpdate);document.querySelectorAll('[data-market-p]').forEach(b=>b.addEventListener('click',()=>{premium.value=b.dataset.marketP;premiumUpdate();}));document.querySelectorAll('[data-market-right]').forEach(b=>b.addEventListener('click',()=>rightUpdate(b.dataset.marketRight)));document.getElementById('marketnewprice').addEventListener('input',shareUpdate);premiumUpdate();rightUpdate('sale');shareUpdate();};
route();
