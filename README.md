# CSS

CSS stands for cascading style sheets. It is used to make your webpage look good. CSS is optional for a webpage. It allows you to add colors change position etc. 

It was first introduced in 1996 called CSS version 1\. In 1998 CSS 2 was introduced. The current version of css is CSS 3\. There will be no CSS 4 because from CSS 3 additional features will be added into independent modules which will be used. CSS 3 is also in active development.   
There are 3 different ways of adding CSS in a webpage:

* Inline Style: We can add the style attribute to the element you want to style and specify the rules inside the "". We define the css rules like `propertyName: value`  
For example we can use the `background `property set a background of a section. We can use a predefined color like red, blue etc. We can also use the color hex code to specify the colors we want. The predefined colors will also resolve to hex code automatically behind the scenes by the browser. A hex code is specified by prefixing the `#` symbol before the hexadecimal code. eg: `#ff1b68`  
Example of inline style:  
```javaScript  
<section style="background: #ff1b68;">  
      <h1>Get the freedom you deserve.</h1>  
</section>  
```  
This approach is not recommended because it makes reading the code difficult. It also makes the code difficult to debug.
* Selectors: We can specify the style tag any where inside of the html to define the CSS rules. Preferably we define it in the head section of the html file. When using the style tag we cannot directly specify rules.

Because there is no way we can target a particular element which we want to style. We use the selector for this. Selector is an additional piece of information which tells the CSS to target a particular element to which we need to apply the styles. The syntax is:

```javaScript
selector{
    property: value;
}
```

We can add as many selectors as we want. We can use the name of the tag as a selector. For example:

```javaScript
<style>
        section{
            background: #ff1b1f;
        }
</style>
```

The above selector will target all the section elements inside of the html page and give it a background.

* External Style Sheet: We can create a separate .css file in which we can specify the CSS rules. Inside this file we will write the css rules using the selector. We don't need to specify the style tag in this. We must make sure to link the css file with the html file. We use the link tag to specify the file.  
the syntax is:  
`<link rel="stylesheet" href="path/to/cssfile">`  
This is the recommended way. Because it clearly separate the structure and style. We can also reuse the css file in multiple html files. The browser can cache this css file and makes the loading of the pages much faster.

We can change the color of a text with the `color `property. We can also change the type of font by specifying the `font-family` property. We can use values like `sans-serif` for this property. These are predefined keywords which apply a particular font based on the operating system and the browser. We can customize the default fonts of a browser by visiting the browser settings. The browser will have defaults for standard, serif and sans-serif.   
The above method provides customization to some extend. But alternatively we can use the google fonts. From the google font's webpage we can select the font which we need. We can use this font in our webpage by adding the reference in the head section in the html document and specifying the font family as described in the documentation of the font. By using a font like google font we can ensure that the fonts will be applied and visible to all users without worrying about the browser or operating system.

We saw the element selectors in the previous example. We also have class selectors in CSS. We apply styles to all elements which have the same class. We need to specify the class attribute to the element. We can create a style for the class like:

```javaScript
.class-name{
    key: value;
}
```

We can choose any class name we want.  
We also have the universal selector which applies the style to all elements in an html page. We can create a universal selector like:

```javaScript
*{
    key:value;
}
```

We use the `*` symbol for universal selector. We rarely use this.   
We also have id selectors which will apply the style to the element with the particular id. The id in a html file should be unique, so only that particular element can be targeted with this selector. We can create them like:

```javaScript
#id_name{
    key: value;
}
```

Finally we have attribute selectors which let's us selects the elements based on it's attributes. We will set the same style to all elements that has that particular attribute. We can create it like:

```javaScript
[attributeName]{
    key: value;
}
```

We should specify the attribute name inside of `[]` .   
If we pass the id with the # symbol at the end of the url it will automatically scroll down to that particular id. 

Multiple rules can affect the same element. Different selectors have different priorities. We can check the rule affecting an element using the developer tools.   
CSS resolves the styling conflicts with the help of specificity. The order of specificity is like:

* Universal selector has the lowest priority, we rarely use this.
* Tag and pseudo selectors has the lowest priority.
* class, pseudo class and attribute selector has higher priority than tag selector. If there is a conflict between these the one rule which defined lower in the file wins.
* Id selectors has higher priority than the above mentioned selectors. Rules applied through id selectors are applied regardless of it's position in CSS file.
* Inline styles has the highest priority. You should not use them frequently. They will override all other selector rules defined for that element.

In CSS an element also inherits some styles from the parent element. For example we can use the body selector to apply a font for our entire html page. Like:

```javaScript
 body{
    font-family: "Montserrat", sans-serif;
 }
```

Elements can inherit the style from both direct and indirect parents. Some styles are exceptions to this but most of the styles such as font family are passed down to the children.   
**The inheritance have the lowest specificity.** 

We can increase the specificity of an inherited property by specifying the property value as inherit, for example we can set the font-family of a class like:

```javaScript
.section-title {
     color: #2ddf5c;
    font-family: inherit;
 }
```

  
We can also use combination selectors to specifically target individual elements by combining multiple selectors. For example we can target a specific h1 tag inside of a particular element with a particular id like:

```javaScript
 #product-overview h1 {
     color: white;
     font-family: "Anton", sans-serif;
 }
```

Here we used space to separate the selectors.   
Consider the below CSS file:

```javaScript
 body{
    font-family: "Montserrat", sans-serif;
 }
 #product-overview {
     background: #ff1b1f;
 }
 
 #product-overview h1 {
     color: white;
     font-family: "Anton", sans-serif;
 }
 
 .section-title {
     color: #2ddf5c;
    font-family: inherit;
 }
 
 h1{
    font-family: sans-serif;
 }
```

Even though we defined a separate font family for the h1 tag at the end of the file, it will not be applied to the h1 tag which comes under product-overview id because it has more specificity.   
**NOTE:** The rule with more information wins over the rules with less information. 

Combinators allows us to be more clear about the rules and select elements by passing more information to the selector. There are 4 types of combinators:

* Adjacent Sibling combinator: We use the **+** symbol between the selectors. The adjacent sibling selector is used to select all the siblings of an element(element next to each other). For example if we have a rule like:  
```javaScript  
h2 + p{  
    color: red;  
}  
```  
This will select all the p elements that directly comes after the h2 tag. Note that the elements should have same parent. Also the second element has to come after the first element.
* General Sibling combinator: We use the **\~** symbol between the selectors. The general sibling combinator is related to adjacent sibling but it is more flexible. For example if we used like:  
```javaScript  
h2 ~ p{  
    color: red;  
}  
```  
Here all the p tags that are on the same level as h2 even though they are not adjacent will be selected. Here also there should be a common parent element and the second element should come after the first element.

* Child combinator: We use the **\>** sign between the selectors. It will apply the rules to the direct child of the first element for example:  
```javaScript  
div > p{  
    color: red;  
}  
```  
Any p element that comes directly under the div element will be selected here. Here we should note that the second element is the direct child of the first element.
* Descendant combinator: We use **white space** between the selectors. Here the second element need not be a direct child of the first element. It will apply to all the children regardless of the occurence.  
eg:  
```javaScript  
div p{  
    color: red;  
}  
```  
Here all the p elements which comes as a direct or indirect child will have the style. Note that we must ensure that the second element is a direct descendant of the first element. This is the most commonly used combinators.

Even though selectors allow you to be more precise and we can use them if we want, but direct selectors without combinators are much more performant. 

Every element in html is interpreted as a box by CSS. We can see this box when we open the developer tools and select an element. Every element has a space for content. The padding is the space between the content and the border of an element. A border surrounds the element and directly comes after padding. Margin is the space around the elements. Margin is the distance between an element and it's sibling. Margin can be applied by the browser by default. Margin is not part of the content. Therefore the following layers include the box model:  

* content
* padding
* border
* margin

Example of box model style applied to an element:

```javaScript
 #product-overview {
     background: #ff1b1f;
     padding:20px;
     border-style: solid;
     border-color: black;
     border-width: 5px;
     margin: 20px;
 }
```

 We can also use shorthand properties to set multiple property values at once. There is a border shorthand property.

The body element has a default margin set by the browser. To make sure that our content is fitted entirely on the page we can set the margin to 0 at the beginning of the file like:

```javaScript
body{
     margin:0;  
}
```

Margin collapsing a behavior where the margin of one element overlaps with the margin of another element. This typically occurs when vertical margins of two block level elements touch each other. Instead of adding together, the larger margin takes precedence. This commonly happens between parent-child elements or adjacent sibling elements. This behavior is to ensure there is not a large distance between elements. To work around this we can use either margin-top or margin-bottom.

When working with margins, you can get unexpected results.

* Why are two adjacent elements sharing one margin even though each element has its own one?
* Why does a parent element (e.g. `<section>` as in the videos) suddenly take on the margin of the child element (e.g. `<h1>` )?

It's always related to margin collapsing. 

There, three base cases are described:

1. Adjacent siblings which both have margins
2. A parent which holds one or more child elements where the first and/ or last (or the only) child has margins
3. An element without content, padding, border and height

Let's explore these cases:

**1\. Adjacent Siblings**

In this case, the first element might have a margin of `10px` (on all sides let's say) and the second one has `5px` (or `20px` \- the values don't matter).

CSS will collapse the margins and only add the bigger one between the elements. So if we got margins of `10px` and `5px` , a `10px` margin would be added between the elements?

  
**2\. A parent with children that have a margin**

To be precise, the first and/ or last or the only child has to have margins (top and/ or bottom). In that case, the parent elements margin will collapse with the child element(s)' margins. Again, the bigger margin wins and will be applied to the parent element.

If the parent element has padding, inline content (other than the child elements) or a border, this behavior should not occur, the child margin will instead be added to the content of the wrapping parent element.

**3\. An empty element with margins**

This case probably doesn't occur that often but if you got an element with no content, no padding, no border and no height, then the top and bottom margin will be merged into one single margin. Again, the bigger one wins.

**Shorthand** properties are properties which combines values of multiple properties into a single property. for example we had seen the border properties like:

```javaScript
border-width:2px;
border-style: solid;
border-color: orange;
```

The above properties can be combined into one line like:  
`border: 2px solid orange;`

The order in which we define the values does not matter unless we use the same type of values for 2 different properties.   
We also have shorthand property for margin. If we are not using shorthand property we needed to specify the margin on all sides like:

```javaScript
margin-top: 5px;
margin-right: 10px;
margin-bottom: 5px;
margin-left: 10px;
```

There are a couple of short hands which we can use for this like:  
`margin: 5px 10px 5px 10px;`

The order is `top, right, bottom, left`   
Alternatively we can use:  
`margin: 5px 10px;`   
This can be used when we need to apply the same margin for top, bottom and left, right. The order is `top-bottom, left-right` 

We can also set only 1 value for the margin if we want to apply the same margin for all sides. Usage of shorthand properties are completely optional. But a good practice is defining them for the parent element, and overriding specific rules for child elements if required. We can inspect the webpage to see the long form properties and their values of the short hand property.

**The block level elements like section, div and h1 will take full available width by default.** The default value is 100%, if we modify this value the width of the element will shrink down. The width can either be defined with percentages or absolute values like px.   
If you set the height of the element to 100%, it will not cover the entire page. What 100% means is the available height given by the parent container. By default most of the block elements will have height based on the height of content it needs to hold. If we don't set a height to the parent explicitly then the 100% height for the child will have no effect.  
But we can set an absolute value in pixels for the height which will have the effect. 

