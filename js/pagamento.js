function copyPixCode() {
  const code = document.getElementById("pixCode").innerText;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.querySelector(".copy-btn");
    btn.textContent = "COPIADO!";
    setTimeout(() => {
      btn.innerHTML = `<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="3" y="3" width="13" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="2"/></svg> COPIAR E COLAR`;
    }, 1500);
  });
}
