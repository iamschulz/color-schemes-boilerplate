/*
be sure to include the following script inline in your html:

<script>
    window.themes = {
        light: "#e0e6eb",
        dark: "#29333d",
        cherry: "#971127",
        // expand as you like
    };

    const setTheme = () => {
        if (!window.localStorage || !localStorage.theme) {
            return;
        }
        document.body.dataset.theme = localStorage.theme;
        document.documentElement.style.setProperty(
            "--color-scheme",
            localStorage.theme
        );

        if (!Object.keys(themes).includes(localStorage.theme)) {
            return;
        }
        document
            .querySelector('meta[name="theme-color"]')
            .setAttribute("content", window.themes[localStorage.theme]);
    };
    setTheme();
</script>
*/

const switchTheme = (e) => {
	if (!e || !e.target) return;

	const theme = e.target.value;
	document.body.dataset.theme = theme;
	if (window.localStorage) localStorage.theme = theme;

	const defaultSchemes = ["light", "dark"];
	document.documentElement.style.setProperty(
		"--color-scheme",
		defaultSchemes.includes(theme)
			? `${theme} only`
			: defaultSchemes.join(" ")
	);

	document
		.querySelector('meta[name="theme-color"]')
		.setAttribute("content", window.themes[theme]);
};

if (window.localStorage && window.localStorage.theme) {
	const themeToggle = document.querySelector(
		`[name="theme-switch"][value="${window.localStorage.theme}"]`
	);
	if (themeToggle) themeToggle.checked = true;
}

const toggles = document.querySelectorAll('input[name="theme-switch"]');
Array.from(toggles).forEach((toggle) =>
	toggle.addEventListener("change", switchTheme)
);