All elements have a way for calculating width and height which is called content box. We can set this behavior by setting the `box-sizing` property to `content-box`. This is the default behavior that is why when we set the width, height, border and padding the border and padding values will add along with the width and height to increase the size of the element. This means that we set the width and height of the content, and not the entire box. We can also set it to `border-box` which will include the padding and border when we set the width and height. NOTE: margin is not included in both `content-box` and `border-box`. We commonly use` border-box` for `box-sizing` to get a more predictable output.   
When we try to set the box-sizing to border-box in the body, this will not affect the section or container because we are inheriting the box-sizing setup, and for block elements by default will have content-box as value set by the browser. 

To override this behavior we can use universal selector. This is one of the rare cases where we need to reset all elements behavior. 

The display property allows us to change the behavior of the element from block to inline or inline to block a combination which is inline-block.   
For example the anchor tag is an inline element which takes only the necessary space. We can place multiple anchor tags in a single line. The elements such as list item and unordered list are block elements which will be stacked on top of each other by taking up the entire width.   
We can also use `display: none` which will hide it from the screen, it will not be removed from the DOM. Other elements can take it's position on the screen. If you want to hide an element from the screen but keep it's position we can use `visibility: hidden`  
The `inline-block` elements have both the features of inline elements and block elements. They will be placed next to each other in a single line but we can add top and bottom values for padding and margin which are not possible for inline elements. 

We can use the inline-block value for the display property to align 2 block items on the same line. If we want to push one item to the right side even if we use `text-align:right` it will not have any effect because some elements will only take the width required by it's content. To ensure that the element is pushed to farthest of the right side and remain on the same line we can use the calc() function as a property value. The calc function can be used to perform calculations and assign the result to a css property. For example we can perform calculations like:  
`width: calc(100% - 48px);`   
**NOTE:** Keep the spaces after the first value and the operator and the second value after operator.

Even though we applied the text-align: right and we dynamically calculated the width the element will be placed in a new line. This is an unexpected behavior of `inline-block` elements. 

```javaScript
<header class="main-header">
  <div><a href="index.html">uHost</a></div>
  <nav class="main-nav">
    <ul class="main-nav__items">
      <li class="main-nav__item"><a href="packages/index.html">Packages</a></li>
      <li class="main-nav__item"><a href="customers/index.html">Customers</a></li>
      <li class="main-nav__item"><a href="start-hosting/index.html">Start Hosting</a></li>
    </ul>
  </nav>
</header>
```

In the above code the browser treats the white space between the div element and the nav as an inline element, due to this the nav element will be pushed down to the new line. This cannot be found in the developer tools. The way to fix this is to place the <nav> opening in the same line as the closing of div tag.

The styles for these would be:

```javaScript
.main-header{
    background-color: #2ddf5c;
    padding:8px 16px;
    width: 100%;
  }
 
  .main-nav__item{
    display: inline-block;
    /* padding:10px; */
  }
 
  .main-header>div{
    display: inline-block;
  }
 
  .main-nav{
    display: inline-block;
    text-align: right;
    width: calc(100% - 49px);
  }
.main-nav__item{
  margin: 0;
  padding: 0;
  list-style: none;
}
```

Here the 49px is the padding is the size occupied by the div.   
Alternatively we can subtract some more pixels to make sure that adequate space is available for the nav which will work fine even if we don't remove the white space.

We can use the `text-decoration` property to add decoration to the text like an underline. We can also remove the text decoration of certain elements like the anchor tag by setting it's value to `none`.

We can also the `vertical-align` property to align inline/inline-block elements to align them vertically. We can set it to middle to align them on the same line vertically. Though it is useful it is quirky, because it will align items relative to the line of text, which results in unexpected behavior in some cases.

For inline and inline block elements we can increase the space between items by adjusting the `margin-left` and `margin-right` values.   
**NOTE:** For inline elements the margin-top and margin-bottom will not work. For inline-block elements they will work.

Pseudo classes are CSS selectors that target elements based on their state or position rather than their attribute or tag names. They are prefixed with single : and allow you to style elements in specific conditions.

examples are `:hover` which styles an element when the user hovers over it.   
`:active` which styles an element when it being clicked.  
  
Pseudo elements allows us to style a specific part of an element. Pseudo elements are defined by adding `:: element name` . For example `::first-letter` which let's us select the first letter of an element. 

The ::after pseudo element helps with rendering content through css. These should be helpful content that adds to the side not the usual page content. For example we can mark links with an even clearer way like:

```javaScript
 .main-nav__item a::after{
  content:" {Link}";
  color: red;
 }
```

This will add the text specified in the content property inside of "" to the dom. We can also apply style to the content like font size, color etc.

We can group rules together by adding commas by using the rules. For example if we have:

```javaScript
 .main-nav__item a:hover{
  color: white;
 }
 
 .main-nav__item a:active{
  color:white;
 }
```

We can combine them like:

```javaScript
 .main-nav__item a:hover, .main-nav__item a:active {
  color: white;
 }
```

We can group as many rules as we want, we can also write them in new lines separated by , .

We can set a background image by using the` url()` method for the `background `property. This allows us to pass the path to the image inside "". This can also be a hyperlink. For example:

```javaScript
 #product-overview {
   background: url("freedom.jpg");
   width: 100%;
   height: 528px;
   padding: 10px;
 }
```

  
The following are the properties which are worth remembering:

```javaScript
color:
background-color:
display:
padding:
border:
margin:
width:
height:
```

Which we have already seen.

You can add multiple classes to a single element. The normal rules of ordering and specificity also applies here. If there are multiple classes the class defined later in the css file will be applied if there is a conflict.  
We can also target elements like:  
For example 

```javaScript
<a href="#" class="active">
a.active{......}
```

This is not limited to only one class. Here we are selecting the anchor tag with class active. We can also select anchor tags with id using #. This is not a combinator but this can be used to target elements more precisely.

We can chain selectors to be more specific about selecting elements.   
**NOTE**: There are no spaces between them. 

The class selector will select all the elements which has the class. The id selector will select only the first element with the id. The class selector is reusable and they allow you to mark and name things for styling purposes only. They offer you more control and they are the most used selector type. Id selectors are used once per page. Id's have a non css meaning in the page for example they are used for page links. 

The `!important` annotation overrides specificity and all other selectors. The rules which are marked as important will always be applied. You should not generally use this. 

The `:not()` pseudo selector is used to reverse a certain rule or exclude a certain rule. We can pass the selector or element which we need to exclude inside of (). For example we can use:

```javaScript
a:not(.active){
    color:blue;
}
```

to select anchor tags which does not have the class `active`. Use this pseudo selector with caution because it can cause problems with your styles if you make mistakes. Also, it is less performant.

Some css features are not supported by some browsers. You can check the mdn reference of the css property to check the support in various browsers. 

We can use the `box-shadow` property to add a drop shadow or an inset shadow to an element. We specify the values for x axis, y axis, blur, spread and shadow color. You can also skip the spread and blur which will give you a bright shadow which ends after the specified pixels on the x and y axis. You can specify any color you want for shadow. We can directly specify the color or hex code or use a color function. Color functions are an alternate way for defining colors. For example we can use `rgb()` which let's us define red, green and blue values. The value ranges are from 0 and 255\. Where 0 indicates the absence of that color and 255 indicates maximum intensity.   
There is also the` rgba()` function which let's you specify the alpha channel. The alpha channel specifies the transparency of the color. 1 means fully opaque and 0 means fully transparent. eg:  

```javaScript
.plan--highlighted {
    background-color: #19b84c;
    color: white;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);
  }
```

We use the `border-radius` property to round the edges of an element. We specify the values like top left, top right, bottom right and bottom left(like clock wise direction). If you want you can also specify equal border radius to all corners.   
eg:  
` border-radius: 8px;`   

Some elements like buttons have styles automatically applied by browser. Even though we had set a font family for our elements in the css, this will not be applied, they will be overridden by the browser. To fix this we can use use the `inherit `value for the font property which prioritizes the font we had set. 

We can set the `cursor `property to change the cursor when the mouse cursor is above that element.

When we click on the button we get a blue outline which is provided by the browser by default. We can select an element like button in the developer tools and if we select the :hov we can force the state of the element like making it active, focus, hovered or visited. When the element is focused it will have the outline. It is similar to the border but it is not part of the box model. It is applied before the margin and after the border. We can style this using the `outline `property. We need to use the `:focus `pseudo selector for that. 

We can define the `border-radius` to `50%` to create a circle. Also make sure that we set the width and height equally for the element.  
We can use the `margin `property to center an element. We can set the margin to `auto ` , which will automatically fill the available space to the left and right equally to center the element horizontally.

We can use `float `property to position some elements differently in your document flow. Float means that you override the default positioning and tells the browser to push the element to the left or right of the page. If you add a float property to the element it will be marked out of document flow. Due to this we don't often use this. It is useful when we need to position an image in a text. The surrounding text elements will respond to float but the other block level elements will not. So to avoid unexpected overlaps we should explicitly tell other elements that the space is reserved for the float and they should respect it. We can do this by adding an additional helper div after the section which we want to float. We can define it any class name and provide the `clear `property and set it's value as `both` . This will clear the floats of both left and right after the element which we are floating.

The example will look like:

```javaScript
.clearfix{
    clear:both;
}
```

  
```javaScript
#free{
    background: rgba(234,252,237, 0.95);
    float:right;
    border-right: none;
    border-left: 4px solid #0e4f1f;
    text-align: right;
}
```

The `position `property let's us change the position of an element in the html page. 

The `position `property is automatically applied in the html code with the value `static `which ensures are block level elements are placed according to the document flow. There might be situations where we might need to alter the normal document flow. We can in-fact position any element on anywhere on the screen which can be achieved through the position property. The possible values for the position property are:  

* static
* absolute
* relative
* fixed
* sticky

We need a value other than static to alter the position of an element. To make the element move to a position we can use `top`, `bottom`, `left `and `right ` properties. We can use the values of these properties with the positioning context to move the elements to the desired locations.

All the positioning values will only be applied if you choose a different value for position other than static. For example if we had:

```javaScript
        <div class="parent">
            <div class="child-1">Navigation Bar</div>
            <div class="child-2">Background Image</div>
            <div class="child-3">Features</div>
        </div>
```

And we apply the `position: fixed` property to the `child-1`, then the div with the class child-1 will sit on the top and will overlap the child-2\. When we specify position fixed we took it out of the document flow. So for all the other elements the child-1 div is non existent. This element will behave like an `inline block` element, which means that we can set the width of the element manually. We can change the position of the div like:

```javaScript
.parent .child-1{
  position:fixed;
  width: 400px;
  top:100px;
}
```

We can also set the top to 0 to see how the element is positioned. If we do so we can see that the element is placed with respect to the viewport.   
**We can say that if we position the element to fixed the element will be positioned with respect to the viewport(visible area of the browser).** 
We can make the navigation bar div to position at the top and occupy the entire width by:

```javaScript
.parent .child-1{
  position:fixed;
  width: 100%;
  top:0;
  left: 0;
  margin:0;
  box-sizing: border-box;
}
```

applying the above style.  
You can use the positioning property to inline elements and block elements.

If we want to add a background image for a page we can create a div at the top page inside of the body tag then add class to it. We can then add the `background `property to the class and use the image. But the problem will be that even if we provide 100% width and 100% height to the div it will not be visible in the screen. If add pixel values to width and height it will work but it is not an elegant solution.   
We can add the `position `property and make it's value `fixed`. After this we can change the width and height to 100% which will make the image cover the entire viewport. But the image is not optimally sized. Also the image hides all the content of the page.

