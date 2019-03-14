function renderDetail() {
    const mySection = document.querySelector('section');
    const data = history.state.data;
    mySection.innerHTML = `
        <div>
            <figure>
                <img src="${data.url}" alt="${data.alt}">
            </figure> 
            <div>
                <div>作者：${data.name}</div>
                <div>诗名：${data.alt}</div>
                <div>诗句：${data.credit}</div>
            </div>
            <div>
                <button class="push-message-button">发送通知</button>
            </div>  
        </div>`;
    const headerTitleDom = document.querySelector('.header-title');
    headerTitleDom.innerHTML = `<span onclick="back()"><img class="back-icon" src="../images/back.png"/></span>`;
}

function back() {
    router.go('/');
}
window.renderDetail = renderDetail;
