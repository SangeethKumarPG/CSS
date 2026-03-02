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