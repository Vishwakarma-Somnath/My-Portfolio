async function updateVisitorCount() {
    try {
        const ns = 'my-portfolio-site';
        const rawKey = location.pathname === '/' ? 'home' : location.pathname;
        const key = encodeURIComponent(rawKey.replace(/^\//, '').replace(/\//g, '-'));
        const storageKey = `visit_${ns}_${key}`;
        const last = localStorage.getItem(storageKey);
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;
        let data;

        if (!last || now - parseInt(last, 10) > oneDay) {
            const res = await fetch(`https://api.countapi.xyz/hit/${ns}/${key}`);
            data = await res.json();
            localStorage.setItem(storageKey, now.toString());
        } else {
            const res = await fetch(`https://api.countapi.xyz/get/${ns}/${key}`);
            data = await res.json();
        }

        const el = document.getElementById('count');
        if (el && data && typeof data.value !== 'undefined') el.textContent = data.value;
    } catch (err) {
        console.error('Visitor count error', err);
    }
}
window.addEventListener('load', updateVisitorCount);