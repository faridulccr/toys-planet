# **Toy Marketplace**

A company is seeking a web developer who can create a simple full-stack Toy Marketplace website. You are required to focus on a specific toy category, such as-

    - Toy Cars(sports car, truck, regular car, mini fire truck, mini police car, etc.)
    - Action figure toys(marvel, avengers, star wars, transformers, etc.)
    - Animal toys(teddy bear, horse, dinosaur, dogs, cat, unicorn, cows, etc.)
    - Sports toys(miniature or plastic version of sports accessories)
    - Toy robots
    - Dolls(baby dolls, barbie, American girl, etc)
    - Disney dolls (Disney princes, frozen dolls, animation characters, donald duck, etc.),
    - Girls' makeup toy,
    - Video game toys,
    - Building and Construction Toys,
    - Educational and Learning Toys(science kits, math learning toys, engineering kits, engineering tools),
    - Cooking Toys,
    - Arts and Crafts Toys,
    - Musical Toys(miniature musical instruments),
    - Board Games and Puzzles,
    - Electronic Toys,
    - Lego sets(lego city, lego star wars, lego architecture, lego cars),
    - Sand castle building toys, etc.
    - Any other types of toys

If you select Disney dolls toys, your website will only showcase toys related to that particular types. Do not mix different types of toys in your website.

Make sure your website design is unique. Visit ThemeForest, Dribble, google, etc., to get some ideas.

You can explore component libraries other than DaisyUI. Remember, a unique project will add more value to your portfolio.

<hr/>
<br/>
🚩: 0 [ If we have any update we will mention it here ] 
<br/>

## **Main Requirements**

5. **` Home page:`**
    - **Extra Section:** Add two relevant sections. Try to make them attractive.

<br/>

7. **` All Toys`** page: Create an All Toys page where you will see the toys all the users have added in the tabular form. Each row of the All Toys table/list will have the following information:

    - Seller: (if available) show the name of the person who posted the toy
    - Toy Name
    - Sub-category
    - Price
    - Available Quantity
    - View Details button
      <br/>

    > Show 20 results by default by using `limit`
    >
    > Implement a search system on this page, based on the **Toy name.** > <br/>

    Without logging in, if a user clicks on the **View Details** button, they will be redirected to the Login Page. Make sure to take the user to the Details Page after the user successfully logs in.

<br/>

8. **`Single toy details route will be a private route:`**

    > After clicking on the **View Details** button, he/ she will be redirected to the **Toys Details** route **( /toy/:id )** containing the information **( picture, toy name, seller name, seller email, price, rating, available quantity, and detail description)**
    >
    > (optional) If possible, display the view details in a modal

<br/>

9. **` Add A Toy page will be a private route:`**
   <br/>

    > Create an **Add A Toy** page where there will be a form having the following fields:

    - Picture URL of the toy,
    - Name,
    - seller name (if available from the logged in user)
    - seller email (info from the logged in user)
    - Sub-category ( For example: if the website is based on Educational and learning toys, the sub-categories can be Math Toys, Language Toys, and Science Toys.)
    - Price,
    - Rating,
    - Available quantity
    - Detail description

<br/>

10. **`My Toys page will be private routes:`** If a user logs in, they will see the My Toys page, which it will show all the toys information they have added from the Add A Toy page in a tabular form. Each row will have an update and delete button.
    <br/>

    -   **Update Action** - If they click the `update` button, they can update the Toy information (Price, available quantity, Detail description) <br/><br/>
        > **Note:** you can show the update form in a modal or another route.

    <br/>

    -   **Delete Action** - If they click the delete button, the Toy will be removed from the list. Before the delete, ask for a delete confirmation.
        <br/>
        <br/> > **Note:** If a user logs in they will only see the toys they have added. The user cannot see the toys other users added.
        <br/>

<br/>

11. For all the CRUD operations, show relevant toast/ notification/ anything with a meaningful message

<br/>

## **Bonus Requirements**

1. **Commits & readme:**

    - Minimum 18 meaningful git commits on the client-side repository.
    - Minimum 8 meaningful commits on the server-side repository.
    - Create a readme for client-side and write about your project (at least 5 bullet points). ** Remember to add your client-side live link to your website here.**

<br/>

5. On the **My Toys** page, you must implement a sorting system to sort the toys in **descending** and **ascending** orders based on the **price**. (Explore MongoDB sorting operation & implement it on the backend). The design of the sorting system depends on you.
   <br/>

---

<br/>

## **Optional (But Highly Recommended):**

1. Implement a JWT token in your routes.

<br/>

2. Add a spinner when the data is in a loading state. You can add a gif/jpg, use any package or customize it using CSS.

<br/>

3. **Interesting part:**

    > Each blog will contain a question, an answer, and a pin icon. You can display them however you want. When a user clicks on a pin icon, the pin icon will become blue (or any dark color), and the pinned blog will be shown on the homepage. However, if a user clicks on the already pinned blog, the blog will be unpinned, and that blog will not appear on the homepage. Make sure to make the pin icon white when the blog unpins.
    > <br/>
    > When a user is not logged in, the pin button is disabled.

<br/>

4. **Little Bit Advanced:** Add more toys for each sub-category. You can add pagination in your tab system.

<br/>

5. Add extra features of your own. This will help you in the future to differentiate your project from others.

<br/>
<hr/>
<br/>

### **Additional information:**

1. You can use a local or host image anywhere or use pictures from the internet. And it's ok if you have the image url, but the image link doesn't work.
2. You can use vanilla CSS or any CSS library (Bootstrap, tailwind) you want. If you wish, you can use both Bootstrap and react-bootstrap. Also, if you want, you can use any tailwind component library such as DaisyUI, etc.
3. Try to host your site on Firebase (Netlify hosting will need some extra configurations)
4. Host your server-side application on Vercel. If needed, you can host somewhere else as well.
5. Make Sure you deploy server-side and client-side on the first day. If you have any issues with hosting or GitHub push, please join the "Github and deploy" related support session.

<br/>
<hr/>
<br/>

### **What to submit:**

1. Your client-side code GitHub repository
2. Your server-side code GitHub repository
3. Your live website link

<br/>
<hr/>
<br/>

### **Some Guidelines:**

1. Do not waste much time on the website idea. Just spend 15-20 minutes deciding, find a sample website, and start working on it.
2. Do not waste much time finding the right image. You can always start with a simple idea. Make the website and then add different images.
3. Don't look at the overall task list. Just take one task at a time and do it. Once it's done, pick the next task. If you get stuck on a particular task, move on to the next task.
4. Stay calm, think before coding, and work sequentially. You will make it.
5. Be strategic about the electricity issue.
6. use `chatgpt` to generate JSON data. You can use chatGPT for Yother purposes as well.

<br/>
<hr/>
<br/>

### No Pain, No Gain:

`The most beautiful moments in life comes after going through hardships and challenges.`