We can position the element on the x axis with left and right and on the y axis with top and bottom. In our case we need to adjust the z axis position for our page content to be visible over the background image. We can use the `z-index` property for this. This property has different values. By default every element on our website will have `auto `value applied which is equal to 0\. This represents the starting point from a y axis perspective for the elements in our website. If we want to position something above the element we can use incremental values to the respective elements such 1, 2, 3 etc. If you want to position something behind an element we can set the `-1` to the element which we want to push behind. **Adding a z-index property to any element without a position(not static) will have no impact**. 

So we can use like:

```javaScript
.background {
    background: url("../images/plans-background.jpg");
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
}
```

Which will work fine.   
The order of elements in the html document will matter if 2 elements have the position fixed and a z-index defined. If both the elements have same z-index the element which is placed last will overlap the other.   
If two elements have distinct z index values the element with higher z index value will placed on the top.

When we used position fixed, and used the top, bottom, left and right values to move an element, it was moving with respect to the viewport. We might be able to position the element wherever we want but that requires a lot of trial and error, also once we position it, it will remain on the same place on the screen. In certain cases we might need to only place the element in a certain div. In those cases we can use the `absolute ` value for the position. We can add this to the element which we want to position and provide it with the position values as required. Then we can add the `relative `position to the parent element on which we want to place our element.

For absolute positioned elements the position is defined based on two cases. 

  
* If none of the parents has a position property applied, then the positioning context of our element is the html element.
* If we have any ancestors with position property, then the closest ancestor with the position property applied is the positioning context for that element.

The `relative `positioning will not take our elements out of the document flow. If we apply the relative positioning to the parent element and absolute positioning to the child element then, the child element will be anchored to the parent.   
The `fixed` and `absolute `position values are comparable, and they will both take the element out of the normal document flow. For fixed value positioning the positioning context is always tied to the viewport. But in case of the absolute positioning the above 2 rules will apply.

Once the element is anchored to a parent element, we can define it's position according to the parent easily.

When we add `relative `positioning to a normal div nothing changes. But, when you add a left or top position values it will change it's position. **The positioning is not fixed based on the viewport here. Because in relative positioning the position context is based on the element itself. Also, the element is not taken off the document flow.** 
Relative positioning is used in situations where we need to move an element a little bit but, it does not leave the parent. 

In some cases if we use the relative positioning and move the element, the element might move out of the parent. In this case we can use the `overflow `property to the **parent** and set it to `hidden`. This will hide the element if it is outside of the parent. This may be the behavior you want, but this ensures that the elements are not scattered across the website.   

**If we try give the** `**relative** `**positioning to the parent div and push it down and finally add the** `**overflow hidden**` **to the body it will not hide the parent. This is due to a default css behavior. If you apply overflow hidden property to the body element this will simply pass on to the html element. Due to this there will be no impact. If we add overflow hidden to both html and body then it will hide the parent element. It will also work if you set** `**overflow : auto**` **for the html element.** 
This will only work if the parent is body element.

We can also use `position: sticky` , if we want to keep the position of an element liked a fixed element. We also need to specify either one of the top, bottom, left or right values for this to work. Sticky is a combination of relative and fixed. When we add the either on the top, bottom , left or right when we reach a certain border while scrolling the element will behave like a fixed element. The border is reached depending on the position of the view port.  
If we set a value for example top to 0, the distance become the distance between the border of the element and viewport.   
We can specify a distance between the element and the viewport. When we cover that distance the element behaves like a fixed element. The element will stop behaving like fixed as it reaches the end of the content of it's parent element. 

**Stacking context** is a three-dimensional conceptualization in CSS that determines how elements are layered on top of each other along the z-axis (depth).

Each stacking context is an independent layering environment — elements inside it are stacked relative to each other, but **cannot appear above or below elements in other stacking contexts** unless their parent context has a higher stacking order.

> When you apply `position: fixed` (or other positioning) to parent elements, each parent establishes its own **stacking context**. This means:
> 
> * Child elements are stacked _relative to each other_ within their parent's stacking context using z-index
> * A child element's z-index **cannot** override the stacking order of its parent relative to other parents
> * Even if a child has `z-index: 9999` and a sibling parent has `z-index: 1`, the child will never appear above that sibling parent
> * To control which parent appears on top, you must adjust the **parent's z-index**, not the child's
> * The parent with the higher z-index will always appear above parents with lower z-index values, regardless of their children's z-index values

**In short:** Z-index only works within the same stacking context. Parent stacking contexts are independent, so you must compare parent z-index values to determine their layering order.

#### When `z-index` is **not needed**:

* If there's **no overlap** between positioned elements, stacking order doesn't matter.
* The **natural stacking order** (elements later in the DOM appear on top) may already give you the desired result.
* If only **one element** is positioned and others are static, there's no conflict.

#### When `z-index` **is needed**:

* When **multiple positioned elements overlap** and the default stacking order isn't what you want.
* When a positioned element needs to appear **above or below** another positioned element.
* When dealing with **dropdowns, modals, tooltips**, or any layered UI components.

The background we used was a shorthand property, for example we can use `background-image` property to set an image background. We can use `background-color` to set a solid color background to the image. If you apply both an image and a solid color as background the image will be displayed in the background. 

The `background-size` property is used to adjust the size of the background. If you set a small value which is smaller than the size of the image, then the background will be multiple smaller copies of the image arranged as a grid. We can also set the width and height of the image like:  
`background-size: width height;  
`We can provide pixel values, % values to this. We can also set the first value to `auto `which will automatically set the width. If we specify the width as 100% and does not specify a height, the full width of the container will be taken and the image height will be cropped automatically.   
We can also set predefined values for the `background-size` property such as `cover`. 

When we set the size to cover, it will look like it set the width of the background to 100% but cover does not actually do that. Cover finds out which part of the container is important (width or height) one to be aligned with your image. Cover is a setting which ensure that your image will fill the entire container. It will even zoom in if you image is smaller than the container.   
An alternative to this is `contain`, this ensures that the full image is visible in the container. It might result in creating white spaces if the image is smaller than the container.

If you only provide one value the browser will try to keep the aspect ratio of the image, but when we also specify a width and height there are chances that the aspect-ratio of the image will not be maintained.  
**NOTE:** In some cases if you set the background-size to cover and set an image with very large height than the container, the height of the image will be cropped.

The `background-repeat` is used to repeat the background or remove the repetition of the background image. We can set it to` no-repeat` to remove the repetition when we use a small image. We can use the `repeat-x` to repeat the image on x-axis. Also, we can `repeat-y` which we can use to repeat the image on y-axis. 

We can position the background image with `background-position` property. We can use a couple of different values for this. For example we can use a pixel value to move the image to the right by the specified number of pixels. If we provide 2 pixel values we can use it to move the image from the left and top by the specified number of pixels.   
We can also use % values, if we specify 1 percentage value you might not be able to see any difference since we have used 100% of the width. But if we use an additional % value we can adjust the position of the image from the y axis. The default value is 50% for the y axis. It means that 50% will be cropped at bottom and 50% will be cropped at the top if the image doesn't fit the container.   
We can also set the value to `center `which will set it to 50% 50% which means the image will be centered by cropping 50% on the left and right and 50% on the top and bottom. 

We can also use left top values to avoid the cropping. This means that it will use 0% 0%. We can also use `left bottom` which will align the image from left and bottom. We can combine positions and percentages like:  
`background-position:left 10% bottom 20%;`   
This gives us full control on how we position our image. 

We can also set multiple images are as background. We have seen about background position which will set the initial position relative to background position layer. `background-position` is only applicable for images.  
`background-origin` allows us to set a background positioning area.   
`background-clip` defines weather the background extends underneath border. 

`background-attachment` defines how the scrolling will behave inside of the image. 

`background-origin` is comparable to box sizing. For example we can set a dashed border of 5px to our image container and we can see that there is a small gap on the left and right side of the image. To fix this we can set the `background-origin` to` border-box`. This will stretch the image across the borders. If we add `content-box` as `background-origin` we can see a little bit more white space within the borders. content-box means that the content without border and padding. The default value of `background-origin` is `padding-box`. This means that the container including border and padding but not the border.   
The cropping is defined by the `background-clip` property. We can also set it to `border-box` which gives the same behavior as before. If we change that to padding-box there will no image behind the border on all sides, i.e the image is clipped after padding. We can also set this to `content-box` to clip it before the padding.   
`background-clip` will override `background-origin` 

`background-attachment` is used to define how scrolling would behave in a container that has a background image but that is not fixed itself. The values are `scroll`, `fixed`, `local`. `local `defines that the image will scroll with the container. For `scroll `the image will stay in place and the content will scroll over it. For `fixed`, the image will not be fixed to the container but the viewport.   
This is property which you rarely use.

We can use all of the above properties in the background shorthand property. But this might confuse you because both the background-position and background-size support both percentage and pixel values. Here in the shorthand property the position comes first which is separated by / followed by size.   
For example:  
` background: url("freedom.jpg") left 10% bottom 20%/cover; `   
for 

```javaScript
  /* background-image: url("freedom.jpg"); */
  /* background-size: cover; */
  /* background-position: left 10% bottom 20%; */
```

The background-size is followed by background-repeat. For origin and clip if you only provide one value then it will be applied for both. If you pass 2 values the first one will set the origin and second one will set the clip.   
The complete shorthand will look like:  
` background: url("freedom.jpg") left 10% bottom 20%/cover no-repeat border-box;` Which is equivalent to:

```javaScript
 /* background-image: url("freedom.jpg"); */
  /* background-size: cover; */
  /* background-position: left 10% bottom 20%; */
  /* background-repeat: no-repeat; */
  /* background-origin: border-box;
  background-clip: border-box; */
```

```javaScript
By setting a height on the container, the image will not be affected by default. This is because an `<img>` tag uses its intrinsic width and height (the image file's dimensions) regardless of the surrounding container's dimensions.
 
To adjust the image size, you need to target the image using a CSS selector and set its dimensions. You can use pixel values, which always work on images:
 
```css
img {
  width: 200px;
  height: 150px;
}
```

However, if you want to use percentage values like `width: 100%`, the behavior depends on the parent element's display property. If the parent is an inline element, percentage values won't work because inline elements don't respect width and height properties. To enable percentage-based sizing, change the parent element to `display: inline-block` or `display: block`. Then, percentage values will be calculated relative to the parent container's dimensions:

```javaScript
.container {
  display: inline-block;
  width: 300px;
}
 
