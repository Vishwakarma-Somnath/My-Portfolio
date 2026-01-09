async function updateVisitorCount() {
    try {
        const ns = 'my-portfolio-site';
        const rawKey = location.pathname === '/' ? 'home' : location.pathname;
        const key = encodeURIComponent(rawKey.replace(/^\//, '').replace(/\//g, '-'));
        // Always increment the counter on every page load
        const res = await fetch(`https://api.countapi.xyz/hit/${ns}/${key}`);
        const data = await res.json();

        const el = document.getElementById('count');
        if (el && data && typeof data.value !== 'undefined') {
            el.textContent = data.value;
        }
    } catch (err) {
        console.error('Visitor count error', err);
    }
}
window.addEventListener('load', updateVisitorCount);