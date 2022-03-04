const root = document.getElementById('root');
import pizza from './pizza.jpg';
import food from './food.jpg';
import shopping from './girl-farm.jpg';

const homepage = () =>{
    header();
    content();
    ourStory();

    console.log(root);
    

}

// header function

const header = () =>{
    console.log("header function activated");
    const container = document.createElement('div');
    container.classList.add('header');
    
    //add function to create 4 divs using spread operator

    const headerlinks = (...list) =>{
        for (let i = 0; i < list.length; i++) {
            const div = document.createElement('div');
            div.id = list[i];
            div.textContent = list[i];
            console.log(div);
            container.appendChild(div);
        }

    }

    headerlinks("Home", "Order-Online", "Menu", "Login");

    root.appendChild(container);
}


const content = () =>{
    console.log("Content function activated!");
    const container = document.createElement('div');
    container.classList.add("main-content");

    const img = new Image();
    img.src = food;



    const h4 = document.createElement('h4');
    h4.textContent = 'The';
    const h1 = document.createElement('h2');
    h1.textContent = "GREEN SHOP";
    const h3 = document.createElement('h3');
    h3.textContent = "PICK UP & HOME DELIVERY";


    container.appendChild(h4);
    container.appendChild(h1);
    container.appendChild(h3);

    const btn = document.createElement('button');
    btn.textContent = "Order Now"
    container.appendChild(btn);



    root.appendChild(container);

}


const ourStory = () =>{
    const container = document.createElement('div');
    container.classList.add('our-story');

    const line = document.createElement('div');
    line.classList.add('gap-filler');

    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.textContent = "About Us"
    
    const storyContent = document.createElement('div');
    storyContent.classList.add('story-content');
     const h1 = document.createElement('h1');
     h1.textContent = "A PASSION FOR FRESHNESS"

    const test = document.createElement('div');
    test.classList.add('story-img');

    const p = document.createElement('p');
    p.textContent = "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.";

    
    storyContent.appendChild(h1);
    storyContent.appendChild(test);
    storyContent.appendChild(p);
    // storyContent.appendChild(img);

    container.appendChild(line);
    container.appendChild(tag);
    container.appendChild(storyContent);
    root.appendChild(container);

}



export default homepage;