img {
  width: 100%; /* 100% of the container's width (300px) */
}
```

  
The customization we had for the background images are not possible for normal images. Background images are bad for accessibility. Use normal image tag whenever you want to place images in your webpage.

If you have an image in a container and image is an inline element, we can get rid of the whitespace between the image and container by adding a `vertical-align:top` to the image. Alternatively we can set the image to `display:block`. 

Gradients (linear and radial) are treated as images. If you are not using shorthand, you will use `background-image` property to set gradients.   
To set a linear gradient we use the `linear-gradient()` function. The linear gradient function has 2 main arguments, the first one is the direction of the gradient. You can omit it also. The default is `vertical`. For example we can use:  
`linear-gradient(red, blue); `   
This is same as:  
`linear-gradient(to bottom, red, blue);`   
We can also set it like: `to left bottom` which will start from top right and ends in left bottom.   
You can also set degrees instead of position like:  
`30deg `   
If you set `0deg `it will be from bottom to top. `180deg `would be the default behavior which is from top to bottom.   
You can also define multiple colors, as many as you want using any of the available methods in css.   
We can also use transparent, for example we can use like:  
`linear-gradient(180deg, red, transparent);`   
This is useful when you have multiple backgrounds on top of each other.

We can also define from where the colors should start, for example if you have 3 colors each color will take up one third of the available space. We can define the percentage values of each color which defines how much space it occupies, for example:  
`linear-gradient(180deg, red 70%, blue, rgba(0,0,0,0.5);`   
For the second color we should define a percentage value greater than the first one other wise there will be a hard edge between those colors. The percentage here defines till how much percentage of the element the color should occupy. We can set 70% for red and 80% for blue so that 70% will be occupied by red and from 70-80% blue will be applied.

Radial gradient is another type of gradient. We can create it using `radial-gradient()`. It will create a gradient that starts from a point and spreads to the surrounding space in an elliptical or circular shape. For example we can create like:  
` background-image: radial-gradient(red, blue);`   
Which will have an elliptical red center and the surrounding space will be transitioned to blue. We can also define multiple colors.   
We can also make the colors a perfect circle by setting `circle `as the first argument to the function.  
We can also set the position of the circle for example we can use:  
` background-image: radial-gradient(circle at top,red, blue);`   
This will start the circle from top center of the element. The center of the circle will be at this position.  
We can also set it to `top left` which will start from the top left.  
We can also use percentage values like `20% 50%` which will move the circle 20% from left and 50% from top. The first value is the `x-axis` and second value is the `y-axis`. 

We can also use pixels for positioning instead of percentages.  
We can also set the size of the circle, by specifying the size(in pixels) after the circle. The value which we set here will be width of the shape(circle). This will only work for circle. If we have an ellipsis we should define both the width and height.   
There are also default keyword values like `farthest-side` , which means that the ending shape will touch the farthest side.   
We also have `closest-side` which makes sure that the outermost circle touches the closest side.   
We can use the `corners `also instead of side like `closest-corner`. 

We can also stack multiple backgrounds for an element. When doing so only one solid background color should be used and it should be the bottom most color. You can use how many images as you want though.   
The colors are read from left to right which means that the first color you specify will be placed on top. You should also separate the images and colors with commas.   
When we are using a fallback color we should specify that at the end of the background property definition because every image and gradient has it's own separate property, we don't need this for solid color that is why we are moving it to the end.   
The stacking of backgrounds will only matter if you have a fallback or your top most background has some transparency elements.   
The background rule will now look like:  
`background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent), url("images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box, #ff1b68;` 

The `filter `property let's us change the visual appearance by applying functions like blur, grayscale etc. We can also apply more than one filter if we want.   
For example if we want to apply a grayscale for our background image we can use the `grayscale() `function for the filter property and set a percentage value to it.   
eg:  
` filter: grayscale(40%);` 

Scalable Vector Graphics(SVG) is a popular form of icons/images. We can add SVG code directly with the html file. We can target individual parts of the svg and customize it if we want. We can use properties like fill, stroke, stroke-width etc. 

Using pixel values for font sizes and letting the users increase the page size to increase the font size is not a good idea. Even if the user increase the font size from the browser settings the font size of all the elements will not change in our webpage. If we don't define a font size for our elements the browser will adjust the font size of these elements automatically when you increase the font size of the browser. But if you define a fixed pixel size these sizes will not change. 

Till now we worked with pixels and percentages. In addition to that we have more units in css. We have rem (root element) which we use for setting font size. We also have `em `which can also be used for font size. We have viewport height denoted by `vh `and viewport width `vw`.   
We should have a clear understanding about which properties which we can use in connection with these units. We should also know how is the size calculated. Which right unit should you use.   
In our box model we have the content, padding, border and margin. For these we have font-size, padding, border, margin, width and height properties. We also have the top, bottom, left and right properties which we use after position is applied. 

We have absolute lengths which mostly ignore user settings of the browser. For example we can consider the case of pixels. If we define a property value in pixel units users cannot change that. Similar to this we have `cm`, `mm `and more such absolute units. These units should not be used in development. The values such as cm will result in different pixel values because the screen sizes may vary and different screen sizes hold different pixel values.   
The second category is viewport lengths, they adjust the element sizes according the viewport. We have `vh`, `vw`, `vmin `and `vmax`. These units changes the element sizes automatically according to the viewport.   
Thirdly we have font relative lengths, they adjust to the default font size. The units that come under this category are `rem `and `em`.  
Finally we have % units. It is a special case. We should know how box sizes are calculated if we use percentage units. 

We have 3 rules to remember to understand how percentage units work. 

* When an element has `position: fixed`, its containing block is the **viewport** (or the nearest ancestor with a `transform`, `perspective`, or `filter`), not its parent. So if a parent has `width: 100px` and a child has `width: 10%` with `position: fixed`, the child’s width will be 10% of the **viewport width**, not 10px.

* For an absolutely positioned element, the containing block is the nearest ancestor whose `position` value is not `static`. If no such ancestor exists, the element is positioned relative to the **initial containing block** (usually the viewport).  
Percentage values behave differently depending on the property: **dimensions** like `width` and `height` are calculated relative to the **content box** of the containing block (excluding padding and border), whereas **position offsets** like `top`, `left`, `right`, and `bottom` are calculated relative to the **padding box** of the containing block.

* If your element have a position static or position relative the content box of the ancestor is considered. The ancestor is the closest block level element.

If we have a static positioned element and we set the height of the element in %. This height will depend upon the containing block as we discussed in the previous rule. If we want to create a backdrop in our page, we can set a width and height of 100% for the element we won't be able to see the element. This is an unexpected behavior. When we inspect we can see that the width is set to 100% but the height is getting set as 0\. To fix this we can use the html selector, body selector and set it's height to 100%. This is a work around not a solution. Because now all the other elements are pushed down and the div element occupies the complete height.  
Alternatively we can use absolute positioning for the element and remove the height declarations for the html and body. This works because when we use position absolute for the element, since there is not parent element with position other than static the percentage values we set as height and width will be relative to the viewport. 

Even in the above case the backdrop is not fully applied to all the elements in the body. To fix that we can change the element's position to fixed. This way the backdrop remains on the top even if we scroll down the page. To fix the margin collapsing issue where the backdrop doesn't cover the top side of the screen we can set the top to 0 and left to 0.

We can add a font-size value in percentages for the html element. For example if we set a font-size of 75% it will only take 75% font size of the browser setting. 

We can also have a `max-width` value in addition to a percentage `width `value. This will let us restrict the maximum width of the element. We can also set a minimum width using `min-width` to restrict the shrinking of an element beyond a particular value. 

The `**em** `unit multiplies the previous sizes. For example if you had an inherited style of 20px and you specify 2em it will result in 40px. For nested elements with em units it will compound. For example if you have a parent element with 20px, it has a child with 2em, for it's child if we specify 1.5em it will be 40px\*1.5 = 60px. Due to this it can become tricky. Though we can use it if we want where we need to specify font sizes for particular parts of our website. Note that it is the pixel value that propagates and compounds, not the em value. The elements only see the value in pixels.  
  
To avoid the compounding behavior we can use the `**rem** `unit. This will take the multiplier which is specified along with the rem and multiply it with the size of the root element which is the html element. By default it is 16px. The root element inherits the browsers default font size. If you want to override this behavior we can set a default font-size to html element.

Here the user has full control over the size. You can also use this unit with other type of values such as margin. Though the rem always refer to the font-size of the root element so the calculation will be performed based on that. So when the default font-size of the browser changes it will also change the values defined with rem.  
In some cases you don't need to use rem for certain properties such as shadow, because the shadow need not be changed even if the font size changes.

We can use viewport width and viewport height instead of percentage values. For example we can set the width to 100vw and the height to 100vh. This will cover the complete width and height of the viewport. But still you need to set the position fixed for this to take effect.   
We also have `vmin `which is a css viewport unit that is relative to the smaller of the two viewport dimensions(width or height). A value defined in vmin will be calculated based on whichever viewport dimension is smaller. The size will not increase beyond the defined proportion until both viewport dimensions become equal. If viewport is resized such that the smaller dimension shrinks further, the element's size will scale down accordingly always remaining relative to the minimum view port dimension. 

Similarly we have `vmax` which is a css viewport unit that is relative to the larger of the two viewport dimensions (width or height). A value defined in vmax will be calculated based on whichever viewport dimension is larger. The size will not decrease beyond the defined proportion until both viewport is resized such that the larger dimension grows further, the element's size will scale up accordingly, always remaining relative to the maximum viewport dimension.

There are some recommended units for the common properties we use:

* font-size (root element): % or nothing.
* font-size : rem (em for children only)
* margin, padding: rem
* border: px
* width and height: %, vw and vh based on the use case.
* top, bottom: %
* left, right: %

We can use `margin: auto` to center elements, but it will only work with block level elements with an explicit assigned width. 

A modal is a pop up which we can show in our page using CSS and javascript. The backdrop is one part of the overlay which disables all other clickable items in the webpage. We can create a modal by creating a div and placing the contents inside it like:

```javaScript
    <div class="modal">
        <h1 class="modal__title">Do you want to continue?</h1>
        <div class="modal__actions">
            <a href="start-hosting/index.html" class="modal__action">Yes!</a>
            <button class="modal__action modal__action--negative" type="button">No!</button>
        </div>
    </div>
```

Then we can style that by adding a fixed positioning and z-index. We should also make sure to give it display none initially, we will then change it using javascript to make the modal visible upon an even like button click. The styling code will look like:

```javaScript
.modal {
  position: fixed;
  display: none;
  z-index: 200;
  top: 20%;
  left: 30%;
  width: 40%;
  background: white;
  padding: 1rem;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
```

We can select elements using javascript using their tags, id, attribute or class. We can use the `querySelector `of the document object to pass in css selectors to target elements. To get multiple elements we can use `querySelectorAll `to get an array of elements. We can get the selected element to a variable and use the `style `attribute on that variable to see the defined inline styles of that element.  
We can also apply a style directly from the javascript like:  
`backdrop.style.display = "block";` 

Alternatively we can add and remove classes using javascript to make elements appear and disappear. We can create a class to set the display property. In javascript we can access the `className `attribute of the selected element which holds the class attribute as string. If we directly assign the new class name here it will break the other style because it will overwrite all other classes.   
The alternative to this is `classList `property of the element which will provide the classes of an element as a list. From this list we can add, remove classes easily. List also have methods like `contains()` to check if an item is already present in the list. We can directly add the class like this. In case of issues with specificity we can mark the rules as `important` in this particular case.

The code will look like:

```javaScript
modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
});
 
backdrop.addEventListener("click", () => {
    mobileNav.classList.remove('open');
    modal.classList.remove('open');
    backdrop.classList.remove('open');
});
 
toggleButton.addEventListener("click", () => {
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});
```

When you observe the style attribute of the javascript we can see all the properties of CSS. But these property names are slightly different here. Here camel cases are used to denote properties instead of -. This is because in javascript property names are invalid if they contain dash. The dashes are omitted and the first letter of the word coming after dash is capitalized to get the javascript property name.   
We can also use \[\] notations to access different style properties through javascript. We will pass the css property name as a string. Here we will use the normal css property name because inside of strings it is allowed to have dashes.

The browser is able to identify the size of the screen. These pixels are calculated by the assumption that 1 inch contains 96 pixels. Based on this calculation the it will assume the dimensions of the screen. This is true in case of desktops screens. But in case of mobile devices the pixel density is very high so the page contents will look really smaller on mobile screens. To fix this issue we can decrease the amount of pixels which limits the information displayed on the screen at a time. 

The developer tools in the browser shows the width and height of various commonly known devices. These dimensions are applied to the browser by dividing physical pixel width and pixel height by the pixel ratio. By applying this we will get the screen width and height which is closer to the original device width and height.   
To tell the browser to apply this pixel ratio we can use the meta tag. This tag will translate the hardware pixels to CSS pixels.   
`<meta name="viewport" content="width=device-width, initial-scale=1.0">` 

This tells the browser that the width of the viewport should be the device width. By applying this the browser will not consider the hardware pixels but the CSS pixels(software pixels).   
This is the first step to create a responsive design. The name attribute of the meta tag tells the browser to target the viewport. The content attribute sets the width of the page to the width of the device. This does the pixel ratio conversion. The initial scale defines the zoom level of the page. The value provided is 1.0 which means no zoom is applied. If we increase this value the site will be zoomed in. The user can also zoom in manually. We can disable this behavior if we want by adding user-scalable=no inside of content. By default this value is yes. The maximum-scale property restricts the amount of zoom we can do on a page. Similarly we also have minimum-scale which restricts the maximum zooming out level that we can do in a page.

We also have media queries. There are difference between the two. 

* The viewport meta tag is specified in html where as the media queries are written in CSS.
* The viewport meta tag is required to adjust the site to device view port. It does not apply any design changes.
* The media queries allow us to change the design based on the size. We can define multiple rules and change the values of different properties based on the size. The design changes are defined by us.

If we only want to create a desktop only website we can ignore the meta viewport tag from the html. 

Nowadays we create a website by starting for the mobile devices first. After fixing the mobile version we can check the desktop version. 

A media query can be thought of as an if statement in css. We define a media query by specifying 

```javaScript
@media (condition){
    rules;
}
```

For the condition we can use `min-width`, `max-width` etc to define conditions. For example if we set the `min-width` as 40rem. In screens above 40rem width the defined rules will be applied, if not old rules defined with the selectors will be applied.   
eg:

```javaScript
#product-overview h1 {
  color: white;
  font-family: "Anton", sans-serif;
  position: absolute;
  bottom: 5%;
  left: 3%;
  font-size: 1.6rem;
}
@media (min-width: 40rem){
  #product-overview h1{
    font-size: 3rem;
  }
}
```

In this case for the screens above or equal to 40rem width the font-size is increased to 3rem. In other cases the font-size is set to 1.6rem which is defined outside of the media query.  
The `min-width` is the most commonly used media query rule, which is used for mobile first design.

This approach lets us define the default the style for mobile devices and make changes to desktop styles using rules defined with media queries. We can specify different limits for screens sizes which let's us apply different properties for different device widths. 

You should consider a few things before using media queries.

* Media queries work like if conditions, if the condition is satisfied the rule will be applied.
* All the code outside of the media query is mobile code. The media queries should kick in for desktop screens. Even though this is not mandatory it is much more convenient because most of the users use mobile devices. You should choose the approach based on the target audience.
* If you are following desktop first design then you can use the `max-width` condition for media query to make it mobile friendly. In this case the rules define in the media query will only kick in on mobile devices.
* You can add multiple media queries below each other. The rules in one query will not override the rules in other queries. The queries are evaluated from top to bottom like other css rules. The queries will work properly if you follow the proper order. **Start with smaller widths followed by larger widths.**

We also need to know about the right breaking points to separate the media query rules and target the correct device. Most modern smartphones have a width of more than 300px. If your website looks good between the 300px and 768px you can ensure that your site will look good for most mobile phones. Then you could set your breaking point at 768px and then maybe at 1000px for bigger screens.   
It is fine to add media queries below the actual selectors. The most commonly used standard is to place them at the end of the css file. This helps the developers to easily find the media queries and change them. 

We can use logical operators to create complex media queries. We can use the and operator to specify a `min-width` and `min-height` to target devices. eg:

```javaScript
@media (min-width: 40rem) and (min-height:60rem){
  #product-overview {
    height: 40vh;
    background-position: 50% 25%;
  }
 
  #product-overview h1 {
    font-size: 3rem;
  }
}
```

 We can also use properties such as `orientation `as condition for media queries. It can have values like `landscape `and `portrait`. eg:

```javaScript
@media (min-width: 40rem) and (orientation: portrait){
  #product-overview {
    height: 40vh;
    background-position: 50% 25%;
  }
 
  #product-overview h1 {
    font-size: 3rem;
  }
}
```

We can also have comma separated conditions for media queries to activate rules weather any one of them is met.

We can group the input element and it's label into a div to style them by adding a class to the div. Alternatively we can target the individual elements of a form and style them individually. The elements in the form such as labels, select and input fields are inline elements. We can set the display property to block to convert this into block level elements. Also we need to set the width to 100% so that the elements occupies the entire screen width. Like:

```javaScript
.signup-form label,
.signup-form input,
.signup-form select{
    display: block;
    margin-top: 1rem;
    width: 100%;
}
```

The above approach may cause problems because for the elements such as checkbox and radio buttons we may use the input element itself and change the type attribute to make it a checkbox or radio button. We can use advanced attribute selectors to set the styling of these elements. We have already seen attribute selectors which we can use if the element have a particular attribute. But this will not consider the value of the attribute.   
We can use a selector which will target the element with a particular attribute and value. The syntax will look like:

```javaScript
[type="value"]{
    rule;
}
```

We can also select element with a particular attribute value in a list of attributes. The syntax will look like:

```javaScript
[type~="value"]{
    rule;
}
```

We can also select an element with a particular attribute value or a particular value prefix using:

```javaScript
[type|="value"]{
    rule;
}
```

For example if we have an element like:  
`<p lang="en-us">Hi!</p>`  
And if we need to target the elements with attributes that has values which starts with en we can use like:

```javaScript
[lang|="en"]{
    color:red;
}
```

This will only work because the character that follows the en is a -.   
We also have advanced attribute selectors which will select based on a particular value prefix like:

```javaScript
[type^="value"]{
    rule;
}
```

We can also select elements with a particular suffix for an attribute value like:

```javaScript
[type$="value"]{
    rule;
}
```

We can also select elements with at least one attribute value like:

```javaScript
[type*="value"]{
    rule;
}
```

For this the the specified value need not to be in the beginning or end, the value should contain the specified characters any where inside of the attribute value.

We can also check for values irrespective of the casing like:

```javaScript
[type*="value" i]{
    rule;
}
```

If we don't add i it will be case sensitive.

We can use the selector like:

```javaScript
.signup-form input[type="checkbox"]{
    
}
```

Which will work fine, alternatively we can select any other attribute like the class or id and check for the particular value. Eg:

```javaScript
.signup-form input[id*="terms"]{
    
}
```

We can also use other combinators like adjacent sibling combinators to select the adjacent sibling of the selected element. for example:

```javaScript
.signup-form input[id*="terms"],
.signup-form input[id*="terms"] + label{
    display: inline-block;
    width: auto;
}
```

  
The font in the elements such as input fields may not necessarily have the default font you set for the content, we can set the `font `property to `inherit `for setting the font properties of other elements to the input elements.

Elements such as input fields also have outline, an outline can be thought of like a border but it is different from border. We can also have an outline and a border. By default the browser will provide a border when the element is focused. We can override the default behavior by setting the border to none. Example:

```javaScript
.signup-form input:focus,
.signup-form select:focus {
    outline: none;
    background-color: #d8f3df;
    border-color: #2ddf5c;
}
```

Combining pseudo selectors is also perfectly valid for example:

```javaScript
.signup-form input:not([type="checkbox"]):focus,
.signup-form select:focus {
    outline: none;
    background-color: #d8f3df;
    border-color: #2ddf5c;
}
```

The checkbox is a special type of input, even if we apply some styles to it, it may not reflect, for example if we set a different background color, it will not reflect. The default behavior of elements such as checkbox and select are determined by the browser default styles, that is why the select box have arrows inside them. If we want to change that we want to override it. Traditionally we used `-webkit-appearance:none` to remove this behavior. But now there is a dedicated `appearance `property in css which can be set to `none`. We also have `-moz-appearance` which decides appearance in firefox browsers. We can also use all of them for better compatibility.  
If you apply the above properties to none the the checking behavior of the checkbox is lost. We have to add this behavior manually. We can use the` :checked` pseudo class for this. The style will look like:

```javaScript
.signup-form input[type="checkbox"] {
    border: 1px solid #ccc;
    background: white;
    width: 1rem;
    height: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
 
}
 
.signup-form input[type="checkbox"]:checked{
    background: #2ddf5c;
    border: #0e4f1f;
 
}
```

In case of invalid inputs we will add the styling to the input fields by adding classes. This can be done on the server side or by using javascript. We can set the various style properties in this class.  
HTML and CSS provides a more elegant way using the `:invalid` pseudo selector. For fields like email it will automatically check if the email address format is valid. Example:

```javaScript
.signup-form :invalid {
    background: #faacac !important;
    border-color: red !important;
}
```

We can also set the fields to required by setting the required attribute to make sure that the fields must be filled. If they are not filled at the time of submission then it will automatically apply the invalid behavior. The problem with this is that the user will see validation feedback whenever he visits the form. We can use javascript to fix this problem by triggering the invalid behavior once the submit button is clicked.   

There is also a` :valid` pseudo class which will select the elements when the form or input field is valid and apply the style.

The browser will also apply some style to the buttons by default such as it will apply a default font. We can override this behavior by using the `font: inherit` property.   
A button can also be disabled which is done with the help of javascript. We can also apply styles to the button's disabled state. The styling will look like:

```javaScript
.button[disabled]{
    cursor: not-allowed;
    border: #a1a1a1;
    color: #a1a1a1;
}
```

We have generic families and we have font families in CSS. The main generic families are `serif `,`sans-serif`, `cursive ` , `monospace`, `fantasy`. These generic families are kind of a headline for defining a specific attribute of the fonts inside this family. For example the cursive family includes fonts which are cursive. Even though two fonts belong a same family they will look different.  
Some common fonts and their families are:

* serif : Time new roman, Georgia
* sans-serif: Helvetica, Verdana
* cursive: Brush script, mistral
* monospace: courier new, lucida bright
* fantasy: It is not a commonly used family.

We can find the generic fonts and their families in the browser. For this we can go to browser settings and under the fonts we can see the default fonts for the browser. The standard font option is the default font for the browser. We can select a different font family to change the font. We also have options for serif font. Since this is a generic family we can choose the default font for this generic family. We also have the same option for sans-serif and fixed width font (monospace) generic font families.   
If we don't specify a font family in CSS the browser will automatically choose the default font specified in the browser settings. Alternatively we can define a generic family in our CSS code which will apply the font family selected by the browser default font of the generic family.  
We can also choose a font family in our CSS code that is not available in the browser of the user. Here also we have 3 options:

1. Store the font family font in the users computer locally. Here we cannot control which font families are installed or which ones are not installed. This might cause problems.
2. Web fonts are an alternative for the above problem. The google fonts are an example of this. Here we fetch the font from a third party.
3. Retrieve the font which we want to apply from a server which hosts your website.

By following any of the above option we can ensure that our website looks the way we want for all users.

Changing the font family might cause issues in the website layout. Because the spacing for different font families are different. 

Quotes are not necessary for defining the font family in css. We can also specify more than one specific font family in css. If the browser is not able to find the first font family it will use the second font family. The browser will keep jumping to the next font specified until the required font is found. If it is still not able to find the font family then it will fall back to the generic font family if it is specified. In this case the browser default font family will be applied for the generic font family. This is why we specify a fallback generic font when defining the font family.

eg:  
`font-family: "Montserrat", sans-serif;` 

Not all font families are installed in all browsers and all operating systems. Some fonts are specific to some operating systems. 

We can fix the above problem by using a web font like google font. Google fonts page offers a large amount of free fonts which we can preview and choose the font faces and font weights. Each font family in google fonts have different font faces and weights. After choosing the font family and font face we can import the google font in multiple ways. The easiest option is embedding the link tag to the head of the html page. We will need to do this in all the html pages.   
  
An alternative to the above is using the @import statement in the CSS file as specified in the google fonts page.   
The code will look something like:  
`@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap'); `

We should add this import at the top of the CSS file outside of selectors. This way if we import the CSS file in the html page the font will also be available in the html page.  
This method is easier and the recommended approach.

When using this method we also don't need to add the cross origin scripts.

For font-weights we have numbers from 100 to 900, the bigger the number the higher the font weight. We also have bolder which sets a value higher than the inherited one. We also have inherit which will inherit the font weight from the parent.   
The normal font weight is 400\. We can also specify normal to set 400 as font weight. The number 700 sets the font to bold. We can also specify bold to set font weight to 700\.   
If we are using google fonts we should import the higher font weight face also to use that font weight in our page.   
For example we need to add the `family=Anton:400,900` in the import url.   
For some fonts we will automatically import all the font weights and their faces like:  
`Roboto:ital,wght@0,100..900;1,100..900`   
Similarly we also have italic font-style which also requires specific font faces. If we specify i after the font weight value in the import url it becomes italics font weight. We should also specify font-style as italic in the style.

We can also download fonts from google fonts. We will get it as a zip file. If we extract these we can see the ttf files for those fonts. We need to place the font folder inside of our project.  
.To import the fonts we need to go to the CSS file and use the `@font-face ` . We need to specify the font-family, specify the `src `property and use the `url()` method to specify the path of the ttf font file.   
eg:

```javaScript
@font-face {
    font-family: "AnonymousPro";
    src: url("Anonymous_Pro/AnonymousPro-Regular.ttf");
}
```

This will import the font to the css file. To apply this use CSS selectors and set the font-family property.  
The problem with the above approach is that we need to import the font with the font face(bold or italic) which we want to use. For example if we use the regular font even if we apply the font weight bold property there will not be any change in the font weight. We need to download the font face with the particular font weight and import it. 

When we are using the same font family with different weights we can import those fonts in our css and specify the weight which we need. When applying the `font-family` we should also use the `font-weight` which we set for the element we want to apply. Eg:

```javaScript
@font-face {
    font-family: "AnonymousPro";
    src: url("Anonymous_Pro/AnonymousPro-Regular.ttf");
}
@font-face {
    font-family: "AnonymousPro";
    src: url("Anonymous_Pro/AnonymousPro-Bold.ttf");
    font-weight: 700;
}
```

If we want to apply the bold font we can use it like:

```javaScript
font-family: "AnonymousPro";    
font-weight: 700;
```

If we don't specify the font weight we will get the regular font.

We can also specify the format of the font we use by using the `format()` with the `src `property. For example:  
`src: url("Anonymous_Pro/AnonymousPro-Regular.ttf") format("truetype");`   
This is to provide additional information to the browser about the font format that we are using.  
The formats in the above example is the true type format or ttf. There are also other font formats. We should check the font format support of the browsers. Some browsers don't support some font formats.   
Apart from ttf we have `woff ` (web open font format). This is a compressed true type font. This is a compressed type, so it makes our website load faster. Some font family fonts can become quite large which will take more time for our browsers to load. The browser support for this format is also quite good. WOFF 2.0 is the latest version of web open font format, it offers a significantly higher compression and faster loading. 

If you have the font files in different formats we can specify multiple formats in the same src property definition. Like:

```javaScript
    src: url("Anonymous_Pro/AnonymousPro-Regular.woff2") format("woff2"),
        url("Anonymous_Pro/AnonymousPro-Regular.woff") format("woff"),
        url("Anonymous_Pro/AnonymousPro-Regular.ttf") format("truetype");
```

  
There are also other properties for fonts which we can set. Some common ones are:

* font-variant : Used to control the variations of the font styles. It has different values. The `small-caps` change the small letters to capital letters.
* font-stretch: We can use this to specify various stretch levels for the fonts. We should note that each stretching level should be part of a font face.

* letter-spacing: We use this to define the letter spacing. We can use pixels or rem to specify the value. If we increase it it will increase the space between the letters in your text.
* white-space: It specifies how white spaces are handled in text in the browser. By default it is `normal`. This makes sure that every new line will start where there is white space. It will ensure that the text is broken into multiple lines based on the available space. If we change this into `nowrap `it will display the text in a single line, the width of our window has no impact on that. We also have `pre `which will display the the text as we have written inside in our html tags, this will preserve white spaces and line breaks. The `pre-wrap` will wrap the text (break the lines if there is not enough space) but as soon as sufficient space is available it will preserve the text structure in our html element which we defined. The `pre-line` property will fill try to fill the lines whenever possible.

It will also try to preserve the line breaks.

* line-height: Defines the top and bottom of our content box. It will multiply the font-size of the text by the defined integer line height value. By default the line height depends on the font family we are using. If we provide an integer value it will refer to the font size. We can also use pixels, percentages(percentage multiplier of the font size). It is not recommended to use percentages because it might result in unexpected results due to inheritance. It is recommended to use numbers to get the expected behavior based on the font size.

* text-decoration: Used to decorate text. We have values like `underline `which adds a line under the text whereas the `overline `adds a line above the text. The `line-through` property to strike through the text. We can also use `line-through dotted` to add dotted strike through lines. We can also use the dotted for all values of text decoration. We can also specify the color of the text decoration as the third value. We are can also use different line styles apart from dotted. The `wavy `is another type of line which makes it look like waves. We can also use the `text-decoration:none` to remove the default decoration for an element like anchor tags.
* text-shadow: Let's us add a shadow to our text. We need to specify the offset from the x axis, y axis, blur and color if we want. eg:  
`text-shadow: 2px 2px 7px rgb(185, 180, 180);  
`

There is also a font shorthand we can use. We can use this by using the `font `property. For the shorthand some values are optional but some are mandatory. Additionally the order of the values are important. The first mandatory value is `font-size`, and then the `font-family`. Here we add value after value.   
There are optional values such as `font-weight`. If we are to use font weight we should specify it before the `font size`. If we have `font-variant` it should precede the `font-weight`. The `font-style` should precede the `font-variant`.   
The `font-variant`, `font-style` and `font-weight` values should precede the `font-size`.   
**If we want to add a** `**line-height**` **we need to add a / after** `**font-size**` **and specify it.**   
The main purpose of this font shorthand is we can specify all out font related styles in a single line.   
We cannot specify the font-size only with the font shorthand property. 

Alternatively we can use it to refer to system fonts. The system font simply refers to default font families which are applied to different parts of your operating system. For example we can use `font: menu` to use the font used in the menu of the operating system. Another value for this can be `status-bar` 

The `font-display` property only works for our custom fonts we imported using the `@font-face`. We need to specify this inside the `@font-face`. The values we specify for the `font-display` will affect the loading behavior of our fonts. The values we can have are:

* swap:
* block:
* fallback:
* optional:
* auto: Used when we don't specify any value. It means that the browser will automatically choose a value of it's choice.

We have 2 situations going while the loading phase of the font takes place. The block-period and the swap-period. For the `swap `value we don't have any block period. For example a visitor is visiting our website. The font's might make some time to load. We can specify a block period to reserve the space for our font with an invisible font face. The font's will not be visible, but the space will be reserved. 

For values that does not have a block period the fallback font will be immediately visible. The swap period is the time for the browser to switch back to the font from the fallback font.

For `swap `value this period is infinite. The browser can take any time as it wants to load the custom font and change it, till then the fallback font will be visible. 

For `block `value we have a short block period. At this time the placeholder for the text will be placed in the screen, though no text will be visible on the screen. After this the behavior is same as that of swap, i.e, it will load the fallback font, till the browser load the font it will wait, once the font is loaded it will swap the fallback font with the loaded font.   

For `fallback `value we have a very small block period. It will have the invisible font-family displayed, but for a very minimum of time. Then it will switch to the fallback font. After this it will have a short swap period, where the browser has the chance to load the custom font. If the browser is able to do that then it will be changed to the custom font otherwise the fallback font will be displayed.

The `optional `value has a very short block period. It does not have a swap period. It allows the browser what to choose. This depends upon the internet connection speed. If the internet speed is good it will load the custom font. If the connection is not good it will load the fallback font. This decision cannot be reversed.   
The `auto `value let's the browser to make decisions, if you don't set a `font-display` property the auto value will be used. Most browsers choose `block `for this. 

Flexbox is the modern way to change the way our elements are displayed. Flexbox can make your CSS code more lean and readable. We can easily place items where we want without the complications of manual calculation and adjustments we used for inline-block elements.

To use flex box in our page we only need to set the `display `property to `flex`. This will create a **flex container**. Inside the nested container we should have other nested elements. These children are called **flex items**. Once we convert the elements into a flexbox we can apply different properties our parents and children. For parent we can apply the `flex-flow`, `justify-content`, `align-content`, `align-items`.   
For children we can apply properties like `order`, `flex`, `align-self`. 

When we apply flex value to the display property, the child elements will be placed side by side. Also we can see that the child elements will use the entire height available from the parent element. If we decrease the width of the window we will also see that the width of the elements including parent and children decreases until the width occupied the element is same as the length required for it's content. If we increase the width of the window it will behave like a normal block level element. When we specify display flex to a div which has children, the parent will become the flex container and the children will become flex items automatically.   
  
We also have `inline-flex` value for display property. When we apply this instead of flex when we resize the window the width of the elements are not changed. The size we defined for the width will be respected here. The width of the parent element will not change, it uses space required for it's content. 

When we apply display flex 2 properties will get set automatically to the flex container. They are `flex-direction` which has the default value of `row `and `flex-wrap` which has the default value of `nowrap`.   
If we change the `flex-wrap` to `wrap `when we decrease the width of the window and if it is less than the width of the defined content the child elements will be moved to second row to adjust the resizing. Also the height of the element also changes, the element which jumped to the second row will use the height required for it's content to get displayed. If we continue to decrease the width the elements will be placed in a single column.   
We also have `wrap-reverse` which we can set for `flex-wrap` which will simply change the order of child elements will be reversed. The first element will be placed last and the last element will be placed first. If we increase the width it will turn back to the initial behavior by placing the first item in the left most side and the last item in right side.

If we change the `flex-direction` from `row `to `column`, it will stack up the children in a column. It will behave like block level elements. If the child elements has no width specified it will take up the entire available width from the parent, if the element has a predefined width it will be used as is until we decrease the size of the window. If we decrease the width; the child elements with fixed width are not shrunk even if the screen width gets lower than the width of the element. The element without a width will reduce the width even below the point that is required by the content.   
We can use `column-reverse` for `flex-direction` to reverse the order of child items. We also have `row-reverse` which will change the order of child items in the horizontal direction. 

When we apply the flex direction to row which is the default, the starting point of the main axis is the left top corner. The cross axis will also have the same starting point and direction will be from top left to bottom left. The child items are added from left to right along the main axis here.   
When we apply flex direction to row-reverse the main axis will be from top right to top left. The cross axis also starts from the right top corner and goes to the right bottom corner. When we apply the flex direction property the starting and finishing point of the main axis and cross axis changes.   
  
We also have the flex direction column, here also the starting point of both axis are on the top left, but the main axis goes from top left to bottom left and the cross axis goes from top left to top right. 

The flex-direction property defines the position of the main axis is across the row or across the column.   
The flex direction column reverse places the main axis and cross axis at the left bottom end. The main axis will go from bottom left to top left and the cross axis will go from bottom left to bottom right. 

The `align-items` property is used to align the flex items along the cross axis. The default value is stretch. If we apply the value of `center `to this it will center the flex items along the cross axis (we have seen that the cross axis position will change based on the flex-direction property value).   
The value of `flex-start` will position the flex items at the starting the of the cross axis. If we apply `flex-end` it will position the elements at the end of the cross axis. 

Similarly we can also adjust the position of flex items along the main axis. For this we need to set the `justify-content` . This also have same values as that of `align-items` property. If we use `center `it will center the flex items along the main axis. If we set both align items and justify content as center then it will be centered on both cross axis and main axis. If we use `flex-end` it will place the flex items at the end of the main axis. 

The `align-content` property is used to align the content along the cross axis. We can use the values we used for `justify-content` for this property also. 

If we want to change the order of flex items we can use the `order `property. The default value is 0\. If we change the order of an item to 1 it will be placed after all elements with order value 0(if it have a flex direction of row and the items are placed at the flex start of the main axis). If we change the value to -1 it will be placed at the start of the flex in the same scenario. The bigger the number the later it will be positioned. The above rule will be applied regardless of flex direction.

The `align-self` property is used to position the flex item in relation with the cross axis. It can have values which we used for flex container and flex items like `center`, `flex-start`, `flex-end` etc.

We also have `flex-grow` which can be used for flex items. It's initial value is 0\. If we add a value other than 0 to a flex item and if we increase the window size it will grow based on the available screen width, even if we had applied a fixed width, it will not grow till we exceed the defined width. The flex grow property makes the flex item to consume the remaining available space.   
For example if we have 2 elements and if we apply flex-grow 1 to one element and flex-grow 4 to the other, if we increase the window size the total available free space will be divided into 5 parts and 4 parts will be allocated to the 2nd element and 1 part will be allocated to the first element. 

If the flex container has a `flex-wrap` of `wrap `applied, and if we add a flex-grow value to the flex item then if we increase the screen width the item will be placed to the next line and it will take the entire available width in that line. 

We can also apply `flex-shrink` to flex items. By default if we decrease the width of the window the items will decrease the width until it has the bare minimum width for the content. The default value of `flex-shrink` is 1\. If we use a value of 0 to a flex item and the flex item has a defined width, it will not shrink the item beyond the specified width.   
If we apply a value other than 0 and 1, let's say 4 it will allow the flex item to shrink 4 times faster than items with the default flex-shrink.

The `flex-basis` property defines the size of a flex item depending on the main axis. It is dependent on `flex-direction`. It's default value is auto. If we define a flex basis and our flex direction is set to row, the defined value of the flex-basis will override the width property. If we use the default value for flex-basis it will use the specified width value. If there is no width specified explicitly it will adjust the width based on the width required for the content.  
For elements with `flex-direction` column the `flex-basis` property value which we set will override the height of the flex item.

We can use percentage values, pixels etc like we used to specify width and height of elements for `flex-basis`.

CSS Grid allows us to create highly customizable complex page layouts. We can divide the webpage into rows and columns. Grids make positioning of elements easier. Most of the CSS frameworks can use grid. Also the design tools supports grids to define the layout of the page. Placing the items wherever we want is one of the most complex feature of CSS. CSS Grid makes this process easier by letting us specify a grid of rows and columns and letting us define which element should be positioned where. 

**We can turn a container into a grid by setting the display property to grid.** This makes the container a CSS grid and the items inside of the container will be positioned in the grid. This will set some default settings to the elements but there won't be much visual changes that you can notice. It will create a single column and the elements inside of the container will become independent rows. If the child elements have nested elements then the wrapping element will be considered as a row(Only direct children are part of a grid). 

To override the default grid layout we can use the `grid-template-columns` property. This allows us to have multiple columns instead of only having a single column. For the values we will set the width of the columns. We can mix and match absolute values using pixels or rems and relative values such as percentages here.   
eg:

```javaScript
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 200px 150px 20%;
}
```

We can use the developer tools of the browser to inspect the grid layout. For this go to the elements tab, choose the grid container and open the layout tab. We can see various options to help us work with grid. We can use the extend grid lines option to show the grid lines, which will help us to clearly identify rows and columns.   
  
Another special unit we can use in a grid-template-columns property values is fractions denoted by `fr`.

If we define a fraction to a column it will split up the remaining space used by other columns. If we have more than one fractional unit defined for the columns then it will split the remaining space between all columns with fractions.   
For example:

```javaScript
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 200px 2fr 20% 1fr;
}
```

In the above code the 2nd column will take twice 2 parts of the available space and the last column will take one part of the available space(left over space by absolute and relative % values).

We can also explicitly define the size of the rows using the `grid-template-rows `property. We can define the size of each row by specifying values separated by spaces. For example:

```javaScript
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 200px 2fr 20% 1fr;
    grid-template-rows: 5rem 2.5rem;
}
```

Here the first row will have a height of 5 rem and the next row will have a height of 2.5rem.   
We can use rem, px, % or fr for specifying the row height.

By default every child of a grid takes one cell in the grid. We can override this behavior. For example we can make a child element take more than one cell column in the grid. We can use the `grid-column-start` property to specify the stating of the grid item (child element). In the developer tools we can see the grid lines for rows and columns. CSS grid is composed of lines, gird is constructed by adding lines before and after rows and columns. Each line has a number, we can enable this developer tools. We can use these numbers to specify the column start as well as column end.  
We also have the `grid-column-end` property. By default it is set to span one column only. We can add a value of this to determine the ending of the cell by specifying a line number which let's us span over more than one column. For example:

```javaScript
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 3;
    grid-column-end: 5;
}
```

  
Here for the grid item style we will specify the `grid-column-start` and `grid-column-end` properties. By changing these values we can control the spanning behavior of the item. If we span elements like this the elements that come after the current element might be pushed to the the next row.   
This same behavior can be applied to rows also by using `grid-row-start` and `grid-row-end `properties. 

```javaScript
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
}
```

For the same element we can make it span across rows like we defined above.

The above defined is one way to override the default behavior of the grid.

Apart from fractions, pixels, rem and percentages we can use `auto `for `grid-template-rows` and `grid-template-columns`. For rows it will take only the necessary height for fitting the content. In case of columns it will take all the remaining available width. If we have a height defined for the grid container then setting auto for the row template will take all the remaining height of the container for that particular row.   
The best use case for `auto `is to fill up empty spaces in the grid.

In some cases you want to have equal width or height for your grid template (row or column). Suppose if there are 4 columns and we want them to have 25% width we can repeat it 4 times. But there is an easier way for this using the `repeat `method. The first argument of the function is how many times it needs to repeat and the second argument the value that needs to be repeated.  
eg:  
` grid-template-columns: repeat(4, 25%);`   
We can use any value which we want to repeat such as pixels, rems, fr etc.

There is also a `minmax()` function in css which we can use to set the minimum and maximum width or height for the grid template. It takes in 2 arguments, the minimum value and maximum value. It can have values with any unit in CSS.  
For example we can use it to set a minimum and maximum height for the row. If there is adequate space available then it will choose a value that is closer or equal to the maximum value that we have specified. If there isn't enough space available then it will shrink the size of the row or column. The value is computed between the minimum and maximum value specified. But it will not shrink below the specified minimum value. 

Previously we have used the line numbers to span rows and columns. There is an alternative for this. For the starting position we can specify the line number. But for the ending we can use the `span `keyword and specify the number of columns or rows we want to span. For example:

```javaScript
    grid-column-start: 3;
    grid-column-end: span 2;
```

If there are no further columns we can span it will take all the available columns it can span. We can also increase the position of the start to start from a different line in this case the other items will be repositioned.   
We can also define -ve numbers for the start and end. If we use -1, it will count from the end of the grid. Suppose if we want an item to occupy the entire width we can set the column start to 1 and column end to -1\. In this case if there are other items on the same row, then it will position the element which we want to span into a new line. 

Grid items _can_ overlap if their grid areas intersect. This happens when you explicitly place items using `grid-row` and `grid-column` properties. Grid items _can_ overlap if their grid areas intersect. This happens when you explicitly place items using `grid-row` and `grid-column` properties, however this is the natural stacking context and not specific to Grid. Grid items can use `z-index` to control stacking order _without_ requiring the `position` property. Grid creates a new stacking context for its items, so `z-index` works directly on Grid children.

We can also add names to the grid lines for both row and column. For this we need to specify the any name we desire in between \[\] in the grip-template definition of the row or column. The name should precede the value. We can also use multiple names for a row or column by specifying the names separated by white spaces. 

eg:  
` grid-template-rows:[row-1-start] 5rem [row-1-end row-2-start] 2.5rem;`

The names should not be any CSS keyword. We can see these names by enabling the show line names option in the grid settings of developer tools. We can use these names as value for properties for position the items. 

```javaScript
    grid-row-start: row-2-start;
    grid-row-end:span 1;
```

We can also use the row and column short hands to specify grid-column start and end and grid-row start and end.   
For setting the column start and end we can use the `grid-column` shorthand. We first specify the column start value and then the end value separated by a /.

eg:  
`grid-column: 1 / -1;`   
Will start the column from the first line and ends it at the last line of the grid.  
The row shorthand will also work similarly. Here we use `grid-row` shorthand and specify the values the same way as before. Eg:  
` grid-row: row-2-start / span 1;`   
  
There is also an alternative to the above 2 short hands. We have the `grid-area `property which lets us specify both the grid row and column in a single value. It has a predefined order which we need to set. The first value is `grid-row-start`. Then after a / we specify the `grid-column-start` value. After this add a / and place the `grid-row-end` value. Finally place the `grid-column-end` after a /. In the above case the example can be written as:

`grid-area: row-2-start / 1 / span 1 / -1;`   

By default there will not be any space between the grid items. Even if we add a margin to an element there will be some space between the grid line and the element in the cell. This is not a clean way. We can use the `grid-column-gap` property to set a gap of specified value between all the columns. We set this property inside the grid container. When we span columns these gaps are also filled by the elements.  
The `grid-row-gap` property can be used to set the gaps between the rows of a grid.   
There is also a shorthand which lets us set the gaps for row and column in one go. We use the `grid-gap` property for this. Here we will specify the `grid-row-gap` first followed by `grid-column-gap` . 

We used the grid numbers and grid names to position items in a grid. There is also an alternative to this. We can define areas in the grid and assign items these to these areas. We can specify these areas in the grid container using the `grid-template-areas` property. We then specify the name of areas inside of quotes. For each cell in the grid we should specify the area name.   
If you have 4 columns and 2 rows you should specify the area names for 8 cells. It will look like:

```javaScript
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows:[row-1-start] 5rem [row-1-end row-2-start] 2.5rem;
    grid-template-areas: "header header header header"
                          "side side main main";
}
```

We can then use the `grid-area` property to specify the area for the grid item. When specifying this we don't need to specify the quotes. It will look like:  
` grid-area: header;`   
This simplifies the process because we don't need to specify where the item should start and end, instead we only need to specify the area for the element so that the element will automatically be placed to that area.   
In case you don't want to specify an area name in the template we can use . For example:

```javaScript
    grid-template-areas: "header header header header"
        ". . main main";
```

  
We can also define grid line names when we are using the repeat function. For this we need to specify the starting line name in square brackets before the width or height followed by the ending line name in square brackets. It will look like:  
`grid-template-columns: repeat(4, [col-start] 25% [col-end]);`

Since the name is repeated for each line, it will automatically get the numbering based on the position. We can specify the line name followed by line position after a space. We can access this position like:  
`grid-column: col-start 2/ col-end 2;  
` Till now we have used `-start` and `-end` for line names. The `-start` and `-end` naming pattern improves readability and enables the use of **implicit grid areas** (not automatically generated template areas), allowing you to reference them by name rather than line numbers.

We can also enclose the repeat function in area name by specifying a name that ends in -start and -end. We can use this for templates we are not using the repeat function. For example we can use like:

```javaScript
grid-template-columns: [hd-start] repeat(4, [col-start] 25% [col-end]);
grid-template-rows: [hd-start] 5rem [hd-end row-2-start] 5rem;
```

This will gives us a named line before all the columns and after all the columns as well as lines surrounding the rows. This creates a clearly marked area in the grid. We can use this as an automatically generated area name. We can use the name we specified before -start and -end which is the same as the area name.  
We can use this like:  
`grid-area: hd;`   
The key point here is that we should specify the start and end line names should be on both axes. Also note that when we are using the normal way instead of repeat if we want to mark an area, we specify the end line of a row or column along with the start name of the next line of the row or column. 

The above automatic naming will not work if made a typo in the start or the end like `hd-sart` will not work.

Elements that are **completely removed from the normal document flow** (`position: absolute`, `position: fixed`) will not participate in grid layout.

Elements that **remain in the normal document flow** (`position: relative`, `position: sticky`) **will still participate** in the grid, even though they have non-static positioning.   

We can use the grid to position our header and footer in our page. For this we can create 3 rows, the first row will be used for header section like the navbar. We can use a fixed height for this. The second row will be used for the main contents of the page, we can use auto for this to take as much height as the content needs. For the 3rd row we will define the height for the footer. We can then position them using grid area or grid line.

In some cases the size we assigned for a row may not fit our content. If we have specified auto as the value of a row we cannot use the auto for two rows which may cause problems. In this case we can use the `fit-content()` function. For this function we need to pass a maximum value. The page will use the sufficient value if it requires less space than that. If it requires more space than that it will provide just enough space for the content to fit beyond the maximum we defined.  
Eg:  
` grid-template-rows: 3.5rem auto fit-content(8rem);` 

By default the grid content will occupy the entire cell width and height. We can also add some additional properties to the grid container to position the grid items. Some common properties we can use are:

* `justify-items` : Used to adjust the position of elements inside of the cell(grid tracks). We can use values like `center `which places the items at the center of the cell, start can be used to place the items at the start of the cell, `end `will place the values at the end of the cell. The start and end does not necessarily mean left and right. It will depend on the read direction of the browser. The default value is `stretch `which will stretch the items in the cell thus occupying the entire available width and height. This property position the items with respect to the rows(horizontally).

* `align-items`: Used to position the grid elements vertically inside of the cell. If we set the value of this to `center`, then it will center the items vertically inside of the cell. We can use different values like `start`, `end `etc to adjust the positioning. The default value is `stretch `which you don't need to set.

We can also position the entire contents of the grid inside of the grid container. If we have extra space inside of the grid container we can use properties like:

* `justify-content`: Which positions the entire grid content on the x-axis. We have values like `center `which will center the contents of the grid to the center. Similarly we have `start `which is used by default, end which places the contents at the `end`. The `stretch `have similar effect as start because it is not able to override the row sizes and column sizes we have defined.
* `align-content`: Used to position the entire grid content across y-axis. We have the same values as above like `start`, `end`, `stretch `etc.

We can also modify the positioning of individual grid items by setting some properties in their respective selectors. Even if we defined the positioning of the elements in the grid container, we can use some of the properties to make individual items looks distinct. They are:

* `justify-self `: Used to position an item on the x-axis inside of a cell. We can use the same values as we used before like `center`, `start`, `end `etc.
* `align-self `: Used to position an item on the y-axis inside of a cell. We can use the same values as we used before like `center`, `start`, `end `etc.

We should also consider the responsiveness of our grid design. We might need to use media queries to make sure that our grid looks good in mobile screens as well. In some cases the items of the grid becomes very narrow and the content on the screen will not be readable. We might need to adjust the number of rows or columns and fix their positioning based on different layouts. We can use media queries to define different number of rows, columns and their sizes. Using `grid-template-areas `and `grid-areas` to define the grid become easier for this. This way we can change the area template inside of the media queries without making changes to the individual grid elements.

We have already seen that the items of the grid are assigned automatically. By default the sizing of the cells are automatically determined by the grid based on the content in the cell or the neighboring cell. For example in a row if we have two elements and one column of the row have a very large content and the other one have a comparatively smaller content, if we have not specified the row sizes it will automatically take the required height for both the columns to display the content. We can use `grid-auto-rows` to create automatically generated rows. The default value is `auto `which means the size will be auto. If we specify a fixed value for this property, every new row will have this fixed size. This ensures that all rows are equally sized. Alternatively we can use the `minmax() `function to set an automatic height based on the content. For example:

```javaScript
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 15rem 15rem;
    justify-content: center;
    grid-gap: 1.5rem;
    grid-auto-rows: minmax(8rem, auto);
}
```

We can also do this for columns. We can tell the grid to add new columns instead of creating new rows for new items by using the `grid-auto-flow` property. This property let's us specify where new items should be added. The default value is `row`. If we set this to `column `all the items in the grid will be displayed in separate columns. This may not to give the ideal result, but it is possible and we can use in particular cases.   
If we set the grid-auto-flow to column then we can set the width of each column by using the `grid-auto-column` property. This will override the values set by the `grid-template-columns` property.  
 display: grid;

```javaScript
    display: grid;    
    grid-auto-flow: column;
    grid-auto-columns: 5rem;
```

We have seen that we can define the grid columns and rows manually. You can also set the sizes of the only some rows or columns. For example we can use the `grid-template-row` to set the height of the first row and let the grid automatically allocate the size of other rows. We can think of a grid as an implicit grid and explicit grid. For the explicit grid we define the row and column templates exactly. For the implicit grid the grid automatically allocate items and dimensions automatically for the parts we don't explicitly specify. 

In some cases you want to put the items to cells in a row until they reach the end of the current view port after this only the new items should be placed in new row. We can do this by dynamically generating columns. The autoflow columns is not a solution because it will anyways create new columns without checking the viewport width. We also don't know how many columns we should have because the elements are added dynamically. To fix this we can add a helper value when creating the `grid-template-columns`. Inside of the `repeat()` function we can set the number of times the value need to be repeated to `auto-fill`. 

```javaScript
    display: grid;
    grid-template-columns: repeat(auto-fill, 10rem);
    justify-content: center;
```

This will automatically place the items in columns based on the screen size. 

To restrict the maximum number of the items (columns) we can set the `max-width` property to the grid container.   
Alternatively we can use `auto-fit` which works in the same way as `auto-fill` but it will center the contents. The `auto-fit` is useful in cases where we don't have enough content to fit the entire row. In that case it will automatically center the items. 

We have also seen that when we span the grid elements to more than 1 column if there is not adequate space for the item in that row it will be pushed to the next row. This will create empty spaces in the grid. To avoid this behavior and utilize the space efficiently we can specify `dense `to the `grid-auto-flow` property along with the flow direction. It will work for both row and column. This allows us to densely organize our grid, but be aware that this may not be optimal, because we may get accessibility errors. Screen readers normally read the page based on the order of the elements in the DOM from top to bottom. If we change the position like this, the screen readers will interpret the items differently from what you have intended. 

Grids are also commonly used to organize forms. In desktop screens we can use the grid layout to position the label and input fields next to each other. In mobile screens we can use the grids to position the labels above the input fields.   
It is also fine to use nested grids just like adding flex containers into a grid. 

There are a couple of differences between grid and flex box. 

* CSS Grid is used for 2 dimensional positioning of elements, we used the row and columns. Flex box is used for one dimensional positioning, we either position elements horizontally or vertically using flex direction.
* A grid is a great choice if you have a real layout with multiple dimensions for example a form.

We use the `transform `property to apply transformations to the elements. In CSS we have a couple of key transformation such as moving the element.  
Moving the element with transform is hardware accelerated and will keep the element in document flow. So it recommended to use transforms to move elements. We can use various functions to performs different transforms. Some useful functions are:

* `rotateZ(angle)`: This will rotate the element by the specified degrees around the z axis. We can specify the `transform-origin` property to specify the origin of rotation. By default it is `center`. We can use position values to adjust this. We can also use percentage and pixel values for moving the transform origin. The first value specifies the position in x axis and the next value for the position in the y-axis. If we use just the` rotate()` it will rotate the element along z-axis.

* `translateX()` : Let's you move the element in the x axis. We can use rem, pixels, percentages etc for the values. If we applied a rotation to the element and when we are trying to apply translate on the same element, it will move in direction with respect to the center of the element. So if we had applied a rotation of 45 degrees on the z axis, if we use translateX it will move the element on the x axis which is rotated by 45 degrees, ie it will move diagonally. We can also use negative values to move the element in the opposite direction. If we use just `translate()` it will move the element across x-axis, if we pass a second value it will move the element in y axis also.
* `translateY()` : Moves the element in y-axis, the values which we can pass to this are also same as that of translateX().
* `tranlateZ()` : Move an element in z-axis. This will move the element towards us if +ve value and away if -ve value, based on the position of the axis.

We can use the transform translate properties to position badges like:

```javaScript
.package__badge {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    font-size: 0.8rem;
    color: white;
    background: #ff5454;
    padding: 0.5rem;
    transform: rotateZ(45deg) translateX(3.5rem) translateY(-1rem);
    transform-origin: center;
    width:12rem;
    text-align: center;
}
```

And then in the parent element we can hide the overflow in the parent element to make it look like a nice badge.  
` overflow: hidden;` 

* `skew()`: Let's you skew an element on x and y axis. If you only pass one value it will skew on the X axis. If we pass 2 values the first value will be used for x and the next value will be used for y. We pass degrees as values. Skewing is like pulling the element from a direction. We can also set negative values to offset the skew in the opposite direction. We can also apply negative values to cancel out the skewness set to a parent element.
* `scale()`: Scale the element on 3 axes. The `scaleX()` allows you to scale the width of the element, where as `scaleY()` allows you to scale the height of the element. As values we can pass normal integers to apply the scaling. If we apply normal `scale() `function with only 1 value it will scale on both axes.

For example:

```javaScript
  .testimonial__image-container{
    width: 60%;
    max-width: 40rem;
    box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.3);
    transform: skewX(20deg);
    overflow: hidden;
  }
 
  .testimonial__image{
    width: 100%;
    vertical-align: top;
    transform: skewX(-20deg) scale(1.4);
  }
```

The transformations are useful if we want to modify the elements or if we want, we can use them with animations.

We can also perform 3D transformations also. We have 3 axes for rotation. We can rotate an element across all 3 of these axes. If we set a rotation on the x axis, it will spin around only that axis. i.e, it will rotate the element towards or away from you. This is similar for the y-axis also. But for the z-axis it going through the middle of x and y axis. The z-axis is not highly 3 dimensional because it pierces the element from that axis. Therefore rotate y and x are the two functions which we can use for 3d rotation. 

We can change the perspective from which we are observing the elements rotation. We can use the perspective() function and pass a value in pixels or rem. The smaller the perspective the closer the element.   
eg:  
` transform: perspective(10px) rotateX(0deg) rotateY(80deg);`  
We can also use the `perspective `property instead of the perspective function. It will use the same pixel and rem values. But, the key difference is that we should apply the perspective to the parent element. The advantage of this is that we will get same perspective for all child elements. 

We can change the angle using the `perspective-origin` property. The default value is `center`. We can also use other values like `left right `etc. We can use pixels and rems also. This way the perspective will change towards the center right in the specified pixels. 

By default when you apply a rotation to the parent element, the child elements will also be affected even if they have their own 3D space inside of the parent. The default behavior flattens the 3D space. You can change this behavior using the `transform-style` property. The default value is `flat`. When flat is applied the container rotates and the elements move with the container but they are actually in a flat 3D space. If we use a value such as `preserve-3d` the 3D position of child elements will be preserved.

The `backface-visibility` property can be used to adjust the visibility when flipping the elements. If we set it to `hidden `it will not show the backface of the elements. By default it's value is `visible`. You can use this to hide the back of an element when it is flipping using this.