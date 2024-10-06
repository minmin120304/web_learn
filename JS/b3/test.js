document.getElementById('solveBtn').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('heSoA').value);
    const b = parseFloat(document.getElementById('heSoB').value);

    let PT = `${a}x + ${b} = 0`;
    let KQ = '';

    if (a === 0) {
        if (b === 0) {
            KQ = 'Phương trình vô số nghiệm';
        } else {
            KQ = 'Phương trình vô nghiệm';
        }
    } else {
        let x = -b / a;
        KQ = x.toFixed(1);
    }

    document.getElementById('PT').innerText = PT;
    document.getElementById('KQ').innerText = KQ;
});
