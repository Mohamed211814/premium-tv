async function testEndpoints() {
  const urls = [
    "http://localhost:3000/",
    "http://localhost:3000/about",
    "http://localhost:3000/setup",
    "http://localhost:3000/contact",
    "http://localhost:3000/privacy",
    "http://localhost:3000/terms",
    "http://localhost:3000/sitemap.xml",
    "http://localhost:3000/robots.txt",
    "http://localhost:3000/non-existent-page"
  ];

  console.log("=== PremiumIPTV Website Validation Audit ===\n");

  let allPassed = true;

  for (const url of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      const expectedStatus = url.includes("non-existent") ? 404 : 200;
      const statusOk = res.status === expectedStatus;

      console.log(`Testing: ${url}`);
      console.log(`  HTTP Status: ${res.status} (Expected: ${expectedStatus}) -> ${statusOk ? "PASS" : "FAIL"}`);
      console.log(`  Payload Size: ${text.length} bytes`);

      if (url.endsWith(".xml")) {
        const hasUrls = text.includes("<url>") && text.includes("https://premiumiptv.example.com");
        console.log(`  Sitemap XML valid: ${hasUrls}`);
      } else if (url.endsWith(".txt")) {
        const hasSitemapRef = text.includes("sitemap.xml");
        console.log(`  Robots TXT valid: ${hasSitemapRef}`);
      } else {
        const hasJsonLd = text.includes('type="application/ld+json"');
        const hasCanonical = text.includes('rel="canonical"');
        const hasH1 = text.includes("<h1");
        const hasBrand = text.includes("Premium IPTV");

        console.log(`  JSON-LD Schema present: ${hasJsonLd}`);
        console.log(`  Canonical link present: ${hasCanonical}`);
        console.log(`  H1 tag present: ${hasH1}`);
        console.log(`  Brand 'Premium IPTV' present: ${hasBrand}`);

        if (!statusOk || (!url.includes("non-existent") && (!hasJsonLd || !hasCanonical || !hasH1 || !hasBrand))) {
          allPassed = false;
        }
      }
      console.log("--------------------------------------------------");
    } catch (err) {
      console.error(`  Error testing ${url}:`, err.message);
      allPassed = false;
    }
  }

  console.log(`\nOverall Technical Audit: ${allPassed ? "ALL CHECKS PASSED SUCCESSFULLY" : "SOME CHECKS FAILED"}`);
}

testEndpoints();
