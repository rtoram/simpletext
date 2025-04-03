// Carrega o conteúdo salvo ao abrir a página
window.onload = function() {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
        document.getElementById('editor').innerHTML = savedContent;
    }
    const savedFont = localStorage.getItem('editorFont') || 'Roboto';
    document.getElementById('fontSelector').value = savedFont;
    document.getElementById('editor').style.fontFamily = savedFont;
};

// Função para salvar o conteúdo
function saveContent() {
    const content = document.getElementById('editor').innerHTML;
    localStorage.setItem('editorContent', content);
    alert('Conteúdo salvo com sucesso!');
}

// Função para mudar a fonte
function changeFont() {
    const font = document.getElementById('fontSelector').value;
    document.getElementById('editor').style.fontFamily = font;
    localStorage.setItem('editorFont', font);
}
