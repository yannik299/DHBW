// ===== Basis-Rezepte (50) =====
const BASE_RECIPES = [
    {id:1,title:'Cremige Tomaten-Pasta',time:20,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8bbf?q=80&w=1200&auto=format&fit=crop',ingredients:['Pasta','Tomate','Knoblauch','Sahne','Basilikum','Käse'],steps:['Pasta kochen','Tomaten & Knoblauch anrösten','Mit Sahne ablöschen','Mit Basilikum & Käse servieren']},
    {id:2,title:'Gemüse-Curry mit Reis',time:30,difficulty:'mittel',diet:'vegan',img:'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',ingredients:['Zucchini','Karotte','Kartoffel','Kokosmilch','Curry','Reis'],steps:['Reis kochen','Gemüse anbraten','Curry & Kokosmilch zugeben','Köcheln lassen']},
    {id:3,title:'Ofenkartoffeln mit Kräuterjoghurt',time:45,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1476127395653-69b676541d90?q=80&w=1200&auto=format&fit=crop',ingredients:['Kartoffel','Joghurt','Petersilie','Knoblauch','Zitrone'],steps:['Kartoffeln backen','Joghurt mit Kräutern verrühren','Mit Zitrone abschmecken']},
    {id:4,title:'Hähnchen-Paprika-Pfanne',time:25,difficulty:'mittel',diet:'omnivor',img:'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop',ingredients:['Hähnchen','Paprika','Zwiebel','Reis','Petersilie'],steps:['Hähnchen anbraten','Gemüse zugeben','Mit Reis servieren']},
    {id:5,title:'Tofu-Spinat-Rührei',time:15,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1200&auto=format&fit=crop',ingredients:['Tofu','Spinat','Zwiebel','Knoblauch'],steps:['Zwiebel & Knoblauch anbraten','Tofu zerkrümeln','Spinat unterheben']},
    {id:6,title:'Linsen-Bolognese',time:35,difficulty:'mittel',diet:'vegan',img:'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',ingredients:['Linsen','Tomatenmark','Zwiebel','Knoblauch','Pasta','Karotte'],steps:['Linsen kochen','Sugo ansetzen','Mit Pasta servieren']},
    {id:7,title:'Avocado-Feta-Salat',time:10,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',ingredients:['Avocado','Gurke','Feta','Zitrone'],steps:['Alles würfeln','Mit Zitrone & Öl mischen','Abschmecken']},
    {id:8,title:'Honig-Ingwer-Hähnchen',time:35,difficulty:'mittel',diet:'omnivor',img:'https://images.unsplash.com/photo-1604909052743-88a1a7b7f1f9?q=80&w=1200&auto=format&fit=crop',ingredients:['Hähnchen','Ingwer','Honig','Sojasauce','Reis'],steps:['Marinade anrühren','Hähnchen braten','Mit Reis servieren']},
    {id:9,title:'Lauch-Kartoffel-Suppe',time:30,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop',ingredients:['Lauch','Kartoffel','Zwiebel','Sahne'],steps:['Gemüse anschwitzen','Wasser/Brühe zugeben','Pürieren & Sahne']},
    {id:10,title:'Mozzarella-Tomaten-Pasta',time:20,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',ingredients:['Pasta','Tomate','Mozzarella','Basilikum'],steps:['Pasta kochen','Tomaten kurz schwenken','Mit Mozzarella & Basilikum']},
    {id:11,title:'Thunfisch-Mais-Pasta',time:18,difficulty:'leicht',diet:'omnivor',img:'https://images.unsplash.com/photo-1514517604290-c2f0c4e0fd43?q=80&w=1200&auto=format&fit=crop',ingredients:['Pasta','Thunfisch','Mais','Zwiebel'],steps:['Zwiebel anschwitzen','Thunfisch & Mais zugeben','Mit Pasta mischen']},
    {id:12,title:'Kichererbsen-Curry',time:25,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop',ingredients:['Kichererbsen','Zwiebel','Knoblauch','Curry','Kokosmilch'],steps:['Aromaten anrösten','Kichererbsen & Curry','Kokosmilch dazu & köcheln']},
    {id:13,title:'Spinat-Pilz-Pasta',time:22,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop',ingredients:['Pasta','Spinat','Pilze','Knoblauch','Sahne'],steps:['Pasta kochen','Pilze anbraten','Spinat & Sahne zugeben']},
    {id:14,title:'Brokkoli-Reis-Pfanne',time:20,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',ingredients:['Brokkoli','Reis','Zwiebel','Sojasauce'],steps:['Reis garen','Brokkoli kurz garen','Alles mit Sojasauce schwenken']},
    {id:15,title:'Kartoffel-Zucchini-Rösti',time:25,difficulty:'mittel',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop',ingredients:['Kartoffel','Zucchini','Ei','Joghurt'],steps:['Rösti reiben & braten','Mit Joghurt servieren']},
    {id:16,title:'Rind-Paprika-Wok',time:28,difficulty:'mittel',diet:'omnivor',img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop',ingredients:['Rind','Paprika','Zwiebel','Sojasauce','Ingwer'],steps:['Rind scharf anbraten','Gemüse zugeben','Mit Sojasauce würzen']},
    {id:17,title:'Zitronen-Hähnchen-Reis',time:30,difficulty:'leicht',diet:'omnivor',img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',ingredients:['Hähnchen','Zitrone','Reis','Petersilie'],steps:['Hähnchen braten','Mit Zitrone glasieren','Mit Reis servieren']},
    {id:18,title:'Petersilien-Kartoffeln',time:18,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1505575972945-280eda2a8626?q=80&w=1200&auto=format&fit=crop',ingredients:['Kartoffel','Petersilie','Butter'],steps:['Kartoffeln kochen','Mit Butter & Petersilie schwenken']},
    {id:19,title:'Basilikum-Risotto',time:35,difficulty:'mittel',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1528838064301-3799f26c6fda?q=80&w=1200&auto=format&fit=crop',ingredients:['Reis','Zwiebel','Butter','Käse','Basilikum'],steps:['Zwiebel in Butter','Reis garen','Mit Käse & Basilikum']},
    {id:20,title:'Tofu-Brokkoli-Wok',time:20,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1200&auto=format&fit=crop',ingredients:['Tofu','Brokkoli','Sojasauce','Ingwer','Knoblauch'],steps:['Tofu knusprig braten','Gemüse zugeben','Würzen & servieren']},
    {id:21,title:'Linsen-Dal',time:30,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',ingredients:['Linsen','Zwiebel','Knoblauch','Curry','Kokosmilch'],steps:['Linsen kochen','Würzen & köcheln']},
    {id:22,title:'Kichererbsen-Salat',time:12,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop',ingredients:['Kichererbsen','Gurke','Tomate','Zitrone','Petersilie'],steps:['Alles mischen','Mit Zitrone & Öl abschmecken']},
    {id:23,title:'Spinat-Feta-Omelett',time:12,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop',ingredients:['Ei','Spinat','Feta','Butter'],steps:['Eier verquirlen','Spinat & Feta zugeben','Stocken lassen']},
    {id:24,title:'Joghurt-Zitronen-Hähnchen',time:26,difficulty:'leicht',diet:'omnivor',img:'https://images.unsplash.com/photo-1625944529788-dfa6b4ab75bb?q=80&w=1200&auto=format&fit=crop',ingredients:['Hähnchen','Joghurt','Zitrone','Knoblauch'],steps:['Marinieren','Braten & servieren']},
    {id:25,title:'Tomaten-Reis-Pfanne',time:18,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1200&auto=format&fit=crop',ingredients:['Reis','Tomate','Zwiebel','Knoblauch','Petersilie'],steps:['Reis kochen','Alles schwenken']},
    {id:26,title:'Pasta-Primavera',time:22,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1200&auto=format&fit=crop',ingredients:['Pasta','Zucchini','Karotte','Brokkoli','Käse'],steps:['Gemüse dünsten','Mit Pasta & Käse mischen']},
    {id:27,title:'Rind-Zwiebel-Pfanne',time:20,difficulty:'mittel',diet:'omnivor',img:'https://images.unsplash.com/photo-1514516870926-2059890f06f0?q=80&w=1200&auto=format&fit=crop',ingredients:['Rind','Zwiebel','Sojasauce','Ingwer'],steps:['Rind anbraten','Würzen & servieren']},
    {id:28,title:'Zucchini-Kartoffel-Suppe',time:28,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1543352634-8730a9b3be19?q=80&w=1200&auto=format&fit=crop',ingredients:['Zucchini','Kartoffel','Zwiebel','Sahne'],steps:['Alles kochen','Pürieren & abschmecken']},
    {id:29,title:'Pasta mit Thunfisch & Zitrone',time:17,difficulty:'leicht',diet:'omnivor',img:'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',ingredients:['Pasta','Thunfisch','Zitrone','Knoblauch'],steps:['Pasta kochen','Thunfisch mit Zitrone mischen']},
    {id:30,title:'Reis-Tofu-Bowl',time:22,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',ingredients:['Reis','Tofu','Gurke','Sojasauce'],steps:['Reis kochen','Tofu braten','Alles mischen']},
    {id:31,title:'Spinat-Kartoffel-Gratin',time:40,difficulty:'mittel',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1514517220034-e2f2f860f4a1?q=80&w=1200&auto=format&fit=crop',ingredients:['Spinat','Kartoffel','Sahne','Käse'],steps:['Schichten','Backen bis goldbraun']},
    {id:32,title:'Karotten-Linsen-Eintopf',time:35,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1604908554037-8f55d2d3bd3e?q=80&w=1200&auto=format&fit=crop',ingredients:['Karotte','Linsen','Zwiebel','Tomatenmark'],steps:['Anschwitzen','Köcheln lassen']},
    {id:33,title:'Brokkoli-Käse-Pasta',time:20,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=1200&auto=format&fit=crop',ingredients:['Pasta','Brokkoli','Sahne','Käse'],steps:['Pasta kochen','Sahnesoße mit Brokkoli']},
    {id:34,title:'Zwiebel-Tofu-Pfanne',time:15,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',ingredients:['Tofu','Zwiebel','Sojasauce','Ingwer'],steps:['Tofu anbraten','Würzen & servieren']},
    {id:35,title:'Petersilien-Zitronen-Pasta',time:16,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',ingredients:['Pasta','Zitrone','Petersilie','Knoblauch','Butter'],steps:['Pasta kochen','Butter-Zitronen-Sauce rühren']},
    {id:36,title:'Hähnchen-Reis-Suppe',time:30,difficulty:'leicht',diet:'omnivor',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop',ingredients:['Hähnchen','Reis','Karotte','Sellerie','Zwiebel'],steps:['Alles köcheln','Abschmecken']},
    {id:37,title:'Pilz-Risotto',time:32,difficulty:'mittel',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop',ingredients:['Reis','Pilze','Zwiebel','Butter','Käse'],steps:['Pilze anrösten','Reis garen','Mit Käse vollenden']},
    {id:38,title:'Tofu-Spinat-Curry',time:24,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',ingredients:['Tofu','Spinat','Zwiebel','Curry','Kokosmilch'],steps:['Aromaten anrösten','Kokosmilch & Spinat zugeben']},
    {id:39,title:'Tomate-Feta-Pasta',time:18,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',ingredients:['Pasta','Tomate','Feta','Knoblauch'],steps:['Tomaten schmoren','Mit Feta & Pasta mischen']},
    {id:40,title:'Reis-Gemüse-Pfanne',time:17,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1200&auto=format&fit=crop',ingredients:['Reis','Zucchini','Paprika','Zwiebel','Sojasauce'],steps:['Reis garen','Gemüse braten','Abschmecken']},
    {id:41,title:'Hähnchen-Zucchini',time:20,difficulty:'leicht',diet:'omnivor',img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',ingredients:['Hähnchen','Zucchini','Knoblauch','Zitrone'],steps:['Hähnchen braten','Mit Zitrone & Knoblauch']},
    {id:42,title:'Kartoffel-Lauch-Gratin',time:42,difficulty:'mittel',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1514517220034-e2f2f860f4a1?q=80&w=1200&auto=format&fit=crop',ingredients:['Kartoffel','Lauch','Sahne','Käse'],steps:['Schichten','Backen']},
    {id:43,title:'Thunfisch-Reis-Salat',time:12,difficulty:'leicht',diet:'omnivor',img:'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop',ingredients:['Reis','Thunfisch','Gurke','Zitrone'],steps:['Alles mischen','Kalt servieren']},
    {id:44,title:'Pasta-Erbsen-(Käse)',time:16,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=1200&auto=format&fit=crop',ingredients:['Pasta','Erbsen','Sahne','Käse'],steps:['Pasta kochen','Erbsen & Sahne kurz köcheln']},
    {id:45,title:'Zitrone-Petersilie-Tofu',time:14,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1200&auto=format&fit=crop',ingredients:['Tofu','Zitrone','Petersilie','Knoblauch'],steps:['Tofu braten','Mit Zitrone glasieren']},
    {id:46,title:'Brokkoli-Tofu-Reis',time:21,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1604908554037-8f55d2d3bd3e?q=80&w=1200&auto=format&fit=crop',ingredients:['Brokkoli','Tofu','Reis','Sojasauce'],steps:['Reis garen','Tofu & Brokkoli braten']},
    {id:47,title:'Linsen-Spinat-Pasta',time:26,difficulty:'mittel',diet:'vegan',img:'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1200&auto=format&fit=crop',ingredients:['Pasta','Linsen','Spinat','Tomatenmark'],steps:['Linsen kochen','Tomatensauce','Mit Spinat & Pasta']},
    {id:48,title:'Karotte-Zucchini-Nudeln',time:15,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop',ingredients:['Zucchini','Karotte','Knoblauch','Sojasauce'],steps:['Gemüsestreifen anbraten','Abschmecken']},
    {id:49,title:'Joghurt-Gurken-Salat',time:8,difficulty:'leicht',diet:'vegetarisch',img:'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop',ingredients:['Gurke','Joghurt','Zitrone','Petersilie'],steps:['Gurke hobeln','Mit Joghurt & Zitrone']},
    {id:50,title:'Mais-Paprika-Reis',time:18,difficulty:'leicht',diet:'vegan',img:'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1200&auto=format&fit=crop',ingredients:['Mais','Paprika','Reis','Zwiebel'],steps:['Reis kochen','Gemüse braten','Vermengen']}
  ];
  
  // ===== Zusätzliche Varianten automatisch erzeugen (~30) =====
  function synthesizeVariants(base, count=30){
    const swaps = [
      ['Mozzarella','Feta'], ['Feta','Mozzarella'],
      ['Zucchini','Brokkoli'], ['Brokkoli','Zucchini'],
      ['Reis','Pasta'], ['Pasta','Reis'],
      ['Sahne','Joghurt'], ['Joghurt','Sahne'],
      ['Hähnchen','Tofu'], ['Tofu','Hähnchen'],
      ['Tomate','Paprika'], ['Paprika','Tomate'],
      ['Käse','Feta'], ['Feta','Käse']
    ];
    const variants = [];
    let id = 1000;
    for (let i=0; i<count; i++){
      const src = base[i % base.length];
      const swap = swaps[i % swaps.length];
      const ing = src.ingredients.map(x => x===swap[0] ? swap[1] : x);
      variants.push({
        id: id++,
        title: src.title.replace(/Pasta|Reis|Salat|Pfanne|Curry|Suppe|Risotto|Gratin|Bowl/i,
                m => m + ' – Variante ' + (i+1)),
        time: src.time + ((i%3)-1)*2 > 0 ? src.time + ((i%3)-1)*2 : src.time,
        difficulty: src.difficulty,
        diet: ing.includes('Hähnchen') || src.diet==='omnivor' ? 'omnivor'
             : (ing.includes('Feta') || ing.includes('Käse') || src.diet==='vegetarisch') ? 'vegetarisch'
             : 'vegan',
        img: src.img,
        ingredients: ing,
        steps: src.steps
      });
    }
    return variants;
  }
  
  const RECIPES = [...BASE_RECIPES, ...synthesizeVariants(BASE_RECIPES, 30)]; // > 80 Rezepte
  
  // ===== State & Helpers =====
  const State = { route:'home', selected:new Set(), matchMode:'strict', filters:{time:30,difficulty:'any',diet:'any'}, deck:[], saved:[] };
  const $ = s=>document.querySelector(s);
  const $$ = s=>Array.from(document.querySelectorAll(s));
  const el=(t,a={})=>Object.assign(document.createElement(t),a);
  
  function setRouteName(name){
    State.route = name||'home';
    $$('section[role="route"]').forEach(sec=>sec.classList.toggle('active',sec.id===State.route));
    $$('nav a[data-link]').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${State.route}`));
  }
  
  // ===== Zutaten-UI =====
  function createChip(name, active=false){
    const c=el('div',{className:'chip'+(active?' active':''), tabIndex:0});
    const span=el('span',{textContent:name});
    const x=el('button',{className:'x',title:'Zutat löschen',innerHTML:'&times;'});
    c.append(span,x);
  
    function toggle(){
      c.classList.toggle('active');
      if(c.classList.contains('active')) State.selected.add(name);
      else State.selected.delete(name);
      renderSelectedChips();
    }
    c.addEventListener('click', (e)=>{ if(e.target===x) return; toggle(); });
  
    x.addEventListener('click',(e)=>{
      e.stopPropagation();
      c.remove();
      State.selected.delete(name);
      renderSelectedChips();
    });
    return c;
  }
  
  function initChips(){
    const wrap=$('#ingredientChips'); if(!wrap) return; wrap.innerHTML='';
    const base=['Tomate','Pasta','Zwiebel','Knoblauch','Käse','Basilikum','Hähnchen','Reis','Paprika','Zitrone'];
    const fromRecipes = Array.from(new Set(RECIPES.flatMap(r=>r.ingredients)));
    const suggestions = Array.from(new Set([...base, ...fromRecipes])).sort((a,b)=>a.localeCompare(b));
    suggestions.forEach(n=>wrap.append(createChip(n, false)));
    renderSelectedChips();
  }
  
  function renderSelectedChips(){
    const box=$('#selectedChips'); if(!box) return; box.innerHTML='';
    if(!State.selected.size){
      box.innerHTML='<span style="opacity:.7">(noch nichts ausgewählt)</span>';
      return;
    }
    [...State.selected].forEach(n=>{
      const chip=el('span',{className:'chip active'}); chip.textContent=n;
      const x=el('button',{className:'x',title:'Aus Auswahl entfernen',innerHTML:'&times;'});
      x.addEventListener('click',(e)=>{
        e.stopPropagation();
        State.selected.delete(n);
        renderSelectedChips();
        const match=[...document.querySelectorAll('#ingredientChips .chip')]
          .find(ch=>ch.firstChild?.textContent===n);
        if(match) match.classList.remove('active');
      });
      chip.append(x); box.append(chip);
    });
  }
  
  function addIngredientsBulk(text){
    (text||'').split(/[\n,;]+/).map(s=>s.trim()).filter(Boolean).forEach(name=>{
      const exists=[...document.querySelectorAll('#ingredientChips .chip')]
        .some(ch=>ch.firstChild?.textContent.toLowerCase()===name.toLowerCase());
      if(!exists){
        $('#ingredientChips').append(createChip(name, true));
        State.selected.add(name);
      }
    });
    renderSelectedChips();
  }
  
  // ===== Filter & Matching =====
  function applyFilters(){
    const sel=State.selected;
    const {time,difficulty,diet} = State.filters;
  
    // wenn nichts ausgewählt: keine Treffer (beide Modi)
    if(sel.size===0) return [];
  
    return RECIPES.filter(r=>{
      const timeOK = r.time<=time;
      const diffOK = (difficulty==='any'||r.difficulty===difficulty);
      const dietOK = (diet==='any'||r.diet===diet);
  
      const hasAll = r.ingredients.every(i=>sel.has(i));
      const hasAny = r.ingredients.some(i=>sel.has(i));
  
      const match = State.matchMode==='strict' ? hasAll : hasAny;
      return match && timeOK && diffOK && dietOK;
    });
  }
  
  // ===== Swipe Deck =====
  function buildDeck(){
    const deckEl=$('#deck'); const empty=$('#emptyState'); if(!deckEl) return; deckEl.innerHTML='';
    const recipes=State.deck=applyFilters(); empty.style.display=recipes.length?'none':'grid';
    recipes.slice().reverse().forEach((r,idx)=>{
      const card=el('div',{className:'card',style:`transform: translateY(${idx*2}px) rotate(${(Math.random()*2-1)}deg);`});
      card.innerHTML=`
        <div class="img"><img alt="${r.title}" src="${r.img}"></div>
        <div>
          <div class="like">MERKEN ✓</div>
          <div class="nope">SPÄTER ✕</div>
          <h3>${r.title}</h3>
          <div class="tags">
            <span class="tag">⏱️ ${r.time} Min</span>
            <span class="tag">💪 ${r.difficulty}</span>
            <span class="tag">🍽️ ${r.diet}</span>
          </div>
          <p style="opacity:.8; margin:.5rem 0 0"><b>Zutaten:</b> ${r.ingredients.join(', ')}</p>
        </div>
        <div style="display:flex; gap:8px; justify-content:flex-end; align-items:center">
          <button class="btn" data-skip>Überspringen</button>
          <button class="btn btn-primary" data-like>Merken</button>
        </div>`;
  
      let startX=0,startY=0,currentX=0,currentY=0,dragging=false;
      const likeBadge=card.querySelector('.like'); const nopeBadge=card.querySelector('.nope');
      const onPointerDown=e=>{dragging=true;startX=e.clientX||e.touches?.[0]?.clientX;startY=e.clientY||e.touches?.[0]?.clientY;card.setPointerCapture?.(e.pointerId||0)};
      const onPointerMove=e=>{
        if(!dragging) return;
        const x=(e.clientX||e.touches?.[0]?.clientX)-startX;
        const y=(e.clientY||e.touches?.[0]?.clientY)-startY;
        currentX=x; currentY=y;
        const rot=x/18; const op=Math.min(Math.abs(x)/120,1);
        card.style.transform=`translate(${x}px, ${y}px) rotate(${rot}deg)`;
        if(likeBadge){likeBadge.style.opacity=x>0?op:0; likeBadge.style.transform=`scale(${.9+op*.1})`;}
        if(nopeBadge){nopeBadge.style.opacity=x<0?op:0; nopeBadge.style.transform=`scale(${.9+op*.1})`;}
      };
      const fling=dir=>{
        card.style.transition='transform .35s ease, opacity .35s ease';
        card.style.transform=`translate(${dir*600}px, ${currentY}px) rotate(${dir*18}deg)`;
        card.style.opacity=0; setTimeout(()=>card.remove(),360)
      };
      const onPointerUp=()=>{
        if(!dragging) return; dragging=false;
        const liked=currentX>120; const noped=currentX<-120;
        if(liked){ const recipe=r; if(!State.saved.some(s=>s.id===recipe.id)) State.saved.push(recipe); updateSaved(); fling(1);}
        else if(noped){fling(-1);}
        else { card.style.transition='transform .25s ease'; card.style.transform='translate(0,0)'; if(likeBadge) likeBadge.style.opacity=0; if(nopeBadge) nopeBadge.style.opacity=0; }
        currentX=currentY=0
      };
      card.addEventListener('pointerdown',onPointerDown);
      card.addEventListener('pointermove',onPointerMove);
      card.addEventListener('pointerup',onPointerUp);
      card.addEventListener('touchstart',e=>onPointerDown(e),{passive:true});
      card.addEventListener('touchmove',e=>onPointerMove(e),{passive:true});
      card.addEventListener('touchend',onPointerUp);
      card.querySelector('[data-like]').addEventListener('click',()=>{currentX=130;onPointerUp()});
      card.querySelector('[data-skip]').addEventListener('click',()=>{currentX=-130;onPointerUp()});
      deckEl.append(card);
    });
  }
  
  // ===== Favoriten =====
  function updateSaved(){
    const wrap=$('#savedList'); const empty=$('#savedEmpty'); if(!wrap||!empty) return; wrap.innerHTML='';
    State.saved.forEach(r=>{
      const row=el('div',{className:'row'});
      row.innerHTML=`
        <img src="${r.img}" alt="${r.title}">
        <div>
          <strong>${r.title}</strong>
          <div class="tags" style="margin-top:6px">
            <span class="tag">⏱️ ${r.time} Min</span>
            <span class="tag">💪 ${r.difficulty}</span>
            <span class="tag">🍽️ ${r.diet}</span>
          </div>
        </div>
        <button class="btn" data-remove>Entfernen</button>`;
      row.querySelector('[data-remove]').addEventListener('click',()=>{
        State.saved=State.saved.filter(x=>x.id!==r.id);
        updateSaved();
      });
      wrap.append(row);
    });
    empty.style.display = State.saved.length? 'none':'block';
  }
  
  function sendEmail(){
    if(!State.saved.length){ alert('Keine Favoriten vorhanden.'); return; }
    const subject=encodeURIComponent('Meine CookWell-Rezeptauswahl');
    const body=State.saved.map(r=>`• ${r.title} (⏱ ${r.time} Min, ${r.difficulty}, ${r.diet})
    Zutaten: ${r.ingredients.join(', ')}
    Schritte: ${r.steps.join(' → ')}`).join('\n\n');
    location.href=`mailto:?subject=${subject}&body=${encodeURIComponent(body)}`;
  }
  
  // ===== Init & lokale Navigation =====
  function init(){
    const y=$('#year'); if(y) y.textContent=new Date().getFullYear();
    $$('nav a[data-link]').forEach(a=>a.addEventListener('click',e=>{
      e.preventDefault(); setRouteName(a.getAttribute('href').replace('#',''));
    }));
    $$('[data-goto]').forEach(b=>b.addEventListener('click',()=>setRouteName(b.dataset.goto)));
    setRouteName('home');
  
    initChips();
  
    // Eingabe hinzufügen
    const input=$('#ingredientInput');
    const addBtn=$('#addIngredient');
    const addOne=()=>{ const v=input.value.trim(); if(!v) return; addIngredientsBulk(v); input.value=''; };
    input.addEventListener('keydown',(e)=>{ if(e.key==='Enter'){ e.preventDefault(); addOne(); }});
    addBtn.addEventListener('click',addOne);
  
    // Filter
    const time=$('#fTime'), diff=$('#fDifficulty'), diet=$('#fDiet');
    const apply=()=>{ State.filters={ time:+(time?.value||30), difficulty:(diff?.value||'any'), diet:(diet?.value||'any') }; };
    time.addEventListener('input',apply); diff.addEventListener('input',apply); diet.addEventListener('input',apply); apply();
  
    // Match-Mode
    $$('input[name="matchMode"]').forEach(r=>{
      r.addEventListener('change', ()=>{
        State.matchMode = r.value; // 'strict' | 'partial'
      });
    });
  
    // Aktionen
    $('#clearIngredients').addEventListener('click',()=>{
      State.selected.clear();
      renderSelectedChips();
      document.querySelectorAll('#ingredientChips .chip').forEach(ch=>ch.classList.remove('active'));
    });
    $('#toSwipe').addEventListener('click',()=>{ buildDeck(); setRouteName('swipe'); });
    $('#resetDeck').addEventListener('click',()=>buildDeck());
    $('#sendEmail').addEventListener('click',sendEmail);
  
    // Externe Suche (ohne Scraping)
    $('#btnToGoogle')?.addEventListener('click',()=>{
      const q=encodeURIComponent([...State.selected].join(' '));
      window.open(`https://www.google.com/search?q=site%3Achefkoch.de+${q}`,'_blank');
    });
    $('#btnToChefkoch')?.addEventListener('click',()=> window.open('https://www.chefkoch.de/','_blank'));
  
    // Mini Self-Tests (Konsole)
    console.group('%cCookWell Self-Tests','color:#5a4636');
    console.assert(document.querySelectorAll('section[role="route"]').length===4,'Es sollten 4 Routen vorhanden sein');
    console.assert(typeof buildDeck==='function','buildDeck() existiert');
    console.assert(typeof sendEmail==='function','sendEmail() existiert');
    console.assert(RECIPES.length > 80, 'Es sollten >80 Rezepte vorhanden sein');
    console.groupEnd();
  }
  
  document.addEventListener('DOMContentLoaded', init);