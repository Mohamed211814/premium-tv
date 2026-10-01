async function checkJsonLd() {
  const pages = ["/", "/about", "/setup", "/contact"];

  for (const page of pages) {
    const res = await fetch(`http://localhost:3000${page}`);
    const html = await res.text();
    const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
    let match;
    console.log(`\n================== ${page} JSON-LD ==================`);
    
    while ((match = regex.exec(html)) !== null) {
      try {
        const json = JSON.parse(match[1]);
        console.log(JSON.stringify(json, null, 2));
      } catch (e) {
        console.error("JSON parse error:", e);
      }
    }
  }
}

checkJsonLd();
