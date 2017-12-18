## HTML5和SMACSS

事实证明，SMACSS用在HTML5上，和HTML4以及其他HTML是一样的。这是因为SMACSS有两个核心目标：

1. 增加一段HTML和内容的语义性
2. 减少对一个特殊的HTML结构的依赖


HTML5引进了一系列的新元素，帮助我们增强HTML和内容的语义性。像`section`，`header`以及`aside`这样的标签比简单的`div`更具描述性。而新的输入框类型也有了数字，日期，文本这样的区分。其他的标签和属性也允许我们的内容更具描述性。这是一件好事情。

不过即使我们有了新的标签可以用，但当我们需要对某个特殊的模块进行描述时，标签也（非常可能）没什么必要。`nav`元素会总是包含完全相同的导航类型和样式吗？

```html
<!-- <nav>实现 -->
<nav class="nav-primary">
    <h1>Primary Navigation</h1>
    <ul>…</ul>
</nav>

<nav class="nav-secondary">
    <h1>External Links</h1>
    <ul>…</ul>
</nav>
```
主要导航栏是一个位于页面顶部的水平导航栏，而次要导航栏（例如，用于侧边栏）垂直排布列表项。而类名则对两种类型做了区分。

类名通过一种特殊的方式来描述我们的内容，这种方式比HTML5提供的更加具体，它满足了我们的第一目标——增强HTML片段的语义性。

你对上述HTML结构的第一直觉可能是像下面这样编写样式：

```css
/* <nav> CSS */
nav.nav-primary li { 
    display: inline-block; 
}

nav.nav-secondary li {
    display: block;
}
```
这样写就意味着这些类只能被用于`nav`元素。如果我们的代码永远不会改的话，那这样也没错。但是，这本书的目标就是为了构建可扩展的项目，所以让我们看一个元素发生变化的例子。

```html
<!-- <nav>实现 -->
<nav class="nav-primary">
    <h1>Primary Navigation</h1>
    <ul>
        <li>About Us
            <ul>
                <li>Team</li>
                <li>Location</li>
            </ul>
        </li>
    </ul>
</nav>
```
我们的主导航条只有一个层次，但是我们的客户回来说需要添加一个下拉菜单。现在的HTML结构改成如下结构：

```html
<!-- <nav>实现 -->
<nav class="nav-primary">
    <h1>Primary Navigation</h1>
    <ul>
        <li>About Us
            <ul>
                <li>Team</li>
                <li>Location</li>
            </ul>
        </li>
    </ul>
</nav>
```

有了这个子导航，我们怎么让这些列表项垂直排布而不是水平排布呢？

利用我们已经有的CSS，我们可以给无序列表包裹一个`<nav class="nav-secondary">`，这样可以得到我们想要的样式。

我们可以添加CSS规则来定位内部的列表项。

```css
/* 增强型的<nav>CSS */
nav.nav-primary li { 
    display: inline-block; 
}

nav.nav-secondary li,
nav.nav-primary li li {
    display: block;
}
```

另一种方法是不使用`nav`元素，这可以减少我们对特定HTML的依赖——我们的次要目标。

```css
/* SMACSS风格的<nav> CSS */
.l-inline li { 
    display: inline-block;
}

.l-stacked li {
    display: block;
}
```
在这个例子中，我们转而指定这些是布局规则，因为其实我们现在正在对单独模块（列表）进行包含。`.l-stacked`类可以被应用于子导航`ul`，这也会得到我们想要的结果。

指定列表项为必须包含的子元素其实仍然需要把布局规则和特定的HTML元素绑定在一起。老话说得好，达成目的方法总是不止一种。例如，你可能希望所有的子元素都采用这个样式。

```css
/* SMACSS风格的<nav> CSS */
.l-inline > * { 
    display: inline-block;
}

.l-stacked > * {
    display: block;
}
```
在任意想要应用样式的孩子元素上，我们都可以使用`inline`和`stacked`类。不过这个方法也会使得浏览器对每个元素进行遍历，而不只是列表项。不过还好的是，使用了孩子选择器可以避免太多的遍历。

```html
<!-- <nav>实现 -->
<nav class="l-inline">
    <h1>Primary Navigation</h1>
    <ul>
        <li>About Us
            <ul class="l-stacked">
                <li>Team</li>
                <li>Location</li>
            </ul>
        </li>
    </ul>
</nav>
```
即使这是个相当直观的例子，我们还是让我们的CSS尽量简单，避免我的选择器过于复杂，而HTML仍然是易于理解的。

总而言之，记住两个目标：**增强语义和降低对特定HTML的依赖**。

