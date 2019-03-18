function createNode(element) {
      return document.createElement(element);
}

function append(parent, el) {
      return parent.appendChild(el);
}

const ul = document.getElementById('esathi');
const url = 'https://www.e-sathi.com/api.php?get=pages&query=unelmamovie';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
      return data.map(function(page) {
            let li = createNode('li'), img = createNode('img'), span = createNode('span');
            img.src = page.page_picture;
            span.innerHTML = `${page.page_name}`;
            append(li, img);
            append(li, span);
            append(ul, li);
      })
})
.catch(function(error) {
      alert(error);
      console.log(error);
});
