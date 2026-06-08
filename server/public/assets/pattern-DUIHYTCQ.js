import"./header-Bfu4Bi-a.js";(async()=>{let e=window.location.pathname.split(`/`).pop(),t=Number(e),n=(await(await fetch(`/patterns`)).json()).find(e=>e.id===t),r=document.getElementById(`pattern-content`);if(r.innerHTML=``,!n){let e=document.createElement(`div`);e.className=`card`,e.innerHTML=`
      <h2>Pattern not found</h2>
      <p>The requested pattern does not exist. Try returning to the homepage.</p>
      <a href="/" class="contrast">Back to home</a>
    `,r.append(e);return}let i=document.createElement(`article`);i.className=`pattern-detail`,i.innerHTML=`
    <div class="pattern-banner" style="background-image: url(${n.image||`https://picsum.photos/seed/${n.id}/1200/500`})"></div>
    <div class="pattern-details">
      <h2>${n.name}</h2>
      <div class="pattern-meta">
        <span>Difficulty: ${n.difficulty}</span>
        <span>${n.category}</span>
      </div>
      <p><strong>Summary:</strong> ${n.summary}</p>
      <p><strong>Example:</strong> ${n.example}</p>
      <p><strong>Tips:</strong> ${n.tips}</p>
      <p><a href="/" class="contrast">Back to home</a></p>
    </div>
  `,r.append(i)})();