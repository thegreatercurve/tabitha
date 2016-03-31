# Tabitha

A simple and lightweight JavaScript library for creating tabs.

## Benefits
- Dependency free
- 1.3KB when minified
- Progressively enhanced
- Compatible with IE8+

## Usage

Compiled and production-ready code can be found in the [`dist/`](/dist/) folder.

### 1. Mark-up your HTML as below, and then add `.active` to whichever tab heading and panel you want to display on load.

Both need to be the same index of their parent, otherwise Tabitha will throw an error in the console.

```html
<div class="tabs-container">
		<div class="tab-headings">
			<a class="active">Tab 1</a>
			<a>Tab 2</a>
			<a>Tab 3</a>
			<a>Tab 4</a>
			<a>Tab 5</a>
		</div>
		<div class="tab-panels">
			<div class="active">This is where the Tab 1 content goes.</div>
			<div>This is where the Tab 2 content goes.</div>
			<div>This is where the Tab 3 content goes.</div>
			<div>This is where the Tab 4 content goes.</div>
			<div>This is where the Tab 5 content goes.</div>
		</div>
	</div>
</div>
```

### 2. Include Tabitha on your site and initialize it by passing in classes for `.tabs-container`, `.tab-headings` and `.tab-panels`.

```html
<script src="path/to/tabitha.min.js"></script>
<script type="text/javascript">
	var tabs = new Tabs('.tabs-container', '.tab-headings', '.tab-panels');
	tabs.init();
</script>
```

### 3. Add in the required CSS for `.tab-panels`.

```css
.tab-panels div.active {
  display: block;
}

.tab-panels div {
  display: none;
}
```

## Example

I've created a **[Codepen](http://codepen.io/thegreatercurve/pen/ONjNQO)**  which shows how easy it is to mark-up your HTML and get Tabitha working.
