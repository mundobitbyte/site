(function () {
  "use strict";

  const page = document.querySelector(".module-page");
  const content = document.querySelector(".web-content");
  const chapterMenu = document.querySelector(".chapter-menu");
  const chapters = Array.from(document.querySelectorAll("[data-chapter]"));
  const links = Array.from(document.querySelectorAll("[data-chapter-link]"));

  if (!page || !chapters.length) return;

  const chapterIds = new Set(chapters.map((chapter) => chapter.id));

  function legacyCopyFallback(text) {
    if (typeof document.execCommand !== "function") return false;

    const previousFocus = document.activeElement;
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
      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus({ preventScroll: true });
      }
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
            copied = legacyCopyFallback(codeBlock.textContent);
          }
        } catch (error) {
          // Último recurso para navegadores sem a API moderna de Clipboard.
          copied = legacyCopyFallback(codeBlock.textContent);
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

  function setupDemoForms() {
    document.querySelectorAll("[data-demo-form]").forEach((form) => {
      const status = form.querySelector("[data-demo-status]");

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!status) return;
        status.textContent = "Teste concluído: os campos passaram pela validação do navegador e nenhum dado foi enviado.";
        status.hidden = false;
      });

      form.addEventListener("input", () => {
        if (status) status.hidden = true;
      });
    });
  }

  function chapterFromHash() {
    const id = decodeURIComponent(window.location.hash.slice(1));
    return chapterIds.has(id) ? id : chapters[0].id;
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function keepActiveChapterVisible(activeLink) {
    if (!chapterMenu || !activeLink || window.innerWidth > 1050) return;

    const menuRect = chapterMenu.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const isOutside = linkRect.left < menuRect.left + 8 || linkRect.right > menuRect.right - 8;

    if (isOutside) {
      const targetLeft = activeLink.offsetLeft - (chapterMenu.clientWidth - activeLink.offsetWidth) / 2;
      chapterMenu.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: prefersReducedMotion() ? "auto" : "smooth"
      });
    }
  }

  function showChapter(id, options = {}) {
    const activeId = chapterIds.has(id) ? id : chapters[0].id;
    const activeChapter = chapters.find((chapter) => chapter.id === activeId);
    let activeMenuLink = null;

    chapters.forEach((chapter) => {
      chapter.hidden = chapter.id !== activeId;
    });

    links.forEach((link) => {
      const isActive = link.dataset.chapterLink === activeId;
      link.classList.toggle("active", isActive);
      if (isActive && link.classList.contains("chapter-link")) {
        link.setAttribute("aria-current", "location");
        activeMenuLink = link;
      } else {
        link.removeAttribute("aria-current");
      }
    });

    keepActiveChapterVisible(activeMenuLink);

    const chapterNumber = activeId.replace("capitulo-", "");
    document.title = `Web I — Capítulo ${chapterNumber} | Mundo bit Byte`;

    if (options.resetScroll) {
      const behavior = prefersReducedMotion() ? "auto" : "smooth";
      if (content && window.innerWidth > 1050) {
        content.scrollTo({ top: 0, behavior });
      } else {
        window.scrollTo({ top: 0, behavior });
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
  setupDemoForms();
  showChapter(chapterFromHash());
}());
