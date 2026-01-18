const baseDeDatos = [
    { id: 'bt', titulo: 'Biotina y Densidad', desc: 'Análisis de síntesis de queratina.', link: '../bt/index.html' },
    { id: 'peptidos', titulo: 'Señalización Peptídica', desc: 'Bio-mensajeros de regeneración.', link: '../peptidos/index.html' }
];

function dibujarSugerencias() {
    const contenedor = document.getElementById('sugerencias-automaticas');
    if (!contenedor) return;

    const miRuta = window.location.pathname.toLowerCase();
    const otrasPaginas = baseDeDatos.filter(item => !miRuta.includes(item.id));

    contenedor.innerHTML = `
        <div style="padding: 60px 10%; background: #fff; border-top: 1px solid #8FA78C;">
            <h2 style="font-family: 'Playfair Display', serif; text-align: center; color: #1B4C3E; margin-bottom: 40px;">Protocolos Complementarios</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                ${otrasPaginas.map(item => `
                    <a href="${item.link}" style="text-decoration: none; background: #F4F1E9; padding: 30px; border: 1px solid transparent; transition: 0.3s; display: block;">
                        <span style="color: #B8985D; font-size: 0.7rem; letter-spacing: 2px; font-weight: 600; text-transform: uppercase;">Investigación Elite</span>
                        <h4 style="font-family: 'Playfair Display', serif; color: #1B4C3E; font-size: 1.2rem; margin: 10px 0;">${item.titulo}</h4>
                        <p style="color: #666; font-size: 0.9rem;">${item.desc}</p>
                        <span style="color: #1B4C3E; font-size: 0.8rem; font-weight: 600; border-bottom: 1px solid #B8985D;">Ver Dossier</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}
dibujarSugerencias();
