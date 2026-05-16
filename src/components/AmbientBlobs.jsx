export function AmbientBlobs() {
  return (
    <>
      <div
        className="pointer-events-none fixed -left-[10%] -top-[10%] -z-10 h-[50vw] w-[50vw] rounded-full bg-primary-fixed/20 blur-[100px] mix-blend-multiply"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed -bottom-[10%] -right-[10%] -z-10 h-[60vw] w-[60vw] rounded-full bg-secondary-fixed/20 blur-[120px] mix-blend-multiply"
        aria-hidden="true"
      />
    </>
  );
}
