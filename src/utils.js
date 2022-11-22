export function sleep(time) {
  if (!Number.isFinite(time) || time < 0) {
    throw new Error("time should be positive number");
  }

  const start = new Date().getTime();

  while (new Date().getTime() < start + time) {}
}
