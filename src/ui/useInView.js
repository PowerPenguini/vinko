import { useEffect, useRef, useState } from "react";

/**
 * Reports when an element scrolls into view. Uses IntersectionObserver and a
 * cheap scroll fallback check so reveals never get stuck hidden.
 */
export function useInView({ threshold = 0.2, once = true, rootMargin = "0px 0px -8% 0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let done = false;
    const show = () => {
      if (done && once) return;
      done = true;
      setInView(true);
    };

    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.92 && r.bottom > 0) {
        show();
        if (once) cleanup();
      }
    };

    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              show();
              if (once) cleanup();
            } else if (!once) {
              setInView(false);
            }
          });
        },
        { threshold, rootMargin },
      );
      io.observe(el);
    }
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    const t = setTimeout(check, 50);

    function cleanup() {
      io?.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      clearTimeout(t);
    }
    return cleanup;
  }, [threshold, once, rootMargin]);

  return [ref, inView];
}
