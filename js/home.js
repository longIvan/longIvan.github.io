function renderHome() {
    fetch('https://easy-mock.com/mock/5c84985753b6126d7bcc7f7b/service-worker/images')
        .then(response => response.json())
        .then(response => {
            const images = (response && response.data) || [];
            const mySection = document.querySelector('section');
            mySection.innerHTML = `<div id="image-list">${images
                .map(item => {
                    return `
                    <a onclick="toDetail('${JSON.stringify(item).replace(/"/g, '&quot;')}')">
                       <figure>
                            <img src="${item.url}" alt="${item.alt}">
                            <caption>
                                <strong>${item.name}</strong>:${item.credit}
                            </caption>
                        </figure>
                    </a>`;
                })
                .join('')}</div>`;
            const headerTitleDom = document.querySelector('.header-title');
            headerTitleDom.innerHTML = `<span>PWA Demo</span>`;
        });
}

function toDetail(itemStr) {
    const item = JSON.parse(itemStr);
    router.go('/detail', item);
}

window.renderHome = renderHome;
