"use client";

import { useEffect, useState } from "react";

export function BackendStatus() {
  const [text, setText] = useState("…");

  useEffect(() => {
    fetch("/api/backend")
      .then((r) => r.json())
      .then((d: { message?: string }) => setText(d.message ?? JSON.stringify(d)))
      .catch(() => setText("Unavailable (is FastAPI running on port 8000?)"));
  }, []);

  return (
    <p className="max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-400">
      Backend via rewrite <code className="rounded bg-zinc-100 px-1 py-0.5 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">/api/backend</code>
      : {text}
    </p>
  );
}
