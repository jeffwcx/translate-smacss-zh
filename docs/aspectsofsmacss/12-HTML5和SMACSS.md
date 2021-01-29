# HTML5和SMACSS

事实证明，SMACSS用在HTML5上，和HTML4以及其他HTML是一样的。这是因为SMACSS有两个核心目标：

1. 增强HTML及内容的语义性
2. 减少对特殊HTML结构的依赖

HTML5引进了一系列的新元素，帮助我们增强HTML及内容的语义性。像`section`，`header`以及`aside`这样的标签比简单的`div`更具描述性。而新的输入框类型也在文本类型基础上有了数字和日期类型。其他的标签和属性也让我们的内容更具描述性。这是一件好事情。

不过即使我们有了新的标签可以用，但当我们需要对某个特殊的模块进行描述时，标签也还是可能没什么用。`nav`元素会总是包含完全相同的导航类型和样式吗？

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

主要导航栏是位于页面顶部的水平导航栏，而次要导航栏（例如侧边栏）则是垂直排布列表项的导航栏。通过类名，我们对两种类型做了区分。

类名通过一种特殊的方式来描述我们的内容，这种方式比HTML5提供的更加具体，它满足了我们的第一目标——增强HTML片段的语义性。

针对上述HTML结构，你的第一直觉可能是像下面这样编写样式：

```css
/* <nav> CSS */
nav.nav-primary li { 
    display: inline-block; 
}

nav.nav-secondary li {
    display: block;
}
```

这样写就意味着这些类只能被用于`nav`元素。如果我们的代码永远不会改的话，那这样也没错。但是，这本书的目标就是为了构建可扩展的项目，所以让我们看一个结构发生变化的例子。

之前我们的主导航条只有一个层级，但是我们的客户回来说需要添加一个下拉菜单。现在的HTML结构改成如下结构：

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

在这个例子中，我们转而指定这些为布局规则，因为其实我们现在包含的是单独的模块（列表）。`.l-stacked`类可以被应用于子导航`ul`，这也会得到我们想要的结果。

指定列表项（li）为必须包含的子元素其实仍然需要把布局规则和特定的HTML元素绑定在一起。我们的解决办法有很多，例如，你可以将样式应用于所有的子元素。

```css
/* SMACSS风格的<nav> CSS */
.l-inline > * { 
    display: inline-block;
}

.l-stacked > * {
    display: block;
}
```

在任意想要应用样式的孩子元素上，我们都可以使用`inline`和`stacked`类。不过这个方法也会使得浏览器对每个元素进行遍历，而不只是列表项。好在这里使用了孩子选择器，避免了过多的遍历。

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

虽然这是个相当直观的例子，但是我们还是让CSS尽量简单，避免选择器过于复杂，同时让HTML结构看起来简单易懂。

总而言之，记住两个目标：**增强语义和降低对特定HTML结构的依赖**。

