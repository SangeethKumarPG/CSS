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