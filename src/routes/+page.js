export const load = async ({ fetch }) => {
  const raw = await fetch('md/home.md');
  return {
    content: await raw.text(),
  };
};
