// DEAD COUNTY bootstrap
(async function(){
  const b64=(window.__DC_P||[]).join('');
  if(!b64){console.error('missing payload');return;}
  const bin=atob(b64);
  const bytes=new Uint8Array(bin.length);
  for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
  const ds=new DecompressionStream('gzip');
  const stream=new Blob([bytes]).stream().pipeThrough(ds);
  const ab=await new Response(stream).arrayBuffer();
  const code=new TextDecoder().decode(ab);
  (0,eval)(code);
})().catch(e=>{
  console.error('DEAD COUNTY load error',e);
  document.body.insertAdjacentHTML('beforeend','<pre style="color:#e55;padding:20px;font-family:monospace">Failed to load game. Open index.html from a modern browser (Chrome/Firefox/Edge).</pre>');
});
