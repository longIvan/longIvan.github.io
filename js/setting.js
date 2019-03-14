function renderSetting() {
    const mySection = document.querySelector('section');
    mySection.innerHTML = `
        <div class="setting">
            <div class="setting-title">基本</div>
            <ul>
                <li>
                    <span>设置1</span>
                    <span class="more">更多<img src="../images/right.png"></span>
                </li>
                <li>
                    <span>设置2</span>
                    <span>更多<img src="../images/right.png"></span>
                </li>
                <li>
                    <span>设置3</span>
                    <span>更多<img src="../images/right.png"></span>
                 </li>
                 <li>
                    <span>设置4</span>
                    <span>更多<img src="../images/right.png"></span>
                </li>
            </ul>
        </div>`;
    const headerTitleDom = document.querySelector('.header-title');
    headerTitleDom.innerHTML = `<span onclick="back()"><img class="back-icon" src="../images/back.png"/></span>`;
}

function back() {
    router.go('/');
}
window.renderSetting = renderSetting;
