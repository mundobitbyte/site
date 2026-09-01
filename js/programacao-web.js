(function () {
  "use strict";

  const page = document.querySelector(".module-page");
  const content = document.querySelector(".web-content");
  const chapters = Array.from(document.querySelectorAll("[data-chapter]"));
  const links = Array.from(document.querySelectorAll("[data-chapter-link]"));

  if (!page || !chapters.length) return;

  const chapterIds = new Set(chapters.map((chapter) => chapter.id));

  function copyWithFallback(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      return document.execCommand("copy");
    } catch (error) {
      return false;
    } finally {
      textArea.remove();
    }
  }

  function setupCopyButtons() {
    document.querySelectorAll("pre.code-block").forEach((codeBlock) => {
      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrap";
      codeBlock.before(wrapper);
      wrapper.appendChild(codeBlock);

      const button = document.createElement("button");
      button.className = "copy-code-button";
      button.type = "button";
      button.textContent = "Copiar";
      button.setAttribute("aria-label", "Copiar código");
      button.setAttribute("aria-live", "polite");
      wrapper.appendChild(button);

      button.addEventListener("click", async () => {
        let copied = false;

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(codeBlock.textContent);
            copied = true;
          } else {
            copied = copyWithFallback(codeBlock.textContent);
          }
        } catch (error) {
          copied = copyWithFallback(codeBlock.textContent);
        }

        button.textContent = copied ? "Copiado!" : "Não foi possível";
        button.classList.toggle("copy-error", !copied);
        window.clearTimeout(button.resetTimer);
        button.resetTimer = window.setTimeout(() => {
          button.textContent = "Copiar";
          button.classList.remove("copy-error");
        }, 1800);
      });
    });
  }

  function chapterFromHash() {
    const id = decodeURIComponent(window.location.hash.slice(1));
    return chapterIds.has(id) ? id : chapters[0].id;
  }

  function showChapter(id, options = {}) {
    const activeId = chapterIds.has(id) ? id : chapters[0].id;
    const activeChapter = chapters.find((chapter) => chapter.id === activeId);

    chapters.forEach((chapter) => {
      chapter.hidden = chapter.id !== activeId;
    });

    links.forEach((link) => {
      const isActive = link.dataset.chapterLink === activeId;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    const chapterNumber = activeId.replace("capitulo-", "");
    document.title = `Web I — Capítulo ${chapterNumber} | Mundo bit Byte`;

    if (options.resetScroll) {
      if (content && window.innerWidth > 1050) {
        content.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    if (options.focus) {
      window.setTimeout(() => {
        activeChapter.querySelector("h2")?.focus({ preventScroll: true });
      }, 180);
    }
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.dataset.chapterLink;
      if (!chapterIds.has(id)) return;

      event.preventDefault();
      if (window.location.hash !== `#${id}`) {
        window.history.pushState({ chapter: id }, "", `#${id}`);
      }
      showChapter(id, { resetScroll: true, focus: true });
    });
  });

  window.addEventListener("popstate", () => showChapter(chapterFromHash()));
  window.addEventListener("hashchange", () => showChapter(chapterFromHash()));

  page.classList.add("js-ready");
  setupCopyButtons();
  showChapter(chapterFromHash());
}());
