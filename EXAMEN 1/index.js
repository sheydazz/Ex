// arry de recetas
const recetas = [
    {
      id: 1,
      title: "Cozy Curry Noodle Soup (Thai-Inspired)",
      imgSrc: "https://minimalistbaker.com/wp-content/uploads/2023/10/Cozy-Curry-Noodle-Soup-Thai-Inspired-10-1365x2048.jpg",
      tags: ["GF", "DF", "NS"],
      descripcion:" Cooler weather means one thing: cozy soups on repeat! Our new go-to is this Thai-inspired noodle soup with coconut milk, curry paste, veggies, and your choice of chicken or tofu. It’s creamy, gingery, spicy, nourishing, and SO satisfying  Bonus? It’s versatile, working well with almost any veggies you have around! Simple methods. Big flavor. Let’s do this"
    },
    {
      id: 2,
      title: "1-Pot Red Lentil Chili poket",
      imgSrc: "https://minimalistbaker.com/wp-content/uploads/2016/02/DELICIOUS-1-POT-Lentil-and-Black-Bean-Chili-Smoky-hearty-PROTEIN-and-fiber-packed-vegan-glutenfree-lentils-chili-healthy-recipe.jpg",
      tags: ["GF", "VG", "V", "DF", "NS"],
      descripcion:"Sometimes inspiration comes from the most unexpected places.I posted this picture on Instagram a few weeks ago (for my Red Lentil Curry), and someone asked if it was red lentil chili. “No, but GOOD IDEA,” I replied.The rest is history. I couldn’t shake the thought from my mind."
    },
    {
      id: 3,
      title: "1-Bowl Carrot Apple Snack Cake",
      imgSrc: "https://minimalistbaker.com/wp-content/uploads/2018/10/AMAZING-Carrot-Apple-Snack-Cake-1-Bowl-simple-ingredients-SO-tender-and-delicioius-vegan-glutenfree-cake-carrot-cake-minimalistbaker-recipe-5-600x900.jpg",
      tags: ["GF", "VG", "V", "DF"],
      descripcion:"The holiday season is upon us and I’ve been dreaming of sharing an easy snack cake to have around if you happen to be hosting family or friends this time of year. You know, the kind of cake that is justifiable as a “snack” or “breakfast” because it has fruit and vegetables in it. Yes! That kind. Let’s bake, shall we?"
    },
    {
      id: 4,
      title: "How to Roast Pumpkin pieked",
      imgSrc: "https://minimalistbaker.com/wp-content/uploads/2017/10/AMAZING-Pumpkin-Mac-n-Cheese-10-ingredients-cheesy-hearty-SO-delicious-vegan-plantbased-pumpkin-pasta-recipe-glutenfree.jpg",
      tags: ["GF", "VG", "V", "DF", "NS"],
      descripcion:"Behold: All of our favorite pumpkin recipes in one place.With everything from our classic Pumpkin Pie to 1-Bowl Pumpkin Muffins to Pumpkin Mac ‘n’ Cheese, these fall treats are perfect for celebrating all season long.Happy October, friends!"
    },
    {
        id: 5,
        title: "Chocolate Peanut Butter Ice Cream Bars (Vegan)",
        imgSrc: "https://minimalistbaker.com/wp-content/uploads/2023/05/Vegan-Chocolate-Peanut-Butter-Ice-Cream-Bars-9-1365x2048.jpg",
        tags: ["GF", "DF", "NS"],
        descripcion:"Welcome back, friends! We’ve returned to the magical land of chocolate + peanut butter (one of our favorite places). This timeless combo has won the day YET again, this time in the form of creamy, decadent, salty-sweet vegan ice cream bars! They’re truly better than we ever could’ve imagined, and they just might replace your favorite store-bought bars. Just 7 pantry staple ingredients required. Let us show you how it’s done!"
      },
      {
        id: 6,
        title: "Kale Apple Slaw with Dijon Vinaigrette",
        imgSrc: "https://minimalistbaker.com/wp-content/uploads/2023/09/Kale-Apple-Slaw-with-Dijon-Vinaigrette-4-1365x2048.jpg",
        tags: ["GF", "VG", "V", "DF", "NS"],
        descripcion:""
      },
      {
        id: 7,
        title: "Chocolate Cherry Protein Shake",
        imgSrc: "https://minimalistbaker.com/wp-content/uploads/2023/09/Vegan-Chocolate-Cherry-Protein-Shake-7-1337x2048.jpg",
        tags: ["GF", "VG", "V", "DF", "NS"],
        descripcion:"When salad season and apple season collide, make this QUICK kale apple slaw! It’s sweet, crunchy, zippy, versatile, and comes together in just 10 minutes.It’s the perfect simple side to pair with your favorite protein + roasted veggies…or for brightening up heavier meals. Let us show you how it’s done!"

      },
      {
        id: 8,
        title: "Veggie-Packed White Bean Minestrone",
        imgSrc: "https://minimalistbaker.com/wp-content/uploads/2023/11/Late-Summer-White-Bean-Minestrone-12-1365x2048.jpg",
        tags: ["GF", "VG", "V", "DF", "NS"],
        descripcion:"Fall is near, but summer veggies are still here. Enter: A cozy soup with a mix of fall and summer produce! This easy, flavorful, 1-pot minestrone is LOADED with veggies and white beans for a fiber- and nutrient-packed dish. It’s light yet satisfying, comes together with simple ingredients and methods, and is perfect for the seasonal transition. Grab your bread because soup is on!"
      },
      {
        id: 9,
        title: "Vegan Pumpkin Cinnamon Rolls",
        imgSrc: "https://minimalistbaker.com/wp-content/uploads/2014/10/1-Bowl-Vegan-PUMPKIN-Cinnamon-Rolls-Simple-perfectly-spiced-delicious.jpg",
        tags: [ "VG", "V", "DF"],
        descripcion:"This recipe is the first in a series of posts in partnership with Bob’s Red Mill. I have loved their products for years, and when we moved to Portland in 2010 I was thrilled to learn Bob’s was based there. Shortly after I was able to tour their factory and was so impressed to see the attention to quality and detail in everything they do."
      }

  ];


function goToRecipe(element) {
    const recipeId = element.getAttribute('data-recipe');
    const receta = recetas.find(recip => recip.id == recipeId);
    // Guardar la receta en localStorage
    localStorage.setItem('selectedRecipe', JSON.stringify(receta));
    window.location.href = "detalle-receta.html";
   
  }

  function detallereceta(){
    // Verificar si hay una receta guardada
    const selectedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));
    
    if (selectedRecipe) {
      document.getElementById('recipe-instruction').textContent=selectedRecipe.descripcion
      document.getElementById('recipe-title').textContent = selectedRecipe.title;
      document.getElementById('recipe-img').src = selectedRecipe.imgSrc;
 
       const tagsContainer = document.getElementById('recipe-tags').querySelector('.tags');
       tagsContainer.innerHTML = '';
       selectedRecipe.tags.forEach(tag => {
         const span = document.createElement('span');
         span.className = `tag ${tag}`;
         span.textContent = tag;
         tagsContainer.appendChild(span);
       });
    }
 }
 
 function revisar() {
   const url=window.location.href
   if(url=="http://127.0.0.1:5500/detalle-receta.html"){
     detallereceta()
   }
 }
 revisar()
