const baseDeDatos = [
    { id: 'BT', titulo: 'Biotina y Densidad', desc: 'Análisis de síntesis de queratina y transporte SMVT.', link: '../bt/index.html' },
    { id: 'PT', titulo: 'Señalización Peptídica', desc: 'Bio-mensajeros para la regeneración de colágeno.', link: '../pt/index.html' },
    { id: 'DR', titulo: '03. Protocolo Derma Roller', desc: 'Inducción de colágeno y activación folicular.', link: '/dr/index.html' }
];

function dibujarSugerencias() {
    const contenedor = document.getElementById('sugerencias-automaticas');
    if (!contenedor) return;

    const miRuta = window.location.pathname.toLowerCase();
    const otrasPaginas = baseDeDatos.filter(item => !miRuta.includes(item.id));

    contenedor.innerHTML = `
        <h2 style="font-family: 'Playfair Display', serif; text-align: center; color: #1B4C3E; margin-bottom: 40px; font-size: 2rem;">Protocolos Complementarios</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
            ${otrasPaginas.map(item => `
                <a href="${item.link}" class="sugerencia-card">
                    <span class="sugerencia-tag">Investigación Elite</span>
                    <h4 class="sugerencia-titulo">${item.titulo}</h4>
                    <p class="sugerencia-desc">${item.desc}</p>
                    <span class="sugerencia-btn">Ver Dossier</span>
                </a>
            `).join('')}
        </div>
    `;
}

dibujarSugerencias();
