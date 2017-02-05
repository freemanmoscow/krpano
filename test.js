var objects = [
	{
		lable: "AngularJS",
		content: "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop."
	},
	{
		lable: "AngularIO",
		content: "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work."
	},
	{
		lable: "TypeScript",
		content: "TypeScript starts from the same syntax and semantics that millions of JavaScript developers know today. Use existing JavaScript code, incorporate popular JavaScript libraries, and call TypeScript code from JavaScript."
	},
	{
		lable: "ES6/ES7",
		content: "ECMAScript since its earliest days supported automatic semicolon inference/insertion, of course. But people coding ECMAScript 5 started it in an era where lots of tools (especially source code compressors) had problems when semicolons where left out from the source code. "
	},
	{
		lable: "Jasmine",
		content: "Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests. "
	},
	{
		lable: "OO JavaScript",
		content: "In JavaScript, most things are objects, from core JavaScript features like strings and arrays to the browser APIs built on top of JavaScript. You can even create your own objects to encapsulate related functions and variables into efficient packages, and act as handy data containers."
	},
	{
		lable: "ReactJS",
		content: "React is front end library developed by Facebook. It's used for handling view layer for web and mobile apps. ReactJS allows us to create reusable UI components."
	},
	{
		lable: "NativeScript",
		content: "NativeScript is how you build cross-platform, native iOS and Android apps without web views. Use Angular, TypeScript or modern JavaScript to get truly native UI and performance while sharing skills and code with the web. Get 100% access to native APIs via JavaScript and reuse of packages from NPM, CocoaPods and Gradle. Open source and backed by Telerik"
	},
	{
		lable: "Ionic",
		content: "Ionic is an HTML5 mobile app development framework targeted at building hybrid mobile apps. Hybrid apps are essentially small websites running in a browser shell in an app that have access to the native platform layer. "
	}

];
var object = {};
var limit = 10;

// var objects = [];
// for(var i = 0; i < limit; i++){
// 	object = {
// 		lable: "lable " + i,
// 		content: "some content for lable " + i
// 	};
// 	objects.push(object);
// }

function contentBasedOnItem(item){
	for(var i =0 ; i < objects.length; i++){
		if(objects[i].lable === item){
			document.getElementById('item-content').innerHTML = objects[i].content;
			 var elements = document.getElementsByClassName("list-group-item");
			 
			 for(var i =0; i < elements.length; i++){
			 	if(elements[i].classList.contains("active")){
			 		elements[i].classList.remove("active");
			 		console.log("class removeed")
			 	}
			 }
			document.getElementById(item).className += " active";
			break;
		}
	}
}

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        item.id = array[i].lable;
        item.classList.add('list-group-item');
        item.addEventListener('click', function (e){
			contentBasedOnItem(e.target.id);
		});

        // Set its contents:
        item.appendChild(document.createTextNode(array[i].lable));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// document.getElementById('some-items').appendChild(makeUL(objects));






var btn = document.getElementById("someBtn");

// btn.addEventListener("click", function(){
// 	var krpano = document.getElementById("krpanoSWFObject");
// 	// var obj = {}
// 	// obj.url = krpano.get("xml.url");
// 	// obj.content = krpano.get("xml.content");
// 	// obj.scene = krpano.get("xml.scene");
// 	// obj.view = krpano.get("xml.view");
// 	console.log(krpano.get("mouse"));
// })

// var lookAtBtn = document.getElementById("lookAtBtn");
// lookAtBtn.addEventListener("click", function(){
// 	var krpano = document.getElementById("krpanoSWFObject");
// 	//krpano.moveto(100.0,5,linear(10));
// 	// console.log(krpano.set("fullscreen", true));
// 	console.log(krpano);

// })

function krpano() 
{
return document.getElementById("krpanoSWFObject");
}


var position = {}
function getPos(){

// var mousex = krpano().get("mouse.x");
// var mousey = krpano().get("mouse.y");
// var _ath = krpano().get('view.hlookat');
// var _atv = krpano().get('view.vlookat');
// var hvs = krpano().get("screentosphere("+mousex +","+mousey +")");
// var hva = hvs.split(",");

// // var ath = Number( hva[0] );
// // var atv = Number( hva[1] );
// console.log('ath',_ath);
// console.log('ath',_atv);

//krpano().call("moveto("+ ath +","+ atv +")");

	var krpano = document.getElementById("krpanoSWFObject");
	console.log(krpano)
	// var scene = krpano.get("xml.scene");
	position.ath = krpano.get("view.hlookat").toFixed(2);
	position.atv = krpano.get("view.vlookat").toFixed(2);
	position.fov = krpano.get("view.fov").toFixed(2);
	//var link = "?scene=" + scene + "&?ath=" + ath + "&?atv=" + atv + "&?fov=" + fov;
	// link = window.location.protocol + window.location.pathname  + link;
	console.log(position);
	return position;
}

var burj = {ath: "-29.57", atv: "-40.08", fov: "62.97"};
var road = {ath: "246.62", atv: "28.20", fov: "41.59"};
var horbour = {ath: "141.38", atv: "22.88", fov: "61.32"};
var reset = {ath: "0.00", atv: "0.00", fov: "120.00"};
var ground = {ath: "25.43", atv: "43.52", fov: "43.22"};

var v = "linear(100)";

function showViewPosition(objectType){
	var position = {};
	if(objectType === 'burj'){
		position = burj;
	}else if(objectType === 'road'){
		position = road;
	}else if(objectType === 'horbour'){
		position = horbour;
	}else if(objectType === 'ground'){
		position = ground;
	}
	else if(objectType === 'reset'){
		position = reset;
		localStorage.setItem('savedPosition',"");
	}else if(objectType === 'save'){
		var position = getPos();
		localStorage.setItem('savedPosition', JSON.stringify(position));
	}
	//krpano().call("moveto("+ position.ath +","+ position.atv +")");
	//krpano().call("lookto("+ position.ath +","+ position.atv +"," +  position.fov +")");
	lookAt(position);	
}



function zoom(){
	krpano().call("zoomto("+ position.fov +","+ v +")");
}



function lookAt(position)
{
	//console.log('krpano().call',krpano().call('moveto(100.0,5,linear(10))'))
	// krpano().call('moveto(100.0,5,linear(10))')
	// krpano().call("moveto("+ position.ath +","+ position.atv +")");
	krpano().call("lookto("+ position.ath +","+ position.atv +"," +  position.fov +")");
}

if(localStorage.getItem("savedPosition")){
	var savedPosition = JSON.parse(localStorage.getItem("savedPosition"));	
	lookAt(savedPosition);
}

function mypopup(param){
	$('#myModal').modal('show');
	playVideo(param);
}


function playVideo(param){
	var videoURL = "";
	if(param === 'burj'){
		videoURL = "https://www.youtube.com/embed/cn7AFhVEI5o?autoplay=1";
	}else if(param === 'road'){
		videoURL = "https://www.youtube.com/embed/t1G3KT8PfQY?autoplay=1";
	}else if(param === 'horbour'){
		videoURL = "https://www.youtube.com/embed/PEv4fGDCliA?autoplay=1";
	}else if(param === 'ground'){
		videoURL = "https://www.youtube.com/embed/oINKiv8aT_c?autoplay=1";
	}
	document.getElementById('videoPlayer').style.display = "block";
	document.getElementById('videoPlayer').src = videoURL;

}

function stopVideo(){
	document.getElementById('videoPlayer').src = "";
}

// function go(){
// 	$('#myModal').modal('hide');
// 	showViewPosition(goTo);

// }





