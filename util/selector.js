class Selector {

	start() {
		return 'android= new UiSelector()';
	}

	text(text, parent = false) {
		let selector = `android=new UiScrollable(new UiSelector().scrollable(true))` +
			`.scrollIntoView(new UiSelector().text("${text}"))`;
		if (parent) {
			return selector.slice(0, -1);
		} else {
			return selector;
		}
	}

	textContains(text, parent = false) {
		let selector = `android=new UiScrollable(new UiSelector().scrollable(true))` +
			`.scrollIntoView(new UiSelector().textContains("${text}"))`;
		if (parent) {
			return selector.slice(0, -1);
		} else {
			return selector;
		}
	}

	resourceID(id, parent = false) {
		let selector = `android=new UiScrollable(new UiSelector().scrollable(true))` +
			`.scrollIntoView(new UiSelector().resourceId("${packageID}:id/${id}"))`;
		if (parent) {
			return selector.slice(0, -1);
		} else {
			return selector;
		}
	}

	googlePlayResourceID(id, parent = false) {
		let selector = `android=new UiScrollable(new UiSelector().scrollable(true))` +
			`.scrollIntoView(new UiSelector().resourceId("com.google.android.gms:id/${id}"))`;
		if (parent) {
			return selector.slice(0, -1);
		} else {
			return selector;
		}
	}

	//`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("${packageID}:id/carousel_add_to_cart_button"))`;

	androidID(id, parent = false) {
		let selector = `android=new UiScrollable(new UiSelector().scrollable(true))` +
			`.scrollIntoView(new UiSelector().resourceId("android:id/${id}"))`;
		if (parent) {
			return selector.slice(0, -1);
		} else {
			return selector;
		}
	}

	contentDesc(content, parent = false) {
		let selector = `android=new UiScrollable(new UiSelector().scrollable(true))` +
			`.scrollIntoView(new UiSelector().description("${content}"))`;
		if (parent) {
			return selector.slice(0, -1);
		} else {
			return selector;
		}
	}

	index(index, parent = false) {
		let selector = `android=new UiScrollable(new UiSelector().scrollable(true))` +
			`.scrollIntoView(new UiSelector().index(${index}))`;
		if (parent) {
			return selector.slice(0, -1);
		} else {
			return selector;
		}
	}

	class(className, parent = false) {
		let selector = `android=new UiScrollable(new UiSelector().scrollable(true))` +
			`.scrollIntoView(new UiSelector().className("${className}")))`;
		if (parent) {
			return selector.slice(0, -1);
		} else {
			return selector;
		}
	}

	childResourceID(id) {
		return `.childSelector(new UiSelector().resourceId("${packageID}:id/${id}")))`;
	}

	childClass(className) {
		return `.childSelector(new UiSelector().className("${className}")))`;
	}

	childText(text) {
		return `.childSelector(new UiSelector().text("${text}")))`;
	}
	resourceIDFromParent(id) {
		return `.fromParent(new UiSelector().resourceId("${packageID}:id/${id}")))`;
	}
}
module.exports = new Selector();
