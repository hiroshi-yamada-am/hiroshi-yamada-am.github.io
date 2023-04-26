'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function clickBackground(){
    const backGroundElement = document.getElementById('background');
    const buttonBackgroundElement = document.getElementById('buttonBackground');
    const newElement = document.createElement('ol');
    const li1Element = document.createElement('li');
    li1Element.innerHTML = '実証実験用のアプリ内製化に向けたプログラミング力アップ';
    const li2Element = document.createElement('li');
    li2Element.innerHTML = '自分の企画への共感者・仲間づくり';
    backGroundElement.appendChild(newElement);
    newElement.appendChild(li1Element);
    newElement.appendChild(li2Element);
    buttonBackgroundElement.disabled = "disabled";
}

function clickResult(){
    const resultElement = document.getElementById('result');
    const buttonResultElement = document.getElementById('buttonResult');
    const newElement = document.createElement('h3');
    newElement.innerHTML = '(1)本業の実証用アプリ開発が全然スケジュール通りに進まない、<br>(2)自宅の引っ越し、(3)子供の転園という三重苦の日々でしたが、<br>楽しいペアプロの時間を通し、人に説明できるまで習得する大切さを学びました！<br><br>特にHTMLやCSS、DOMは全く知らない世界で一番ワクワクしたため、<br>今回はそれらを活用した自分の企画の紹介ページを作ってみました。<br><br>プログラミング力を活かして社会貢献する一つの事例として参考に聞いてもらえればと思います。';
    resultElement.appendChild(newElement);
    buttonResultElement.disabled = "disabled";
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
    newElement.innerHTML = 'クルマを卒業（免許返納）された方の移動の課題を解決したい！';
    myDreamElement.appendChild(newElement);
    buttonMyDreamElement.disabled = "disabled";
}

function clickTitle(){
    const titleElement = document.getElementById('title');
    const buttonTitleElement = document.getElementById('buttonTitle');
    // const newImgTitleElement1 = document.createElement('img');
    const newImgTitleElement2 = document.createElement('img');
    const newImgTitleElement3 = document.createElement('img');
    // newImgTitleElement1.src = "title.png";
    newImgTitleElement2.src = "productOutline.png";
    newImgTitleElement3.src = "symptoms.png";
    // titleElement.appendChild(document.createElement("br"));
    // titleElement.appendChild(newImgTitleElement1);
    titleElement.appendChild(document.createElement("br"));
    titleElement.appendChild(newImgTitleElement2);
    titleElement.appendChild(document.createElement("br"));
    titleElement.appendChild(newImgTitleElement3);
    buttonTitleElement.disabled = "disabled";
}


function clickMyPlan(){
    const myPlanElement = document.getElementById('myPlan');
    const buttonMyPlanElement = document.getElementById('buttonMyPlan');
    const newImgMyPlanElement1 = document.createElement('img');
    const newImgMyPlanElement2 = document.createElement('img');
    newImgMyPlanElement1.src = "patientsNumber.png";
    newImgMyPlanElement2.src = "life.png";
    myPlanElement.appendChild(document.createElement("br"));
    myPlanElement.appendChild(newImgMyPlanElement1);
    myPlanElement.appendChild(document.createElement("br"));
    myPlanElement.appendChild(newImgMyPlanElement2);
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
    const newImgProductElement1 = document.createElement('img');
    const newImgProductElement2 = document.createElement('img');
    newImgProductElement1.src = "product.png";
    newImgProductElement2.src = "productFunction.png";
    productElement.appendChild(document.createElement("br"));
    productElement.appendChild(newImgProductElement1);
    productElement.appendChild(document.createElement("br"));
    productElement.appendChild(newImgProductElement2);
    buttonProductElement.disabled = "disabled";
}



function clickFinal(){
    const finalElement = document.getElementById('final');
    const buttonFinalElement = document.getElementById('buttonFinal');
    const newElement = document.createElement('h3');
    const newImgFinalElement = document.createElement('img');
    newElement.innerHTML = '実現を待ってくれている多くの方のために、内製（現状委託メイン）でスピーディーに改善を進めたいものの、<br>熱意はあるが、スキルと時間がまだまだ足りない状況です。<br>もし共感した、興味あるなどあれば、いつでも本当にお気軽にご連絡ください！<br>20日間本当にありがとうございました。';
    newImgFinalElement.src = "dream.png";
    finalElement.appendChild(newElement);
    finalElement.appendChild(newImgFinalElement);
    buttonFinalElement.disabled = "disabled";
}

