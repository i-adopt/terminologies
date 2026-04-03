export const load = async ({ fetch }) => {
    const raw = await fetch(`md/join.md`)
    return {
      content: await raw.text(),
    };
  };
