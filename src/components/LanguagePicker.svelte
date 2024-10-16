<script lang="ts">
    import { availableTags, Language, languages } from "../../constants.ts";
    import { availableLanguagesStore } from "../stores/availableLanguagesStore";
    import { useTranslatedPath, useTranslations } from "../i18n/utils.ts";
    import { defaultLang } from "../i18n/ui.ts";
    import { createListbox } from "svelte-headlessui";
    import Dropdown from "./Dropdown.svelte";

    export let dropdownClasses: string;
    export let language: Language;

    const fromDict = useTranslations(language);

    const listBox = createListbox({
        label: fromDict("nav.language.help"),
        multi: false,
        selected: $availableLanguagesStore,
    });

    // If there are only two languages, the placeholder will be the other language and the dropdown will be a toggle (if less, why use this feature?)
    const toggleMode = Object.values(languages).length === 2;

    const placeholder = toggleMode
        ? languages[Object.keys(languages).find((lang) => lang !== language)]
        : languages[language];

    function handleClick(event: CustomEvent<{ selected: string }>) {
        if (toggleMode) handleSelect(event);
    }

    const options = toggleMode ? [] : Object.values(languages);

    function handleSelect(event: CustomEvent<{ selected: string }>) {
        // When coming from the toggle mode, there is no selection safed to the store
        const selectedValue = Object.values(languages).find(
            (lang) => lang === event.srcElement.innerText,
        );
        const selectedLanguage = Object.keys(languages).find(
            (lang) => languages[lang] === selectedValue,
        );
        const translatePath = useTranslatedPath(selectedLanguage);
        const currentPath = location.pathname;
        const cleanedPath = currentPath.replace(`/${language}`, "");
        window.location.href = translatePath(cleanedPath);
    }
</script>

<Dropdown
    classes={dropdownClasses}
    items={listBox}
    {options}
    {placeholder}
    clickEvent={handleClick}
    selectEvent={handleSelect}
/>
