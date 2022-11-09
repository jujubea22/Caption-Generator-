// 

<p1>Click the button to get suggestions of other words</p1>

<button onclick="getWords('https://www.wordsapi.com/')">Find Similar Words</button>
<script>


async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("demo").innerHTML = myText;
}
