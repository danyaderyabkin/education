const currentUrl = window.location.href;
const sectionContent = Array.from(document.querySelectorAll('[data-id]'));
const toCalc = { id: "", aName: "", cost: "" };

let calculatorList = document.querySelector('.calculator__list'),
    calculatorTitle = document.querySelector('.calculator__title'),
    sectionBtns = document.querySelector('.opt'),
    bG = document.querySelector('.bg-popup'),
    calculatorTotalFull = document.querySelector('.calculator__total-full'),
    calculatorTotal = document.querySelector('.calculator__total'),
    catalogPopUpOpen = document.querySelectorAll('.opt__btn'),
    catalogPopUpAdd = document.querySelectorAll('.catalog-popup-plus'),
    btnId,
    section;

catalogPopUpOpen.forEach((item, i) => { catalogId = item.id = `00${++i}` });
sectionContent.forEach((el) => { closePopup(el) });

function changeSum(input) {
    inputValue = input.value;
    inputValue = parseInt(inputValue);
    parent = input.parentElement;
    item = parent.parentElement;
    costParag = item.querySelector('.calculator__cost');
    cost = costParag.textContent;
    cost = parseInt(cost);
    costNewSum = item.querySelector('.calculator__item-sum');
    if (!isNaN(input.value)) {
        inputValue = input.value;
    }
    costNewSum.textContent = inputValue * cost;
    costNewSum = Math.abs(costNewSum);
    newSumItem();
}

function plusInput(r) {
    parent = r.parentElement;
    item = parent.parentElement;
    costParag = item.querySelector('.calculator__cost');
    costNewSum = item.querySelector('.calculator__item-sum');
    cost = costParag.textContent;
    cost = parseInt(cost);
    input = parent.querySelector('.input-count');
    current = input.value;
    current = parseInt(current);
    current += 1;
    cost = current * cost;
    cost = Math.abs(cost);
    costNewSum.textContent = cost;
    if (current == 0) { item.remove() };
    input.value = current;
    newSumItem();
}

function minusInput(r) {
    parent = r.parentElement;
    item = parent.parentElement;
    costParag = item.querySelector('.calculator__cost');
    costNewSum = item.querySelector('.calculator__item-sum');
    cost = costParag.textContent;
    cost = parseInt(cost);
    input = parent.querySelector('.input-count');
    current = input.value;
    current = parseInt(current);
    current -= 1;
    cost = current * cost;
    cost = Math.abs(cost);
    costNewSum.textContent = cost;
    if (current == 0) { item.remove() };
    input.value = current;
    newSumItem();
}

function createItem(list) {
    item = document.querySelector('.calculator__item').cloneNode(true);
    item.classList.remove('visually-hidden');
    nameSocks = item.querySelector('.calculator__item-name');
    skuSocks = item.querySelector('.calculator__item-sku');
    costSocks = item.querySelector('.calculator__cost');
    costNewSum = item.querySelector('.calculator__item-sum');
    list.append(item);

    nameSocks.textContent = toCalc.aName;
    skuSocks.textContent = toCalc.id;
    costSocks.textContent = toCalc.cost;
    costNewSum.textContent = toCalc.cost;
}

function newSumItem() {
    sumNew = 0;
    let arraySearchSum = document.querySelectorAll('.calculator__item-sum');
    arraySearchSum.forEach(el => {
        newCalc = el.textContent;
        newCalc = parseInt(newCalc);
        sumNew += newCalc;
        calculatorTotalFull.textContent = ` ${sumNew} ₽`;
        return sumNew;
    });
}

calculatorList.addEventListener('click', (e) => {
    if (e.target.classList.contains('calculator__item-close')) {
        e.target.parentElement.remove();
        newSumItem();
    }
    if (calculatorList.children.length == 1) {
        calculatorList.classList.add('visually-hidden');
        calculatorTitle.classList.add('visually-hidden');
    }
});

catalogPopUpAdd.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (e.target.tagName !== "BUTTON") return;
        el.disabled = true;
        el.classList.add('active--catalog');
        el.style.fontSize = '24px';
        el.innerHTML = '&#10003;'
        product.forEach(el => {
            if (e.target.dataset.idBtn == el.id) {
                toCalc.id = e.target.dataset.idBtn;
                toCalc.aName = el.querySelector('.category__name-link').textContent;
                toCalc.cost = el.querySelector('.category__total-cost').textContent;
                calculatorList.classList.remove('visually-hidden');
                calculatorTitle.classList.remove('visually-hidden');
                createItem(calculatorList);
            }
        });
    })
});

sectionBtns.addEventListener('click', (e) => {
    if (e.target.tagName !== "BUTTON") return;
    btnId = e.target.id;
    searchPopup(sectionContent);
});

function searchAct(a, b) {
    for (elA of a) {
        for (elB of b) {
            if (elA.textContent == elB.dataset.idBtn) {
                elB.disabled = true;
                elB.classList.add('active--catalog');
                elB.style.fontSize = '24px';
                elB.innerHTML = '&#10003;'
            }
        }
    }
}

function searchPopup(arr) {
    let findSection = arr.find(item => item.dataset.id == btnId);
    if (!findSection) return;

    body.classList.add('stop-scroll');
    bG.classList.add('animdrop-bg');
    findSection.classList.add('animdrop');

    catalogPopUpAdd.forEach((el) => {
        el.disabled = false;
        el.classList.remove('active--catalog');
        el.style.fontSize = '32px';
        el.innerHTML = '+'
    })

    product = findSection.querySelectorAll('.category__item');
    product.forEach((item, i) => { item.id = `product__${findSection.dataset.id}-${++i}` });
    section = findSection;
    product.forEach((el) => { generateBtnId(el) });
    skuAct = document.querySelectorAll('.calculator__item-sku');
    btnAct = findSection.querySelectorAll('.catalog-popup-plus');
    // history.pushState(null,null,`${currentUrl}/${findSection.dataset.id}`);
    searchAct(skuAct, btnAct)

    return product,
        btnAct,
        skuAct

}

function closePopup(sec) {
    sec.addEventListener('click', (e) => {
        if (e.target.contains(sec) || e.target.classList.contains('catalog-popup-close')) {
            body.classList.remove('stop-scroll');
            bG.classList.remove('animdrop-bg');
            section.classList.remove('animdrop');
            // history.pushState(null,null, currentUrl);
            newSumItem();
        }
    });
}

function generateBtnId(param) {
    let plusBtn = param.querySelectorAll('.catalog-popup-plus');
    let plusBtnId = param.id;
    plusBtn.forEach((el) => {
        el.dataset.idBtn = plusBtnId;
        currentBtn = el.dataset.idBtn;
    });
}