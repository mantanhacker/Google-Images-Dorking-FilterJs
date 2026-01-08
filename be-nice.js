(() => {
    const domains = new Set();
    const links = document.querySelectorAll('a[href]');

    links.forEach(link => {
        try {
            let rawUrl = link.href;

            if (rawUrl.includes('imgurl=')) {
                rawUrl = new URLSearchParams(rawUrl.split('?')[1]).get('imgurl');
            } else if (rawUrl.includes('url?q=')) {
                rawUrl = new URLSearchParams(rawUrl.split('?')[1]).get('q');
            }

            const urlObj = new URL(rawUrl);
            const host = urlObj.hostname;

            if (host && !host.includes('google.') && !host.includes('gstatic')) {
                domains.add(host);
            }
        } catch (e) {
        }
    });

    const finalResult = Array.from(domains).sort();
    console.log(`--- GOT ${finalResult.length} DOMAINS ---`);
    console.log(finalResult.join('\n'));
    console.log("-----------------------------------------");
})();
