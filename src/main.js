import { tutors, filterTutors, uniqueLanguages } from "./tutors.js";

const select = document.getElementById("language");
const listEl = document.getElementById("tutors");

for (const language of uniqueLanguages(tutors)) {
  select.append(new Option(language, language));
}

function render() {
  listEl.replaceChildren(
    ...filterTutors(tutors, select.value).map((tutor) => {
      const li = document.createElement("li");
      li.textContent = `${tutor.name} — ${tutor.language}, ${tutor.price} ₽/час`;
      return li;
    }),
  );
}

select.addEventListener("change", render);
render();
