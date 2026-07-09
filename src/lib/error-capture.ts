let lastCapturedError: unknown = undefined;

function capture(error: unknown) {
  lastCapturedError = error;
}

if (typeof globalThis !== "undefined") {
  const g = globalThis as unknown as {
    addEventListener?: (t: string, cb: (e: unknown) => void) => void;
  };
  if (typeof g.addEventListener === "function") {
    try {
      g.addEventListener("error", (event: unknown) => {
        const err = (event as { error?: unknown; message?: unknown })?.error ?? (event as { message?: unknown })?.message;
        if (err !== undefined) capture(err);
      });
      g.addEventListener("unhandledrejection", (event: unknown) => {
        const reason = (event as { reason?: unknown })?.reason;
        if (reason !== undefined) capture(reason);
      });
    } catch {
      // ignore — some runtimes reject unknown events
    }
  }
}

export function consumeLastCapturedError(): unknown {
  const e = lastCapturedError;
  lastCapturedError = undefined;
  return e;
}
