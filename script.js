'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function clickBackground(){
    const backGroundElement = document.getElementById('background');
    const buttonBackgroundElement = document.getElementById('buttonBackground');
    const newElement = document.createElement('ol');
    const li1Element = document.createElement('li');
    li1Element.innerHTML = '自分の企画への共感者・仲間づくり';
    const li2Element = document.createElement('li');
    li2Element.innerHTML = '実証実験用のアプリ内製化';
    backGroundElement.appendChild(newElement);
    newElement.appendChild(li1Element);
    newElement.appendChild(li2Element);
    buttonBackgroundElement.disabled = "disabled";
}

function clickMyJob(){
    const myJobElement = document.getElementById('myJob');
    const buttonMyJobElement = document.getElementById('buttonMyJob');
    const newElement = document.createElement('h3');
    newElement.innerHTML = 'クルマづくりには全く関係ない仕事してます';
    myJobElement.appendChild(newElement);
    buttonMyJobElement.disabled = "disabled";
}

function clickMyDream(){
    const myDreamElement = document.getElementById('myDream');
    const buttonMyDreamElement = document.getElementById('buttonMyDream');
    const newElement = document.createElement('h3');
    newElement.innerHTML = 'クルマを卒業された方の移動の課題を解決したい！';
    myDreamElement.appendChild(newElement);
    buttonMyDreamElement.disabled = "disabled";
}

function clickTitle(){
    const titleElement = document.getElementById('title');
    const buttonTitleElement = document.getElementById('buttonTitle');
    const newImgTitleElement = document.createElement('img');
    newImgTitleElement.src = "title.png";
    titleElement.appendChild(document.createElement("br"));
    titleElement.appendChild(newImgTitleElement);
    buttonTitleElement.disabled = "disabled";
}


function clickMyPlan(){
    const myPlanElement = document.getElementById('myPlan');
    const buttonMyPlanElement = document.getElementById('buttonMyPlan');
    const newImgMyPlanElement = document.createElement('img');
    newImgMyPlanElement.src = "patientsNumber.png";
    myPlanElement.appendChild(document.createElement("br"));
    myPlanElement.appendChild(newImgMyPlanElement);
    buttonMyPlanElement.disabled = "disabled";
}


function clickIssue(){
    const issueElement = document.getElementById('issue');
    const buttonIssueElement = document.getElementById('buttonIssue');
    const newImgIssueElement = document.createElement('img');
    newImgIssueElement.src = "issue.png";
    issueElement.appendChild(document.createElement("br"));
    issueElement.appendChild(newImgIssueElement);
    buttonIssueElement.disabled = "disabled";
}


function clickProduct(){
    const productElement = document.getElementById('product');
    const buttonProductElement = document.getElementById('buttonProduct');
    const newImgProductElement = document.createElement('img');
    newImgProductElement.src = "product.png";
    productElement.appendChild(document.createElement("br"));
    productElement.appendChild(newImgProductElement);
    buttonProductElement.disabled = "disabled";
}



function clickFinal(){
    const finalElement = document.getElementById('final');
    const buttonFinalElement = document.getElementById('buttonFinal');
    const newElement = document.createElement('h3');
    newElement.innerHTML = '実現を待ってくれている多くのために、内製開発（現状は委託開発メイン）でスピーディーに改善を進めたいものの、まだまだスキルと時間が足りず困っています。<br>もし共感した、興味あるなどあれば、人事面含め全力でサポートしますので、いつでも連絡ください！';
    finalElement.appendChild(newElement);
    buttonFinalElement.disabled = "disabled";
}

