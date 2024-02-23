function createWrap() {
  const wrap = document.createElement("div");
  wrap.style = `
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return wrap;
}
function createSpan(text) {
  const span = document.createElement("span");
  span.innerText = text;
  span.style = `margin: 0 20px;`;
  return span;
}

function createA(text, href) {
  const a = document.createElement("a");
  a.innerText = text;
  a.href = href;
  return a;
}

window.onload = (function () {
  const footWrap = createWrap();
  const copyright = createSpan(
    `Copyright © 2020-${new Date().getFullYear()} HaoJie. All rights reserved.`
  );
  const internetContentProvider = createSpan("备案号: ");
  internetContentProvider.appendChild(
    createA("粤ICP备2022026783号", "https://beian.miit.gov.cn")
  );
  footWrap.appendChild(copyright);
  footWrap.appendChild(internetContentProvider);
  document.body.appendChild(footWrap);
})();
