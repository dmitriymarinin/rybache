document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.tabs');
	const tabsBtn = document.querySelectorAll('.tabs__btn');
	const tabsContent = document.querySelectorAll('.tabs__content');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs__btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => { el.classList.remove('tabs__content--active') });
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
	};
});

document.addEventListener('DOMContentLoaded', () => {
	const tabsAbout = document.querySelector('.tabs-about');
	const tabsBtnAbout = document.querySelectorAll('.tabs__btn-about');
	const tabsContentAbout = document.querySelectorAll('.tabs__content-about');

	if (tabsAbout) {
		tabsAbout.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs__btn-about')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtnAbout.forEach(el => { el.classList.remove('tabs__btn-about--active') });
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn-about--active');
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContentAbout.forEach(el => { el.classList.remove('tabs__content-about--active') });
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content-about--active');
	};
});


